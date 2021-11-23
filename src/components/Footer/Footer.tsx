import SocialList from 'components/SocialList/SocialList'

const year = new Date().getUTCFullYear()

export const Footer = () => {
    return (
        <div className="_bgcl-primary-dark">
            <hr className="ksw-hr" />
            <div className="_dp-f _fdrt-cl _fdrt-r-md _jtfct-spbtw _alit-ct _pdv-16px _pdv-12px-md _pdh-24px">
                <img
                    src="/images/ksw-finance-white.svg"
                    className="_w-50pct _w-us-md _mxw-256px"
                />
                <SocialList className="_mgt-4px _mgbt-8px" />
                <div>© {year} KillSwitch. All Rights Reserved.</div>
            </div>
        </div>
    )
}

export default Footer
