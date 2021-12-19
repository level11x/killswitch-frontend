import axios from 'axios'
import { CHAIN } from 'config/networkSetup'
import {
    useObservable,
    useObservableCallback,
    useSubscription,
} from 'observable-hooks'
import { useEffect } from 'react'
import {
    catchError,
    distinctUntilChanged,
    from,
    map,
    merge,
    Observable,
    of,
    retry,
    skip,
    switchMap,
    throttleTime,
    zip,
} from 'rxjs'

const CACHE_TIMEOUT_MS = 30 * 1000

const priceCache = {}

function overrideNetworkId(n: number): number {
    switch (n) {
        // case CHAIN.BSC_FORK:
        //     return CHAIN.BSC
        case CHAIN.POLYGON_FORK:
            return CHAIN.POLYGON
    }
    return n
}

const fetchTokensApi = (networkId: number) => {
    networkId = overrideNetworkId(networkId)
    let url = `https://api.killswitch.finance/ksw2/prices`
    if (networkId) {
        url = url + '?chain=' + networkId
    }
    return axios.get(url)
}

const fetchTokensEpic = (input$: Observable<number>) =>
    merge(
        input$.pipe(throttleTime(CACHE_TIMEOUT_MS)),
        input$.pipe(distinctUntilChanged(), skip(1))
    ).pipe(
        switchMap((networkId) =>
            from(fetchTokensApi(networkId)).pipe(
                map(({ data }) => data),
                retry(2),
                catchError((e) => {
                    console.error(e)
                    return of({})
                })
            )
        )
    )

const fetchLPsApi = (networkId: number) => {
    networkId = overrideNetworkId(networkId)
    let url = `https://api.killswitch.finance/ksw2/lps`
    if (networkId) {
        url = url + '?chain=' + networkId
    }
    return axios.get(url)
}

const fetchLpsEpic = (input$: Observable<number>) =>
    merge(
        input$.pipe(throttleTime(CACHE_TIMEOUT_MS)),
        input$.pipe(distinctUntilChanged(), skip(1))
    ).pipe(
        switchMap((networkId) =>
            from(fetchLPsApi(networkId)).pipe(
                map(({ data }) => data),
                retry(2),
                catchError((e) => {
                    console.error(e)
                    return of({})
                })
            )
        )
    )

export function useMarketPrice(networkId: number) {
    const [fetchTokens, fetchTokens$] = useObservableCallback<any, number>(
        fetchTokensEpic
    )

    const [fetchLps, fetchLps$] = useObservableCallback<any, number>(
        fetchLpsEpic
    )
    const output$ = useObservable(() => zip([fetchTokens$, fetchLps$]))

    useSubscription(output$, (data) => {
        Object.assign(priceCache, ...data)
    })

    useEffect(() => {
        const fetch = () => {
            if (networkId > 0) {
                fetchTokens(networkId)
                fetchLps(networkId)
            }
        }
        fetch()
        const id = setInterval(fetch, 1000)
        return () => clearInterval(id)
    }, [fetchLps, fetchTokens, networkId])
}

export const fetchPrice = ({ id }: { id: string }): number => {
    if (!id) {
        return 0
    }

    return priceCache[id.toLowerCase()] || 0
}
