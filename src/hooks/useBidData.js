import { useEffect, useState, useRef } from "react";
import { useAuctionContract } from "./useAuctionContract";
import useWeb3 from "./useWeb3";

export const useBidData = () => {
  const [value] = useWeb3();
  const web3 = value.web3;

  const [auctionContract] = useAuctionContract();
  const [bidData, _setBidData] = useState();
  const [expireTime, setExpireTime] = useState({})
  const [events, setEvents] = useState([]);

  let bidDataRef = useRef(bidData);
  const setBidData = data => {
    bidDataRef = data;
    _setBidData(data);
  };

  async function updateEvents(tokenID) {
    setEvents([])

    const currentBlock = await web3.eth.getBlockNumber()
    console.log('currentBlock', currentBlock)

    var block = 7972867
    const ee = []
    while (block < currentBlock) {
      getPastEvent(tokenID, block, block+4999).then((pastEvents) => {
        for (var i = 0; i < pastEvents.length; i++) {
            const data = pastEvents[i].returnValues
            ee.unshift({
                id: pastEvents[i].id,
                address: data.currentBidder,
                price: data.currentAmount,
            });
        }
        setEvents(ee)
      })
      block += 5000
    }
  }

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

    events.unshift({
      address: data.currentBidder,
      price: data.currentAmount,
    })
    console.log(events)
    setEvents(events)
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
    const result = await auctionContract.methods.bidAmounts().call();
    setBidData(result)
  }

  const handleGetExpireTime = async () => {
    const result = await auctionContract.methods.expireTime().call();
    setExpireTime(result)
  }

  const getPastEvent = async (tokenID, start, end) => {
    const events = await auctionContract.getPastEvents('OutBid', { filter: { tokenID: tokenID }, fromBlock: start, toBlock: end })
    console.log('from', start, 'to', end, 'events', events.length)
    return events
  }

  useEffect(() => {
    if (!auctionContract) return
    handleListenerOutBid()
    handleGetBidAmounts()
    handleGetExpireTime()
  }, [auctionContract])

  return { bidData, expireTime, updateEvents, events };
};
