import React from "react";
//
import walletContext from "./walletContext";
//
const AppContext = React.createContext();

const AppProvider = (props) => {
  //
  const [wallet] = walletContext();
  //
  return (
    <AppContext.Provider
      value={{
        wallet
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
