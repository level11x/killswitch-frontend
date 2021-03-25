

import { Web3Provider } from "./hooks/useWeb3";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Index } from './pages/Index'
import { Liquidate } from './pages/Liquidate'
import { PositionSummary } from './pages/PositionSummary'
import './App.css';

function App() {

  return (
    <Web3Provider>
      <Router>
        <Switch>
          <Route path="/liquidate">
            <Liquidate />
          </Route>
          <Route path="/position-summary">
            <PositionSummary />
          </Route>
          <Route path="/" >
            <Index />
          </Route>
        </Switch>
      </Router>
    </Web3Provider>
  );
}

export default App;
