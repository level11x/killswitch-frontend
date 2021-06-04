import { React, useEffect, useRef, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from "../../context";

export default function Navigation() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { wallet, connectWallet } = useContext(AppContext);

    const mobileMenuRef = useRef(null);

    const toggleMenuOpen = () =>{
        setMenuOpen(!isMenuOpen);
    }

    useEffect(()=>{
        document.addEventListener('click',(e)=>{
            if(e && e.path && !e.path.includes(mobileMenuRef.current)){
                setMenuOpen(false)
            }
        })
        return () => {}
    }, [wallet])

    return (
        <nav className="h-nav w-full bg-white fixed top-0 left-0 z-40">
            {/* mmd:hidden  */}
            <div className="mmd:hidden h-full flex items-center px-md nav-destop">
            <Link to="/" >
                <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="212" height="48" viewBox="0 0 212 48" fill="none">
                    <path d="M71.2153 17.4601H76.3693V25.9501L83.387 17.4601H89.5019L81.2613 27.4139L90.0551 37.924H83.9402L76.3693 28.8777V37.924H71.2153V17.4601Z" fill="#1B134E" />
                    <path d="M93.801 21.9979C93.0245 21.9979 92.3742 21.7441 91.85 21.2367C91.3259 20.7292 91.0638 20.0852 91.0638 19.3045C91.0638 18.5433 91.3259 17.909 91.85 17.4015C92.3742 16.8746 93.0245 16.6111 93.801 16.6111C94.5581 16.6111 95.1987 16.8746 95.7228 17.4015C96.2664 17.909 96.5381 18.5433 96.5381 19.3045C96.5381 20.0657 96.2664 20.7097 95.7228 21.2367C95.1987 21.7441 94.5581 21.9979 93.801 21.9979ZM91.2385 23.8715H96.3634V37.924H91.2385V23.8715Z" fill="#1B134E" />
                    <path d="M99.1681 16.2891H104.293V37.924H99.1681V16.2891Z" fill="#1B134E" />
                    <path d="M106.903 16.2891H112.028V37.924H106.903V16.2891Z" fill="#1B134E" />
                    <path d="M120.985 38.3631C119.704 38.3631 118.433 38.2362 117.171 37.9825C115.909 37.7483 114.87 37.4165 114.055 36.9871V32.3323C115.103 32.8787 116.19 33.2886 117.316 33.5618C118.462 33.8351 119.549 33.9717 120.578 33.9717C121.529 33.9717 122.247 33.8253 122.732 33.5326C123.218 33.2398 123.46 32.8202 123.46 32.2737C123.46 31.8638 123.325 31.5125 123.053 31.2198C122.8 30.9075 122.422 30.6245 121.917 30.3708C121.412 30.117 120.626 29.7657 119.559 29.3168C117.676 28.5166 116.307 27.6286 115.453 26.6527C114.599 25.6769 114.172 24.4766 114.172 23.0518C114.172 21.8808 114.492 20.8366 115.132 19.9193C115.792 19.002 116.705 18.2896 117.87 17.7821C119.034 17.2747 120.374 17.021 121.888 17.021C123.13 17.021 124.237 17.1185 125.208 17.3137C126.178 17.5089 127.11 17.8212 128.003 18.2505V22.7883C126.295 21.8905 124.577 21.4416 122.849 21.4416C121.917 21.4416 121.17 21.5978 120.607 21.91C120.063 22.2028 119.791 22.6322 119.791 23.1982C119.791 23.7642 120.073 24.2228 120.636 24.5741C121.199 24.9255 122.237 25.4036 123.752 26.0087C125.13 26.5747 126.198 27.1309 126.955 27.6774C127.731 28.2239 128.294 28.8582 128.644 29.5803C128.993 30.3025 129.168 31.2198 129.168 32.3323C129.168 34.2254 128.479 35.7087 127.1 36.7822C125.741 37.8361 123.703 38.3631 120.985 38.3631Z" fill="#1B134E" />
                    <path d="M129.325 23.8715H134.45L136.692 31.9224L138.935 23.8715H143.069L145.312 31.9224L147.554 23.8715H152.679L147.99 37.924H143.39L141.002 30.0195L138.614 37.924H134.013L129.325 23.8715Z" fill="#1B134E" />
                    <path d="M157.441 21.9979C156.665 21.9979 156.014 21.7441 155.49 21.2367C154.966 20.7292 154.704 20.0852 154.704 19.3045C154.704 18.5433 154.966 17.909 155.49 17.4015C156.014 16.8746 156.665 16.6111 157.441 16.6111C158.198 16.6111 158.839 16.8746 159.363 17.4015C159.907 17.909 160.178 18.5433 160.178 19.3045C160.178 20.0657 159.907 20.7097 159.363 21.2367C158.839 21.7441 158.198 21.9979 157.441 21.9979ZM154.879 23.8715H160.004V37.924H154.879V23.8715Z" fill="#1B134E" />
                    <path d="M168.865 38.3631C167.137 38.3631 165.827 37.8849 164.934 36.9286C164.061 35.9527 163.624 34.6255 163.624 32.9471V27.4432H161.644V23.8715H163.624V19.6558H168.749V23.8715H171.952V27.4432H168.749V32.2444C168.749 33.0056 168.885 33.5521 169.156 33.8839C169.447 34.2157 169.952 34.3816 170.67 34.3816C171.311 34.3816 171.952 34.2059 172.592 33.8546V37.6897C172.088 37.924 171.544 38.0898 170.962 38.1874C170.399 38.3045 169.7 38.3631 168.865 38.3631Z" fill="#1B134E" />
                    <path d="M181.644 38.3631C179.082 38.3631 177.053 37.719 175.558 36.4309C174.064 35.1427 173.316 33.3081 173.316 30.927C173.316 28.5459 174.064 26.7015 175.558 25.3939C177.073 24.0862 179.111 23.4324 181.673 23.4324C182.819 23.4324 183.886 23.5495 184.876 23.7837C185.886 23.9984 186.721 24.3107 187.381 24.7205V28.7313C186.196 27.8726 184.634 27.4432 182.692 27.4432C181.45 27.4432 180.45 27.7359 179.693 28.3215C178.956 28.8875 178.587 29.756 178.587 30.927C178.587 32.1176 178.956 32.9958 179.693 33.5618C180.431 34.1083 181.421 34.3816 182.663 34.3816C184.546 34.3816 186.177 33.9327 187.555 33.0349V37.0164C186.08 37.9142 184.11 38.3631 181.644 38.3631Z" fill="#1B134E" />
                    <path d="M189.595 16.2891H194.72V25.306C195.341 24.6815 196.05 24.2131 196.846 23.9008C197.661 23.5885 198.515 23.4324 199.408 23.4324C201.369 23.4324 202.815 23.9496 203.747 24.984C204.698 25.9989 205.174 27.3846 205.174 29.1412V37.924H200.049V29.8145C200.049 28.2336 199.331 27.4432 197.894 27.4432C197.234 27.4432 196.632 27.5993 196.089 27.9116C195.545 28.2044 195.089 28.663 194.72 29.2876V37.924H189.595V16.2891Z" fill="#1B134E" />
                    <path d="M41.3049 25.7979C42.8131 29.7387 43.527 37.6228 43.7148 40.0314C43.747 40.448 44.0798 40.7733 44.4958 40.8028C56.7682 41.655 59.5914 35.9481 60.1791 34.1176C60.2811 33.795 60.1845 33.4455 59.9269 33.2251C55.048 29.0639 48.838 25.556 46.8198 24.4619C46.4924 24.2845 46.0845 24.3383 45.8296 24.6071C45.3572 25.1044 44.2408 25.7872 41.6806 25.7119H41.2593L41.3049 25.7979Z" fill="#1B134E" />
                    <path d="M44.5145 18.2872C44.0691 17.7147 42.4776 16.0346 38.4468 14.8169C38.3394 14.7846 38.2509 14.704 38.2106 14.5965L34.9177 5.82523C34.8158 5.55642 35.0519 5.28224 35.331 5.34138C37.7356 5.85211 46.4522 8.14505 54.012 15.8007C54.216 16.0077 54.1033 16.3625 53.8161 16.4136C52.2274 16.6905 48.1536 17.4458 44.9037 18.4136C44.7588 18.4539 44.6085 18.4055 44.5145 18.2872Z" fill="#1B134E" />
                    <path d="M32.1108 16.6046C31.9686 18.7013 32.6341 20.2846 33.1199 21.1421C33.3372 21.5265 33.1548 22.0103 32.7388 22.1555C30.2161 23.0291 22.8065 25.6419 19.7498 27.2548C19.4332 27.4214 19.0467 27.33 18.8428 27.037C17.2809 24.8032 11.5834 15.8304 16.2208 9.82519C16.4087 9.58326 16.728 9.48649 17.0152 9.58864C18.9608 10.2795 26.5771 13.0724 31.7297 16.1664C31.7807 16.196 31.8263 16.2336 31.8693 16.2739L32.0518 16.4567L32.1108 16.6046Z" fill="#1B134E" />
                    <path d="M43.3568 22.6172C44.2104 21.3783 43.1393 19.1551 40.9644 17.6516C38.7895 16.1481 36.3344 15.9336 35.4807 17.1725C34.6271 18.4114 35.6982 20.6346 37.8731 22.1381C40.048 23.6416 42.5031 23.8561 43.3568 22.6172Z" fill="#1B134E" />
                </svg>
                </Link>
                <div className="h-full flex items-center flex-1 justify-end space-x-lg">
                    <Link className={`px-6 flex h-full items-center border-blue-900 ${window.location.pathname.toLocaleLowerCase().includes("info") ? 'border-b-4' : ''}`} to="/info">Info</Link>
                    <Link className={`px-6 flex h-full items-center border-blue-900 ${window.location.pathname.toLocaleLowerCase().includes("live-auction") ? 'border-b-4' : ''}`} to="/live-auction">Live Auction</Link>
                    <Link className={`px-6 flex h-full items-center border-blue-900 ${window.location.pathname.toLocaleLowerCase().includes("top-auction") ? 'border-b-4' : ''}`}to="/top-auction">Top Auction</Link>
           
                    {wallet && <button className="px-4 py-2 bg-blue rounded text-white">{`${wallet.substr(0,4)}...${wallet.substring(wallet.length - 4, wallet.length)}`}</button>}
                    {!wallet && <button onClick={connectWallet} className="px-4 py-2 bg-blue rounded text-white">Connect Wallet</button>}
       
                   
                    
                </div>
            </div>
            {/* md:hidden  */}
            <div ref={mobileMenuRef} className="h-full flex items-center px-md md:hidden lg:hidden">
                <button className="cursor-pointer" onClick={toggleMenuOpen}>
                    <svg arial-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M5 30H35V26.6667H5V30ZM5 21.6667H35V18.3333H5V21.6667ZM5 10V13.3333H35V10H5Z" fill="black" />
                    </svg>
                </button>
                <div className="h-full flex items-center flex-1 justify-end space-x-lg">
                    {wallet && <button className="px-4 py-2 bg-blue rounded text-white">{`${wallet.substr(0,4)}...${wallet.substring(wallet.length - 4, wallet.length)}`}</button>}
                    {!wallet && <button onClick={connectWallet} className="px-4 py-2 bg-blue rounded text-white">Connect Wallet</button>}
                </div>
                <div className={`transform ${isMenuOpen ? 'scale-y-100' : 'scale-y-0' } w-full fixed top-nav left-0 bg-white flex flex-col`}>
                    <Link className={`px-md py-sm flex font-bold h-full items-center border-blue-900 ${window.location.pathname.toLocaleLowerCase().includes("home") ? 'bg-blue-100' : 'hover:bg-blue-50 '}`} to="/home">Home</Link>
                    <Link className={`px-md py-sm flex font-bold h-full items-center border-blue-900 ${window.location.pathname.toLocaleLowerCase().includes("live-auction") ? 'bg-blue-100' : 'hover:bg-blue-50 '}`} to="/live-auction">Live Auction</Link>
                    <Link className={`px-md py-sm flex font-bold h-full items-center border-blue-900 ${window.location.pathname.toLocaleLowerCase().includes("top-auction") ? 'bg-blue-100' : 'hover:bg-blue-50 '}`}to="/top-auction">Top Auction</Link>
                </div>
            </div>
        </nav>
    )
}
