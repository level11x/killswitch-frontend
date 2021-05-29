import { useMemo } from "react";
import { AUCTION_ABI, AUCTION_ADDRESS } from "../config/contract";
import useWeb3 from "./useWeb3";

export const useAuctionContract = () => {
  const [value] = useWeb3();
  const web3 = value.web3;
  const contract = useMemo(() => {
    if (!web3) return null;
    try {
      const c = new web3.eth.Contract(AUCTION_ABI, AUCTION_ADDRESS);

      c.events.OutBid((error, event) => {
        console.log('outbid recieved', event)
      })

      return c;
    } catch (err) {
      console.warn(err);
      return null;
    }
  }, [web3]);

  return contract;
};
