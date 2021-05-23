import React, { useRef } from 'react'
import { Earth, Moon, Neptune, Saturn, Uranus, Star, RobotOnCurvePath, RobotOnStraightPath } from '../svg'

export default function NftAuctionRewardDistribution() {

    const containerRef = useRef();

    return (
        <div className="container mx-auto max-w-screen-xl px-6 xl:px-20 relative">
            <h2 className="text-2xl md:text-5xl font-bold text-white text-center mb-4xl">
                <span className="whitespace-nowrap">
                    NFT Auction
                </span>
                <span>
                    Reward Distribution
                </span>
            </h2>
            <div ref={containerRef} className="mmd:space-y-xl relative">
                <RobotOnCurvePath className="w-full z-10 h-full hidden xl:block absolute -left-40 -top-10"/>
                <RobotOnStraightPath className="xl:hidden absolute w-40 h-full top-0 -left-12 md:-left-2"/>
                <div className="md:h-60 relative flex space-x-8 items-start xl:pl-[0%]">
                    <Earth className="w-20 md:w-[150px] flex-shrink-0 z-[-1]" />
                    <div className="flex flex-col justify-center font-bold text-white space-y-3 whitespace-nowrap">
                        <span className="text-lg md:text-3xl">Total auction value</span>
                        <span className="text-lg md:text-3xl font-bold">10,000 BUSD</span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star/><span>Get 1 T-Shirt per person</span></span>
                    </div>
                </div>
                <div className="md:h-60 flex space-x-8 items-start xl:pl-[150px]">
                    <Moon className="w-20 md:w-[150px] flex-shrink-0 z-[-1]" />
                    <div className="flex flex-col justify-center font-bold text-white space-y-3 whitespace-nowrap">
                        <span className="text-lg md:text-3xl">Total auction value</span>
                        <span className="text-lg md:text-3xl font-bold">30,000 BUSD</span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star/><span>Get 1 T-Shirt per person</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star/><span>Get 1 Cap per person</span></span>
                    </div>
                </div>
                <div className="md:h-60 flex space-x-8 items-start xl:pl-[300px] flex-shrink-0">
                    <Neptune className="w-20 md:w-[150px] flex-shrink-0 z-[-1]" />
                    <div className="flex flex-col justify-center font-bold text-white space-y-3 whitespace-nowrap">
                        <span className="text-lg md:text-3xl">Total auction value</span>
                        <span className="text-lg md:text-3xl font-bold">60,000 BUSD</span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star/><span>Get 1 T-Shirt per person</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star/><span>Get 1 Cap per person</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star/><span>Get 1 Polo Shirt per person</span></span>
                    </div>
                </div>
                <div className="md:h-60 flex space-x-8 items-start xl:pl-[450px]">
                    <Uranus className="w-20 md:w-[150px] flex-shrink-0 z-[-1]" />
                    <div className="flex flex-col justify-center font-bold text-white space-y-3 whitespace-nowrap">
                        <span className="text-lg md:text-3xl">Total auction value</span>
                        <span className="text-lg md:text-3xl font-bold">100,000 BUSD</span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star/><span>Get 1 T-Shirt per person</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star/><span>Get 1 Cap per person</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star/><span>Get 1 Polo Shirt per person</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star/><span>Get 1 Hoodie per person</span></span>
                    </div>
                </div>
                <div className="md:h-60 flex space-x-8 items-start md:items-center xl:pl-[600px]">
                    <Saturn className="w-20 md:w-[150px] flex-shrink-0 origin-center transform scale-150 z-[-1]" />
                    <div className="flex flex-col justify-center font-bold text-white space-y-3 whitespace-nowrap">
                        <span className="text-lg md:text-3xl xl:pt-20">Total auction value</span>
                        <span className="text-lg md:text-3xl font-bold">200,000 BUSD</span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star/><span>Get 1 T-Shirt per person</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star/><span>Get 1 Cap per person</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star/><span>Get 1 Polo Shirt per person</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star/><span>Get 1 Hoodie per person</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star/><span>Get 1 Mascot per person</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

