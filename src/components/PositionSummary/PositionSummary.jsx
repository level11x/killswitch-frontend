import React from 'react'
import { Button } from '../Button/Button'
import { Card } from '../Card/Card'
import { MobilePositionTable } from '../PositionTable/MobilePositionTable'
import { PositionTable } from '../PositionTable/PositionTable'

export const PositionSummary = ({ liquidate, position}) => {
  return (
    <Card>
      <span className='font-semibold text-xl'>
      Your Position
      </span>
      <div className="mt-6 w-36">
        <Button type='primary'>
          Active Position
        </Button>
      </div>
      <div className='mt-4'>
        <div className="hidden xl:block">
          <PositionTable liquidate={liquidate} position={position} />
        </div>
        <div className="block xl:hidden">
          <MobilePositionTable liquidate={liquidate} position={position}  />
        </div>
      </div>
   </Card>
  )
}


