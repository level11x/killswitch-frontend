import React from 'react'
import { formatUSDCurrency } from '../../utils/formatCurrency'
import { Card } from '../Card/Card'
import styles from './TVL.module.css'

export const TVL = ({ tvl }) => {
  return (
    <div className={styles.tvlBox}>
      <Card>
        <div className="flex items-center">
`        <span className='text-sm'>
        Total Value Locked : 
        </span>
        <span className="text-secondary text-xl ml-4">
          {formatUSDCurrency(tvl)}
        </span>`
        </div>
      </Card>
    </div>
  )
}
