import React from 'react'

export const Button = ({ children, type, onClick }) => {
  const buttonTypeClass = type === 'primary' ? 'bg-primary text-white' : ''
  return (
    <div onClick={onClick} className={`flex justify-center text-center items-center text-sm p-4 border-primary border rounded-lg ${buttonTypeClass}`}>
      {children}
    </div>
  )
}
