import { useMemo, useState } from "react";
import { SHIRT_ABI, SHIRT_ADDRESS } from "../config/contract";
import useWeb3 from "./useWeb3";

export const useShirtContract = () => {
  const [value] = useWeb3();
  const [shirtContractResult, setShirtContractResult] = useState(null)
  const web3 = value.web3;
  const shirtContract = useMemo(() => {
    if (!web3) return null;
    if (shirtContractResult) return shirtContractResult;

    try {
      const contract = new web3.eth.Contract(SHIRT_ABI, SHIRT_ADDRESS);
      setShirtContractResult(contract)
      return contract
    } catch (err) {
      console.warn(err);
      return null;
    }
  }, [web3]);
  return [shirtContract];
};
