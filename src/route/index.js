import React from "react";
import {  BrowserRouter, Route } from "react-router-dom";

import Home from  '../component/home'
import Content from  '../component/content'

  const Router = () => {
  
  return (
    <BrowserRouter>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/home'} component={Content} />
    </BrowserRouter>
  )

}

export  default Router