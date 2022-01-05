import classNames from 'classnames'

const stepList = [
    {
        title: '🤖 Auto Compound',
        imgPath: '/images/home/features/auto-compound.png',
        href: 'https://killswitchofficial.gitbook.io/killswitch/feature/auto-compound',
        description:
            "All the farmed tokens will be automatically converted to add into users' positions every 24 hours or will be automatically reinvested when Guardian of the Galaxy takes action.",
    },
    {
        title: '🚀 Deposit Mixture',
        imgPath: '/images/home/features/one-click-stake.png',
        href: 'https://killswitchofficial.gitbook.io/killswitch/feature/one-click-stake',
        description:
            'The supplemental feature was created to unlock all limitations of One-Click Stake and Withdraw All. Users are allowed to pick any coin or token on the whitelist to swap and report the best router swap for transparency.',
    },
    {
        title: '🛸 Withdraw Mixture',
        imgPath: '/images/home/features/kill-position.png',
        href: 'https://killswitchofficial.gitbook.io/killswitch/feature/how-can-killswitch-work',
        description:
            'We have the “Kill Position” feature, A feature where LP tokens are automatically unstaked, withdraw liquidity, and swapped into any desired tokens available on KillSwitch Platform or LP in one click.',
    },
    {
        title: '💸 Move Mixture',
        imgPath: '/images/home/features/mixture-swap.png',
        href: 'https://killswitchofficial.gitbook.io/killswitch/feature/move-mixture',
        description:
            "A feature that users can move LP from one pool to another pool in KillSwitch with zero withdrawal fee. This feature is suitable for opportunistic farmers who want to try a new pool to get a higher dividend and easy as our KillSwitch's promises.",
    },
    {
        title: '🔥 Boost',
        imgPath: '/images/home/features/boots.png',
        href: 'https://killswitchofficial.gitbook.io/killswitch/feature/boost',
        description:
            'The "boost" feature allows users to enjoy higher rewards from our partners\' farms so our yield farmers can get higher returns compared to the initial pool. Hence, the name "boost" more wanting our users to get a BOOST or the highest APY!',
    },
    {
        title: '📈 Take Profit/Stop Loss',
        imgPath: '/images/home/features/tp-sl.png',
        href: 'https://killswitchofficial.gitbook.io/killswitch/feature/stop-loss-take-profit',
        description:
            'Users can set TP and SL when use one-click stake and can edit . A stop loss (SL) is a value of pool limit entered by a trader. When the value limit is reached the open position will close to prevent further losses.',
    },
]

interface FeatureListProps {
    className?: string
}

export const FeatureList = ({ className }: FeatureListProps) => {
    return (
        <div
            className={classNames(
                className,
                'lo-12 lo-6-sm lo-4-lg _jtfct-ct _jtfit-ct _grg-48px _grg-24px-sm _gclg-128px _gclg-64px-lg'
            )}
        >
            {stepList.map((step) => (
                <div key={step.title} className="_w-256px">
                    <a
                        className=""
                        title="See more detail."
                        href={step.href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="ksw-animation-popup _ovf-hd _dp-b _ojf-cv _w-100pct _bdrd-16px _mxw-256px _h-256px _mgbt-0px _mgbt-4px-sm _bdrd-16px _bgcl-shader-hover"
                            src={step.imgPath}
                            alt={step.title}
                        />
                    </a>
                    <div className="_fs-600 _fw-500 _mgbt-4px">
                        {step.title}
                    </div>
                    <div className="_fs-400 _fw-400">{step.description}</div>
                </div>
            ))}
        </div>
    )
}

export default FeatureList
