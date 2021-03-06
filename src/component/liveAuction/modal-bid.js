import { useEffect, useState, useContext } from 'react'
import { Button, InputNumber } from 'antd';
import { BigNumber } from "@ethersproject/bignumber"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useCountdown from '../../hooks/useCountdown'
import shirt from '../../svg/font-shirt.svg'
import { useAuctionContract } from '../../hooks/useAuctionContract'
import useWeb3 from "../../hooks/useWeb3"
import { useBidData } from '../../hooks/useBidData'
import { AppContext } from "../../context";
import IMAGES from '../../assets/auction/robots/robotImg';
export default function ModalBid({ onBid, tokenID ,onHoverShirtBack,isShowFront,onHoverShirtFront}) {
    const [auctionContract] = useAuctionContract();
    const { bidData, events, updateEvents, expireTime } = useBidData();
    const [value, setValue] = useState(10);
    const [lastPrice, setLastPrice] = useState(0);
    const [lastBidTime, setLastBidTime] = useState(0);
    const [loading, setLoading] = useState(false);
    const [context] = useWeb3();
    const web3 = context.web3;
    const { wallet } = useContext(AppContext);
    const [expireTimeExtend, setExpireTimeExtend] = useState(false);

    const timeLeft = useCountdown({ timestamp: (expireTimeExtend * 1000) })

    useEffect(() => {
        if (lastBidTime > parseInt(expireTime) - 300) {
            setExpireTimeExtend(parseInt(lastBidTime) + 300)
        } else {
            setExpireTimeExtend(expireTime)
        }
    }, [expireTime, lastBidTime])

    async function bid() {
        setLoading(true)
        try {
            console.log('tokenID', tokenID)
            console.log('bid', web3.utils.toWei(value.toString(), 'ether'))
            await auctionContract.methods.bid(web3.utils.toWei(value.toString(), 'ether'), tokenID).send({
                from: wallet
            })
            onBid()
        } catch (error) {
            // TODO
            console.log(error)
        } finally {
            updateEvents(tokenID)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!tokenID || !bidData || bidData.length < 4) return
        
        if (BigNumber.from(bidData[2][tokenID]).gte(BigNumber.from("10"))) {
            updateEvents(tokenID)
        } else {
            console.log('skip event no auction')
        }

        let lastPrice = BigNumber.from(bidData[2][tokenID])
        setLastPrice(lastPrice)
        setLastBidTime(bidData[3][tokenID])
        // suggest price +1 USD
        if (lastPrice == 0) {
            lastPrice = BigNumber.from("9000000000000000000")
        }
        let defaultValue = lastPrice.add("1000000000000000000")
        setValue(web3.utils.fromWei(defaultValue.toString(), 'ether'))
    }, [bidData, tokenID])

    const handleChange = value => {
        setValue(value);
    };

    return (
        <div className="bid-modal-box">
            <div className="box-t-shirt" >
            {isShowFront ? (
            <div className="top-t-shirt relative" onMouseEnter={onHoverShirtBack}>     
            <LazyLoadImage className="overlay-bid-shirt-front" alt="shirt" src="/img/auction/base-front-shirt.png"/>
            <LazyLoadImage alt="" src={IMAGES[tokenID]} className="robot-approv-bid" />
            </div>):(
            <div className="top-t-shirt relative" onMouseLeave={onHoverShirtFront}>
            <LazyLoadImage alt="shirt" src="/img/auction/base-back-shirt.png" />
            </div>)}
                <div className="show-more-shirt">
                    <div className="show-more-shirt-items relative">
                    <LazyLoadImage alt="shirt" src="/img/auction/base-front-shirt.png"/>
                    <LazyLoadImage alt="" src={IMAGES[tokenID]} className="robot-approv-bid-s" />
                    </div>
                    <div className="show-more-shirt-items relative">
                    <LazyLoadImage alt="shirt" src="/img/auction/base-back-shirt.png"/>
                    </div>
                </div>
            </div>
            <div className="box-t-shirt-b">
                <div className="couwndown-bid-s">Serial Number</div>
                <div className="couwndown-bid-t">#{tokenID} / 999</div>
                <div className="couwndown-bid-s">Auction Ending in</div>
                <div className="couwndown-bid">
                    <div className="">
                        <div className="couwndown-bid-t">{timeLeft.days || '00'}</div>
                        <div className="couwndown-bid-day">Days</div>
                    </div>
                    <div className="couwndown-bid-items">
                        <div className="couwndown-bid-t">{timeLeft.hours || '00'}</div>
                        <div className="couwndown-bid-day">Hours</div>
                    </div>
                    <div className="couwndown-bid-items">
                        <div className="couwndown-bid-t">{timeLeft.minutes || '00'}</div>
                        <div className="couwndown-bid-day">Minutes</div>
                    </div>
                    <div className="couwndown-bid-items">
                        <div className="couwndown-bid-t">{timeLeft.seconds || '00'}</div>
                        <div className="couwndown-bid-day">Seconds</div>
                    </div>
                </div>
            
                <div className="">
                    <div className="couwndown-bid-s">Current Bid</div>
                    <div className="price-bid-exchange">
                        <div className="couwndown-bid-t">{parseFloat(web3.utils.fromWei(lastPrice.toString(), 'ether')).toFixed(2)}</div>
                        <div className="couwndown-bid-s">BUSD</div>
                    </div>
                </div>
                <div className="bid-input-value">
                    <InputNumber value={value} type="number" min={10} placeholder="Place your bidding" onChange={handleChange} />
                </div>
                <div className="min-time">Minimum in 10 BUSD</div>
                <div className="btn-approve-cancel">
                    <Button
                        onClick={bid}
                        loading={loading}
                        className="btn-approve"
                        disabled={timeLeft.isExpired}
                    >
                        Place a bid
                    </Button>
                </div>
            </div>
            <div className="box-t-shirt-b-p">
                <p>History of bidders</p>
                <div className="bid-price-box-show">
                    {events.map((v, index) => (
                        <div className="bid-by-box" key={v.id}>
                            <div className="text-bid-code">{v.address ? `${v.address.substring(0, 5)}...${v.address.substring(v.address.length - 4, v.address.length)}` : ''}</div>
                            <div className="text-bid-busd"> {`${v.price/10**18} BUSD`}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
