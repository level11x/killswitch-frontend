import React, { createContext, useState, useEffect, useMemo } from 'react'
//
const AppContext = createContext()

const AppProvider = (props) => {
  const [wallet, setWallet] = useState(null)

  const connectWallet = async () => {
    let accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })

    setWallet(accounts[0])
  }
  
  const value = useMemo(() => {
    return {
      wallet,
      connectWallet,
    }
  }, [wallet])

  const handleETHListener = async () => {
    if (window && window.ethereum) {
      let chainId = await window.ethereum.request({ method: 'eth_chainId' })
      if (chainId === '0x38') {
        if (window.ethereum.isTrust) {
          let accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
          })

          if (accounts.length > 0) {
            setWallet(accounts[0])
          }
          window.ethereum.on('accountsChanged', (accounts) => {
            // console.log('Navigation accountsChanged', accounts)
            if (accounts.length > 0) {
              setWallet(accounts[0])
            } else {
              setWallet('')
            }
          })
        } else if (window.ethereum.isMetaMask) {
          window.ethereum.on('accountsChanged', (accounts) => {
            // console.log('Navigation accountsChanged', accounts)
            if (accounts.length > 0) {
              setWallet(accounts[0])
            } else {
              setWallet('')
            }
          })

          window.ethereum.on('connect', () => {
            let account = window.ethereum.selectedAddress
            setWallet(account)
          })

          if (window.ethereum.isConnected()) {
            let account = window.ethereum.selectedAddress
            // console.log('account', account)
            setWallet(account)
          }
        } else {
          // OTHER WALLET
          let accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
          })

          if (accounts.length > 0) {
            setWallet(accounts[0])
          }
          
          window.ethereum.on('accountsChanged', (accounts) => {
            // console.log('Navigation accountsChanged', accounts)
            if (accounts.length > 0) {
              setWallet(accounts[0])
            } else {
              setWallet('')
            }
          })
        }
      }
    }
  }

  useEffect(() => {
    handleETHListener()
    return () => {}
  }, [])

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}

export { AppContext, AppProvider }
