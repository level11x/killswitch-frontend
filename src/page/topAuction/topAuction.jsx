import { useState, useEffect  } from 'react'
import Navigation from '../../component/navigation'
import { TimeBox } from '../../component/timeBox/timeBox';
import { AuctionTable } from '../../component/auctionTable/auctionTable';
import ReactPaginate from 'react-paginate';
import { TopAuctionCard } from '../../component/topAuctionCard/topAuctionCard';
import { useBidData } from '../../hooks/useBidData'
import './topAuction.css'
import useCountdown from '../../hooks/useCountdown'

export const TopAuction = () => {
  const { bidData } = useBidData()
  const [auctions, setAuctions] = useState([])
  const [paginateAuctions, setPaginationAuctions] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [top1, setTop1] = useState({})
  const [top2, setTop2] = useState({})
  const [top3, setTop3] = useState({})
  const [top4, setTop4] = useState({})
  const pageSize = 25

  const timeLeft = useCountdown({ timestamp: 1623063600000 }) // Mon Jun 07 2021 18:00:00 GMT+0700 (Indochina Time)

  const onPageChange = ({ selected }) => {
    setCurrentPage(selected)
  }

  // const getPaginateAuctions = () => {
  //   const parsePage = currentPage + 1
  //   const startIndex = (parsePage - 1) * pageSize
  //   const endIndex = (parsePage) * pageSize
  //   return auctions.slice(startIndex, endIndex)
  // }

  useEffect(() => {
    if (!bidData || bidData.length < 4) return;
		const tokenIDs = bidData[0]
		const addresses = bidData[1]
		const amounts = bidData[2]
		const time = bidData[3]
		const value = []
		for (let i = 0; i < tokenIDs.length; i++) {
				value.push({
						id: tokenIDs[i],
						bidPrice: amounts[i],
						bidAddress: addresses[i],
						time: time[i],
				}) 
		}

    // let mockAuctions = []
    // for (let i = 0 ; i < 100 ; i++){
    //   mockAuctions.push({
    //     id: i+1,
    //     price: 10 + i,
    //     address: '0xDEAD'
    //   })
    // }
    value.sort(( a, b ) => {
      if ( a.bidPrice < b.bidPrice ){
        return 1;
      }
      if ( a.bidPrice > b.bidPrice ){
        return -1;
      }
      return 0;
    })
    console.log(value.slice(0, 10))
    setTop1(value[0])
    setTop2(value[1])
    setTop3(value[2])
    setTop4(value[3])
    setAuctions(value)
  }, [bidData])

  useEffect(() => {
    const parsePage = currentPage + 1
    const startIndex = (parsePage - 1) * pageSize
    const endIndex = (parsePage) * pageSize
    setPaginationAuctions(auctions.slice(startIndex, endIndex))
  }, [currentPage, auctions])
  
  return (
    <div className="top-auction">
       <div className="bg-primary min-h-screen flex justify-center w-screen">
        <Navigation />
        <div className="screen-container">
          <h1 className="text-center pt-20 text-white font-semibold xl:text-6xl text-4xl">
            Auction Ending in
          </h1>
          <div className="flex justify-center pt-10">
            <div className="flex">
              <div className="hidden xl:block">
                <TimeBox unit="Days" time={timeLeft.days || '00'} />
              </div>
              <TimeBox unit="Hours" time={timeLeft.hours || '00'} />
              <TimeBox unit="Minutes" time={timeLeft.minutes || '00'} />
              <TimeBox unit="Seconds" time={timeLeft.seconds || '00'} />
            </div>
          </div>
          <h1 className="text-center pt-16 text-white font-semibold text-6xl">
            Top Auction
          </h1>
          <div className="flex justify-center  w-full mt-10">
            <div className='auction-width'>
              <TopAuctionCard number={1} auction={top1} />
            </div>
          </div>
          <div className=" xl:flex row-mobile-col-desktop w-full justify-center mt-10 ">
            <div className="xl:mr-6  mb-10 xl:mb-2">
              <TopAuctionCard number={2} auction={top2} />
            </div>
            <div className="xl:mr-6 xl:mb-2 mb-10 ">
              <TopAuctionCard number={3} auction={top3} />
            </div>
            <div className="xl:mr-6 xl:mb-2 mb-10">
              <TopAuctionCard number={4} auction={top4} />
            </div>
          </div>
          {/* <div className=" xl:flex-row  flex flex-col w-full justify-center mt-10 ">
            <div className="xl:mr-6  flex justify-center mb-10 xl:mb-2">
              <TopAuctionCard number={2} />
            </div>
            <div className="xl:mr-6 xl:mb-2 mb-10 flex justify-center ">
              <TopAuctionCard number={3} />
            </div>
            <div className="xl:mr-6 xl:mb-2 mb-10 flex justify-center">
              <TopAuctionCard number={4} />
            </div>
          </div> */}
          <AuctionTable auctions={paginateAuctions} />
          <div className="justify-center pb-96 flex">
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              initialPage={1}
              pageCount={auctions.length / pageSize}
              onPageChange={onPageChange}
              marginPagesDisplayed={1}
              pageRangeDisplayed={1 }
              containerClassName={'pagination'}
            />
           </div>
        </div>
      </div>
    </div>
  );
}

