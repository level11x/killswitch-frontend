import { useState, useEffect, useContext } from "react";
import { Button, Modal, Row, Col, Form, Input, Space, Select } from "antd";
import LiveAuctionFooter from "../../component/liveAuction/footer-live-action";
import Navigation from "../../component/navigation";
// import "./liveAuction.css";
import { useBidData } from "../../hooks/useBidData";
import { AppContext } from "../../context";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Card } from "antd";
import IMAGES from "../../assets/auction/robots/robotImg";
import { Moon } from "../../component/svg";
import countryCodes from "../../countryCode.json";
import { AUCTION_ADDRESS } from "../../config/contract";
import { useBUSDContract } from "../../hooks/useBUSDContract";

const rewards = [
    {
        name: "shirt",
        optionText: "Size",
        options: ["S", "M", "L"],
        imgSrc: "/img/auction/base-front-shirt.png",
        unlockAt: 0,
    },
    {
        name: "gap",
        optionText: "Size",
        options: ["S", "test", "L"],
        imgSrc: "/img/auction/base-front-shirt.png",
        unlockAt: 1000,
    },
    {
        name: "hoodie",
        optionText: "Size",
        options: ["S", "M", "L"],
        imgSrc: "/img/auction/base-front-shirt.png",
        unlockAt: 2000,
    },
];

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

    const busdContract = useBUSDContract();
    const [tvl, setTVL] = useState(0);
    useEffect(() => {
        if (!busdContract) return;
        busdContract.methods
            .balanceOf(AUCTION_ADDRESS)
            .call()
            .then((balance) => {
                console.log(balance);
                setTVL(
                    (balance / 10 ** 18)
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                );
            });
    }, [busdContract]);

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
            <div className="pt-16 flex flex-row">
                <Moon className="" />
                <div className="flex flex-col text-white">
                    <div className="">Total Bidding Value Lock</div>
                    <div>{tvl} BUSD</div>
                </div>
            </div>
            <div className="flex align-middle space-x-8">
                {rewards
                    .filter((r) => r.unlockAt < tvl)
                    .map((reward) => (
                        <div
                            className="bg-white rounded-full"
                            style={{ padding: "2rem" }}
                        >
                            <LazyLoadImage
                                alt={reward.name}
                                src={reward.imgSrc}
                            />
                        </div>
                    ))}
            </div>
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
                    <div className="flex flex-col space-y-3 mt-4">
                        {rewards
                            .filter((r) => r.unlockAt < 2001)
                            .map((reward) => (
                                <div className="flex border rounded border-gray p-4 space-x-8 items-center">
                                    <LazyLoadImage
                                        alt={reward.name}
                                        src={reward.imgSrc}
                                        width="20%"
                                    />
                                    <div style={{ width: "30%" }}>
                                        {/* <span className="text-xl">
                                            {reward.optionText}
                                        </span> */}
                                        <Form.Item
                                            label={reward.optionText}
                                            name={reward.name}
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please select your " +
                                                        reward.optionText,
                                                },
                                            ]}
                                        >
                                            <Select
                                                size="large"
                                                // defaultValue={reward.options[0]}
                                                placeholder={
                                                    "Select your " +
                                                    reward.optionText
                                                }
                                            >
                                                {reward.options.map(
                                                    (option) => (
                                                        <Select.Option
                                                            value={option}
                                                        >
                                                            {option}
                                                        </Select.Option>
                                                    )
                                                )}
                                            </Select>
                                        </Form.Item>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <span className="text-2xl font-bold mt-4">
                        Shipping Address
                    </span>
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
