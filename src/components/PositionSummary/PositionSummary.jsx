import React from 'react'
import { Button } from '../Button/Button'
import { Card } from '../Card/Card'
import { PositionTable } from '../PositionTable/PositionTable'

export const PositionSummary = ({ children, checked, onClick, group }) => {
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
        <PositionTable />
      </div>
   </Card>
  )
}


