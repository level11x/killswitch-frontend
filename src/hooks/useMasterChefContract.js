import { useMemo } from "react";
import { MASTERCHEF_ABI, MASTERCHEF_CONTRACT_ADDRESS } from "../config/contract";
import useWeb3 from "./useWeb3";

export const useMasterChefContract = () => {
  const [value] = useWeb3();
  const web3 = value.web3;
  const contract = useMemo(() => {
    if (!web3) return null;
    try {
      const c = new web3.eth.Contract(MASTERCHEF_ABI, MASTERCHEF_CONTRACT_ADDRESS);
      return c;
    } catch (err) {
      console.warn(err);
      return null;
    }
  }, [web3]);
  return contract;
};
