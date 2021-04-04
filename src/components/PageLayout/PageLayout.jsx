import React from 'react'
import { Logo } from '../Logo/Logo'
import styles from './PageLayout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLandmark, faHandshake, faHome, faGlassMartini, faCog, faBars } from '@fortawesome/free-solid-svg-icons'


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

export const PageLayout = ({ children }) => {
  const toggleMenu =() => {
    
  } 
  return (
    <div className='min-h-screen bg-gray flex flex-col xl:flex-row'>
      <div className='hidden xl:block w-60 min-h-screen flex flex-col justify-between bg-white rounded-r-2xl shadow-md'>
        <div className='p-4'>
        <i class="fas fa-bars"></i>
          <Logo />
          <div className='mt-3'>
            <MenuToggle onClick={toggleMenu}>
              <span className='mr-2'>
                <FontAwesomeIcon icon={faHandshake} />
              </span>
              Lend
            </MenuToggle>
            <MenuToggle onClick={toggleMenu} active>
            <span className='mr-2'>
              <FontAwesomeIcon icon={faHome} />
            </span>
              Farm
            </MenuToggle>
            <MenuToggle onClick={toggleMenu}>
              <span className='mr-2'>
                <FontAwesomeIcon icon={faGlassMartini} />
              </span>
              ZHP
            </MenuToggle>
            <MenuToggle onClick={toggleMenu}>
            <span className='mr-2'>
              <FontAwesomeIcon icon={faLandmark} />
            </span>
              Governance
            </MenuToggle>
          </div>
        </div>
        <Featured />
      </div>
      <div className='flex items-center justify-between w-100 xl:hidden rounded-r-2xl shadow-md p-4 bg-white'>
        <Logo />
        <div className="flex items-center text-xl">
          <span className='mr-4'>
            <FontAwesomeIcon icon={faCog} />
          </span>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className='pt-9 pl-4 pr-4 xl:pr-10 w-full xl:w-screen'>
        {children}
      </div>
    </div>
  )
}
