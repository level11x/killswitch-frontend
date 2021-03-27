import React from 'react'
import { Card } from '../Card/Card'
import { PoolTable } from '../PoolTable/PoolTable'

export const PoolSummary = ({ lp, approve, stake, isApprove }) => {
  return (
    <Card>
      <span className='font-semibold text-xl'>
      Active Pool
      </span>
      <div className='mt-4'>
        <PoolTable lp={lp} approve={approve} isApprove={isApprove} stake={stake}  />
      </div>
   </Card>
  )
}


