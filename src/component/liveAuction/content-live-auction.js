import React, { useEffect, useState, useMemo } from 'react'
import { Card, Avatar, Pagination, notification } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Modal from 'antd/lib/modal/Modal';

import ModalApprove from './modal-approve'
import backShirt from '../../svg/back-shirt.svg'
import fontShirt from '../../svg/font-shirt.svg'
import logoProfile from '../../svg/logoProfile.svg'
import IMAGES from '../../assets/robots/robotImg';
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


    const showModalApprove = () => {
        setIsModalApprove(true);
    };
    const handleApprove = () => {
        setIsModalApprove(false);
    };

    const handleCancel = () => {
        setIsModalApprove(false);
    };

    return (
        <div className="live-content-container">
            <div className="live-content-box">
                {data.map((current, index) => (
                        <div className="live-content-box-items" key={index}>
                            <Card hoverable onClick={showModalApprove} >
                                <div className="box-number">{current.id}</div>
                                <div className="shirt-card-box" id="shirt">
                                    <LazyLoadImage className="overlay" alt="shirt" src={backShirt} />
                                    <div className="shirt-image relative">
                                    <LazyLoadImage alt="shirt" src={fontShirt} />
                                    <LazyLoadImage alt="" src={IMAGES[current.id]} className="absolute block left-1/2 top-1/4 transform -translate-x-1/2 w-24 h-24" />
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
                                        <div className="live-bid-number">{current.bidAddress}</div>
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
                <Modal visible={isModalApprove} onCancel={handleCancel}
                    footer={false}>
                    <ModalApprove onApprove={handleApprove} onCancel={handleCancel}  setIsModalApprove={setIsModalApprove}/>
                </Modal>
            </div>
            <div className="pagination-live-auction"> <Pagination defaultCurrent={1} total={1000} onChange={onChange} /></div>
        </div>
    )
}
export default LiveAuctionContent