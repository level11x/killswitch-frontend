import React, { useState } from 'react'
import { Card, Avatar, Pagination } from 'antd';
import ModalApprove from './modal-approve'
import backShirt from '../../svg/back-shirt.svg'
import fontShirt from '../../svg/font-shirt.svg'
import logoProfile from '../../svg/logoProfile.svg'
import Modal from 'antd/lib/modal/Modal';
import { mockData } from './mock.js'

const LiveAuctionContent = () => {
    const [isModalApprove, setIsModalApprove] = useState(false);


    const showModalApprove = () => {
        setIsModalApprove(true);
    };
    const handleApprove = () => {
        setIsModalApprove(false);
    };

    const handleCancel = () => {
        setIsModalApprove(false);
    };

    const onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
    }
    return (
        <div className="live-content-container">
            <div className="live-content-box">
                {mockData.map((value) => (
                        <div className="live-content-box-items" key={value.id}>
                            <Card hoverable onClick={showModalApprove} >
                                <div className="box-number">{value.code}</div>
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
                                        <div className="live-bid-number">{value.bidPrice}</div>
                                        <div className="live-bid-number">{value.bidCode}</div>
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