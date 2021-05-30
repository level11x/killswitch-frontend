
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route } from "react-router";
import {CountdownPage,LiveAuctionPage,HomePage, TopAuction} from '../page'
import { AppProvider } from '../context'

const Router = () => {
  
  return (
    <AppProvider>
      <BrowserRouter> 
        <Route exact path={'/'} component={CountdownPage} />  
        <Route exact path={'/live-auction'} component={LiveAuctionPage} />  
        <Route exact path={'/Home'} component={HomePage} />  
        <Route exact path={'/top-auction'} component={TopAuction} />  
      </BrowserRouter>
    </AppProvider>
  )

}

export  default Router