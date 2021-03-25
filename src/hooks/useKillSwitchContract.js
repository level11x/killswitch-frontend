import { useMemo } from "react";
import { KILL_SWITCH_ABI, KILL_SWITCH_CONTRACT_ADDRESS } from "../config/contract";
import useWeb3 from "./useWeb3";

export const useKillSwitchContract = () => {
  const [value] = useWeb3();
  const web3 = value.web3;
  const contract = useMemo(() => {
    console.log('! kill')
    if (!web3) return null;
    try {
      console.log('kill')
      const c = new web3.eth.Contract(KILL_SWITCH_ABI, KILL_SWITCH_CONTRACT_ADDRESS);
      console.log('la kill')
      return c;
    } catch (err) {
      console.log('kill ',err)
      console.warn(err);
      return null;
    }
  }, [web3]);
  return contract;
};
