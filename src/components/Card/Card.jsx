import React from 'react'


export const Card = ({ children }) => {
  return (
    <div className='w-full p-4 shadow-md rounded-2xl bg-white'>
      {children}
    </div>
  )
}
