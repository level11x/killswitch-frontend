import React from 'react'


export const AuctionTable  = ({ auctions }) => {
  const formatAddress = (acc) => {
    return `${acc.substr(0,4)}...${acc.substring(acc.length - 4, acc.length)}`
  }
  return (
    <>
      <div className="header flex justify-between mt-20 mb-4">
        <div className="font-semibold xl:text-2xl text-sm text-white">
          Number
        </div>
        <div className="font-semibold xl:text-2xl text-sm text-white">
          Current Bid
        </div>
        <div className="font-semibold xl:text-2xl text-sm text-white">
          Bid Placed by
        </div>
      </div>
      {
        auctions && auctions.map((auction) => {
          return (
            <div key={auction.id} className="rounded bg-white pl-4 pr-4 pt-2 pb-2 flex justify-between mb-4 items-center">
              <div className="flex items-center">
                <img alt="shirt" src='/img/shirt-thumbnail.png' />
                <div className="ml-2">
                  #{auction.id} / 999
                </div>
              </div>
              <div>
                {auction.bidPrice/10**18} BUSD
              </div>
              <div>
                {formatAddress(auction.bidAddress)}
              </div>
            </div>
          )
        })
      }
      
    </>
  )
}
