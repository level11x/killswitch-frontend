import classNames from 'classnames'

const ROADMAP_LIST = [
    {
        title: 'Q3 (2021)',
        bullets: ['KillSwitch V.1', 'Audit', 'Private sale , Public sale'],
    },
    {
        title: 'Q4 (2021)',
        bullets: [
            'Mixture V2',
            'KillSwitch Token Launch',
            'Liquidity Mining and Staking',
            'Airdrop',
        ],
    },
    {
        title: 'Q1 (2022)',
        bullets: ['Take Profit /Stop Loss', 'KCS Chain', 'Aurora Chain'],
    },
]

interface RoadmapProps {
    className?: string
}

export const Roadmap = ({ className }: RoadmapProps) => {
    return (
        <div
            className={classNames(className, '_w-100pct _mgh-at _pdv-48px')}
            style={{
                background:
                    'linear-gradient(108.05deg, rgba(30, 47, 147, 0.53) 3.43%, rgba(10, 16, 57, 0.1) 170.47%)',
            }}
        >
            <div className="_fs-700 _fs-900-sm _fw-500 _mgbt-48px _pdh-16px-sm _tal-ct _w-100pct">
                KillSwitch Roadmap
            </div>
            <div className="_dp-f-sm _fdrt-cl _fdrt-r-sm _jtfct-ct lo-12 _mgh-at _w-fc _mgbt-0px _mgbt-16px-sm">
                {ROADMAP_LIST.map((item, index, { length }) => (
                    <div
                        className="_w-fc _mgh-12px _mgh-0px-lg _mgbt-24px _mgbt-0px-sm"
                        key={item.title}
                    >
                        <div className="_dp-f _alit-ct _wsp-nw _fs-700 _fs-800-sm _fw-600 _pst-rlt _mgbt-4px _mgbt-8px-sm">
                            <img
                                src="/images/home/roadmap/cube.svg"
                                className="_mxh-48px _mxw-48px _ojf-ct _mgr-16px"
                            />
                            {item.title}
                            {index !== length - 1 && (
                                <img
                                    src="/images/home/roadmap/roadmap-arrow.svg"
                                    className="_mgh-32px _dp-n _dp-b-lg"
                                    style={{
                                        width: 220,
                                        marginBottom: '-50px',
                                    }}
                                />
                            )}
                        </div>
                        {item.bullets.map((bullet) => (
                            <div
                                key={bullet}
                                className="_fs-500 _mgbt-8px _mgl-48px"
                            >
                                {bullet}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Roadmap
