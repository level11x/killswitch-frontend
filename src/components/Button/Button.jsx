import React from 'react'

export const Button = ({ children, type }) => {
  const buttonTypeClass = type === 'primary' ? 'bg-primary text-white' : ''
  return (
    <div className={`flex text-center items-center text-sm p-4 border-primary border rounded-lg ${buttonTypeClass}`}>
      {children}
    </div>
  )
}
