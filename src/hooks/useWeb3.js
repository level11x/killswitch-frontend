import React, { useEffect, useCallback } from "react";
import Web3 from "web3";
const Web3Context = React.createContext(undefined);

Web3Provider.actions = {
  setWeb3: "SET_WEB_3",
};

const reducer = (state, action) => {
  switch (action.type) {
    case Web3Provider.actions.setWeb3:
      return {
        ...state,
        ...action.payload,
      };
    default:
      throw new Error(`No case for type ${action.type} found.`);
  }
};

export function Web3Provider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    web3: null,
  });
  const _window = window
  const initWeb3 = useCallback(async () => {
    if (_window.ethereum) {
      const tmpWeb3 = new Web3(_window.ethereum);
      console.log("setting web3");
      try {
        const result = await _window.ethereum.enable();
        console.log("connect to web3", result);
        dispatch({
          type: Web3Provider.actions.setWeb3,
          payload: {
            web3: tmpWeb3,
          },
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    initWeb3();
  }, [initWeb3]);

  return <Web3Context.Provider value={state}>{children}</Web3Context.Provider>;
}

export default function useWeb3() {
  const context = React.useContext(Web3Context);
  if (context === undefined) {
    throw new Error("web3 context must be used within an web3 provider");
  }

  return [context];
}
