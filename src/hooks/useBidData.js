import { useCallback, useEffect, useState, useMemo } from "react";
import { useAuctionContract } from "./useAuctionContract";

export const useBidData = () => {
  const auctionContract = useAuctionContract();
  const [bidData, setBidData] = useState();

  useMemo(() => {
    if (!auctionContract) return;

    console.log('init event')
    auctionContract.events.OutBid((error, event) => {
      console.log('outbid recieved', event)
    })
  }, [auctionContract])

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
