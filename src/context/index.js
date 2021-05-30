import { createContext, useState, useEffect, useMemo } from 'react';

// 
const AppContext = createContext(); 

const AppProvider = (props) => {
  const [wallet, setWallet] = useState(null)

  const value = useMemo(
    () => {
      return {
        wallet
      }
    },[wallet])

  const handleSetWallet = async () => {
    setWallet('0xTEST')
  }

  useEffect(() => {
    handleSetWallet()
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
