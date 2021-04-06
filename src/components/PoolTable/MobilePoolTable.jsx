import React from 'react'
import { Button } from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRadiation } from '@fortawesome/free-solid-svg-icons'
import { MobileFarmingPairBadge } from '../FarmingPairBadge/MobileFarmingPairBadge'


const PoolItem = ({ label, children }) => {
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
export const MobilePoolTable = ({ lp, approve, stake, isApprove }) => {
  return (
    <div className='p-4 text-sm'>
      <div className='flex flex-col items-center'>
        <PoolItem label='Pool' >
            <MobileFarmingPairBadge pair1='/img/BSC.png' pair2='/img/logo/pancake.png'>
              Pancakeswap<br/>
              BNB-Cake
            </MobileFarmingPairBadge>

        </PoolItem>
        <PoolItem label="APY">
          <span className='text-secondary'>883.92% </span>
        </PoolItem>
        <PoolItem label="Yield">
          Yield Farming   :    442.74%<br />
          Trading Fees    :    45.95%<br />
          KillSwitch Reward :    404.78%<br />
        </PoolItem>
        <div className={`w-full`}>
        <Button onClick={() => {isApprove ? stake() : approve() }} type='secondary'>
            { isApprove ? 'Farm' : 'Approve' }
          </Button> 
        </div>
      </div>
    </div>
  )
}


