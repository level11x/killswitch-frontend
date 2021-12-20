import classNames from 'classnames'
import { CHAIN } from 'config/networkSetup'
import { formatApy, formatUSD } from 'helpers/format'
import { fetchAPYList, useAPYList } from 'hooks/useAPYList'
import { fetchPrice, useMarketPrice } from 'hooks/useMarketPrice'
import { fetchTVLList, useTVLList } from 'hooks/useTVL'
import { useEffect, useState } from 'react'

interface StatProps {
    title: string
    value: string
    subtitle?: string
}
const Stat = ({ title, value, subtitle }: StatProps) => (
    <div
        className="ksw-card -dark-gradient ksw-animation-popup -small _tal-l _mgh-12px _mgbt-24px"
        style={{ minWidth: 310, padding: 20 }}
    >
        <div className="_fw-400 _fs-400">{title}</div>
        <div className="_fw-500 _fs-800 _mgv-12px _cl-secondary-main">
            {value}
        </div>
        <div className="_fw-400 _fs-300">{subtitle ? subtitle : <br />}</div>
    </div>
)

interface StatsProps {
    className?: string
}

export const Stats = ({ className }: StatsProps) => {
    const [kswUSDPrice, setKswUSDPrice] = useState('0')
    const [maxAPY, setMaxAPY] = useState('0')
    const [tvlTotal, setTVLTotal] = useState('0')

    useMarketPrice(CHAIN.BSC)
    useAPYList(CHAIN.BSC)
    useTVLList()

    useEffect(() => {
        const fetch = () => {
            const oraclePrice =
                fetchPrice({
                    id: '0x270178366a592ba598c2e9d2971da65f7baa7c86',
                }) || 0
            if (!oraclePrice) {
                setKswUSDPrice('-')
                return
            }
            const kswUSDPrice = formatUSD(1, oraclePrice)
            setKswUSDPrice(kswUSDPrice)
        }
        fetch()

        const id = setInterval(fetch, 1000)
        return () => clearInterval(id)
    }, [])

    useEffect(() => {
        const fetch = () => {
            if (Object.values(fetchAPYList()).length === 0) {
                return setMaxAPY('-')
            }
            const newMaxAPY = Object.values(fetchAPYList()).reduce(
                (memo, item) => (item.apy > memo ? item.apy : memo),
                0
            )
            const formatedAPY = formatApy(newMaxAPY)
            setMaxAPY(formatedAPY)
        }
        fetch()

        const id = setInterval(fetch, 1000)
        return () => clearInterval(id)
    }, [])

    useEffect(() => {
        const fetch = () => {
            if (Object.values(fetchTVLList()).length === 0) {
                return setTVLTotal('-')
            }
            const newTVL = Object.values(fetchTVLList()).reduce(
                (memo, item) => (memo += Number(item)),
                0
            )
            const formatedTVL = formatUSD(newTVL)
            setTVLTotal(formatedTVL)
        }
        fetch()

        const id = setInterval(fetch, 1000)
        return () => clearInterval(id)
    }, [])

    return (
        <div
            className={classNames('_dp-f _fw-w _alit-ct _jtfct-ct', className)}
        >
            <Stat
                title="Total Value Lock (TVL)"
                value={tvlTotal}
                subtitle="Across all LPs"
            />
            {/* <Stat title="Total Transaction per day" value="558,616,385" /> */}
            <Stat title="Earn up to" value={maxAPY} subtitle="APY in Farm" />
            <Stat title="KillSwitch Price (24 hr)" value={kswUSDPrice} />
        </div>
    )
}

export default Stats
