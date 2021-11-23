import classNames from 'classnames'
import styles from './styles.module.scss'
import useFetchList from './useFetchList'

const MAX_LENGTH = 4

interface BlogListProps {
    className?: string
}

export const BlogList = ({ className }: BlogListProps) => {
    const { blogList } = useFetchList()

    return (
        <div
            className={classNames(
                '_pst-rlt _pdt-48px _pdbt-48px _pdh-12px _zid-1 _ovf-hd',
                className
            )}
        >
            <div className="_fs-700 _fs-800-sm _fw-500 _mgbt-24px _pdh-16px-sm _tal-ct">
                What’s new at KillSwitch
            </div>
            <div className="_dp-f _fw-w _jtfct-ct _jtfit-ct _grg-12px _grg-24px-sm _gclg-2px _w-100pct _mgh-at">
                {blogList &&
                    blogList.slice(0, MAX_LENGTH).map((item) => (
                        <div
                            key={item.title}
                            style={{ width: 300 }}
                            className="ksw-card -dark-gradient _bdcl-grey-20 _bdw-1px _ovf-hd _dp-f _fdrt-cl _jtfct-ct _alit-ct _mg-16px"
                        >
                            <a
                                className="_w-100pct"
                                title="Read More"
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className="_ojf-cv _w-100pct"
                                    style={{ height: 200 }}
                                    src={item.thumbnail}
                                />
                            </a>
                            <div className="_dp-f _fdrt-cl _f-1 _pdh-24px _pdv-16px _w-100pct _h-100pct _tal-l _mgr-at">
                                <div className="_fs-500 _fw-500 _mgbt-12px _f-1">
                                    {item.title}
                                </div>
                                <div
                                    className={classNames(
                                        '_fs-400 _mgbt-12px',
                                        styles.description
                                    )}
                                >
                                    {item.description}
                                </div>
                                <a
                                    className="ksw-link _fs-500 _fw-500"
                                    title="Read More"
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    READ STORY
                                </a>
                            </div>
                        </div>
                    ))}
            </div>
            <a
                href="https://killswitch-official.medium.com/"
                target="_blank"
                className="ksw-button -secondary _w-fc _mgh-at _mgt-48px"
                rel="noreferrer"
            >
                READ MORE <i className="far fa-arrow-right _mgl-8px" />
            </a>
        </div>
    )
}

export default BlogList
