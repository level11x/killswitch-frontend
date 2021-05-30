import { useRef, useEffect, useState, Fragment } from "react";
//
function walletContext() {
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

export default walletContext;