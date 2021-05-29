import { useMemo } from "react";
import { useAuctionContract } from "./useAuctionContract";

export const useBidData = () => {
  const auctionContract = useAuctionContract();
  const data = useMemo(async () => {
    if (!auctionContract) return null;
    try {
      console.log('get bidAmounts', auctionContract)
      
      let result = await auctionContract.methods.bidAmounts().call();
      console.log('useBidData', result)
      return result;
    } catch (err) {
      console.warn(err);
      return null;
    }
  }, [auctionContract]);
  return data;
};
