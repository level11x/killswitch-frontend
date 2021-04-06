import React from 'react'


export const MobileFarmingPairBadge = ({ pair1, pair2 ,children }) => {
  return (
    <div className='flex items-center'>
      <div className='relative mr-2'>
        <img className='absolute top-0 right-3'  src={pair1} />
        <img  src={pair2} />
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
