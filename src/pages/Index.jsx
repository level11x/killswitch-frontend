import logo from '../logo.svg';
import { useState, useEffect, useCallback } from 'react'
import useWeb3  from "../hooks/useWeb3";
import { useKillSwitchContract } from '../hooks/useKillSwitchContract'
import { useLPContract } from '../hooks/useLPContract'
import { useAccounts } from '../hooks/useAccount'
import { useMasterChefContract } from '../hooks/useMasterChefContract'
import { usePancakeRouterContract } from '../hooks/usePancakeRouterContract'
import { useTarCalPoolContract } from '../hooks/useTarCalPoolContract'
import { BUSD_CONTRACT_ADDRESS, WBNB_CONTRACT_ADDRESS, CAKE_CONTRACT_ADDRESS, LP_CONTRACT_ADDRESS } from "../config/contract";
import { PageLayout } from '../components/PageLayout/PageLayout';
import { TVL } from '../components/TVL/TVL';
import { Button } from '../components/Button/Button';
import { RouterPicker } from '../components/RouterPicker/RouterPicker';
import { PositionSummary } from '../components/PositionSummary/PositionSummary';
import { PoolSummary } from '../components/PoolSummary/PoolSummary';
import { TimeBox } from '../components/TimeBox/TimeBox';
import { AuctionTable } from '../components/AuctionTable/AuctionTable';
import ReactPaginate from 'react-paginate';
import { TopAuctionCard } from '../components/TopAuctionCard/TopAuctionCard';
import useWindowDimensions from '../hooks/useWindowDimension';
const tarContractAddress = '0xbE9F794FC205D76e6Dbb613d9dB32876a08afFC9'

export const Index = () => {
  const [acc, setAcc] = useState('')
  const [transactionState, setTransactionState] = useState('')
  const [allowance, setAllowance] = useState(0)
  const [walletLp, setWalletLp] = useState(0)
  const [stakedLp, setStakedLp] = useState(0)
  const [tvl, setTvl] = useState(0)
  const [tvlCake, setTvlCake] = useState(0)
  const [tvlBnb, setTvlBnb] = useState(0)
  const [reward, setReward] = useState(0)
  const [bnbPrice, setBnbPrice] = useState(0)
  const [cakePrice, setCakePrice] = useState(0)
  const [tvlTotal, setTvlTotal] = useState(0)
  const lpContract = useLPContract();
  const killSwitchContract = useKillSwitchContract()
  const masterChefContract = useMasterChefContract()
  const pancakeRouterContract = usePancakeRouterContract()
  const tarCalPoolContract = useTarCalPoolContract()
  const { accounts, myAccount, balance } = useAccounts();
  const [auctions, setAuctions] = useState([])
  const [paginateAuctions, setPaginationAuctions] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const { height, width } = useWindowDimensions()
  const pageSize = 25
  const [web3Val] = useWeb3()
  const web3 = web3Val.web3;


  const onPageChange = ({ selected }) => {
    setCurrentPage(selected)
  }

  const getPaginateAuctions = () => {
    const parsePage = currentPage + 1
    const startIndex = (parsePage - 1) * pageSize
    const endIndex = (parsePage) * pageSize
    return auctions.slice(startIndex, endIndex)
  }

  useEffect(() => {
    let mockAuctions = []
    for (let i = 0 ; i < 100 ; i++){
      mockAuctions.push({
        number: i+1,
        price: 10 + i,
        address: '0xDEAD'
      })
    }
    setAuctions(mockAuctions)

    setPaginationAuctions(getPaginateAuctions())
  }, [])

  useEffect(() => {
    setPaginationAuctions(getPaginateAuctions())
  }, [currentPage])
  
  return (
    <PageLayout>
       <div className="bg-primary min-h-screen flex justify-center w-screen">
        <div className="screen-container">
          <h1 className="text-center pt-20 text-white font-semibold xl:text-6xl text-4xl">
            Auction Ending in
          </h1>
          <div className="flex justify-center pt-10">
            <div className="flex">
              <div className="hidden xl:block">
                <TimeBox unit="Days" time="03" />
              </div>
              <TimeBox unit="Hours" time="00" />
              <TimeBox unit="Minutes" time="00" />
              <TimeBox unit="Seconds" time="00" />
            </div>
          </div>
          <h1 className="text-center pt-16 text-white font-semibold text-6xl">
            Top Auction
          </h1>
          <div className="flex justify-center  w-full mt-10">
            <TopAuctionCard number={1} />
          </div>
          <div className="hidden xl:flex w-full justify-center mt-10 ">
            <div className="xl:mr-6  mb-10 xl:mb-2">
              <TopAuctionCard number={2} />
            </div>
            <div className="xl:mr-6 xl:mb-2 mb-10 ">
              <TopAuctionCard number={3} />
            </div>
            <div className="xl:mr-6 xl:mb-2 mb-10">
              <TopAuctionCard number={4} />
            </div>
          </div>
          <div className=" xl:flex-row xl:hidden flex flex-col w-full justify-center mt-10 ">
            <div className="xl:mr-6  flex justify-center mb-10 xl:mb-2">
              <TopAuctionCard number={2} />
            </div>
            <div className="xl:mr-6 xl:mb-2 mb-10 flex justify-center ">
              <TopAuctionCard number={3} />
            </div>
            <div className="xl:mr-6 xl:mb-2 mb-10 flex justify-center">
              <TopAuctionCard number={4} />
            </div>
          </div>
          <AuctionTable auctions={paginateAuctions} />
          <div className="justify-center pb-96 hidden xl:flex">
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
           <div className="flex justify-center pb-96 xl:hidden">
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              initialPage={0}
              pageCount={auctions.length / pageSize}
              onPageChange={onPageChange}
              marginPagesDisplayed={1}
              pageRangeDisplayed={1 }
              containerClassName={'pagination'}
            />
           </div>
        </div>
      </div>
    </PageLayout>
  );
}

