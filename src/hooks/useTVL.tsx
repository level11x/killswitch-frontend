import axios from 'axios'
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

export type tvlSummary = {
    [network: string]: string
}

let tvlCache: tvlSummary = {}

const fetchTVLListApi = async () => {
    const { data } = await axios.get<{
        summary: { [network: string]: string }
        data: {
            [network: string]: {
                [poolName: string]: string
            }
        }
    }>(`https://api.killswitch.finance/ksw/tvl`)

    return data
}

const fetchTVLListEpic = (input$: Observable<void>) =>
    merge(
        input$.pipe(throttleTime(CACHE_TIMEOUT_MS)),
        input$.pipe(distinctUntilChanged(), skip(1))
    ).pipe(
        switchMap(() =>
            from(fetchTVLListApi()).pipe(
                map((data) => data),
                retry(2),
                catchError((e) => {
                    console.error(e)
                    return of(null)
                })
            )
        )
    )

export function useTVLList() {
    const [fetchTVLList, fetchTVLList$] = useObservableCallback<
        Awaited<ReturnType<typeof fetchTVLListApi>> | null,
        void
    >(fetchTVLListEpic)
    const output$ = useObservable(() => zip([fetchTVLList$]))

    useSubscription(output$, (data) => {
        if (data[0]) {
            tvlCache = data[0]?.summary
        }
    })

    useEffect(() => {
        const fetch = () => {
            fetchTVLList()
        }
        fetch()
        const id = setInterval(fetch, 1000)
        return () => clearInterval(id)
    }, [fetchTVLList])
}

export const fetchTVL = ({ id }: { id: string }) => {
    if (!id) {
        return null
    }

    return tvlCache[id.toLowerCase()]
}
export const fetchTVLList = () => {
    return tvlCache
}
