import { useState, useCallback, useEffect } from "react";
import { useAccounts } from './useAccounts'
import { useBUSDContract } from "./useBUSDContract";
import { AUCTION_ADDRESS } from "../config/contract";

export const useAllowance = () => {
  const { myAccount } = useAccounts();
  const busdContract = useBUSDContract();
  const [allowance, setAllowance] = useState();
  const fetch = useCallback(async () => {
    if (!busdContract || !myAccount) return null;
    try {
      let allow = await busdContract.methods.allowance(myAccount, AUCTION_ADDRESS).call();
      setAllowance(allow)
    } catch (err) {
      console.warn(err);
      return null;
    }
  }, [busdContract, myAccount]);
  useEffect(() => {
    fetch();
  }, [fetch]);
  return allowance;
};
