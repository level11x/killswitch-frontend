

import { Web3Provider } from "./hooks/useWeb3";
import React from "react";
import { Index } from './pages/Index'
import './App.css';

function App() {

  return (
      <Web3Provider>
        <Index />
      </Web3Provider>
  );
}

export default App;
