import { useCallback, useEffect, useState } from "react";
import { useAuctionContract } from "./useAuctionContract";

export const useBidData = () => {
  const auctionContract = useAuctionContract();
  const [bidData, setBidData] = useState();
  const fetch = useCallback(async () => {
    if (!auctionContract) return;
    const result = await auctionContract.methods.bidAmounts().call();
    console.log('result ', result)
    setBidData(result)
  }, [auctionContract]);
  useEffect(() => {
    fetch();
  }, [fetch]);
  return bidData;
};
