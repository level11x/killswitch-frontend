import { useState, useEffect, useContext } from "react";
import { Button, Modal, Row, Col, Form, Input, Space, Select } from "antd";
import HeaderLiveAuction from "../../component/liveAuction/header-live-action";
import CollectibileLiveAuction from "../../component/liveAuction/collectibles";
import LiveAuctionContent from "../../component/liveAuction/content-live-auction";
import LiveAuctionFooter from "../../component/liveAuction/footer-live-action";
import Navigation from "../../component/navigation";
// import "./liveAuction.css";
import { useBidData } from "../../hooks/useBidData";
import { BigNumber } from "@ethersproject/bignumber";
import { AppContext } from "../../context";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Card } from "antd";
import IMAGES from "../../assets/auction/robots/robotImg";
import countryCodes from "../../countryCode.json";

const ShirtCard = (props) => {
    return (
        <Card
            hoverable
            // onClick={() =>
            //     showModalBidOrApprove(current.id)
            // }
        >
            <div className="box-number">{props.id}</div>
            <div className="shirt-card-box" id="shirt">
                <LazyLoadImage
                    className="overlay w-full h-full"
                    alt="shirt"
                    src="/img/auction/base-back-shirt.png"
                />
                <div className="shirt-image relative">
                    <LazyLoadImage
                        alt="shirt"
                        src="/img/auction/base-front-shirt.png"
                    />
                    <LazyLoadImage
                        alt=""
                        src={IMAGES[props.id]}
                        className="absolute block left-1/2 top-3/10 transform -translate-x-1/2 w-1/3 h-auto"
                    />
                    {/* <LazyLoadImage alt="" src={IMAGES[props.id]} className="absolute block left-1/2 top-1/4 transform -translate-x-1/2 w-20 h-20" /> */}
                    {/* <span>{props.id}</span> */}
                </div>
            </div>
            <div className="live-bid-box">
                <div className="live-bid-current">
                    <div className="live-bid-text">Current Bid</div>
                    <div className="live-bid-text">Bid placed</div>
                </div>
                <div className="live-bid-price">
                    <div className="live-bid-number">
                        {props.bidPrice / 10 ** 18}
                    </div>
                    <div className="live-bid-number">
                        {props.bidAddress
                            ? `${props.bidAddress.substring(
                                  0,
                                  5
                              )}...${props.bidAddress.substring(
                                  props.bidAddress.length - 4,
                                  props.bidAddress.length
                              )}`
                            : ""}
                    </div>
                </div>
            </div>
            <Button
                className="btn-approve mt-4"
                onClick={() => props.setIsInfoModalOpen(true)}
            >
                Claim it now
            </Button>
        </Card>
    );
};

export const MyCollectionPage = () => {
    const { wallet } = useContext(AppContext);
    const [form] = Form.useForm();
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const { bidData } = useBidData();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!bidData || bidData.length < 4) return;
        const tokenIDs = bidData[0];
        const addresses = bidData[1];
        const amounts = bidData[2];
        const time = bidData[3];
        const value = [];
        for (let i = 0; i < tokenIDs.length; i++) {
            value.push({
                id: tokenIDs[i],
                bidPrice: amounts[i],
                bidAddress: addresses[i],
                time: time[i],
            });
        }
        // setData(value);
        setData(
            value.filter(
                (v, idx) =>
                    idx < 2 || // for mock purpose
                    v.bidAddress.toLowerCase() === wallet.toLowerCase()
            )
        );
        return () => {};
    }, [bidData]);

    const handleFormSubmit = () => {
        console.log("submit");
        form.validateFields()
            .then((values) => {
                // form.resetFields();
                console.log(values);
                setIsConfirmModalOpen(true);
                setIsInfoModalOpen(false);
            })
            .catch((info) => {
                console.log("Validate Failed:", info);
            });
    };

    const handleConfirmSubmit = () => {
        console.log("confirm");
        setIsConfirmModalOpen(false);
    };

    return (
        <div>
            <Navigation />
            <div className="pt-16">
                <h1 className="text-4xl text-white font-bold">My Collection</h1>
                {/* <CollectibileLiveAuction onFinishSearch={onFinishSearch} /> */}
                {/* <LiveAuctionContent filterData={filterData} /> */}
                <div className="">
                    <Row>
                        {data.map((current, index) => (
                            <Col sm={12} md={8}>
                                <div className="" key={current.id}>
                                    <ShirtCard
                                        id={current.id}
                                        bidPrice={current.bidPrice}
                                        bidAddress={current.bidAddress}
                                        setIsInfoModalOpen={setIsInfoModalOpen}
                                    />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
                <LiveAuctionFooter />
            </div>
            <Modal
                // title="Receiver Information"
                visible={isInfoModalOpen}
                onCancel={() => setIsInfoModalOpen(false)}
                footer={[
                    <Button
                        key="s"
                        type="primary"
                        size="large"
                        block
                        onClick={handleFormSubmit}
                    >
                        Submit
                    </Button>,
                ]}
            >
                <Form
                    layout="vertical"
                    form={form}
                    scrollToFirstError={true}
                    // eslint-disable-next-line no-template-curly-in-string
                    validateMessages={{ required: "please input ${name}" }}
                >
                    <span className="text-2xl font-bold">
                        Receiver Information
                    </span>
                    <Row gutter={16} className="mt-4">
                        <Col sm={24} md={12}>
                            <Form.Item
                                label="First Name"
                                name="firstname"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your first name",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col sm={24} md={12}>
                            <Form.Item
                                label="Last Name"
                                name="lastname"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your last name",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col sm={24} md={12}>
                            <Form.Item
                                label="Country Code"
                                name="countryCode"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please select your country code",
                                    },
                                ]}
                            >
                                <Select>
                                    {countryCodes.map((c) => (
                                        <Select.Option value={c.code}>
                                            {`${c.name} (${c.dial_code})`}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col sm={24} md={12}>
                            <Form.Item
                                label="Phone Number"
                                name="phone"
                                rules={[
                                    {
                                        pattern: /^[-0-9]*$/,
                                        message: "Please input valid number",
                                    },
                                    {
                                        required: true,
                                        message:
                                            "Please input your phone number",
                                        // type: "regexp",
                                        // eslint-disable-next-line no-useless-escape
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col sm={24} md={12}>
                            <Form.Item
                                label="Email Address"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your email",
                                    },
                                    {
                                        type: "email",
                                        message: "Please input valid email",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col sm={24} md={12}>
                            <Form.Item
                                label="Telegram"
                                name="telegram"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your telegram",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <span className="text-2xl font-bold">Size</span>
                    {data.map((current) => (
                        <div className="flex flex-row items-center">
                            {/* <div className="">{current.id}</div> */}
                            <div className="shirt-card-box" id="shirt">
                                <LazyLoadImage
                                    className="overlay w-full h-full"
                                    alt="shirt"
                                    src="/img/auction/base-back-shirt.png"
                                />
                                <div className="shirt-image relative">
                                    <LazyLoadImage
                                        alt="shirt"
                                        src="/img/auction/base-front-shirt.png"
                                    />
                                    <LazyLoadImage
                                        alt=""
                                        src={IMAGES[current.id]}
                                        className="absolute block left-1/2 top-3/10 transform -translate-x-1/2 w-1/3 h-auto"
                                    />
                                    {/* <LazyLoadImage alt="" src={IMAGES[props.id]} className="absolute block left-1/2 top-1/4 transform -translate-x-1/2 w-20 h-20" /> */}
                                    {/* <span>{props.id}</span> */}
                                </div>
                            </div>
                            <div>
                                <Form.Item
                                    label="Size"
                                    name={`size${current.id}`}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please select your size",
                                        },
                                    ]}
                                >
                                    <Select>
                                        {["S", "M", "L", "XL"].map((c) => (
                                            <Select.Option value={c}>
                                                {c}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                    ))}
                    <span className="text-2xl font-bold">Shipping Address</span>
                    <div className="mt-4">
                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your address",
                                },
                            ]}
                        >
                            <Input placeholder="Address" />
                            {/* <Input
                                placeholder="Address (Cont.)"
                                className="mt-4"
                            /> */}
                        </Form.Item>
                    </div>
                    <Row gutter={16}>
                        <Col sm={24} md={12}>
                            <Form.Item
                                label="Country"
                                name="country"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select your country",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col sm={24} md={12}>
                            <Form.Item
                                label="State"
                                name="state"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select your state",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col sm={24} md={12}>
                            <Form.Item
                                label="City"
                                name="city"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select your city",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col sm={24} md={12}>
                            <Form.Item
                                label="Post code"
                                name="postal"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select your post code",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
            <Modal
                visible={isConfirmModalOpen}
                onOk={handleConfirmSubmit}
                onCancel={() => {
                    setIsConfirmModalOpen(false);
                    setIsInfoModalOpen(true);
                }}
            >
                <span className="text-xl">
                    Once you submitted, your response cannot be edited
                </span>
            </Modal>
        </div>
    );
};
