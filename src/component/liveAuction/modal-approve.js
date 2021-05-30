import React, { useState, useEffect, useContext } from 'react'
import { Button, Avatar, Modal, Form, notification, } from 'antd';
import personbid from '../../svg/logoProfile.svg'
import ModalBid from './modal-bid'
import shirt from '../../svg/font-shirt.svg'
import { mockAvatar } from './mock'
import { useAccounts } from '../../hooks/useAccounts'
import { useAllowance } from '../../hooks/useAllowance'
import { useBUSDContract } from "../../hooks/useBUSDContract";
import { AUCTION_ADDRESS } from "../../config/contract";
import { useBidData } from '../../hooks/useBidData'
import { AppContext } from "../../context";

import { BigNumber } from "@ethersproject/bignumber"

export default function ModalApprove({ tokenID, onApproved, onBid }) {
    const [isModalBid, setIsModalBid] = useState(false);
    const [isApprove, setIsApprove] = useState(false);
    const [isConnect, setIsConnect] = useState(false);
    const [lastPrice, setLastPrice] = useState(false);
    const [loading, setLoading] = useState(false);

    const busdContract = useBUSDContract();
    const allowance = useAllowance();
    const bidData = useBidData();
    const { wallet } = useContext(AppContext);

    useEffect(async () => {
        console.log('approve-modal something changed', allowance)
        if (!allowance || !bidData) {
            setIsConnect(false)
            return
        };
        setIsConnect(true)

        setLastPrice(bidData[2][tokenID])
    }, [allowance, tokenID, bidData]);

    const approve = async () => {
        setLoading(true)
        try {
            await busdContract.methods.approve(AUCTION_ADDRESS, BigNumber.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").toString()).send({
                from: wallet
            })
            console.log('allowance', allowance)
            setIsApprove(allowance > 0)
            if (isApprove) {
                setIsModalBid(true);
                onApproved()
            }
        } catch (error) {
            // TODO
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    
    // const showModalBid = async () => {
    //     console.log('approve click');
    //     console.log('isApprove', isApprove)
    //     setIsModalBid(true);
    //     setTimeout(() => {
    //         setIsModalApprove(false);
    //     }, 1000);
    // };

    const handleCancelBid = () => {
        setIsModalBid(false);
    };

    async function connect() {
        setLoading(true)
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' })
        } catch (error) {
            // TODO
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

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
                <div className="couwndown-bid-t">#{tokenID} / 999</div>
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
              
                <div className="couwndown-bid-c">
                    <div className="couwndown-bid-s">Current Bid</div>
                    <div className="price-bid-exchange">
                        <div className="couwndown-bid-t">{lastPrice/10**18}</div>
                        <div className="couwndown-bid-s">BUSD</div>
                    </div>
                </div>

                <div className="btn-approve-cancel">
                    { isConnect && <Button onClick={approve} loading={loading} className="btn-approve">Approve</Button> }
                    { !isConnect && <Button onClick={connect} loading={loading} className="btn-approve">Connect Wallet</Button> }
                </div>

                <Modal visible={isModalBid} footer={false}>
                    <ModalBid handleCancelBid={handleCancelBid} onBid={onBid} />
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
