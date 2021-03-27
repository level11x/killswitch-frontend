import React from 'react'
import { Card } from '../Card/Card'
import { Button } from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRadiation } from '@fortawesome/free-solid-svg-icons'

export const ZHPSection = ({ tvl }) => {
  const headerClass = 'pt-4 pb-4'
  return (
    <Card>
      <div className='p-4 text-sm'>
      <div className='flex border border-l-0 border-r-0 border-t-0 border-gray'>
        <div className={`w-3/12 ${headerClass}`}>
          Pool
        </div>
        <div className={`w-3/12 ${headerClass}`}>
          Position Value
        </div>
        <div className={`w-3/12 ${headerClass}`}>
          Debt Value
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          Equity Value
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          Action
        </div>
      </div>
      <div className='flex items-center'>
      <div className={`flex w-3/12 ${headerClass}`}>
        <div className='flex flex-col'>
          <>
            <div className='mr-1 relative'>
              <img  src='/img/BSC.png' />
              <img className='absolute top-0 right-4' src='/img/logo/pancake.png' />
            </div>
            ALPHA<br/>
            BNB-Cake
          </>
          <>
            <div className='mr-1 relative'>
              <img  src='/img/BSC.png' />
              <img className='absolute top-0 right-4' src='/img/logo/pancake.png' />
            </div>
            ALPHA<br/>
            BNB-Cake
          </>
          </div>
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          <span className='text-secondary'>100 BNB</span>
        </div>
        <div className={`w-3/12 ${headerClass}`}>
        <span className='text-secondary'>50 BNB</span>
        </div>
        <div className={`w-2/12 ${headerClass}`}>
        <span className='text-secondary'>50 BNB</span>
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          <div className='w-24'>
          <Button type='primary'>
              <span className='mr-2'>
                <FontAwesomeIcon icon={faRadiation} />
              </span>
              KillSwitch
            </Button>
          </div>
        </div>
      </div>
    </div>
    </Card>
  )
}
