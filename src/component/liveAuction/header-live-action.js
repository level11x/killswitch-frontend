import { useState, useEffect } from 'react'
import useCountdown from '../../hooks/useCountdown'

import world from '../../svg/world.svg'
import robotRock from '../../svg/robot-rock.svg'
import { useBUSDContract } from '../../hooks/useBUSDContract'
import { AUCTION_ADDRESS } from "../../config/contract";

const HeaderLiveAuction = ({ day, hour, minute, second,startMonth, startDay, startHour, endMonth, endDay, endHour ,className,...props}) => {
    const timerComponents = [];
    const timeLeft = useCountdown({ endDay, endHour, endMonth })
    const busdContract = useBUSDContract();
    const [tvl, setTVL] = useState(0);

    useEffect(() => {
        if (!busdContract) return
        busdContract.methods.balanceOf(AUCTION_ADDRESS).call().then((balance) => {
            console.log(balance)
            setTVL(balance)
        })
    }, [busdContract])

    return (
        <div className="bg-live-auction-section1">
            <div className="world-box">
            <img src={world} alt="world"  className="world-icon"/>
            <div className="world-auction">
                <div className="live-auction-text" >
                    <div className="live-auction-text-header">Total Bidding Value Lock</div>
                    <div className="live-auction-text-header-number">{(tvl/10**18).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} BUSD</div>
                </div>
            </div>
            </div>
          
            <div className="box-liveAuction">
                <div className="live-auction-ending">
                    <div className="live-auction-text-header-ending">Auction Ending in</div>
                     <div {...props} className={['container max-w-screen-lg mx-auto',className || " "].join(" ")}>
            {timerComponents}
             {
                day ?
                    <div className="h-24 w-24 md:h-36 md:w-36 2xl:h-48 2xl:w-48 rounded-2xl bg-white flex flex-col p-2 z-10">
                        <span className="font-bold text-base md:text-2xl text-gray-400 text-center">Days</span>
                        <span className="flex-1 font-bold text-4xl md:text-7xl grid place-items-center">{timeLeft.days}</span>
                    </div>
                    : null
            }
            {
                hour ?
                    <div className="h-24 w-24 md:w-36 md:h-36 2xl:h-48 2xl:w-48 rounded-2xl bg-white flex flex-col p-2 z-10">
                        <span className="font-bold text-base md:text-2xl text-gray-400 text-center">Hours</span>
                        <span className="flex-1 font-bold text-4xl md:text-7xl grid place-items-center">{timeLeft.hours}</span>
                    </div>
                    : null
            }
            {
                minute ?
                    <div className="h-24 w-24 md:w-36 md:h-36 2xl:h-48 2xl:w-48 rounded-2xl bg-white flex flex-col p-2 z-10">
                        <span className="font-bold text-base md:text-2xl text-gray-400 text-center">Minutes</span>
                        <span className="flex-1 font-bold text-4xl md:text-7xl grid place-items-center">{timeLeft.minutes}</span>
                    </div>
                    : null
            }
            {
                second ?
                    <div className="h-24 w-24 md:w-36 md:h-36 2xl:h-48 2xl:w-48 rounded-2xl bg-white flex flex-col p-2 z-10">
                        <span className="font-bold text-base md:text-2xl text-gray-400 text-center">Seconds</span>
                        <span className="flex-1 font-bold text-4xl md:text-7xl grid place-items-center">{timeLeft.seconds}</span>
                    </div>
                    : null
            }
        </div>
                </div>

                <div className="header-robot"><img src={robotRock} alt="robotRock" /></div>
            </div>

        </div>
    )
}
export default HeaderLiveAuction