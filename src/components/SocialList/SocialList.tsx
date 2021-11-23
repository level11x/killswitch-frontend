import classNames from 'classnames'

interface SocialListProps {
    className?: string
}

export const SocialList = ({ className }: SocialListProps) => {
    return (
        <div
            className={classNames(className)}
            style={{
                fontSize: 18,
            }}
        >
            <a
                className="fab fa-telegram-plane _bgcl-base-800-hover _bdrd-16px _pd-12px _pst-rlt"
                title="Telegram Global"
                href="https://t.me/killswitch_global"
                target="_blank"
                rel="noreferrer"
            >
                <div
                    className="_ffml-primary _fw-800 _pst-asl _bt-3px _mgl-1px"
                    style={{ fontSize: 9 }}
                >
                    EN
                </div>
            </a>
            <a
                className="fab fa-telegram-plane _bgcl-base-800-hover _bdrd-16px _pd-12px _pst-rlt"
                title="Telegram Thailand"
                href="https://t.me/killswitchofficial"
                target="_blank"
                rel="noreferrer"
            >
                <div
                    className="_ffml-primary _fw-800 _pst-asl _bt-3px _mgl-1px"
                    style={{ fontSize: 9 }}
                >
                    TH
                </div>
            </a>
            <a
                className="fab fa-twitter _bgcl-base-800-hover _bdrd-16px _pd-12px"
                title="Twitter"
                href="https://twitter.com/KillSwitch_Defi"
                target="_blank"
                rel="noreferrer"
            />
            <a
                className="fab fa-medium-m _bgcl-base-800-hover _bdrd-16px _pd-12px"
                title="Medium"
                href="https://killswitch-official.medium.com/"
                target="_blank"
                rel="noreferrer"
            />
            <a
                className="fab fa-youtube _bgcl-base-800-hover _bdrd-16px _pd-12px"
                title="Youtube"
                href="https://www.youtube.com/channel/UC-kABDqHrUBTpu_MyiViv4Q"
                target="_blank"
                rel="noreferrer"
            />
            <a
                className="fa fa-book _bgcl-base-800-hover _bdrd-16px _pd-12px"
                title="GitBook"
                href="https://killswitchofficial.gitbook.io/killswitch/"
                target="_blank"
                rel="noreferrer"
            />
        </div>
    )
}

export default SocialList
