import classNames from 'classnames'
import styles from './styles.module.scss'

const STRATEGIC_PARTNER = [
    {
        link: 'https://killswitch-official.medium.com/level-11-signs-mou-with-rsu-b5491f819f64',
        imageSrc: '/images/home/strategic-partners/rsu.png',
        imageAlt: 'Rangsit University',
        title: 'Level 11 signs MOU with RSU.',
        containerStyle: {
            filter: 'saturate(100) grayscale(100%)',
        },
    },
    {
        link: 'https://deficon.nyc/',
        imageSrc: '/images/home/strategic-partners/deficon.png',
        imageAlt: 'Deficon.nyc',
        title: 'Deficon.nyc',
        imageStyle: {
            padding: '15px 0px 0px 0px',
        },
    },
]

const WHAT_THEY_SAID = [
    {
        imageSrc: '/images/home/what-they-said/techsauce.png',
        imageGraySrc: '/images/home/what-they-said/techsauce-gray.png',
        imageAlt: 'techsauce.co',
        link: 'https://techsauce.co/pr-news/scb-10x-bangkok-blockathon-2021-killswitch',
    },
    {
        imageSrc: '/images/home/what-they-said/scb10x.svg',
        imageGraySrc: '/images/home/what-they-said/scb10x-gray.png',
        imageAlt: 'www.scb10x.com',
        link: 'https://www.scb10x.com/blog/winning-teams-blockathon-2021',
    },
    {
        imageSrc: '/images/home/what-they-said/scb.png',
        imageGraySrc: '/images/home/what-they-said/scb-gray.png',
        imageAlt: 'www.scb.co.th',
        link: 'https://www.scb.co.th/th/about-us/news/mar-2564/blockathon-2021.html',
    },
    {
        imageSrc: '/images/home/what-they-said/blognone.png',
        imageGraySrc: '/images/home/what-they-said/blognone-gray.png',
        imageAlt: 'www.blognone.com',
        link: 'https://www.blognone.com/node/122095',
    },
    {
        imageSrc: '/images/home/what-they-said/cu-cp-engineering.png',
        imageGraySrc: '/images/home/what-they-said/cu-cp-engineering-gray.png',
        imageAlt: 'www.cp.eng.chula.ac.th',
        link: 'https://www.cp.eng.chula.ac.th/blog/archives/12823',
        imageStyle: { paddingLeft: 6 },
    },
    {
        imageSrc: '/images/home/what-they-said/polygon.png',
        imageGraySrc: '/images/home/what-they-said/polygon-gray.png',
        imageAlt: 'polygon.technology',
        link: 'https://twitter.com/0xPolygonToday/status/1437649860321234944',
        imageStyle: { paddingLeft: 10, paddingRight: 6 },
    },
    {
        imageSrc: '/images/home/what-they-said/crypto-moon-shots.png',
        imageGraySrc: '/images/home/what-they-said/crypto-moon-shots-gray.png',
        imageAlt: 'reddit-CryptoMoonShots',
        link: 'https://www.reddit.com/r/CryptoMoonShots/comments/qidnb6/killswitch_ksw_token_and_platform_by_the_winner',
    },
    {
        imageSrc: '/images/home/what-they-said/bitkub.png',
        imageGraySrc: '/images/home/what-they-said/bitkub-gray.png',
        imageAlt: 'bitkub',
        link: 'https://www.bitkub.com/blog/bitkub-tech-challenge-7ef6d4b7d17c',
    },
    {
        imageSrc: '/images/home/what-they-said/efinancethai.png',
        imageGraySrc: '/images/home/what-they-said/efinancethai-gray.png',
        imageAlt: 'efinancethai',
        link: 'https://www.efinancethai.com/LastestNews/LatestNewsMain.aspx?id=Qjk1aFZodFIyM0U9',
    },
]

const ALLIANCES = [
    {
        imageSrc: '/images/home/alliances/aleswap.png',
        imageAlt: 'aleswap.finance',
        link: 'https://aleswap.finance/',
    },
    // {
    //     imageSrc: '/images/home/alliances/moonmakerprotocol.png',
    //     imageAlt: 'moonmakerprotocol.com',
    //     link: 'https://moonmakerprotocol.com/',
    //     style: { marginRight: '-5px' },
    // },
    // {
    //     imageSrc: '/images/home/alliances/jdi-yield.png',
    //     imageAlt: 'www.jdiyield.com',
    //     link: 'https://www.jdiyield.com',
    // },
    // {
    //     imageSrc: '/images/home/alliances/hode.png',
    //     imageAlt: 'hode.finance',
    //     link: 'https://hode.finance',
    //     imageStyle: { filter: 'grayscale(100%)' },
    // },
    {
        imageSrc: '/images/home/alliances/loremboard.png',
        imageAlt: 'loremboard.finance',
        link: 'https://loremboard.finance',
    },
    {
        imageSrc: '/images/home/alliances/seeder.png',
        imageAlt: 'seeder.finance',
        link: 'https://seeder.finance/',
    },
    // {
    //     imageSrc: '/images/home/alliances/safe-bsc.png',
    //     imageAlt: 'safebsc.finance',
    //     link: 'https://safebsc.finance',
    // },
    {
        imageSrc: '/images/home/alliances/infinitee.png',
        imageAlt: 'infinitee.finance',
        link: 'https://infinitee.finance/',
    },
    // {
    //     imageSrc: '/images/home/alliances/aquafinance.png',
    //     imageAlt: 'aquafinance.live',
    //     link: 'https://aquafinance.live/',
    // },
    {
        imageSrc: '/images/home/alliances/pay-d.png',
        imageAlt: 'paydprotocol.finance',
        link: 'https://paydprotocol.finance/',
        // imageStyle: { height: 64, filter: 'grayscale(100%)' },
    },
]

const ECOSYSTEMS = [
    {
        imageSrc: '/images/home/ecosystems/northbridge.svg',
        imageAlt: 'northbridge.link',
        link: 'https://northbridge.link/',
    },
    {
        imageSrc: '/images/home/ecosystems/kururu.svg',
        imageAlt: 'kururu.finance',
        link: 'https://kururu.finance/',
    },
    {
        imageSrc: '/images/home/ecosystems/foodcourt.svg',
        imageAlt: 'foodcourt.finance',
        link: 'https://foodcourt.finance/',
    },
]

interface PartnerSectionProps {
    className?: string
}

export const PartnerSection = ({ className }: PartnerSectionProps) => {
    return (
        <div className={classNames(className, '')}>
            <div
                className="_pst-rlt _pdt-48px _pdbt-64px _pdh-48px _zid-1 _ovf-hd"
                style={{
                    background:
                        'linear-gradient(180deg, #0F004A 0%, #13141B 100%)',
                }}
                // style={{
                //     background:
                //         'linear-gradient(108.05deg, rgba(30, 47, 147, 0.53) 3.43%, rgba(10, 16, 57, 0.1) 170.47%)',
                // }}
            >
                {/* <img
                    src="/images/home/decorators/what-they-said-bg.png"
                    className="_pst-asl _t-50pct _l-50pct _zid--1 _w-100pct-sm"
                    style={{
                        transform: 'translate(-50%, -43%)',
                    }}
                /> */}
                <div className="_fs-700 _fs-900-sm _fw-500 _mgbt-24px _pdh-16px-sm _tal-ct _w-100pct">
                    Strategic Partner
                </div>
                <div className="_dp-f _fdrct-r _fw-w _jtfct-ct _jtfit-ct _mgh-at _w-fc">
                    {STRATEGIC_PARTNER.map((item) => (
                        <a
                            key={item.imageAlt}
                            className="_dp-f _jtfct-ct _alit-ct _bdrd-16px _bgcl-shader-hover _ft-n-hover"
                            title={item.imageAlt}
                            href={item.link}
                            style={{
                                padding: '20px 20px',
                                margin: '0px 10px 10px',
                                filter: 'grayscale(100%)',
                                ...item.containerStyle,
                            }}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className={classNames(
                                    'ksw-animation-popup _ojf-ct _mg-at _h-64px _h-128px-sm',
                                    styles.switchingHoverImage
                                )}
                                style={{
                                    imageRendering: '-webkit-optimize-contrast',
                                    ...item.imageStyle,
                                }}
                                src={item.imageSrc}
                                alt={item.imageAlt}
                            />
                        </a>
                    ))}
                </div>
            </div>
            <div
                className="_pst-rlt _pdt-64px _pdbt-128px _pdh-48px _zid-1 _ovf-hd"
                style={{
                    background:
                        'linear-gradient(180deg, #0F004A 0%, #13141B 100%)',
                }}
            >
                <div className=" _w-fc _mgh-at">
                    <div className="_fs-700 _fs-900-sm _fw-500 _mgbt-48px _pdh-16px-sm _tal-ct _w-100pct">
                        What they said about us
                    </div>
                    <div className="_dp-f _fdrct-r _fw-w _jtfct-ct _jtfit-ct _mgh-at _w-fc">
                        {WHAT_THEY_SAID.map((item) => (
                            <a
                                key={item.imageAlt}
                                className="_dp-f _jtfct-ct _alit-ct _bdrd-16px _bgcl-shader-hover"
                                title={item.imageAlt}
                                href={item.link}
                                style={{
                                    padding: '0px 10px',
                                    margin: '0px 10px 10px',
                                }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div
                                    className={classNames(
                                        'ksw-animation-popup _ojf-ct _mg-at',
                                        styles.switchingHoverImage
                                    )}
                                    style={
                                        {
                                            '--image-normal': `url('${item.imageGraySrc}')`,
                                            '--image-hover': `url('${item.imageSrc}')`,
                                            width: 200,
                                            height: 75,
                                            imageRendering:
                                                '-webkit-optimize-contrast',
                                        } as React.CSSProperties
                                    }
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="lo-12 lo-6-sm">
                <div
                    id="ecosystems"
                    className="_pdt-64px _pdbt-64px _pdh-4px _pdh-48px-sm"
                    style={{
                        background: '#1A237E',
                    }}
                >
                    <div className="_mgh-at _mgr-at-sm _mgh-at-md _w-fc">
                        <div className="_fs-800 _fs-900-sm _fw-500 _mgbt-32px _pdh-16px-sm _tal-ct _tal-l-sm">
                            Ecosystems
                        </div>
                        <div className="_dp-f _fw-w _fdrt-cl _fdrt-r-sm _jtfct-fs _al-it ct _w-100pct _mgh-at">
                            {ECOSYSTEMS.map((item) => (
                                <a
                                    key={item.imageAlt}
                                    className="_dp-f _jtfct-ct _alit-ct _pd-16px _bdrd-16px _bgcl-shader-hover _ft-gs _ft-n-hover"
                                    title={item.imageAlt}
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="ksw-animation-popup _ojf-ct _mg-at"
                                        style={{
                                            height: 80,
                                            imageRendering:
                                                '-webkit-optimize-contrast',
                                        }}
                                        src={item.imageSrc}
                                        alt={item.imageAlt}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className="_pdt-64px _pdbt-64px _pdh-48px"
                    style={{ background: '#121858' }}
                >
                    <div className="_fs-800 _fs-900-sm _fw-500 _mgbt-32px _pdh-16px-sm _tal-ct _tal-l-sm">
                        Alliances
                    </div>
                    <div className="_dp-f _fw-w _fdrt-cl _fdrt-r-sm _jtfct-fs _al-it ct _w-100pct _mgh-at">
                        {ALLIANCES.map((item) => (
                            <a
                                key={item.imageAlt}
                                className="_dp-f _jtfct-ct _alit-ct _pd-16px _mgbt-2px _bdrd-16px _bgcl-shader-hover _ft-gs _ft-n-hover"
                                title={item.imageAlt}
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className="ksw-animation-popup _ojf-ct _mg-at"
                                    style={{
                                        maxHeight: 64,
                                        imageRendering:
                                            '-webkit-optimize-contrast',
                                        // ...item.imageStyle,
                                    }}
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerSection
