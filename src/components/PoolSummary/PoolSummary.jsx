import React from 'react'
import { Card } from '../Card/Card'
import { PoolTable } from '../PoolTable/PoolTable'

export const PoolSummary = ({ lp }) => {
  return (
    <Card>
      <span className='font-semibold text-xl'>
      Active Pool
      </span>
      <div className='mt-4'>
        <PoolTable lp={lp} />
      </div>
   </Card>
  )
}


