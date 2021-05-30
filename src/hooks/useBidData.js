import { useEffect, useState } from "react";
import { useAuctionContract } from "./useAuctionContract";

export const useBidData = () => {
  const [auctionContract, isAuctionContractConnect] = useAuctionContract();
  const [bidData, setBidData] = useState();
  const [isGetBidAmount, setIsGetBidAmount] = useState(false);

  const handleListenerOutBid = async () => {
    if (isAuctionContractConnect) {
      await auctionContract.events.OutBid((error, event) => {
        console.log('outbid recieved', event)
      })
    }
  }
  
  const handleGetBidAmounts = async () => {
    if (isAuctionContractConnect) {
      const result = await auctionContract.methods.bidAmounts().call();
      setIsGetBidAmount(true)
      setBidData(result)
    }
  }

  useEffect(() => {
      handleListenerOutBid()
  }, [])

  useEffect(() => {
    if (!isGetBidAmount) {
      handleGetBidAmounts()
    }
  })

  return bidData;
};
