import React from 'react'


export const TopAuctionCard  = ({ auction, number }) => {
  const formatAddress = (acc) => {
    return `${acc.substr(0,4)}...${acc.substring(acc.length - 4, acc.length)}`
  }
  return (
    <div className="bg-white p-4 relative">
      <img src="/img/shirt.png" />
      <img className='left-4 top-4 absolute' src={`/img/${number}.png`} />
      <div className="right-4 top-4 bg-blue rounded absolute p-1 text-white ">
        #0 / 999
      </div>
      <div className="mt-4 text-primary flex justify-between">
        <div>
          Current Bid
        </div>
        <div className="font-semibold text-base">
          90,000 BUSD
        </div>
      </div>
      <div className="mt-2 text-primary flex justify-between">
        <div>
          Bid placed by
        </div>
        <div className="font-semibold text-base">
          0xa3aa...505d
        </div>
      </div>
    </div>
  )
}
