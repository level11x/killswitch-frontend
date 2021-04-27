import React from 'react'
import './menu-bar.css';
import { Link } from "react-router-dom";
import { menu, menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9 } from './constant'
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
export default function MenuBar() {

    return (
        <>
            <div className="menu-bar-bg" >
                <Link to="/">
                    <span className="content-menu-header">
                        <div className="spin">
                            <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M21.1909 19.2188C22.4147 22.5563 22.994 29.2338 23.1464 31.2736C23.1725 31.6265 23.4425 31.902 23.7801 31.927C33.7383 32.6487 36.0292 27.8154 36.5061 26.265C36.5888 25.9918 36.5104 25.6958 36.3014 25.5092C32.3425 21.9849 27.3035 19.0139 25.6659 18.0873C25.4002 17.937 25.0692 17.9825 24.8624 18.2102C24.4791 18.6314 23.5732 19.2097 21.4958 19.1459H21.1539L21.1909 19.2188Z" fill="#1B134E" />
                                    <path d="M24.0453 11.8714C23.7333 11.3467 22.6189 9.80704 19.796 8.6911C19.7208 8.66154 19.6588 8.58763 19.6306 8.4891L17.3246 0.450865C17.2532 0.20452 17.4186 -0.0467515 17.614 0.00744436C19.298 0.475499 25.4022 2.57682 30.6965 9.59272C30.8393 9.78241 30.7604 10.1076 30.5593 10.1544C29.4467 10.4081 26.5938 11.1004 24.3178 11.9872C24.2163 12.0241 24.1111 11.9798 24.0453 11.8714Z" fill="#1B134E" />
                                    <path d="M14.4821 10.3465C14.3655 12.2324 14.9109 13.6564 15.309 14.4277C15.4871 14.7734 15.3376 15.2086 14.9967 15.3391C12.9294 16.1249 6.85744 18.4749 4.35254 19.9256C4.09303 20.0755 3.77635 19.9933 3.60921 19.7297C2.32927 17.7206 -2.33965 9.65022 1.46058 4.24901C1.61453 4.03141 1.87623 3.94437 2.11155 4.03625C3.70597 4.65761 9.94732 7.16963 14.1698 9.95244C14.2116 9.97903 14.249 10.0129 14.2842 10.0491L14.4337 10.2136L14.4821 10.3465Z" fill="#1B134E" />
                                    <path d="M23.3073 15.3314C23.9924 14.2325 23.1327 12.2605 21.3871 10.9268C19.6415 9.59316 17.6709 9.4029 16.9858 10.5019C16.3006 11.6008 17.1603 13.5728 18.9059 14.9065C20.6516 16.2401 22.6221 16.4304 23.3073 15.3314Z" fill="#1B134E" />
                                </g>

                            </svg> </div>
                        <div className="content-text-logo">KillSwitch</div>
                    </span>
                </Link>

                <div className="menu-bar-top-10">
                    <img className="logo-bid" src="asset/Vector.png" alt="logo" />
                    <div className="top-text">Top Auction</div>
                </div>
                <Dropdown overlay={menu}>
                    <div>
                        <div className="menu-number">
                            <div className="text-menu">#0</div>
                            <div className="text-menu">-</div>
                            <div className="text-menu">#99</div>
                            <DownOutlined />
                        </div>
                    </div>
                </Dropdown>

                <Dropdown overlay={menu1}>
                    <div>
                        <div className="menu-number">
                            <div className="text-menu">#100</div>
                            <div className="text-menu">-</div>
                            <div className="text-menu">#199</div>
                            <DownOutlined />
                        </div>
                    </div>
                </Dropdown>
                <Dropdown overlay={menu2}>
                    <div>
                        <div className="menu-number">
                            <div className="text-menu">#200</div>
                            <div className="text-menu">-</div>
                            <div className="text-menu">#299</div>
                            <DownOutlined />
                        </div>
                    </div>
                </Dropdown>
                <Dropdown overlay={menu3}>
                    <div>
                        <div className="menu-number">
                            <div className="text-menu">#300</div>
                            <div className="text-menu">-</div>
                            <div className="text-menu">#399</div>
                            <DownOutlined />
                        </div>
                    </div>
                </Dropdown>
                <Dropdown overlay={menu4}>
                    <div>
                        <div className="menu-number">
                            <div className="text-menu">#400</div>
                            <div className="text-menu">-</div>
                            <div className="text-menu">#499</div>
                            <DownOutlined />
                        </div>
                    </div>
                </Dropdown>
                <Dropdown overlay={menu5}>
                    <div>
                        <div className="menu-number">
                            <div className="text-menu">#500</div>
                            <div className="text-menu">-</div>
                            <div className="text-menu">#599</div>
                            <DownOutlined />
                        </div>
                    </div>
                </Dropdown>
                <Dropdown overlay={menu6}>
                    <div>
                        <div className="menu-number">
                            <div className="text-menu">#600</div>
                            <div className="text-menu">-</div>
                            <div className="text-menu">#699</div>
                            <DownOutlined />
                        </div>
                    </div>
                </Dropdown>
                <Dropdown overlay={menu7}>
                    <div>
                        <div className="menu-number">
                            <div className="text-menu">#700</div>
                            <div className="text-menu">-</div>
                            <div className="text-menu">#799</div>
                            <DownOutlined />
                        </div>
                    </div>
                </Dropdown>
                <Dropdown overlay={menu8}>
                    <div>
                        <div className="menu-number">
                            <div className="text-menu">#800</div>
                            <div className="text-menu">-</div>
                            <div className="text-menu">#899</div>
                            <DownOutlined />
                        </div>
                    </div>
                </Dropdown>
                <Dropdown overlay={menu9}>
                    <div>
                        <div className="menu-number">
                            <div className="text-menu">#900</div>
                            <div className="text-menu">-</div>
                            <div className="text-menu">#999</div>
                            <DownOutlined />
                        </div>
                    </div>
                </Dropdown>
            </div>
            <div id="menuToggle">
                <input type="checkbox" />
                <span className="span"></span>
                <span className="span"></span>
                <span className="span"></span>

                <ul id="menu">
                    <li>
                        <Dropdown overlay={menu1}>
                            <div>
                                <div className="menu-number-mobile">
                                    <div className="text-menu">#0</div>
                                    <div className="text-menu">-</div>
                                    <div className="text-menu">#99</div>
                                    <DownOutlined />
                                </div>
                            </div>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown overlay={menu1}>
                            <div>
                                <div className="menu-number-mobile">
                                    <div className="text-menu">#100</div>
                                    <div className="text-menu">-</div>
                                    <div className="text-menu">#199</div>
                                    <DownOutlined />
                                </div>
                            </div>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown overlay={menu1}>
                            <div>
                                <div className="menu-number-mobile">
                                    <div className="text-menu">#200</div>
                                    <div className="text-menu">-</div>
                                    <div className="text-menu">#299</div>
                                    <DownOutlined />
                                </div>
                            </div>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown overlay={menu3}>
                            <div>
                                <div className="menu-number-mobile">
                                    <div className="text-menu">#300</div>
                                    <div className="text-menu">-</div>
                                    <div className="text-menu">#399</div>
                                    <DownOutlined />
                                </div>
                            </div>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown overlay={menu3}>
                            <div>
                                <div className="menu-number-mobile">
                                    <div className="text-menu">#400</div>
                                    <div className="text-menu">-</div>
                                    <div className="text-menu">#499</div>
                                    <DownOutlined />
                                </div>
                            </div>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown overlay={menu3}>
                            <div>
                                <div className="menu-number-mobile">
                                    <div className="text-menu">#500</div>
                                    <div className="text-menu">-</div>
                                    <div className="text-menu">#599</div>
                                    <DownOutlined />
                                </div>
                            </div>
                        </Dropdown>
                    </li>

                    <li>
                        <Dropdown overlay={menu3}>
                            <div>
                                <div className="menu-number-mobile">
                                    <div className="text-menu">#600</div>
                                    <div className="text-menu">-</div>
                                    <div className="text-menu">#699</div>
                                    <DownOutlined />
                                </div>
                            </div>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown overlay={menu3}>
                            <div>
                                <div className="menu-number-mobile">
                                    <div className="text-menu">#700</div>
                                    <div className="text-menu">-</div>
                                    <div className="text-menu">#799</div>
                                    <DownOutlined />
                                </div>
                            </div>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown overlay={menu3}>
                            <div>
                                <div className="menu-number-mobile">
                                    <div className="text-menu">#800</div>
                                    <div className="text-menu">-</div>
                                    <div className="text-menu">#899</div>
                                    <DownOutlined />
                                </div>
                            </div>
                        </Dropdown>
                    </li>

                    <li>
                        <Dropdown overlay={menu3}>
                            <div>
                                <div className="menu-number-mobile">
                                    <div className="text-menu">#900</div>
                                    <div className="text-menu">-</div>
                                    <div className="text-menu">#999</div>
                                    <DownOutlined />
                                </div>
                            </div>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </>
    )
}

