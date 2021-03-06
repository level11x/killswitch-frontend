import React, { useRef, useState } from 'react'
import { Earth, Moon, Neptune, Saturn, Uranus, Star, RobotOnCurvePath, RobotOnStraightPath } from '../svg'
export default function NftAuctionRewardDistribution() {

    const containerRef = useRef();

    return (
        <div className="container mx-auto max-w-screen-xl px-6 xl:px-20 relative">
            <h2 className="text-2xl md:text-5xl font-bold text-white text-center mb-4xl">
                <span className="whitespace-nowrap">
                    Auction Reward Distribution
                </span>
            </h2>
            <div className="relative flex flex-col space-y-12 md:space-y-0 md:flex-row justify-center items-center py-14">
                <div className="z-10 w-full flex flex-row md:items-center md:flex-col space-x-10 md:space-x-0">
                    <div className="flex-shrink-0 w-40 h-40 lg:w-48 lg:h-48 grid place-content-center rounded-full shirt-card-box" id="shirt" style={{ backgroundColor: "white" }} >
                        <img className="overlay-shirt" alt="shirt" src="img/Unlock-hover/T-Shirt-Back.png" />
                        <div className="shirt-image relative">
                            <img alt="shirt" src="img/Unlock-hover/T-Shirt-Front.png" />
                        </div>
                    </div>
                </div>
                <div className="z-10 w-full flex flex-row md:items-center md:flex-col space-x-10 md:space-x-0">
                    <div className={`flex-shrink-0 w-40 h-40 lg:w-48 lg:h-48 grid place-content-center rounded-full`} style={{ backgroundColor: "white" }}>
                        <img  id="img-gap" src="img/Unlock-hover/Gap.png" alt="img" />
                    </div>
                </div>
                <div className="z-10 w-full flex flex-row md:items-center md:flex-col space-x-10 md:space-x-0">
                    <div className=" flex-shrink-0 w-40 h-40 lg:w-48 lg:h-48 grid place-content-center rounded-full shirt-card-box" id="shirt" style={{ backgroundColor: "white" }} >
                        <img className="overlay-hoodie" alt="shirt" src="img/Unlock-hover/Hoodie-Back.png" />
                        <div className="shirt-image relative">
                            <img alt="shirt" src="img/Unlock-hover/Hoodie-Front.png" />
                        </div>
                    </div>
                </div>
                <div className="z-10 w-full flex flex-row md:items-center md:flex-col space-x-10 md:space-x-0">
                    <div className=" flex-shrink-0 w-40 h-40 lg:w-48 lg:h-48 grid place-content-center rounded-full shirt-card-box" id="shirt" style={{ backgroundColor: "white" }} >
                        <img className="overlay-polo" alt="shirt" src="img/Unlock-hover/Polo-Back.png" />
                        <div className="shirt-image relative">
                            <img alt="shirt" src="img/Unlock-hover/Polo-Front.png" />
                        </div>
                    </div>
                </div>
                <div className="z-10 w-full flex flex-row md:items-center md:flex-col space-x-10 md:space-x-0">           
                    <div className=" flex-shrink-0 w-40 h-40 lg:w-48 lg:h-48 grid place-content-center rounded-full shirt-card-box" id="shirt" style={{ backgroundColor: "white" }} >
                        <img className="overlay-robot" alt="shirt" src="img/Unlock-hover/Robot-back.png" />
                        <div className="shirt-image relative">
                            <img alt="shirt" src="img/Unlock-hover/Robot-Front.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div ref={containerRef} className="mmd:space-y-xl relative">
                <RobotOnCurvePath className="w-full z-10 h-full hidden xl:block absolute -left-40 -top-10" />
                <RobotOnStraightPath className="xl:hidden absolute w-40 h-full top-0 -left-12 md:-left-2" />
                <div className="md:h-60 relative flex space-x-8 items-start xl:pl-[0%]">
                    <Earth className="w-20 md:w-[150px] flex-shrink-0 " />
                    <div className="flex flex-col justify-center font-bold text-white space-y-3 whitespace-nowrap">
                        <span className="text-lg md:text-3xl">Total Bidding Value Lock</span>
                        <span className="text-lg md:text-3xl font-bold">10,000 BUSD</span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star /><span>Get 1 T-Shirt  per auction</span></span>
                    </div>
                </div>
                <div className="md:h-60 flex space-x-8 items-start xl:pl-[150px]">
                    <Moon className="w-20 md:w-[150px] flex-shrink-0 " />
                    <div className="flex flex-col justify-center font-bold text-white space-y-3 whitespace-nowrap">
                        <span className="text-lg md:text-3xl">Total Bidding Value Lock</span>
                        <span className="text-lg md:text-3xl font-bold">30,000 BUSD</span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star /><span>Get 1 T-Shirt  per auction</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star /><span>Get 1 Cap  per auction</span></span>
                    </div>
                </div>
                <div className="md:h-60 flex space-x-8 items-start xl:pl-[300px] flex-shrink-0">
                    <Neptune className="w-20 md:w-[150px] flex-shrink-0 " />
                    <div className="flex flex-col justify-center font-bold text-white space-y-3 whitespace-nowrap">
                        <span className="text-lg md:text-3xl">Total Bidding Value Lock</span>
                        <span className="text-lg md:text-3xl font-bold">60,000 BUSD</span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star /><span>Get 1 T-Shirt  per auction</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star /><span>Get 1 Cap  per auction</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star /><span>Get 1 Polo Shirt  per auction</span></span>
                    </div>
                </div>
                <div className="md:h-60 flex space-x-8 items-start xl:pl-[450px]">
                    <Uranus className="w-20 md:w-[150px] flex-shrink-0 " />
                    <div className="flex flex-col justify-center font-bold text-white space-y-3 whitespace-nowrap">
                        <span className="text-lg md:text-3xl">Total Bidding Value Lock</span>
                        <span className="text-lg md:text-3xl font-bold">100,000 BUSD</span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star /><span>Get 2 T-Shirt  per auction</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star /><span>Get 1 Cap  per auction</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star /><span>Get 2 Polo Shirt  per auction</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star /><span>Get 1 Hoodie  per auction</span></span>
                    </div>
                </div>
                <div className="md:h-60 flex space-x-8 items-start md:items-center xl:pl-[600px]">
                    <Saturn className="w-20 md:w-[150px] flex-shrink-0 origin-center transform scale-150 " />
                    <div className="flex flex-col justify-center font-bold text-white space-y-3 whitespace-nowrap">
                        <span className="text-lg md:text-3xl xl:pt-20">Total Bidding Value Lock</span>
                        <span className="text-lg md:text-3xl font-bold">200,000 BUSD</span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star /><span>Get 2 T-Shirt  per auction</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star /><span>Get 2 Cap  per auction</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star /><span>Get 2 Polo Shirt  per auction</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star /><span>Get 2 Hoodie  per auction</span></span>
                        <span className="text-sm flex space-x-xs md:space-x-md"><Star /><span>Get 1 Mascot  per auction</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

