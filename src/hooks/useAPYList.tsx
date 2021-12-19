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

export type Apys = {
    [key: string]: {
        apr: number
        aprd: number
        apy: number
        details: {
            title: string
            value: number
        }[]
        ksw: number
    }
}

let apyCache: Apys = {}

function overrideNetworkId(n: number): number {
    switch (n) {
        case CHAIN.BSC_FORK:
            return CHAIN.BSC
        case CHAIN.POLYGON_FORK:
            return CHAIN.POLYGON
    }
    return n
}

const fetchAPYListApi = async (networkId: number) => {
    const { data } = await axios.get<{
        [key: string]: {
            apr: string
            aprd: string
            apy: string
            details: {
                title: string
                value: string
            }[]
            ksw: string
        }
    }>(
        `https://api.killswitch.finance/ksw2/apy?chain=` +
            overrideNetworkId(networkId)
    )

    const r: Apys = {}
    Object.entries(data).forEach(([k, v]) => {
        r[k] = {
            apr: Number(v.apr),
            aprd: Number(v.aprd),
            apy: Number(v.apy),
            details: v.details
                ? v.details.map((x) => ({
                      title: x.title,
                      value: Number(x.value),
                  }))
                : [],
            ksw: v.ksw ? Number(v.ksw) : 0,
        }
    })
    return r
}

const fetchAPYListEpic = (input$: Observable<number>) =>
    merge(
        input$.pipe(throttleTime(CACHE_TIMEOUT_MS)),
        input$.pipe(distinctUntilChanged(), skip(1))
    ).pipe(
        switchMap((networkId) =>
            from(fetchAPYListApi(networkId)).pipe(
                map((data) => data),
                retry(2),
                catchError((e) => {
                    console.error(e)
                    return of({})
                })
            )
        )
    )

export function useAPYList(networkId: number) {
    const [fetchAPYList, fetchAPYList$] = useObservableCallback<
        Apys | {},
        number
    >(fetchAPYListEpic)
    const output$ = useObservable(() => zip([fetchAPYList$]))

    useSubscription(output$, (data) => {
        if (data[0]) {
            apyCache = data[0]
        }
    })

    useEffect(() => {
        const fetch = () => {
            if (networkId > 0) {
                fetchAPYList(networkId)
            }
        }
        fetch()
        const id = setInterval(fetch, 1000)
        return () => clearInterval(id)
    }, [fetchAPYList, networkId])
}

export const fetchAPY = ({ id }: { id: string }) => {
    if (!id) {
        return null
    }

    return apyCache[id.toLowerCase()]
}
export const fetchAPYList = () => {
    return apyCache
}
