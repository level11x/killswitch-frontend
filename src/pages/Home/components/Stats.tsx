import classNames from 'classnames'

interface StatProps {
    title: string
    value: string
    subtitle?: string
}
const Stat = ({ title, value, subtitle }: StatProps) => (
    <div
        className="ksw-card -dark-gradient ksw-animation-popup -small _tal-l"
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
    return (
        <div
            className={classNames('lo-12 lo-6-md lo-3-lg _gg-12px', className)}
        >
            <Stat
                title="Total Value Lock (TVL)"
                value="$6,747,318,491"
                subtitle="Across all LPs"
            />
            <Stat title="Total Transaction per day" value="558,616,385" />
            <Stat title="Earn up to" value="2.06k%" subtitle="APY in Farm" />
            <Stat title="KillSwitch Price (24 hr)" value="$0.42" />
        </div>
    )
}

export default Stats
