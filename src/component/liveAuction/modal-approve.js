import React, { useState, useEffect, useContext } from 'react'
import { Button, Avatar, Modal } from 'antd';
import personbid from '../../svg/logoProfile.svg'
import ModalBid from './modal-bid'
import shirt from '../../svg/font-shirt.svg'
import { mockAvatar } from './mock'
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
    const { wallet, connectWallet } = useContext(AppContext);

    useEffect(async () => {
        if (!allowance || !bidData) {
            setIsConnect(false)
            return
        };
        setIsConnect(true)
        setLastPrice(bidData[2][tokenID])

        console.log('allowance change', allowance > 0)
        setIsApprove(allowance > 0)
        if (allowance > 0) {
            console.log('approved')
            setIsModalBid(true);
            onApproved()
        }
        return () => {}
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

    const onCanceled = () => {
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
                    { !isConnect && <Button onClick={connectWallet} loading={loading} className="btn-approve">Connect Wallet</Button> }
                </div>

                <Modal visible={isModalBid} onCancel={onCanceled} footer={false}>
                    <ModalBid onBid={onBid} tokenID={tokenID}/>
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
