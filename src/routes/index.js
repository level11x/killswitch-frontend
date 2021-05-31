
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route } from "react-router";
import {CountdownPage,LiveAuctionPage,HomePage, TopAuction} from '../page'
import { AppProvider } from '../context'
import { Web3Provider } from "../hooks/useWeb3";

const Router = () => {
  
  return (
    <AppProvider>
      <Web3Provider>
        <BrowserRouter> 
          <Route exact path={'/'} component={CountdownPage} />  
          <Route exact path={'/live-auction'} component={LiveAuctionPage} />  
          <Route exact path={'/Home'} component={HomePage} />  
          <Route exact path={'/top-auction'} component={TopAuction} />  
        </BrowserRouter>
      </Web3Provider>
    </AppProvider>
  )

}

export  default Router