import React, { useState } from 'react'
import { Button, Slider, Avatar, Modal, Form, notification, } from 'antd';
import personbid from '../../svg/logoProfile.svg'
import ModalBid from './modal-bid'
import shirt from '../../svg/font-shirt.svg'
import { mockAvatar } from './mock'
export default function ModalApprove({ onCancel, setIsModalApprove }) {
    const [isModalBid, setIsModalBid] = useState(false);

    const showModalBid = () => {
        setIsModalBid(true);
        setTimeout(() => {
            setIsModalApprove(false);
        }, 1000);
    };
    const handleBidSubmit = (value) => {
        console.log('value', value)
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


    return (
        <div className="bid-modal-box">
            <div className="box-t-shirt">
                <div className="top-t-shirt"><img className="" alt="shirt" src={shirt} /></div>
                <div className="show-more-shirt">
                    <div className="show-more-shirt-items">
                        <img alt="shirt" src={shirt} />
                    </div>
                    <div className="show-more-shirt-items">
                        <img alt="shirt" src={shirt} />
                    </div>
                    <div className="show-more-shirt-items">
                        <img alt="shirt" src={shirt} />
                    </div>
                </div>
            </div>
            <div className="box-t-shirt-b">
                <div className="couwndown-bid-s">Serial Number</div>
                <div className="couwndown-bid-t">#85 / 999</div>
                <div className="couwndown-bid-s">Auction Ending in</div>
                <div className="couwndown-bid">
                    <div className="">
                        <div className="couwndown-bid-t">00</div>
                        <div className="couwndown-bid-day">Days</div>
                    </div>
                    <div className="couwndown-bid-items">
                        <div className="couwndown-bid-t">00</div>

                        <div className="couwndown-bid-day">Hours</div>
                    </div>
                    <div className="couwndown-bid-items">
                        <div className="couwndown-bid-t">00</div>
                        <div className="couwndown-bid-day">Minutes</div>
                    </div>
                    <div className="couwndown-bid-items">
                        <div className="couwndown-bid-t">00</div>
                        <div className="couwndown-bid-day">Secounds</div>
                    </div>
                </div>
                <div className="couwndown-bid-day">05:00</div>
                <div><Slider style={{ height: 10 }} /></div>
                <div className="couwndown-bid-c">
                    <div className="couwndown-bid-s">Current Bid</div>
                    <div className="price-bid-exchange">
                        <div className="couwndown-bid-t">100</div>
                        <div className="couwndown-bid-s">BUSD</div>
                    </div>
                </div>

                <div className="btn-approve-cancel">
                    <div className="btn-cancel"><button onClick={onCancel}>Cancel</button>
                    </div>
                    <Button onClick={showModalBid} className="btn-approve">Approve</Button>
                </div>

                <Modal visible={isModalBid} onCancel={handleCancelBid}
                    footer={false}>
                    <Form onFinish={handleBidSubmit}>
                        <ModalBid handleCancelBid={handleCancelBid} />
                    </Form>

                </Modal>
            </div>
            <div className="box-t-shirt-b-p">
                <p>Place Bid by</p>
                <div className="bid-price-box-show">
                    {mockAvatar.map(v => (
                        <div className="bid-by-box" key={v.id}>
                            <Avatar src={personbid} alt="icon" />
                            <div className="text-bid-code">{v.bidCode}</div>
                            <div className="text-bid-busd"> {`${v.bidPrice} BUSD`}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
