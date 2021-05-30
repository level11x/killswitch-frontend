import { useRef, useEffect, useState, Fragment } from "react";
//
function WalletContext() {
  const [wallet, setWallet] = useState()

  const handleSetWallet = async () => {
    setWallet('0xTEST')
  }

  useEffect(() => {
    handleSetWallet()
    return () => {}
  }, [])

  return [wallet]
}

export default WalletContext;