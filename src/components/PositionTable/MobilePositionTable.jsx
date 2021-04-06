import React from 'react'
import { Button } from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRadiation } from '@fortawesome/free-solid-svg-icons'
import { MobileFarmingPairBadge } from '../FarmingPairBadge/MobileFarmingPairBadge'


const PositionItem = ({ label, children }) => {
  return (
    <div className='w-full flex items-center mb-6'>
      <div className="text-secondaryGray w-1/2">
        {label}
      </div>
      <div className="w-1/2">
        {children}
      </div>
    </div>
  )
}
export const MobilePositionTable = ({ liquidate, position }) => {
  return (
    <div className='p-4 text-sm'>
      <div className='flex flex-col items-center'>
        {/* { position && position.lp !== '0.000' && */}
        <>
        <PositionItem label='#'>
          BNB #1
        </PositionItem>
        <PositionItem label='Pool'>
          <MobileFarmingPairBadge pair1='/img/BSC.png' pair2='/img/logo/pancake.png'>
            Pancakeswap<br/>
            BNB-Cake
          </MobileFarmingPairBadge>
        </PositionItem>
        <PositionItem label='Postion Value'>
          {(position && position.value) || 0} BUSD
        </PositionItem>
        <PositionItem label='Postion LP'>
          {(position &&position.lp) || 0} LP
        </PositionItem>
        <PositionItem label='Reward'>
          {(position && position.reward) || 0} Cake
        </PositionItem>
        <div className={`w-full`}>
            <Button type='primary' onClick={liquidate}>
              <span className='mr-2'>
                <FontAwesomeIcon icon={faRadiation} />
              </span>
              KillSwitch
            </Button>
        </div>
        </>
      {/* } */}
      </div>
    </div>
  )
}


