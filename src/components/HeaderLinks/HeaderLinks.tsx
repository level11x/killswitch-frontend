import classNames from 'classnames'

interface HeaderLinksProps {}

const LaunchAppButton = ({ className }) => (
    <a
        className={classNames(
            'ksw-button _w-100pct _wsp-nw _mgv-4px _mgh-8px',
            className
        )}
        title="Launch app now!"
        href="https://app.killswitch.finance/"
    >
        <i className="far fa-external-link _mgr-8px" />
        Launch app
    </a>
)

export const HeaderLinks = () => {
    return (
        <div className="_dp-f _fdrt-cl _fdrt-r-md _alit-ct _mgl-at-md _pdt-64px _pdt-0px-md _fs-400 _fw-400">
            <LaunchAppButton className="_dp-n-md" />
            <a
                className="ksw-button _bgcl-tpr-md _bgcl-shader-hover _w-100pct _pd-2px-md _mgv-4px _mgh-8px"
                style={{
                    backgroundColor: 'hsl(233deg 31% 16% / 90%)',
                }}
                href="#killswitch"
            >
                About
            </a>
            <a
                className="ksw-button _bgcl-tpr-md _bgcl-shader-hover _w-100pct _pd-2px-md _mgv-4px _mgh-8px"
                style={{
                    backgroundColor: 'hsl(233deg 31% 16% / 90%)',
                }}
                href="#features"
            >
                Features
            </a>
            <a
                className="ksw-button _bgcl-tpr-md _bgcl-shader-hover _w-100pct _pd-2px-md _mgv-4px _mgh-8px"
                style={{
                    backgroundColor: 'hsl(233deg 31% 16% / 90%)',
                }}
                href="#ecosystems"
            >
                Ecosystems
            </a>
            <LaunchAppButton className="_dp-n _dp-f-md" />
        </div>
    )
}

export default HeaderLinks
