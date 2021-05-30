import React, { useEffect, useState, useMemo } from 'react'
import { Card, Avatar, Pagination, notification } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Modal from 'antd/lib/modal/Modal';

import ModalApprove from './modal-approve'
import ModalBid from './modal-bid'
import logoProfile from '../../svg/logoProfile.svg'
import IMAGES from '../../assets/auction/robots/robotImg';
import { useBidData } from '../../hooks/useBidData'
import { useAllowance } from '../../hooks/useAllowance'
import './content-live-auction.css'

const LiveAuctionContent = () => {
    const [isModalApprove, setIsModalApprove] = useState(false);
    const [isModalBid, setIsModalBid] = useState(false);
    const [tokenID, setTokenID] = useState(false);
    const bidData = useBidData();
    const [data, setData] = useState([]);
    const [isApprove, setIsApprove] = useState(false);
    const allowance = useAllowance();

    useMemo(async () => {
        if (allowance) {
            setIsApprove(allowance > 0)
        }
    }, [allowance]);

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
        console.log(value)
        setData(value)
        return () => {}
    }, [bidData]);

    const showModalBidOrApprove = (tokenID) => {
        setTokenID(tokenID)
        if (isApprove) {
            setIsModalBid(true);
        } else {
            setIsModalApprove(true);
        }
    };

    const onApproved = () => {
        setTimeout(() => {
            setIsModalApprove(false);
        }, 1000);
    };

    const onCanceled = () => {
        setIsModalApprove(false);
        setIsModalBid(false);
    };

    const onBid = () => {
        success()
    };

    const success = () => {
        notification.success({
            message: 'Success',
            description: 'Your bidding have been submited',
        })
        setIsModalBid(false);
    }

    const onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
    }

    return (
        <div className="live-content-container">
            <div className="live-content-box">
                {data.map((current, index) => (
                        <div className="live-content-box-items" key={index}>
                            <Card hoverable onClick={() => showModalBidOrApprove(current.id)} >
                                <div className="box-number">{current.id}</div>
                                <div className="shirt-card-box" id="shirt">
                                    <LazyLoadImage className="overlay w-full h-full" alt="shirt" src="/img/auction/base-back-shirt.png" />
                                    <div className="shirt-image relative">
                                    <LazyLoadImage alt="shirt" src="/img/auction/base-front-shirt.png" />
                                    <LazyLoadImage alt="" src={IMAGES[current.id]} className="absolute block left-1/2 top-3/10 transform -translate-x-1/2 w-1/3 h-auto" />
                                    {/* <LazyLoadImage alt="" src={IMAGES[current.id]} className="absolute block left-1/2 top-1/4 transform -translate-x-1/2 w-20 h-20" /> */}
                                    {/* <span>{current.id}</span> */}
                                    </div>
                                </div>
                                <div className="live-bid-box">
                                    <div className="live-bid-current">
                                        <div className="live-bid-text">Current Bid</div>
                                        <div className="live-bid-text">Bid placed</div>
                                    </div>
                                    <div className="live-bid-price">
                                        <div className="live-bid-number">{current.bidPrice/10**18}</div>
                                        <div className="live-bid-number">{current.bidAddress ? `${current.bidAddress.substring(0, 5)}...${current.bidAddress.substring(current.bidAddress.length - 4, current.bidAddress.length)}` : ''}</div>
                                    </div>
                                    <div className="bid-avatar">
                                        <Avatar src={logoProfile} alt="icon" />
                                    </div>
                                </div>
                            </Card>
                        </div>
                ))}
            </div>
            <div className="modal-show">
                <Modal visible={isModalApprove} onCancel={onCanceled} footer={false}>
                    <ModalApprove onApproved={onApproved} onBid={onBid} tokenID={tokenID}/>
                </Modal>
            </div>
            <div className="modal-show">
                <Modal visible={isModalBid} onCancel={onCanceled} footer={false}>
                    <ModalBid onBid={onBid} tokenID={tokenID}/>
                </Modal>
            </div>
            <div className="pagination-live-auction"> <Pagination defaultCurrent={1} total={1000} onChange={onChange} /></div>
        </div>
    )
}
export default LiveAuctionContent