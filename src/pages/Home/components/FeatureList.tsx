import classNames from 'classnames'

const stepList = [
    {
        title: 'One Click Stake',
        imgPath: '/images/home/features/one-click-stake.png',
        href: 'https://killswitchofficial.gitbook.io/killswitch/feature/one-click-stake',
        description:
            'Swap, Provide Liquidity and Stake your position in one easy step.',
    },
    {
        title: 'Auto Compound',
        imgPath: '/images/home/features/auto-compound.png',
        href: 'https://killswitchofficial.gitbook.io/killswitch/feature/auto-compound',
        description:
            "All the farmed tokens will be automatically converted to add into users' positions every 24 hours or will be automatically reinvested when Guardian of the Galaxy takes action.",
    },
    {
        title: 'Kill Position',
        imgPath: '/images/home/features/kill-position.png',
        href: 'https://killswitchofficial.gitbook.io/killswitch/feature/how-can-killswitch-work',
        description:
            'Users can kill position any time. KillSwitch will automatically Unstake LP tokens , withdraw liquidity form liquidity providing pool and swap assets to BNB or BUSD or another token user can chose.',
    },
    {
        title: 'Take Profit/Stop Loss',
        imgPath: '/images/home/features/tp-sl.png',
        href: 'https://killswitchofficial.gitbook.io/killswitch/feature/stop-loss-take-profit',
        description:
            'Users can set TP and SL when use one-click stake and can edit . A stop loss (SL) is a value of pool limit entered by a trader. When the value limit is reached the open position will close to prevent further losses.',
    },
    {
        title: 'Mixture swap',
        imgPath: '/images/home/features/mixture-swap.png',
        href: 'https://killswitchofficial.gitbook.io/killswitch/feature/how-can-killswitch-work',
        description:
            "Mixture is an \"awakening\" version of 'One-Click Stake' and 'Withdraw All'. The supplemental feature was created to unlock all limitations of 'One-Click Stake' and 'Withdraw All' in terms of input & output as well as providing transparency. ",
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
