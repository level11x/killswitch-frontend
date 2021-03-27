import { useMemo } from "react";
import { KILL_SWITCH_ABI, KILL_SWITCH_CONTRACT_ADDRESS } from "../config/contract";
import useWeb3 from "./useWeb3";

export const useKillSwitchContract = () => {
  const [value] = useWeb3();
  const web3 = value.web3;
  const contract = useMemo(() => {
    if (!web3) return null;
    try {
      const c = new web3.eth.Contract(KILL_SWITCH_ABI, KILL_SWITCH_CONTRACT_ADDRESS);
      return c;
    } catch (err) {
      console.warn(err);
      return null;
    }
  }, [web3]);
  return contract;
};
