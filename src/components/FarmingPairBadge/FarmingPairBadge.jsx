import React from 'react'


export const FarmingPairBadge = ({ pair1, pair2 ,children }) => {
  return (
    <>
      <div className='mr-1 relative'>
        <img  src={pair1} />
        <img className='absolute top-0 right-4' src={pair2} />
      </div>
        {children}
    </>
  )
}
