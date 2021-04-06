import React from 'react'
import styles from './Checkbox.module.css'

export const Checkbox = ({ children, checked, onClick, group, disabled }) => {
  return (
    <label className={styles.checkboxContainer}>
      <span className="text-base flex items-center">
      {children}
      </span>
      <input type='checkbox' checked={checked} onClick={onClick} disabled={disabled}  />
      <span className={styles.checkmark} />
    </label>
  )
}
