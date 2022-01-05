import classNames from 'classnames'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const stepList = [
    {
        label: 'definix-apy',
        imgPath: '/images/banners/2021-11-17_definix-apy.jpg',
        href: 'https://twitter.com/KillSwitch_Defi/status/1460640200875393028?s=20',
        expireDate: Date.parse('2021-11-31'),
    },
    {
        label: 'create-video-get-ksw',
        imgPath: '/images/banners/2021-10-26_create-video-get-ksw.jpg',
        href: 'https://twitter.com/KillSwitch_Defi/status/1455837156669280259?s=20',
        expireDate: Date.parse('2021-11-30'),
    },
    {
        label: 'ksw-all-events',
        imgPath: '/images/banners/2021-11-04_ksw-all-events.jpg',
        href: 'https://twitter.com/KillSwitch_Defi/status/1456270652260839441?s=20',
        // expireDate: null,
    },
]

interface LastestUpdateListProps {
    className?: string
}

export const LastestUpdateList = ({ className }: LastestUpdateListProps) => {
    return (
        <Carousel
            className={classNames(className, '_ovf-hd _bdrd-16px')}
            autoPlay
            showThumbs
            emulateTouch
            infiniteLoop
        >
            {stepList
                .filter((step) =>
                    step.expireDate ? Date.now() - step.expireDate < 0 : true
                )
                .map((step) => (
                    <a
                        key={step.label}
                        href={step.href}
                        target="_blank"
                        rel="noreferrer"
                        title="Go to page"
                    >
                        <img
                            className="_ovf-hd _dp-b _ojf-cv _w-100pct _bdrd-16px"
                            src={step.imgPath}
                            alt={step.label}
                        />
                    </a>
                ))}
        </Carousel>
    )
}

export default LastestUpdateList
