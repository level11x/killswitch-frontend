import React from 'react'
import { formatUSDCurrency } from '../../utils/formatCurrency'
import { Card } from '../Card/Card'
import styles from './TVL.module.css'

export const TVL = ({ tvl }) => {
  return (
    <div className='w-full xl:w-96'>
      <Card>
        <div className="flex items-center justify-between">
        <span className='text-sm'>
        Total Value Locked : 
        </span>
        <span className="text-secondary text-xl ml-4">
          {formatUSDCurrency(tvl)}
        </span>
        </div>
      </Card>
    </div>
  )
}
