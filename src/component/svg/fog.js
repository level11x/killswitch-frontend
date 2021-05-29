
export default function Fog(props) {

    // gsap.to('#svg-fog > path', { attr: { d: "M0,160L80,154.7C160,149,320,139,480,122.7C640,107,800,85,960,101.3C1120,117,1280,171,1360,197.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" }, duration: 4, ease: Linear.easeNone, yoyo: true, repeat: -1 });

    return (
        <svg id="svg-fog" {...props} style={{ zIndex: '-1' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#080E68" d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,90.7C1120,107,1280,117,1360,122.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        </svg>
    )
}