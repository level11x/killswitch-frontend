
import React from 'react'
import { Card } from '../Card/Card'
import { Checkbox } from '../Checkbox/Checkbox'

const RouterItem = ({router, active}) => {
  const activeClass = active ? 'border-b-2 border-primary' : ''
  return (
    <div className={`w-40 font-semibold flex items-center  ${activeClass}`}>
      <img className='w-6 h-6 m-4' src={`/img/${router}.png`} />
      {router}
    </div>
  )
}

const RouterCheckbox = (props) => {
  const { children, ...checkboxProps } = props
  return (
    <div className="w-1/5 mr-4">
      <Checkbox {...checkboxProps}>
        {children}
      </Checkbox>
    </div>
  )

}

const RouterLogo = ({src}) => {
  return (
    <img className='w-6 h-6 mr-2' src={src} />
  )
}

export const RouterPicker = ({ onRouterChange }) => {
  return (
    <div className='w-full'>
      <Card>
        <div className="flex h-14 border border-t-0 border-l-0 border-r-0 border-gray">
          <RouterItem router="BSC" active />
          <RouterItem router="Ethereum" />
          <RouterItem router="Terra" />
        </div>
        <div className="flex items-center h-14 p-4 pb-0">
          <div className="cursor-pointer font-semibold text-base mr-14">
            Check All
          </div>
          <RouterCheckbox>
            <RouterLogo src="/img/logo/pancake.png" />
            Pancakeswap
          </RouterCheckbox>
          <RouterCheckbox>
          <RouterLogo src="/img/logo/alpaca.png" />
            Alpaca Fin.
          </RouterCheckbox>
          <RouterCheckbox>
          <RouterLogo src="/img/logo/ape.png" />
            Apeswap
          </RouterCheckbox>
          <RouterCheckbox>
            <RouterLogo src="/img/logo/warden.png" />
            Warden
          </RouterCheckbox>
        </div>
      </Card>
    </div>
  )
}
