import { useState, useEffect, useContext } from 'react'
import HeaderLiveAuction from '../../component/liveAuction/header-live-action'
import CollectibileLiveAuction from '../../component/liveAuction/collectibles'
import LiveAuctionContent from '../../component/liveAuction/content-live-auction'
import LiveAuctionFooter from '../../component/liveAuction/footer-live-action'
import Navigation from '../../component/navigation'
import './liveAuction.css'
import { useBidData } from '../../hooks/useBidData'
import { BigNumber } from "@ethersproject/bignumber"
import { AppContext } from "../../context";

export const LiveAuctionPage = () => {
	const { wallet } = useContext(AppContext);

	const { bidData } = useBidData();
	const [data, setData] = useState([]);
	const [filterData, setFilterData] = useState([]);
	const [searchSerial, setSearchSerial] = useState('');
	const [searchMaxPrice, setSearchMaxPrice] = useState(0);
	const [searchMinPrice, setSearchMinPrice] = useState(0);
	const [auctionByNumber, setAuctionByNumber] = useState(0);
	const [auctionByPrice, setAuctionByPrice] = useState(0);
	const [searchMyAuction, setSearchMyAuction] = useState(0);
	const [isSwitch, setIsSwitch]  =  useState(false)
	
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
		setData(value)
		return () => {}
	}, [bidData]);

	const onSwitch=(checked)=> {
		//console.log(`switch to ${checked}`);
		setIsSwitch(checked)
	  }

	useEffect(() => {
		if (!data) return;
		
		let fData = data
		if (searchSerial) {
			fData = fData.filter((v) => v.id === searchSerial)
		}
		if (searchMaxPrice && searchMaxPrice > 0) {
			fData = fData.filter((v) => v.bidPrice <= searchMaxPrice)
		}
		if (searchMinPrice && searchMinPrice > 0) {
			fData = fData.filter((v) => v.bidPrice >= searchMinPrice)
		}
		if (auctionByNumber > 0 && auctionByNumber <= 10) {
			fData = fData.filter((v) => parseInt(v.id/100) === auctionByNumber-1)
		}

		if (searchMyAuction) {
			fData = fData.filter((v) => v.bidAddress.toLowerCase() === wallet && wallet.toLowerCase())
		}

		if (auctionByPrice === 'highest') {
			console.log('auctionByPrice highest')
			fData.sort(( a, b ) => {
				if (BigNumber.from(a.bidPrice).lt(BigNumber.from(b.bidPrice))) {
					return 1;
				}
				if (BigNumber.from(a.bidPrice).gt(BigNumber.from(b.bidPrice))) {
					return -1;
				}
				return 0;
			})
		} else if (auctionByPrice === 'lowest') {
			console.log('auctionByPrice lowest')
			fData.sort(( a, b ) => {
				if (BigNumber.from(a.bidPrice).lt(BigNumber.from(b.bidPrice))) {
					return -1;
				}
				if (BigNumber.from(a.bidPrice).gt(BigNumber.from(b.bidPrice))) {
					return 1;
				}
				return 0;
			})
		}
		
		setFilterData(fData)
		return () => {}
	}, [data, searchSerial, searchMaxPrice, searchMinPrice, auctionByNumber, auctionByPrice, searchMyAuction, wallet]);

	function onFinishSearch(values) {
		console.log(values)
		setSearchSerial(values.serialNumber)

		const maxPrice = parseFloat(values.maxPrice) || 0
		const centValueMax = BigNumber.from(parseInt(maxPrice*100).toString())
		const centValueMaxInEthers = centValueMax.mul(BigNumber.from("10000000000000000"))
		setSearchMaxPrice(centValueMaxInEthers)

		const minPrice = parseFloat(values.minPrice) || 0
		const centValueMin = BigNumber.from(parseInt(minPrice*100).toString())
		const centValueMinInEthers = centValueMin.mul(BigNumber.from("10000000000000000"))
		setSearchMinPrice(centValueMinInEthers)

		setAuctionByNumber(values.auctionByNumber)
		setAuctionByPrice(values.auctionByPrice)
		setSearchMyAuction(values.switch)
	}

	return (
		<div>
			<Navigation />
			<div className="live-auction-container">
                {/* Start at 04/06 18:00 end at 07/06 18:00 */}
				<HeaderLiveAuction
					className="z-20 flex justify-center space-x-4"
					day
					hour
					minute
					second
					startMonth={5}
					startDay={4}
					startHour={18}
					endMonth={5}
					endDay={7}
					endHour={18}
				/>
				<div className="live-auction-content">
					<CollectibileLiveAuction onFinishSearch={onFinishSearch}  onSwitch={onSwitch}  />
					<div className="curentbid-text">{isSwitch ?<div >Current bidding </div>: ''}</div>
					<LiveAuctionContent filterData={filterData}  />
				</div>
				<LiveAuctionFooter/>
			</div>
		</div>
	)
}
