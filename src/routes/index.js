
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route } from "react-router";
import {CountdownPage,LiveAuctionPage,HomePage} from '../page'


const Router = () => {
  
  return (
    <BrowserRouter> 
      <Route exact path={'/'} component={CountdownPage} />  
      <Route exact path={'/live-auction'} component={LiveAuctionPage} />  
      <Route exact path={'/Home'} component={HomePage} />  
    </BrowserRouter>
  )

}

export  default Router