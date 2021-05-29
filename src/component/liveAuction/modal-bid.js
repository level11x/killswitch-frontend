import React from 'react'
import { Button, Slider, Avatar, InputNumber, Form } from 'antd';
import personbid from '../../svg/logoProfile.svg'
import shirt from '../../svg/font-shirt.svg'
import { mockAvatar } from './mock'
import { useAuctionContract } from '../../hooks/useAuctionContract'
import { useAccounts } from '../../hooks/useAccount'


export default function ModalBid({ handleCancelBid }) {
    const auctionContract = useAuctionContract()
    const { myAccount } = useAccounts();

    async function bid() {
        await auctionContract.methods.bid(0, 0).send({
            from: myAccount
        })
    }

    return (
        <div className="bid-modal-box">
            <div className="box-t-shirt">
                <div className="top-t-shirt">  <img className="" alt="shirt" src={shirt} /></div>
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
               
                <div>
                    <createSliderWithTooltip style={{ height: 20 }} />
                </div>
                <div className="">
                    <div className="couwndown-bid-s">Current Bid</div>
                    <div className="price-bid-exchange">
                        <div className="couwndown-bid-t">100</div>
                        <div className="couwndown-bid-s">BUSD</div>
                    </div>
                </div>
                <div className="bid-input-value">
                    <Form.Item name="bidding">
                        <InputNumber type="number" min={10} placeholder="Place your bidding" />
                    </Form.Item>
                </div>
                <div className="min-time">Minimum in 10 BUSD</div>
                <div className="btn-approve-cancel">
                    <div className="btn-cancel">
                        <button onClick={handleCancelBid}>Cancel</button>
                    </div>

                    <Button htmlType="submit" className="btn-approve">Place a bid</Button>

                </div>
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
