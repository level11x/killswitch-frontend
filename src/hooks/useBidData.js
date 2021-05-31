import { useEffect, useState, useRef } from "react";
import { useAuctionContract } from "./useAuctionContract";

export const useBidData = () => {
  const [auctionContract] = useAuctionContract();
  const [bidData, _setBidData] = useState();

  let bidDataRef = useRef(bidData);
  const setBidData = data => {
    bidDataRef = data;
    _setBidData(data);
  };

  function updateData(event) {
    console.log('OutBid', event)
    const data = event.returnValues
    let newBidData = { ...bidDataRef }
    let addresses = [...newBidData[1]]
    let amounts = [...newBidData[2]]
    let times = [...newBidData[3]]
    addresses[data.tokenID] = data.currentBidder
    amounts[data.tokenID] = data.currentAmount
    times[data.tokenID] = data.bidTime
    setBidData([newBidData[0], addresses, amounts, times])
  }
  const handleListenerOutBid = async () => {
    console.log('attach event OutBid')
    await auctionContract.events.OutBid((error, event) => {
      if (!error) {
        updateData(event)
      } else {
        console.log(error)
      }
    })
  }

  const handleGetBidAmounts = async () => {
    console.log('handleGetBidAmounts')
    const result = await auctionContract.methods.bidAmounts().call();
    setBidData(result)
  }

  useEffect(() => {
    if (!auctionContract) return
    handleListenerOutBid()
  }, [auctionContract])

  useEffect(() => {
    if (!auctionContract) return
    handleGetBidAmounts()
  }, [auctionContract])

  return bidData;
};
