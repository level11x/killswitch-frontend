import React from 'react'
import { Input, Button, Select, Switch, InputNumber, Form } from 'antd';
const { Option } = Select;
const CollectibileLiveAuction = ({ onFinishSearch }) => {
    
    return (
        <div className="live-auction-collectibles-container">
            <div className="collectibles-killswitch-text">KillSwitch Collectibles</div>
            <div className="collectibles-box">
                <Form onFinish={onFinishSearch}>
                    <div className="collectibles-box-search">
                        <div className="collectibles-search">
                            <div className="search-box">
                                <Form.Item name="serialNumber">
                                    <Input.Search allowClear placeholder="Search serial number" />
                                </Form.Item>

                            </div>
                        </div>
                        <div className="collectibles-search-buttom">
                            <div className="button-box">
                                <Button htmlType="submit">Search </Button>
                            </div>

                        </div>
                    </div>
                    <div className="action-search-selection">
                        <div className="auction-search-action">
                            <div className="auction-search-action-items">
                                <Form.Item name="auctionByPrice">
                                    <Select placeholder="All Auction" >
                                        <Option value="all">All Auction</Option>
                                        <Option value="highest">Price (Highest)</Option>
                                        <Option value="lowest"> Price (Lowest)</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className="auction-search-action-items">
                                <Form.Item name="auctionByNumber">
                                    <Select placeholder="#0 - #99" >
                                        <Option value="1">#0 - #99</Option>
                                        <Option value="2">#100 - #199</Option>
                                        <Option value="3">#200 - #299</Option>
                                        <Option value="4">#300 - #399</Option>
                                        <Option value="5">#400 - #499</Option>
                                        <Option value="6">#500 - #599</Option>
                                        <Option value="7">#600 - #699</Option>
                                        <Option value="8">#700 - #799</Option> 
                                        <Option value="9">#800 - #899</Option> 
                                        <Option value="10">#900 - #999</Option>
                                 </Select>
                                </Form.Item>
                            </div>
                            <div className="auction-search-action-items">
                                <div className="auction-max-min">Min price</div>
                                <Form.Item name="minPrice">
                                    <InputNumber type="number" min={10} placeholder="Placeholder" />
                                </Form.Item>
                            </div>
                            <div className="auction-search-action-items">
                                <div className="auction-max-min">Max price</div>
                                <Form.Item name="maxPrice">
                                    <InputNumber type="number" min={10} placeholder="Placeholder" />
                                </Form.Item> </div>
                        </div>
                        <div className="auction-bidding-box">
                            <div className="auction-max-min">Current Bidding</div>
                            <div>
                                <Form.Item name="switch">
                                    <Switch/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}
export default CollectibileLiveAuction