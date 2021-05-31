import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import IMAGES from '../../assets/auction/robots/robotImg';

export const TopAuctionCard  = ({ auction, number }) => {
  const formatAddress = (acc) => {
    return `${acc.substr(0,4)}...${acc.substring(acc.length - 4, acc.length)}`
  }
  return (
    <div className="bg-white p-4 relative">
      <div className="shirt-card-box" id="shirt">
          <LazyLoadImage className="overlay w-full h-full" alt="shirt" src="/img/auction/base-back-shirt.png" />
          { auction && <div className="shirt-image relative">
            <LazyLoadImage alt="shirt" src="/img/auction/base-front-shirt.png" />
            <LazyLoadImage alt="" src={IMAGES[auction.id]} className="absolute block left-1/2 top-3/10 transform -translate-x-1/2 w-1/3 h-auto" />
            {/* <LazyLoadImage alt="" src={IMAGES[current.id]} className="absolute block left-1/2 top-1/4 transform -translate-x-1/2 w-20 h-20" /> */}
            {/* <span>{current.id}</span> */}
          </div>}
      </div>
      <img className='left-4 top-4 absolute' src={`/img/${number}.png`} />
      <div className="right-4 top-4 bg-blue rounded absolute p-1 text-white ">
        #{auction && auction.id} / 999
      </div>
      <div className="mt-4 text-primary flex justify-between">
        <div>
          Current Bid
        </div>
        <div className="font-semibold text-base">
          {auction && auction.bidPrice/10**18} BUSD
        </div>
      </div>
      <div className="mt-2 text-primary flex justify-between">
        <div>
          Bid placed by
        </div>
        <div className="font-semibold text-base">
          {auction && auction.bidAddress && formatAddress(auction.bidAddress)}
        </div>
      </div>
    </div>
  )
}
