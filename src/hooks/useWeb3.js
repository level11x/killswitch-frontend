import Web3 from 'web3'
import { useEffect, useCallback } from 'react'

export const useWeb3 = () => {

  let initWeb3 = useCallback(async () => {
    if (window.ethereum) {
      const tmpWeb3 = new Web3(window.ethereum)
      try {
        const result = await window.ethereum.enable()
        console.log('result', result)
        const web3Context = React.createContext({ web3: null });
      } catch (err) {
        console.log(err)
        return null
      }
    }
  }, [])

  useEffect(() => {
    initWeb3()
  }, [initWeb3])

  return initWeb3
}