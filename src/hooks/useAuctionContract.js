import { useMemo, useState } from "react";
import { AUCTION_ABI, AUCTION_ADDRESS } from "../config/contract";
import useWeb3 from "./useWeb3";

export const useAuctionContract = () => {
  const [value] = useWeb3();
  const [isAuctionContractConnect, setIsAuctionContractConnect] = useState(false)
  const web3 = value.web3;
  // let _contract = null;
  const auctionContract = useMemo(() => {
    if (!web3) return null;
    // if (_contract) return _contract;

    try {
      console.log('init auction contract!')
      const auctionContractResult = new web3.eth.Contract(AUCTION_ABI, AUCTION_ADDRESS);
      if (auctionContractResult) {
        setIsAuctionContractConnect(true)
      }
      return auctionContractResult
    } catch (err) {
      console.warn(err);
      return null;
    }
  }, [web3]);
  return [auctionContract, isAuctionContractConnect];
};
