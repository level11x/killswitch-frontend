import React from 'react'
import { Button } from '../Button/Button'
import { Card } from '../Card/Card'
import { PoolTable } from '../PoolTable/PoolTable'

export const PoolSummary = ({ children, checked, onClick, group }) => {
  return (
    <Card>
      <span className='font-semibold text-xl'>
      Active Pool
      </span>
      <div className='mt-4'>
        <PoolTable />
      </div>
   </Card>
  )
}


