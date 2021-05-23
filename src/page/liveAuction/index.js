import React from 'react'
import HeaderLiveAuction from '../../component/liveAuction/header-live-action'
import CollectibileLiveAuction from '../../component/liveAuction/collectibles'
import LiveAuctionContent from '../../component/liveAuction/content-live-auction'
import LiveAuctionFooter from '../../component/liveAuction/footer-live-action'
import Navigation from '../../component/navigation'
import './liveAuction.css'

export const LiveAuctionPage = () => {
    return (
        <>
        <Navigation />
        <div className="live-auction-container">
            <HeaderLiveAuction className="z-20 flex justify-center space-x-4" day hour minute second  />
            <div className="live-auction-content">
                <CollectibileLiveAuction />
                <LiveAuctionContent />
            </div>
            <LiveAuctionFooter />
        </div>
        </>
    )
}
