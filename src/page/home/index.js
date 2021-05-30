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
					<div className="w-full px-md relative bg-gradient-to-b from-[#000044]">
						<HomeBanner className="absolute hidden md:block mlg:h-full xl:w-full top-0 left-0" />
						<HomeBanner
							mobile
							className="md:hidden absolute transform right-0 h-1/2 scale-[2] object-right-bottom -translate-x-32 bottom-0"
						/>
						<div className="w-full container mx-auto max-w-screen-xl h-screen-nav relative md:py-4xl">
							<div className="flex flex-col space-y-8 items-start py-md">
								<div className="text-white space-y-xl">
									<h2 className="text-4xl flex flex-col md:flex-row leading-relaxed md:space-x-sm md:text-7xl font-bold text-white z-10">
										<span>KillSwitch</span>
										<span>Collection</span>
									</h2>
									<p className="leading-relaxed">
										The shirt auction free of NFT will be auctioned for 3 days with a special prize when the
										bid is reached.
									</p>
								</div>
								<div className="hidden md:flex flex-col md:flex-row mmd:space-y-sm md:space-x-lg">
									<button className="px-3 py-3 rounded font-bold text-white text-xl bg-[#00BCD4]">
										Start Auction
									</button>
									<button className="px-3 py-3 rounded font-bold text-xl border text-[#00BCD4] border-[#00BCD4]">
										KillSwitch.finance
									</button>
								</div>
							</div>
						</div>
					</div>
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
							startMonth={4}
							startDay={28}
							startHour={18}
							endMonth={4}
							endDay={31}
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

