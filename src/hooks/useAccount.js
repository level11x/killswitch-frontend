import { useState, useEffect, useCallback } from "react";
import useWeb3 from "./useWeb3";

export const useAccounts = () => {
  const [value] = useWeb3();
  const web3 = value.web3;
  const [accounts, setAccounts] = useState([]);
  const [myAccount, setMyAccount] = useState();
  const [balance, setBalance] = useState();

  const fetch = useCallback(async () => {
    if (!web3) return;
    const accs = await web3.eth.getAccounts();
    setAccounts([...accs]);
    const acc = accs[0];
    if (acc) {
      setMyAccount(acc);
      const result = await web3.eth.getBalance(acc);
      setBalance(web3.utils.fromWei(result));
    }
  }, [web3]);
  useEffect(() => {
    fetch();
  }, [fetch]);
  return { accounts, myAccount, balance };
};
