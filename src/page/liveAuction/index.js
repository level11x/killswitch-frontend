import React from 'react'
import HeaderLiveAuction from '../../component/liveAuction/header-live-action'
import CollectibileLiveAuction from '../../component/liveAuction/collectibles'
import LiveAuctionContent from '../../component/liveAuction/content-live-auction'
import LiveAuctionFooter from '../../component/liveAuction/footer-live-action'
import Navigation from '../../component/navigation'
import './liveAuction.css'
import { Web3Provider } from "../../hooks/useWeb3";

export const LiveAuctionPage = () => {
	return (
		<Web3Provider>
			<Navigation />
			<div className="live-auction-container">
                {/* Start at 04/06 18:00 end at 07/06 18:00 */}
				<HeaderLiveAuction
					className="z-20 flex justify-center space-x-4"
					day
					hour
					minute
					second
					startMonth={6}
					startDay={4}
					startHour={18}
					endMonth={6}
					endDay={7}
					endHour={18}
				/>
				<div className="live-auction-content">
					<CollectibileLiveAuction />
					<LiveAuctionContent />
				</div>
				<LiveAuctionFooter />
			</div>
		</Web3Provider>
	)
}
