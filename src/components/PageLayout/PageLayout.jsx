import React from 'react'
import styles from './PageLayout.module.css'


const MenuToggle = ({ active,children, onClick }) => {
  const toggle = () => {
    onClick()
  }
  return (
    <div onClick={toggle} className={`mt-8 cursor-pointer font-semibold ${active ? 'text-secondary' : 'text-primary'}`}>
      {children}
    </div>
  )
}

const Featured = () => {
  return (
    <div className='mb-24 p-4 text-sm'>
    Featured With
    <div className='flex items-center'>
      <img className={styles.scbLogo} src="img/logo/scb10x.png" />
      <img className={styles.shuttleOneLogo} src="img/logo/shuttleone.png" />
    </div>
  </div>
  )
}

const Logo = () => {
  return (
    <div className="font-semibold cursor-pointer">
      KillSwitch
    </div>
  )
}

export const PageLayout = ({ children }) => {
  const toggleMenu =() => {
    
  } 
  return (
    <div className='min-h-screen bg-gray flex'>
      <div className='w-60 min-h-screen flex flex-col justify-between bg-white rounded-r-2xl shadow-md'>
        <div className='p-4'>
          <Logo />
          <div className='mt-3'>
            <MenuToggle onClick={toggleMenu}>
              Lend
            </MenuToggle>
            <MenuToggle onClick={toggleMenu} active>
              Farm
            </MenuToggle>
            <MenuToggle onClick={toggleMenu}>
              ZHP
            </MenuToggle>
            <MenuToggle onClick={toggleMenu}>
              Governance
            </MenuToggle>
          </div>
        </div>
        <Featured />
      </div>
      <div className='pt-9 pl-4 pr-10 w-screen'>
        {children}
      </div>
    </div>
  )
}
