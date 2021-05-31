import { useMemo, useState } from "react";
import { AUCTION_ABI, AUCTION_ADDRESS } from "../config/contract";
import useWeb3 from "./useWeb3";

export const useAuctionContract = () => {
  const [value] = useWeb3();
  const [auctionContractResult, setAuctionContractResult] = useState(null)
  const web3 = value.web3;
  const auctionContract = useMemo(() => {
    if (!web3) return null;
    if (auctionContractResult) return auctionContractResult;

    try {
      console.log('init auction contract!')
      const contract = new web3.eth.Contract(AUCTION_ABI, AUCTION_ADDRESS);
      setAuctionContractResult(contract)
      return contract
    } catch (err) {
      console.warn(err);
      return null;
    }
  }, [web3]);
  return [auctionContract];
};
