import React from 'react'


export const TimeBox = ({ unit, time }) => {
  return (
    <div className='rounded-3xl xl:pl-6 xl:pr-6 p-3 pr-3 bg-white mr-6 '>
      <div className=' text-gray pt-2 font-semibold text-xl text-center'>
        {unit}
      </div>
      <div className='xl:text-7xl text-3xl text-center font-semibold pt-1 pb-4'>
      {time}
      </div>
    </div>
  )
}
