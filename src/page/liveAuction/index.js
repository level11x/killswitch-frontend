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
                {/* Start at 28/05 18:00 end at 31/05 18:00 */}
				<HeaderLiveAuction
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
				<div className="live-auction-content">
					<CollectibileLiveAuction />
					<LiveAuctionContent />
				</div>
				<LiveAuctionFooter />
			</div>
		</Web3Provider>
	)
}
