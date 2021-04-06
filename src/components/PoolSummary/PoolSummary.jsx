import React from 'react'
import { Card } from '../Card/Card'
import { MobilePoolTable } from '../PoolTable/MobilePoolTable'
import { PoolTable } from '../PoolTable/PoolTable'

export const PoolSummary = ({ lp, approve, stake, isApprove }) => {
  return (
    <Card>
      <span className='font-semibold text-xl'>
      Active Pool
      </span>
      <div className='mt-4'>
        <div className='hidden xl:block'>
          <PoolTable lp={lp} approve={approve} isApprove={isApprove} stake={stake}  />
        </div>
        <div className='block xl:hidden'>
          <MobilePoolTable />
        </div>
      </div>
   </Card>
  )
}


