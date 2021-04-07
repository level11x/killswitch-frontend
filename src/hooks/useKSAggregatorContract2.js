import { useMemo } from "react";
import { KS_AGGREGATOR_ABI, KS_AGGREGATOR_POOL2 } from "../config/contract";
import useWeb3 from "./useWeb3";

export const useKSAggregatorContract2 = () => {
  const [value] = useWeb3();
  const web3 = value.web3;
  const contract = useMemo(() => {
    if (!web3) return null;
    try {
      const c = new web3.eth.Contract(KS_AGGREGATOR_ABI, KS_AGGREGATOR_POOL2);
      return c;
    } catch (err) {
      console.warn(err);
      return null;
    }
  }, [web3]);
  return contract;
};
