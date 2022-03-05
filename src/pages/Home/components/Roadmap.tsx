import classNames from 'classnames'

const ROADMAP_LIST = [
    // {
    //     title: 'Q3 (2021)',
    //     bullets: ['KillSwitch V.1', 'Audit', 'Private sale , Public sale'],
    // },
    // {
    //     title: 'Q4 (2021)',
    //     bullets: [
    //         'Mixture V2',
    //         'KillSwitch Token Launch',
    //         'Liquidity Mining and Staking',
    //         'Airdrop',
    //     ],
    // },
    {
        title: 'Q1 (2022)',
        bullets: [
            'Take Profit /Stop Loss',
            'KUCoin Chain (KCC)',
            'Aurora Chain',
        ],
    },
    {
        title: 'Q2 (2022)',
        bullets: [
            'Chain Expand',
            'SSAP (Lending protocol)',
            'Prepare index fund',
        ],
    },
    {
        title: 'Q3 (2022)',
        bullets: ['Chain Expand', 'Index fund'],
    },
]

interface RoadmapProps {
    className?: string
}

export const Roadmap = ({ className }: RoadmapProps) => {
    return (
        <div
            className={classNames(
                className,
                '_w-100pct _mgh-at _pdv-48px _pdh-32px _pdh-64px-sm _pdh-128px-lg'
            )}
            style={{
                background:
                    'linear-gradient(108.05deg, rgba(30, 47, 147, 0.53) 3.43%, rgba(10, 16, 57, 0.1) 170.47%)',
            }}
        >
            <div className="_fs-700 _fs-900-sm _fw-500 _mgbt-48px _pdh-16px-sm _tal-ct _w-100pct">
                Journey
            </div>
            <div className="_dp-f-sm _fdrt-cl _fdrt-r-sm _jtfct-ct lo-12 _mgh-at _w-100pct _mgbt-0px _mgbt-32px-sm _pst-rlt _w-fc-lg">
                <div
                    className="_pst-asl _h-2px _w-100pct _t-24px _dp-n _dp-b-sm"
                    style={{ backgroundColor: '#FEFEFF' }}
                />
                <img
                    className="_w-64px _h-64px _pst-asl _r-0px _t-24px _dp-n _dp-b-sm"
                    style={{ transform: 'translateY(-50%)' }}
                    alt="eggo"
                    src="/images/home/roadmap/eggo-head-right.svg"
                />
                {ROADMAP_LIST.map((item, index, { length }) => (
                    <div
                        className="_w-fc _f-1 _mgl-32px _mgl-0px-sm _mgl-0px-lg _mgr-128px-lg _mgbt-24px _mgbt-0px-sm"
                        key={item.title}
                    >
                        <div
                            className="_dp-f _alit-ct _wsp-nw _cl-primary-main _fs-600 _fs-800-sm _fw-600 _pst-rlt _mgbt-8px _mgbt-24px-sm _pdh-24px _pdv-2px _w-fc _bdrd-16px"
                            style={{ backgroundColor: '#FEFEFF' }}
                        >
                            {item.title}
                        </div>
                        {item.bullets.map((bullet) => (
                            <div
                                key={bullet}
                                className="_fs-400 _mgbt-4px _mgt-2px _mgl-16px"
                            >
                                <i
                                    className="fa fa-circle _vtcal-md _mgr-8px"
                                    style={{ fontSize: 4 }}
                                />
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
