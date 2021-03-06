import React from 'react'
import { Logo } from '../logo/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../button/button'
import useCountdownCloseAuction from '../../hooks/useCountdownCloseAuction'

const MenuBlock = ({ children}) => {
  return (
    <div className="pt-6 pb-6 pl-8 pr-8 text-xl font-semibold">
      {children}
    </div>
  )
}

export const PageLayout = ({ children }) => {
  const { isCloseAuction } = useCountdownCloseAuction()
  console.log('isCloseAuction', isCloseAuction)
  return (
    <div className='min-h-screen bg-gray flex flex-col '>
      <div className='hidden xl:flex w-100 justify-between bg-white shadow-md'>
        <div className="flex items-center pl-4">
          <Logo />
        </div>
        <div className="flex items-center text-xl">
          <MenuBlock>
            Home
          </MenuBlock>
          <MenuBlock>
            {isCloseAuction ? 'My Collection' : 'Live Auction'}
          </MenuBlock>
          <MenuBlock>
            Top Auction
          </MenuBlock>
          <div className="pl-4 pr-4">
            <Button type='primary'>
              <span className="font-semibold text-xl">
                Launch App
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between w-100 xl:hidden shadow-md p-4 bg-white'>
        <span className="text-xl">
          <FontAwesomeIcon icon={faBars} />
        </span>
        <div className="flex items-center text-xl">
          <Button type='primary'>
            <span className="font-semibold text-xl">
              Launch App
            </span>
          </Button>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
