import { useCallback, useEffect, useState, useMemo } from "react";
import { useAuctionContract } from "./useAuctionContract";

export const useBidData = () => {
  const [auctionContract, isAuctionContractConnect] = useAuctionContract();
  const [bidData, setBidData] = useState();
  const [isGetBidAmount, setIsGetBidAmount] = useState(false);

  const handleListenOutBid = async () => {
    if (isAuctionContractConnect) {
      await auctionContract.events.OutBid((error, event) => {
        console.log('outbid recieved', event)
      })
    }
  }
  
  const hanelGetBidAmounts = async () => {
    if (isAuctionContractConnect) {
      const result = await auctionContract.methods.bidAmounts().call();
      setIsGetBidAmount(true)
      setBidData(result)
    }
  }

  useEffect(() => {
      handleListenOutBid()
  }, [])

  useEffect(() => {
    if (!isGetBidAmount) {
      hanelGetBidAmounts()
    }
  })

  return bidData;
};
