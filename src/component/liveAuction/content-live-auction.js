import { useEffect, useState, useMemo, useContext } from 'react'
import { Card, notification } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Modal from 'antd/lib/modal/Modal';

import ModalApprove from './modal-approve'
import ModalBid from './modal-bid'
import IMAGES from '../../assets/auction/robots/robotImg';

import { useAllowance } from '../../hooks/useAllowance'
import './content-live-auction.css'
import { AppContext } from "../../context";

const LiveAuctionContent = ({ filterData }) => {
    const [isModalApprove, setIsModalApprove] = useState(false);
    const [isModalBid, setIsModalBid] = useState(false);
    const [tokenID, setTokenID] = useState(false);
    
    const [isApprove, setIsApprove] = useState(false);
    const { allowance, refreshAllowance } = useAllowance();
    const { wallet } = useContext(AppContext);

    const [isShowFront, setIsShowFront] = useState(true);
    const [isShowBack, setIsShowBack] = useState(false);

    useEffect(() => {
        refreshAllowance()
    }, [wallet])

    useMemo(async () => {
        if (allowance) {
            setIsApprove(allowance > 0)
        }
    }, [allowance]);

    const showModalBidOrApprove = (tokenID) => {
        setTokenID(tokenID)
        if (isApprove) {
            setIsModalBid(true);
            setIsShowFront(true);
        } else {
            setIsModalApprove(true);
            setIsShowFront(true);
        }
    };

    const onApproved = () => {
        setTimeout(() => {
            refreshAllowance()
            setIsModalApprove(false);
        }, 1000);
    };

    const onCanceled = () => {
        setIsModalApprove(false);
        setIsModalBid(false);
        setIsShowFront(false);
        setIsShowBack(false);
    };

    const onBid = () => {
        success()
    };

    const success = () => {
        notification.success({
            message: <div className="success-bid"><img alt="bid" src="/img/MaskGroup.png"/></div>,
            description: <div className="success-bid-text">You are the highest bidder</div>,
        })
        setIsModalBid(false);
    }

    const onHoverShirtFront = () => {
        setIsShowFront(!isShowFront);
        setIsShowBack(false);
    };
    
    const onHoverShirtBack = () => {
        setIsShowBack(!isShowBack);
        setIsShowFront(false);
    };

    return (
        <div className="live-content-container">
            <div className="live-content-box">
                {filterData.map((current, index) => (
                        <div className="live-content-box-items" key={current.id}>
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
                                </div>
                            </Card>
                        </div>
                ))}
            </div>
            <div className="modal-show">
                <Modal visible={isModalApprove} onCancel={onCanceled} footer={false}>
                    <ModalApprove onApproved={onApproved} onBid={onBid} tokenID={tokenID} onHoverShirtFront={onHoverShirtFront}
                    onHoverShirtBack ={onHoverShirtBack }
                    setIsShowFront={setIsShowFront} setIsShowBack={setIsShowBack} isShowBack={isShowBack} isShowFront={isShowFront}
                    />
                </Modal>
            </div>
            <div className="modal-show">
                <Modal visible={isModalBid} onCancel={onCanceled} footer={false}>
                    <ModalBid onBid={onBid} tokenID={tokenID} 
                    onHoverShirtFront={onHoverShirtFront}
                    onHoverShirtBack ={onHoverShirtBack }
                    setIsShowFront={setIsShowFront} setIsShowBack={setIsShowBack} isShowBack={isShowBack} isShowFront={isShowFront}/>
                </Modal>
            </div>
        </div>
    )
}
export default LiveAuctionContent