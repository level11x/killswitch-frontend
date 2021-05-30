import React, { useState, useEffect, useMemo } from 'react'
import { Card, Avatar, Pagination, Form, notification } from 'antd';
import ModalApprove from './modal-approve'
import ModalBid from './modal-bid'
import backShirt from '../../svg/back-shirt.svg'
import fontShirt from '../../svg/font-shirt.svg'
import logoProfile from '../../svg/logoProfile.svg'
import Modal from 'antd/lib/modal/Modal';
// import { mockData } from './mock.js'
import { useBidData } from '../../hooks/useBidData'
import { useAllowance } from '../../hooks/useAllowance'

const LiveAuctionContent = () => {
    const [isModalApprove, setIsModalApprove] = useState(false);
    const [isModalBid, setIsModalBid] = useState(false);
    const bidData = useBidData();
    const [data, setData] = useState([]);
    const [isApprove, setIsApprove] = useState(false);
    const allowance = useAllowance();

    useMemo(async () => {
        console.log('allowance', allowance)
        setIsApprove(allowance > 0)
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
    }, [bidData]);

    const showModalApprove = () => {
        if (isApprove) {
            setIsModalBid(true);
        } else {
            setIsModalApprove(true);
        }
    };

    const handleApprove = () => {
        setIsModalApprove(false);
    };

    const handleCancel = () => {
        setIsModalApprove(false);
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

    const handleCancelBid = () => {
        setIsModalBid(false);
    };

    const onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
    }
    return (
        <div className="live-content-container">
            <div className="live-content-box">\
                {data.map((value) => (
                        <div className="live-content-box-items" key={value.id}>
                            <Card hoverable onClick={showModalApprove} >
                                <div className="box-number">{value.id}</div>
                                <div className="shirt-card-box" id="shirt">
                                    <img className="shirt-image" alt="shirt" src={backShirt} />
                                    <img className="overlay" alt="shirt" src={fontShirt} />
                                </div>
                                <div className="live-bid-box">
                                    <div className="live-bid-current">
                                        <div className="live-bid-text">Current Bid</div>
                                        <div className="live-bid-text">Bid placed by</div>
                                    </div>
                                    <div className="live-bid-price">
                                        <div className="live-bid-number">{value.bidPrice/10**18}</div>
                                        <div className="live-bid-number">{value.bidAddress}</div>
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
                <Modal visible={isModalApprove} onCancel={handleCancel} footer={false}>
                    <ModalApprove onApprove={handleApprove} onCancel={handleCancel}  setIsModalApprove={setIsModalApprove} onBid={onBid}/>
                </Modal>
            </div>
            <div className="modal-show">
                <Modal visible={isModalBid} onCancel={handleCancelBid} footer={false}>
                    <ModalBid handleCancelBid={handleCancelBid} onBid={onBid} />
                </Modal>
            </div>
            
            <div className="pagination-live-auction"> <Pagination defaultCurrent={1} total={1000} onChange={onChange} /></div>
        </div>
    )
}
export default LiveAuctionContent