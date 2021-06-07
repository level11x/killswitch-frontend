import React, { createContext, useState, useEffect, useMemo } from 'react'
//
const AppContext = createContext()

const AppProvider = (props) => {
  const [wallet, setWallet] = useState(null)

  const value = useMemo(() => {
    async function connectWallet() {
      let accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      setWallet(accounts[0])
    }
    return {
      wallet,
      connectWallet,
    }
  }, [wallet])

  const handleETHListener = async () => {
    if (window && window.ethereum && window.ethereum.isTrust) {
      let chainId = await window.ethereum.request({ method: 'eth_chainId' })

      if (chainId === '0x38') {
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
    } else if (window.ethereum) {
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
