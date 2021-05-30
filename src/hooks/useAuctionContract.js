import { useMemo } from "react";
import { AUCTION_ABI, AUCTION_ADDRESS } from "../config/contract";
import useWeb3 from "./useWeb3";

export const useAuctionContract = () => {
  const [value] = useWeb3();
  const web3 = value.web3;
  let _contract = null;
  const contract = useMemo(() => {
    if (!web3) return null;
    if (_contract) return _contract;    

    try {
      console.log('init auction contract!')
      return new web3.eth.Contract(AUCTION_ABI, AUCTION_ADDRESS);
    } catch (err) {
      console.warn(err);
      return null;
    }
  }, [web3]);
  return contract;
};
