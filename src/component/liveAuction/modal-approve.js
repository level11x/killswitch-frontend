import React, { useState, useEffect, useContext } from 'react'
import { Button, Modal } from 'antd';
import { BigNumber } from "@ethersproject/bignumber"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ModalBid from './modal-bid'
import useCountdown from '../../hooks/useCountdown'
import { useBUSDContract } from "../../hooks/useBUSDContract";
import { AUCTION_ADDRESS } from "../../config/contract";
import { useBidData } from '../../hooks/useBidData'
import { AppContext } from "../../context";
import { useAllowance } from '../../hooks/useAllowance'
import IMAGES from '../../assets/auction/robots/robotImg';

export default function ModalApprove({ tokenID, onApproved, onBid ,onHoverShirtFront,onHoverShirtBack,setIsShowFront,setIsShowBack,isShowBack,isShowFront}) {
    const busdContract = useBUSDContract();

    const [isModalBid, setIsModalBid] = useState(false);
    const [isConnect, setIsConnect] = useState(false);
    const [lastPrice, setLastPrice] = useState(false);
    const [lastBidTime, setLastBidTime] = useState(false);
    const [loading, setLoading] = useState(false);
    const { bidData, events, updateEvents, expireTime } = useBidData();
    const { wallet, connectWallet } = useContext(AppContext);
    const [expireTimeExtend, setExpireTimeExtend] = useState(false);
    const { allowance, refreshAllowance } = useAllowance();
    const timeLeft = useCountdown({ timestamp: (expireTimeExtend * 1000) })
 
    useEffect(() => {
        if (lastBidTime > parseInt(expireTime) - 300) {
            setExpireTimeExtend(parseInt(lastBidTime) + 300)
        } else {
            setExpireTimeExtend(expireTime)
        }
    }, [expireTime, lastBidTime])

    useEffect(() => {
        if (!wallet || !bidData || !tokenID) {
            setIsConnect(false)
            return
        };
        if (BigNumber.from(bidData[2][tokenID]).gte(BigNumber.from("10"))) {
            updateEvents(tokenID)
        } else {
            console.log('skip event no auction')
        }
        
        setIsConnect(true)
        setLastPrice(bidData[2][tokenID])
        setLastBidTime(bidData[3][tokenID])
        async function fetchData() {
            await refreshAllowance()
        }
        fetchData()
        return () => {}
    }, [tokenID, bidData, wallet]);

    useEffect(() => {
        if (allowance > 0) {
            setIsModalBid(true);
            onApproved()
        }
    }, [allowance])

    const approve = async () => {
        setLoading(true)
        try {
            await busdContract.methods.approve(AUCTION_ADDRESS, BigNumber.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").toString()).send({
                from: wallet
            })

            setIsModalBid(true);
            onApproved()
        } catch (error) {
            // TODO
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const onCanceled = () => {
        setIsModalBid(false);
        setIsShowFront(false);
        setIsShowBack(false);
    };

    const onBidInternal = () => {
        setIsModalBid(false)
        onBid()
    }
   

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
              
                <div className="couwndown-bid-c">
                    <div className="couwndown-bid-s">Current Bid</div>
                    <div className="price-bid-exchange">
                        <div className="couwndown-bid-t">{lastPrice/10**18}</div>
                        <div className="couwndown-bid-s">BUSD</div>
                    </div>
                </div>

                <div className="btn-approve-cancel">
                    { isConnect && <Button disabled={timeLeft.isExpired} onClick={approve} loading={loading} className="btn-approve">Approve</Button> }
                    { !isConnect && <Button onClick={connectWallet} loading={loading} className="btn-approve">Connect Wallet</Button> }
                </div>

                <Modal visible={isModalBid} onCancel={onCanceled} footer={false}>
                    <ModalBid onBid={onBidInternal} tokenID={tokenID}/>
                </Modal>
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
