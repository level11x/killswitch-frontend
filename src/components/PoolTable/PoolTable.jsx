import React, { useState } from 'react'
import { Button } from '../Button/Button'

export const PoolTable = ({ lp, approve, stake, isApprove }) => {
  const [easterEgg, setEasterEgg] = useState(false)
  const headerClass = 'pt-4 pb-4'
  const onHover = () => {
    setEasterEgg(!easterEgg)
  }
  return (
    <div className='p-4 text-sm' >
      <div className='flex border border-l-0 border-r-0 border-t-0 border-gray'>
        <div onClick={onHover} className={`w-3/12 ${headerClass}`}>
          Pool
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          APY
        </div>
        <div className={`w-3/12 ${headerClass}`}>
          Yield
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          Current LP
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          Action
        </div>
      </div>
      <div className='flex items-center'>
      <div className={`flex w-3/12 ${headerClass}`}>
          <div className='mr-1 relative'>
            <img  src='/img/BSC.png' />
            <img className='absolute top-0 right-4' src='/img/logo/pancake.png' />
          </div>
          Pancakeswap<br/>
          BNB-Cake
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          <span className='text-secondary'>883.92% </span>
        </div>
        <div className={`w-3/12 ${headerClass}`}>
          Yield Farming   :    442.74%<br />
          Trading Fees    :    45.95%<br />
          KillSwitch Reward :    404.78%<br />
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          {lp}
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          <div className='w-24'>
            <Button onClick={() => {isApprove ? stake() : approve() }} type='secondary'>
                { isApprove ? 'Farm' : 'Approve' }
            </Button>
          </div>
        </div>
      </div>
      {easterEgg && <div className='flex items-center' >
      <div className={`flex w-3/12 ${headerClass}`}>
          <div className='mr-1 relative'>
            <img  src='/img/BSC.png' />
            <img className='absolute top-0 right-4' src='/img/logo/killswitch.png' />
          </div>
          Pancakeswap<br/>
          BNB-KillSwitch
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          <span className='text-secondary'>883.92% </span>
        </div>
        <div className={`w-3/12 ${headerClass}`}>
          Yield Farming   :    442.74%<br />
          Trading Fees    :    45.95%<br />
          KillSwitch Reward :    404.78%<br />
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          {lp}
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          <div className='w-24'>
            <Button onClick={() => {isApprove ? stake() : approve() }} type='secondary'>
                Coming Soon
            </Button>
          </div>
        </div>
      </div>
      }
   </div>
  )
}


