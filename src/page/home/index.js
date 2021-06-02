import React from 'react'
import CountdownBox from '../../component/sections/countdownBox'
import AuctionsRoadMap from '../../component/sections/auctionsRoadMap'
import NftAuctionRewardDistribution from '../../component/sections/nftAuctionRewardDistribution'
import Navigation from '../../component/navigation'
import { HomeBanner, MysteryBox, RobotFlag, RockFloor, RockGroup, StarParticleBlur } from '../../component/svg'
import { Web3Provider } from "../../hooks/useWeb3";

export const HomePage = () => {
	return (
		<Web3Provider>
			<div className="w-full h-screen overflow-y-auto overflow-x-hidden relative pt-nav bg-primary"> 
					<Navigation />
					
					<div className="relative py-4xl space-y-lg z-10 overflow-visible">
						<h2 className="text-2xl text-center md:text-5xl font-bold text-white z-10">Auction ending in</h2>
						<RockGroup className="absolute bottom-0 top-0 z-20 transform left-0" />
						<StarParticleBlur className="absolute top-0" />
						<StarParticleBlur className="absolute right-0 bottom-0" />
						<CountdownBox
							className="z-20 flex justify-center space-x-4"
							day
							hour
							minute
							second
							startMonth={5}
							startDay={4}
							startHour={18}
							endMonth={5}
							endDay={7}
							endHour={18}
						/>
					</div>
					<div className="relative pt-40 md:bg-contain">
						<RockFloor className="absolute w-full" />
						<AuctionsRoadMap />
					</div>
					<div>
						<NftAuctionRewardDistribution />
					</div>
					<div className="relative w-full">
						<MysteryBox className="w-80 mlg:pt-4xl mxl:ml-auto lg:w-[600px] mmd:mx-auto" />
						<RobotFlag className="absolute top-60 right-0 max-w-screen-xl mmd:h-full" />
					</div>
				</div>
		</Web3Provider>	
	)
}

