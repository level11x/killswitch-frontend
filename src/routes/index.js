
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route } from "react-router";
import {CountdownPage,LiveAuctionPage,InfoPage, HomePage, TopAuction} from '../page'
import { AppProvider } from '../context'
import { Web3Provider } from "../hooks/useWeb3";
import { START_AUCTION_DATE_STRING } from '../config/common'

const Router = () => {

  const [isOpenProject, setIsOpenProject] = useState(new Date() >= new Date(START_AUCTION_DATE_STRING))
  
  useEffect(() => {
    if (!isOpenProject) {
      const diffTime = new Date(START_AUCTION_DATE_STRING) - new Date()
      console.log('diffTime', diffTime)
      const timeout = setTimeout(() => {
        setIsOpenProject(true)
      }, diffTime)
      return () => clearTimeout(timeout)
    }
  }, [isOpenProject])

  return (
    <AppProvider>
      <Web3Provider>
        <BrowserRouter> 
          <Route exact path={'/'} component={isOpenProject ? HomePage : CountdownPage} />  
          <Route exact path={'/live-auction'} component={LiveAuctionPage} />  
          <Route exact path={'/home'} component={HomePage} />  
          <Route exact path={'/info'} component={InfoPage} />  
          <Route exact path={'/top-auction'} component={TopAuction} />  
        </BrowserRouter>
      </Web3Provider>
    </AppProvider>
  )

}

export  default Router