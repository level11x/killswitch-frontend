import { useMemo } from "react";
import { useAccounts } from './useAccount'
import { useBUSDContract } from "./useBUSDContract";
import { AUCTION_ADDRESS } from "../config/contract";

export const useAllowanceContract = () => {
  const { myAccount } = useAccounts();
  const busdContract = useBUSDContract();
  const allowance = useMemo(async () => {
    if (!busdContract) return null;
    try {
      
      let allow = await busdContract.methods.allowance(myAccount, AUCTION_ADDRESS).call();
      console.log('useAllowanceContract', allow)
      return allow;
    } catch (err) {
      console.warn(err);
      return null;
    }
  }, [busdContract]);
  return allowance;
};
