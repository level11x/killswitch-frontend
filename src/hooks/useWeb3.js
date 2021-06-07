import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import Web3 from 'web3'
//
const Web3Context = React.createContext(undefined)

Web3Provider.actions = {
  setWeb3: 'SET_WEB_3',
}

const reducer = (state, action) => {
  switch (action.type) {
    case Web3Provider.actions.setWeb3:
      return {
        ...state,
        ...action.payload,
      }
    default:
      throw new Error(`No case for type ${action.type} found.`)
  }
}

export function Web3Provider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    web3: null,
  })

  const initWeb3 = useCallback(async () => {
    const _window = window
    if (_window && _window.ethereum) {
      const chainId = await _window.ethereum.request({ method: 'eth_chainId' })
      if (chainId === '0x38') {
        // BSC MAINNET
        if (_window.ethereum.isTrust) {
          // CONNECT TRUSTWALLET
          const tmpWeb3 = new Web3(_window.ethereum)

          try {
            dispatch({
              type: Web3Provider.actions.setWeb3,
              payload: {
                web3: tmpWeb3,
              },
            })
          } catch (err) {
            console.log(err)
          }
        } else {
          // CONNECT METAMASK WALLET
          window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x38',
                chainName: 'Binance Smart Chain',
                nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
                rpcUrls: ['https://bsc-dataseed.binance.org/'],
                blockExplorerUrls: ['https://bscscan.com/'],
              },
            ],
          })

          const tmpWeb3 = new Web3(_window.ethereum)
          try {
            dispatch({
              type: Web3Provider.actions.setWeb3,
              payload: {
                web3: tmpWeb3,
              },
            })
          } catch (err) {
            console.log(err)
          }
        }
      } else {
        // ADD OTHER CHAIN
      }
    }
  }, [])

  useEffect(() => {
    initWeb3()
  }, [initWeb3])

  return <Web3Context.Provider value={state}>{children}</Web3Context.Provider>
}

Web3Provider.propTypes = {
  children: PropTypes.node,
}

export default function useWeb3() {
  const context = React.useContext(Web3Context)
  if (context === undefined) {
    throw new Error('web3 context must be used within an web3 provider')
  }

  return [context]
}
