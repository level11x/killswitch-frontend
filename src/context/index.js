import { createContext, useState, useEffect, useMemo } from 'react';

// 
const AppContext = createContext(); 

const AppProvider = (props) => {
  const [wallet, setWallet] = useState(null)

  const value = useMemo(
    () => {
      return {
        wallet, connectWallet
      }
    },[wallet, connectWallet])

  async function connectWallet() {
    let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    setWallet(accounts[0])
  }

  const handleETHListener = async () => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
          console.log('Navigation accountsChanged', accounts)
          if (accounts.length > 0) {
              setWallet(accounts[0])
          } else {
              setWallet('')
          }
      })

      window.ethereum.on('connect', (chainId) => {
        console.log('chainId', chainId)
        let account = window.ethereum.selectedAddress
        console.log('account', account)
        setWallet(account)
      })

      console.log('isConnected()', window.ethereum.isConnected(), window.ethereum.selectedAddress)
      if (window.ethereum.isConnected()) {
        
        let account = window.ethereum.selectedAddress
        setWallet(account)
      }
    }
  }

  useEffect(() => {
    handleETHListener()
    return () => {}
  }, [])

  return (
    <AppContext.Provider
        value={value}
    >
      {props.children}
    </AppContext.Provider>
  );
}
export { AppContext, AppProvider };
