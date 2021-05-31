import { useState, useEffect } from 'react'
import HeaderLiveAuction from '../../component/liveAuction/header-live-action'
import CollectibileLiveAuction from '../../component/liveAuction/collectibles'
import LiveAuctionContent from '../../component/liveAuction/content-live-auction'
import LiveAuctionFooter from '../../component/liveAuction/footer-live-action'
import Navigation from '../../component/navigation'
import './liveAuction.css'
import { useBidData } from '../../hooks/useBidData'

export const LiveAuctionPage = () => {

	const { bidData } = useBidData();
	const [data, setData] = useState([]);
	const [filterData, setFilterData] = useState([]);
	const [searchSerial, setSearchSerial] = useState('');

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

	useEffect(() => {
		if (!data) return;
		
		let fData = data
		if (searchSerial) {
			fData = data.filter((v) => v.id == searchSerial)
		}
		setFilterData(fData)
		return () => {}
	}, [data, searchSerial]);

	console.log(filterData)

	function onFinishSearch(values) {
		console.log(values)
		setSearchSerial(values.serialNumber)
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
					startMonth={6}
					startDay={4}
					startHour={18}
					endMonth={6}
					endDay={7}
					endHour={18}
				/>
				<div className="live-auction-content">
					<CollectibileLiveAuction onFinishSearch={onFinishSearch} />
					<LiveAuctionContent filterData={filterData} />
				</div>
				<LiveAuctionFooter />
			</div>
		</div>
	)
}
