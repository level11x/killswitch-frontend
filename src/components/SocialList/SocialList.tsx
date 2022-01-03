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
                className="_bgcl-base-800-hover _bdrd-16px _pd-12px"
                title="GitBook"
                href="https://killswitchofficial.gitbook.io/killswitch/"
                target="_blank"
                rel="noreferrer"
            >
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 42 35"
                    fill="var(--sidebar-menu-color)"
                    style={{ marginBottom: '-8px' }}
                >
                    <path
                        d="M19.06 25.36C19.785 25.36 20.22 25.94 20.22 26.52C20.22 27.245 19.64 27.68 19.06 27.68C18.335 27.68 17.9 27.1 17.9 26.52C17.9 25.94 18.335 25.36 19.06 25.36ZM38.055 17.965C37.33 17.965 36.895 17.385 36.895 16.805C36.895 16.225 37.475 15.645 38.055 15.645C38.78 15.645 39.215 16.225 39.215 16.805C39.215 17.385 38.635 17.965 38.055 17.965ZM38.055 13.035C36.025 13.035 34.285 14.775 34.285 16.805C34.285 17.24 34.285 17.675 34.43 17.965L22.105 24.49C21.38 23.475 20.22 22.895 19.06 22.895C17.61 22.895 16.305 23.765 15.725 24.925L4.705 19.125C3.545 18.545 2.675 16.515 2.82 14.775C2.82 13.905 3.255 13.18 3.69 12.89C3.98 12.745 4.415 12.745 4.705 12.89H4.85C7.75 14.485 17.465 19.415 17.755 19.705C18.335 19.995 18.77 20.14 19.785 19.56L39.65 9.265C39.94 9.12 40.23 8.83 40.23 8.395C40.23 7.815 39.65 7.525 39.65 7.525C38.49 6.945 36.75 6.22 35.155 5.35C31.53 3.61 27.47 1.725 25.585 0.854998C23.99 -0.0150022 22.83 0.709998 22.54 0.854998L22.105 0.999998C13.985 5.06 3.11 10.425 2.53 10.715C1.37 11.44 0.790001 12.745 0.645001 14.34C0.500001 16.95 1.805 19.705 3.835 20.72L15.58 26.81C15.87 28.695 17.465 30 19.205 30C21.235 30 22.975 28.405 22.975 26.375L35.88 19.415C36.605 19.995 37.33 20.14 38.2 20.14C40.23 20.14 41.97 18.4 41.97 16.37C41.68 14.63 40.085 13.035 38.055 13.035"
                        fill="currentColor"
                    />
                </svg>
            </a>
        </div>
    )
}

export default SocialList
