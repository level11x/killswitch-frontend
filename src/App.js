

import { Web3Provider } from "./hooks/useWeb3";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Index } from './pages/Index'
import { ZHP } from './pages/ZHP'
import { Governance } from './pages/Governance'
import './App.css';

function App() {

  return (
    <Web3Provider>
      <Router>
        <Switch>
          <Route path="/zhp">
            <ZHP />
          </Route>
          <Route path="/governance">
            <Governance />
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
