import BlogList from './components/BlogList/BlogList'
import FeatureList from './components/FeatureList'
import LastestUpdateList from './components/LastestUpdateList'
import PartnerSection from './components/PartnerSection'
import Stats from './components/Stats'
import './styles.scss'

export const Home = () => {
    return (
        <div className="home-page">
            <div
                className="full-width _pst-rlt _dp-f _fdrt-cl _alit-ct _zid-1 _tal-ct _pdh-16px _pdbt-24px _pdbt-24px-lg"
                style={{ paddingTop: 'var(--header-height)' }}
            >
                <img
                    className="top-section-backgroud-image _pst-asl _t-0px _zid--1"
                    src="/images/home/decorators/top-section-backgroud.png"
                />
                <img
                    id="killswitch"
                    className="_mgt-64px ksw-animation-popup"
                    src="/images/ksw-white-icon.svg"
                />
                <div className="_fs-800 _fs-1000-sm _fw-500 _mgt-24px">
                    KillSwitch is a Smart Yield{' '}
                    <br className="_dp-n _dp-b-sm" />
                    Farming Aggregator
                </div>
                <div
                    className="_fs-600 _fs-700-sm _fw-500 _mgt-24px"
                    style={{ maxWidth: 725 }}
                >
                    Users are free to unstake, withdraw Liquidity Position from
                    their funds and sell their high risk coins instantly in one
                    click.
                </div>
                <div className="_dp-f _alit-ct _mgt-24px">
                    <a
                        className="ksw-button _mgr-8px"
                        href="https://app.killswitch.finance/"
                    >
                        <i className="far fa-external-link _mgr-8px" />
                        Launch app
                    </a>
                    <a
                        className="ksw-button -ghost"
                        target="_blank"
                        href="https://killswitchofficial.gitbook.io/killswitch"
                        rel="noreferrer"
                    >
                        LEARN MORE
                    </a>
                </div>
                <div className="lo-12 lo-6-sm _gg-32px _gg-48px-sm _alit-ct _mgt-48px _mgt-48px-sm _fs-500 _fw-500">
                    <div className="_dp-f _fdrt-cl">
                        <span className="_mgbt-8px">
                            <i className="fa fa-shield-check _cl-success-main _mgr-8px _mgbt-4px" />
                            Audited By
                        </span>
                        <a
                            href="https://app.inspex.co/library/killswitch#?scope=killswitch-autocompound"
                            target="_blank"
                            rel="noreferrer"
                            title="Audited by Inspex."
                            className="_bdrd-16px _bgcl-shader-hover"
                        >
                            <img
                                className="_h-48px"
                                src="/images/home/audited/inspex.png"
                            />
                        </a>
                    </div>
                    <div className="_dp-f _fdrt-cl">
                        <span className="_mgbt-8px">
                            <i className="fa fa-shield-check _cl-success-main _mgr-8px _mgbt-4px" />
                            Onboarding Audit
                        </span>
                        <a
                            href="https://www.certik.org/projects/killswitch"
                            target="_blank"
                            rel="noreferrer"
                            title="Certik."
                            className="_bdrd-16px _bgcl-shader-hover"
                        >
                            <img
                                className="_h-48px"
                                src="/images/home/audited/certik.svg"
                            />
                        </a>
                    </div>
                </div>
                <Stats className="_mgt-48px _mgt-48px-sm" />
            </div>
            <div className="_pdv-32px _pdv-64px-sm _pdh-24px _pdh-64px-sm _pst-rlt _ovf-hd">
                <img
                    className="_pst-asl _t-0 _l-50pct _w-150pct _w-100pct-sm"
                    style={{
                        transform: 'translate(-50%, -30%) scale(0.70)',
                    }}
                    src="/images/home/decorators/latest-update-top-bg.png"
                />
                <div className="_fs-600 _fs-900-sm _fw-500">Latest Update</div>
                <LastestUpdateList className="_mgt-24px _mxw-512px _mxh-256px _mxh-256-xs _mgh-at _h-100pct" />
                <div className="_fs-500 _fs-800-sm _fw-500 _tal-ct _wsp-p-sm _mgt-48px">
                    {
                        'KillSwitch is created for high risk yield farmers\n by high risk yield farmers (HRYF).'
                    }
                </div>
                <div className="ksw-link _fs-600 _tal-ct _mgt-24px">
                    Learn More <i className="far fa-chevron-right _mgl-12px" />
                </div>
            </div>
            <div
                id="features"
                className="_pdt-64px _pdbt-64px _pdh-24px _pdh-64px-sm _pst-rlt"
                style={{ background: 'hsla(229, 100%, 14%, 1)' }}
            >
                <div
                    className="_pst-asl _t-0px _l-0px "
                    style={{
                        transform: 'translate(-15%, -50%)',
                    }}
                >
                    <img
                        className="ksw-animation-vertical _mxw-64px _mxw-us-sm"
                        src="/images/home/decorators/feature-top-left.png"
                    />
                </div>
                <div
                    className="_pst-asl _t-0px _r-12px _mxw-64px _mxw-us-sm"
                    style={{
                        transform: 'translate(0%, -50%)',
                    }}
                >
                    <img
                        className="ksw-animation-vertical _mxw-64px _mxw-us-sm"
                        src="/images/home/decorators/feature-top-right.png"
                    />
                </div>
                <FeatureList className="_w-mnc _mgh-at" />
            </div>
            <PartnerSection className="full-width" />
            <BlogList />
        </div>
    )
}

export default Home
