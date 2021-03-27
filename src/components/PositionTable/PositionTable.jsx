import React from 'react'
import { Button } from '../Button/Button'

export const PositionTable = ({ positionValue, positionLP, rewardCake ,onLiquidate }) => {
  const headerClass = 'pt-4 pb-4'
  return (
    <div className='p-4 text-sm'>
      <div className='flex border border-l-0 border-r-0 border-t-0 border-gray'>
        <div className={`w-1/12 ${headerClass}`}>
          #
        </div>
        <div className={`w-4/12 ${headerClass}`}>
          Pool
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          Position Value
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          Position LP
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          Reward
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          Action
        </div>
      </div>
      <div className='flex items-center'>
        <div className={`w-1/12 ${headerClass}`}>
          BNB #1
        </div>
        <div className={`w-4/12 flex items-center ${headerClass}`}>
          <div className='mr-1 relative'>
            <img  src='/img/BSC.png' />
            <img className='absolute top-0 right-4' src='/img/logo/pancake.png' />
          </div>
          Pancakeswap<br/>
          BNB-Cake
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          {positionValue} BUSD
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          {positionLP} LP
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          {rewardCake} Cake
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          <div className='w-32'>
            <Button type='primary'>
              KillSwitch
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


