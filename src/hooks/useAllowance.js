import { useState, useCallback, useEffect, useContext } from "react";
import { useBUSDContract } from "./useBUSDContract";
import { AUCTION_ADDRESS } from "../config/contract";

import { AppContext } from "../context";

export const useAllowance = () => {
  const busdContract = useBUSDContract();
  const [allowance, setAllowance] = useState();
  const { wallet } = useContext(AppContext);

  const fetch = useCallback(async () => {
    if (!busdContract || !wallet) return null;
    try {
      let value = await busdContract.methods.allowance(wallet, AUCTION_ADDRESS).call();
      console.log('featch allowance', value)
      setAllowance(value)
    } catch (err) {
      console.warn(err);
      return null;
    }
  }, [busdContract, wallet]);
  useEffect(() => {
    fetch();
  }, [fetch]);
  return { allowance, refreshAllowance: fetch };
};
