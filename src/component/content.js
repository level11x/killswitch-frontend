import React, { useState } from 'react'
import './content.css';
import { Modal } from 'antd';
import MenuBar from './menu-bar'
export default function Content() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="content-container">
            <div className="content-box">
                <MenuBar/>
                <div className='content-bid-bg'>
                    <div className="content-header">
                        <div className="connect-to-wallet">
                            <button>Connect to a wallet</button>
                        </div>
                    </div>
                    <div className="bid-box-container">
                        <div className="card-content">
                            <div className="card">
                                <div className="img-top">
                                    <img src="asset/image.png" alt="shirt" />
                                </div>
                            </div>
                        </div>

                        <div className="count-down-details">

                            <div className="price-top-bid">#999</div>
                            <div className="price-top-current-box">
                                <div className="price-bid-box">
                                    <div className="price-top-current">Current Bid</div>
                                    <div className="price-top">200 BUSD</div>
                                </div>
                                <div className="price-bid-box">
                                    <div className="price-top-current">Auction ending in </div>
                                    <div className="price-top-box">
                                        <div className="price-top-count-down">
                                            <div className="time-count">
                                                <div className="time-count-number">02</div>
                                                <div className="time-count-text">Day</div>
                                            </div>
                                            <div className="time-count">
                                                <div className="time-count-number">18</div>
                                                <div className="time-count-text">Hours</div>
                                            </div>
                                            <div className="time-count">
                                                <div className="time-count-number">59</div>
                                                <div className="time-count-text">Minutes</div>
                                            </div>
                                            <div className="time-count">
                                                <div className="time-count-number">18</div>
                                                <div className="time-count-text">Secounds</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>






                            <div className="bid-button">
                                <div className="bid-place-btn">
                                    <button>Place a bid</button>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="card-box-shirt">
                        <div className="card" onClick={showModal}>
                            <div className="card-img">
                                <img src="asset/image.png" alt="shirt" />
                                <div className="number-text-font">#1 / 999</div>
                            </div>
                            <div class="container">
                                <div>
                                    <div className="current-bid">Current Bid</div>
                                    <div className="price-bid">10 BUSD</div>
                                </div>
                                <div>
                                    <div className="current-bid">Ending in</div>
                                    <div className="current-bid">2d 18h 59m 18s</div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-img">
                                <img src="asset/image.png" alt="shirt" />
                                <div className="number-text-font">#1 / 999</div>
                            </div>
                            <div class="container">
                                <div>
                                    <div className="current-bid">Current Bid</div>
                                    <div className="price-bid">10 BUSD</div>
                                </div>
                                <div>
                                    <div className="current-bid">Ending in</div>
                                    <div className="current-bid">2d 18h 59m 18s</div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-img">
                                <img src="asset/image.png" alt="shirt" />
                                <div className="number-text-font">#1 / 999</div>
                            </div>
                            <div class="container">
                                <div>
                                    <div className="current-bid">Current Bid</div>
                                    <div className="price-bid">10 BUSD</div>
                                </div>
                                <div>
                                    <div className="current-bid">Ending in</div>
                                    <div className="current-bid">2d 18h 59m 18s</div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="card-box-shirt">
                        <div className="card">
                            <div className="card-img">
                                <img src="asset/image.png" alt="shirt" />
                                <div className="number-text-font">#1 / 999</div>
                            </div>
                            <div class="container">
                                <div>
                                    <div className="current-bid">Current Bid</div>
                                    <div className="price-bid">10 BUSD</div>
                                </div>
                                <div>
                                    <div className="current-bid">Ending in</div>
                                    <div className="current-bid">2d 18h 59m 18s</div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-img">
                                <img src="asset/image.png" alt="shirt" />
                                <div className="number-text-font">#1 / 999</div>
                            </div>
                            <div class="container">
                                <div>
                                    <div className="current-bid">Current Bid</div>
                                    <div className="price-bid">10 BUSD</div>
                                </div>
                                <div>
                                    <div className="current-bid">Ending in</div>
                                    <div className="current-bid">2d 18h 59m 18s</div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-img">
                                <img src="asset/image.png" alt="shirt" />
                                <div className="number-text-font">#1 / 999</div>
                            </div>
                            <div class="container">
                                <div>
                                    <div className="current-bid">Current Bid</div>
                                    <div className="price-bid">10 BUSD</div>
                                </div>
                                <div>
                                    <div className="current-bid">Ending in</div>
                                    <div className="current-bid">2d 18h 59m 18s</div>
                                </div>
                            </div>
                        </div>

                    </div>




                    <div className="card-box-shirt">
                        <div className="card">
                            <div className="card-img">
                                <img src="asset/image.png" alt="shirt" />
                                <div className="number-text-font">#1 / 999</div>
                            </div>
                            <div class="container">
                                <div>
                                    <div className="current-bid">Current Bid</div>
                                    <div className="price-bid">10 BUSD</div>
                                </div>
                                <div>
                                    <div className="current-bid">Ending in</div>
                                    <div className="current-bid">2d 18h 59m 18s</div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-img">
                                <img src="asset/image.png" alt="shirt" />
                                <div className="number-text-font">#1 / 999</div>
                            </div>
                            <div class="container">
                                <div>
                                    <div className="current-bid">Current Bid</div>
                                    <div className="price-bid">10 BUSD</div>
                                </div>
                                <div>
                                    <div className="current-bid">Ending in</div>
                                    <div className="current-bid">2d 18h 59m 18s</div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-img">
                                <img src="asset/image.png" alt="shirt" />
                                <div className="number-text-font">#1 / 999</div>
                            </div>
                            <div class="container">
                                <div>
                                    <div className="current-bid">Current Bid</div>
                                    <div className="price-bid">10 BUSD</div>
                                </div>
                                <div>
                                    <div className="current-bid">Ending in</div>
                                    <div className="current-bid">2d 18h 59m 18s</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <Modal title="" visible={isModalVisible} footer={false} width={820} >
                        <div className="bid-modal">
                            <div className="card-content">
                                <div className="card">
                                    <div className="img-top-modal">
                                        <img src="asset/image.png" alt="shirt" />
                                    </div>
                                </div>
                            </div>

                            <div className="count-down-details">
                                <div className="price-top-bid">#999</div>
                                <div className="price-top-current-box">
                                    <div className="price-top-current">Current Bid</div>
                                    <div className="price-top-current">Auction ending in </div>
                                </div>
                                <div className="price-top-box">
                                    <div className="price-top">200 BUSD</div>
                                    <div className="price-top-count-down">
                                        <div className="time-count">
                                            <div className="time-count-number">02</div>
                                            <div className="time-count-text">Day</div>
                                        </div>
                                        <div className="time-count">
                                            <div className="time-count-number">18</div>
                                            <div className="time-count-text">Hours</div>
                                        </div>
                                        <div className="time-count">
                                            <div className="time-count-number">59</div>
                                            <div className="time-count-text">Minutes</div>
                                        </div>
                                        <div className="time-count">
                                            <div className="time-count-number">18</div>
                                            <div className="time-count-text">Secounds</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="bid-button-modal">
                                    <div className="bid-cancel-btn" onClick={handleCancel}>
                                        <button>Cancel</button>
                                    </div>
                                    <div className="bid-place-btn" onClick={handleOk}>
                                        <button>Place a bid</button>
                                    </div>

                                </div>

                            </div>

                        </div>


                    </Modal>

                </div>
            </div>
        </div>
    )
}

