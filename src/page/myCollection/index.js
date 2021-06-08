import { useState, useEffect, useContext } from "react";
import { Button, Modal, Row, Col, Form, Input, Select } from "antd";
// 
import LiveAuctionFooter from "../../component/liveAuction/footer-live-action";
import Navigation from "../../component/navigation";
import { useBidData } from "../../hooks/useBidData";
import { AppContext } from "../../context";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Card } from "antd";
import IMAGES from "../../assets/auction/robots/robotImg";
import { Moon } from "../../component/svg";
import countryCodes from "../../countryCode.json";
import { AUCTION_ADDRESS } from "../../config/contract";
import { useBUSDContract } from "../../hooks/useBUSDContract";
import { useAuctionContract } from "../../hooks/useAuctionContract";
import { useShirtContract } from "../../hooks/useShirtContract";
import axios from "axios";

const rewardHeroName = ["T-Shirt", "Cap", "Polo Shirt", "Hoodie", "Mascot"];
const rewardHeroNum = [
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [2, 1, 2, 1, 0],
    [2, 2, 2, 2, 1],
];
const rewardHeroImg = [
    "/img/Unlock-hover/T-Shirt-Front.png",
    "/img/Unlock-hover/Gap.png",
    "/img/Unlock-hover/Polo-Front.png",
    "/img/Unlock-hover/Hoodie-Front.png",
    "/img/Unlock-hover/Robot-Front.png",
];
const shirtOptions = ['S 38"', 'M 40"', 'L 42"', 'XL 44"', '2XL 46"', '3XL 48"', '4XL 50"', '5XL 52"'];

const Star = (props) => (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z"
            fill="#00BCD4"
        />
    </svg>
);

const QuestionRobot = (props) => (
    <svg width="103" height="105" viewBox="0 0 103 105" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="51.8736" cy="52.7467" rx="50.4869" ry="52.158" fill="#C5CAE9" />
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="102" height="105">
            <ellipse cx="51.1256" cy="52.7467" rx="50.4869" ry="52.158" fill="#5C6BC0" />
        </mask>
        <g mask="url(#mask0)">
            <path
                d="M51.9389 123.608C51.9389 123.608 88.2364 126.33 95.8647 76.75C96.0677 75.441 96.1837 74.1191 96.2169 72.7929C96.4738 61.3494 95.065 4.56371 51.8477 0.921997L51.74 0.921997C7.34593 4.14468 7.11389 61.3494 7.37079 72.7929C7.39979 74.1191 7.51996 75.441 7.72299 76.75C15.3513 126.33 51.6985 123.604 51.6985 123.604L51.9389 123.608Z"
                fill="url(#paint0_linear)"
            />
            <path
                d="M103.882 132.283H96.2326C96.2326 132.283 81.0672 98.4665 51.7847 99.5853C22.5022 98.4622 7.33678 132.283 7.33678 132.283H-0.30808C-7.58002 107.456 5.90725 80.2277 7.71799 76.7501C8.09091 78.9965 6.01498 87.1914 51.7847 87.1914C97.5544 87.1914 95.3417 79.1563 95.8141 77.0655C97.6248 80.543 111.154 107.452 103.882 132.283Z"
                fill="#1B134E"
            />
            <path
                d="M51.879 76.7716C51.8542 76.819 51.7922 76.9395 51.6973 77.1203C51.7716 76.9395 51.8459 76.819 51.879 76.7716Z"
                stroke="#270D0D"
                stroke-miterlimit="10"
            />
            <path
                d="M51.879 77.1203C51.784 76.9395 51.722 76.819 51.6973 76.7716C51.7303 76.819 51.8046 76.9395 51.879 77.1203Z"
                stroke="#270D0D"
                stroke-miterlimit="10"
            />
            <path
                d="M76.4431 55.9279C76.4431 68.6761 67.4888 78.9965 51.7848 78.9965C36.0807 78.9965 27.1348 68.6761 27.1348 55.9279C27.1348 43.1798 36.0807 32.8335 51.7848 32.8335C67.4888 32.8335 76.4431 43.1798 76.4431 55.9279Z"
                fill="#262635"
            />
            <path
                d="M51.4668 53.7333C41.4103 53.7333 32.8249 58.8222 29.3857 65.9976C32.8249 73.173 41.9407 79.2512 51.9971 79.2512C62.0536 79.2512 70.9332 73.0348 74.3723 65.8594C70.9373 58.6883 61.519 53.7333 51.4668 53.7333Z"
                fill="#363649"
            />
            <path
                opacity="0.4"
                d="M65.2508 39.97C65.9465 39.97 66.5105 39.3821 66.5105 38.6568C66.5105 37.9315 65.9465 37.3435 65.2508 37.3435C64.5552 37.3435 63.9912 37.9315 63.9912 38.6568C63.9912 39.3821 64.5552 39.97 65.2508 39.97Z"
                fill="white"
            />
            <path
                opacity="0.4"
                d="M70.6382 46.2729C70.2612 46.2211 69.9297 45.9576 69.7888 45.5601C69.1134 43.6248 66.9173 41.9443 66.8966 41.9271C66.4284 41.5728 66.3207 40.886 66.6604 40.3978C67.0002 39.9053 67.659 39.7973 68.1273 40.1516C68.2391 40.2336 70.8661 42.2381 71.7653 44.8128C71.9642 45.383 71.6824 46.0094 71.1355 46.2168C70.9697 46.2772 70.7998 46.2945 70.6382 46.2729Z"
                fill="#FCFDFF"
            />
            <path
                d="M7.33691 132.283L10.4156 131.194C10.4156 131.194 24.4125 102.311 51.789 99.5809C51.789 99.5809 24.9263 96.2373 7.33691 132.283Z"
                fill="#110B35"
            />
            <path
                d="M96.328 132.283L93.2494 131.195C93.2494 131.195 79.2524 102.312 51.876 99.5814C51.8801 99.5814 78.7428 96.2378 96.328 132.283Z"
                fill="#110B35"
            />
            <path
                d="M-0.421402 91.0447L3.31607 86.1804L5.81877 92.7208L-2.20312 110.225L-0.421402 91.0447Z"
                fill="url(#paint1_linear)"
            />
            <path
                d="M3.31607 86.1804L4.19036 92.3925L-2.20312 110.225L5.81877 92.7208L3.31607 86.1804Z"
                fill="#C1C1C1"
            />
            <path
                d="M103.975 91.0448L99.8973 86.2626L97.7344 92.7209L105.756 110.225L103.975 91.0448Z"
                fill="url(#paint2_linear)"
            />
            <path
                d="M99.8973 86.2626L99.3586 92.3926L105.756 110.225L97.7344 92.7209L99.8973 86.2626Z"
                fill="#C1C1C1"
            />
            <g opacity="0.39">
                <path
                    opacity="0.39"
                    d="M66.9348 18.7116C67.7013 20.7895 68.066 24.954 68.1613 26.224C68.1778 26.4443 68.3477 26.6171 68.5591 26.6301C74.7951 27.0794 76.2329 24.0684 76.5313 23.1007C76.5851 22.9322 76.5354 22.7465 76.4028 22.6298C73.925 20.4353 70.7676 18.582 69.74 18.0032C69.5742 17.9081 69.367 17.9384 69.2386 18.0809C68.9983 18.3444 68.4306 18.703 67.1295 18.6641H66.9141L66.9348 18.7116Z"
                    fill="white"
                />
                <path
                    opacity="0.39"
                    d="M68.5639 14.7457C68.336 14.4433 67.528 13.5577 65.4811 12.9141C65.4272 12.8968 65.3817 12.8536 65.361 12.7974L63.6869 8.16644C63.6331 8.02388 63.7533 7.88132 63.8983 7.91156C65.1206 8.1794 69.5501 9.3933 73.3912 13.4325C73.4948 13.5405 73.4368 13.7305 73.2917 13.7564C72.4837 13.9033 70.412 14.3008 68.7628 14.8105C68.6882 14.8364 68.6136 14.8105 68.5639 14.7457Z"
                    fill="white"
                />
                <path
                    opacity="0.39"
                    d="M62.2604 13.8604C62.19 14.9663 62.5256 15.8044 62.7742 16.2537C62.8861 16.4567 62.7908 16.7116 62.5795 16.7893C61.2991 17.2516 57.5326 18.6296 55.9788 19.4807C55.8172 19.5671 55.6225 19.5195 55.5189 19.364C54.7233 18.1847 51.8311 13.45 54.1846 10.2792C54.2799 10.1496 54.4415 10.1021 54.5866 10.1539C55.5769 10.5168 59.447 11.9942 62.0657 13.6271C62.0906 13.6444 62.1154 13.6617 62.1361 13.6833L62.2273 13.7783L62.2604 13.8604Z"
                    fill="white"
                />
                <path
                    opacity="0.39"
                    d="M67.9745 17.0314C68.4095 16.3791 67.8626 15.2041 66.7604 14.4092C65.6541 13.6143 64.4069 13.502 63.9718 14.1543C63.5368 14.8066 64.0837 15.9817 65.1859 16.7765C66.2922 17.5757 67.5394 17.688 67.9745 17.0314Z"
                    fill="white"
                />
            </g>
            <path
                d="M48.7579 57.6481C48.7579 57.2561 48.8886 56.9201 49.1499 56.6401C49.4299 56.3601 49.7659 56.2201 50.1579 56.2201C50.9606 56.2015 51.6792 56.0521 52.3139 55.7721C52.9486 55.4921 53.4526 55.0721 53.8259 54.5121C54.1992 53.9521 54.3859 53.2521 54.3859 52.4121C54.3859 51.6841 54.2179 51.0588 53.8819 50.5361C53.5646 49.9948 53.1259 49.5748 52.5659 49.2761C52.0059 48.9588 51.3712 48.8001 50.6619 48.8001C50.0459 48.8001 49.4766 48.9215 48.9539 49.1641C48.4312 49.4068 47.9646 49.7241 47.5539 50.1161C47.3112 50.3401 47.0126 50.5081 46.6579 50.6201C46.3219 50.7135 45.9766 50.6295 45.6219 50.3681C45.2486 50.1068 45.0432 49.7801 45.0059 49.3881C44.9686 48.9961 45.1086 48.6321 45.4259 48.2961C46.0606 47.5868 46.8352 47.0268 47.7499 46.6161C48.6646 46.2055 49.6352 46.0001 50.6619 46.0001C51.8752 46.0001 52.9766 46.2801 53.9659 46.8401C54.9552 47.4001 55.7392 48.1561 56.3179 49.1081C56.8966 50.0601 57.1859 51.1615 57.1859 52.4121C57.1859 53.2708 57.0459 54.0548 56.7659 54.7641C56.4859 55.4735 56.0846 56.0895 55.5619 56.6121C55.0392 57.1348 54.4326 57.5548 53.7419 57.8721C53.0699 58.1895 52.3326 58.3948 51.5299 58.4881C51.4926 58.5068 51.4739 58.5161 51.4739 58.5161C51.4926 58.5161 51.5206 58.5161 51.5579 58.5161V60.1961C51.5579 60.5881 51.4179 60.9241 51.1379 61.2041C50.8766 61.4655 50.5499 61.5961 50.1579 61.5961C49.7472 61.5961 49.4112 61.4655 49.1499 61.2041C48.8886 60.9241 48.7579 60.5881 48.7579 60.1961V57.6481ZM50.0739 66.6921C49.6072 66.6921 49.2432 66.5615 48.9819 66.3001C48.7392 66.0388 48.6179 65.6748 48.6179 65.2081V64.7041C48.6179 64.2188 48.7392 63.8548 48.9819 63.6121C49.2432 63.3508 49.6072 63.2201 50.0739 63.2201H50.3539C50.8392 63.2201 51.2032 63.3508 51.4459 63.6121C51.6886 63.8548 51.8099 64.2188 51.8099 64.7041V65.2081C51.8099 65.6748 51.6886 66.0388 51.4459 66.3001C51.2032 66.5615 50.8392 66.6921 50.3539 66.6921H50.0739Z"
                fill="#4DD0E1"
            />
        </g>
        <defs>
            <linearGradient
                id="paint0_linear"
                x1="14.2788"
                y1="102.352"
                x2="92.0889"
                y2="27.7186"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#BBBDBF" />
                <stop offset="0.5832" stop-color="#DDDEDF" />
                <stop offset="1" stop-color="#F1F1F2" />
            </linearGradient>
            <linearGradient
                id="paint1_linear"
                x1="4.12182"
                y1="100.806"
                x2="-3.52709"
                y2="95.6688"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#BBBDBF" />
                <stop offset="0.5832" stop-color="#DDDEDF" />
                <stop offset="1" stop-color="#F1F1F2" />
            </linearGradient>
            <linearGradient
                id="paint2_linear"
                x1="99.3941"
                y1="100.752"
                x2="107.043"
                y2="95.6146"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#BBBDBF" />
                <stop offset="0.5832" stop-color="#DDDEDF" />
                <stop offset="1" stop-color="#F1F1F2" />
            </linearGradient>
        </defs>
    </svg>
);

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
                <LazyLoadImage className="overlay w-full h-full" alt="shirt" src="/img/auction/base-back-shirt.png" />
                <div className="shirt-image relative">
                    <LazyLoadImage alt="shirt" src="/img/auction/base-front-shirt.png" />
                    <LazyLoadImage
                        alt="nong egg"
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
                    <div className="live-bid-number">{props.bidPrice / 10 ** 18}</div>
                    <div className="live-bid-number">
                        {props.bidAddress
                            ? `${props.bidAddress.substring(0, 5)}...${props.bidAddress.substring(
                                  props.bidAddress.length - 4,
                                  props.bidAddress.length
                              )}`
                            : ""}
                    </div>
                </div>
            </div>
            {props.isClaimed ? (
                <Button className="btn-approve mt-4" size="large" disabled={true}>
                    Already Claimed
                </Button>
            ) : (
                <Button
                    className="btn-approve mt-4 bg-primary"
                    type="primary"
                    size="large"
                    onClick={() => {
                        props.setIsInfoModalOpen(true);
                        props.setIsModalOpenForTokneID(props.id);
                    }}
                >
                    Claim it now
                </Button>
            )}
            <Button
                className="btn-approve mt-2 mmd:hidden"
                size="large"
                onClick={() => {
                    window.open(window.location.origin + `/download/${props.id}`);
                }}
            >
                Download File
            </Button>

            <a
                className="md:hidden lg:hidden"
                href={window.location.origin + `/download/${props.id}`}
                target="_blank">
                <Button className="btn-approve mt-2" size="large">Download File</Button>
            </a>
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
    const [isModalOpenForTokneID, setIsModalOpenForTokneID] = useState(false);
    const [loading, setLoading] = useState(false);

    const busdContract = useBUSDContract();
    const [auctionContract] = useAuctionContract();
    const [shirtContract] = useShirtContract();
    const [tvl, setTVL] = useState(0);

    useEffect(() => {
        if (!busdContract) return;
        busdContract.methods
            .balanceOf(AUCTION_ADDRESS)
            .call()
            .then((balance) => {
                setTVL(balance);
            });
        return () => {};
    }, [busdContract]);

    const displayTVL = (tvl) => (tvl / 10 ** 18).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

    useEffect(() => {
        if (!wallet || !bidData || bidData.length < 4) return;
        const tokenIDs = bidData[0];
        const addresses = bidData[1];
        const amounts = bidData[2];
        const time = bidData[3];
        let value = [];
        for (let i = 0; i < tokenIDs.length; i++) {
            value.push({
                id: tokenIDs[i],
                bidPrice: amounts[i],
                bidAddress: addresses[i],
                time: time[i],
            });
        }

        value = value.filter((v) => v.bidAddress.toLowerCase() === (`${wallet}`).toLowerCase());

        const pp = [];
        
        for (let i = 0; i < value.length; i++) {
            pp.push(
                shirtContract.methods
                    .ownerOf(value[i].id)
                    .call()
                    .then((result) => {
                        if (wallet) {
                            value[i].isClaimed = result.toLowerCase() === (`${wallet}`).toLowerCase();
                        } else {
                            value[i].isClaimed = false;
                        }
                    })
            );
        }
        Promise.all(pp).then(() => {
            console.log("setValue", value);
            setData(value);
        });

        return () => {};
    }, [bidData, wallet]);

    const tvlToRewardIndex = (_tvl) => {
        const tvl = _tvl / 10 ** 18;
        if (tvl >= 200000) return 4;
        if (tvl >= 100000) return 3;
        if (tvl >= 60000) return 2;
        if (tvl >= 30000) return 1;
        if (tvl >= 10000) return 0;
        return 0;
    };

    const handleFormSubmit = () => {
        form.validateFields()
            .then((values) => {
                setIsConfirmModalOpen(true);
                setIsInfoModalOpen(false);
            })
            .catch((info) => {
                console.log("Validate Failed:", info);
            });
    };

    const handleConfirmSubmit = () => {
        setLoading(true);
        console.log("confirm", isModalOpenForTokneID);
        const _form = form;

        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        };

        form.validateFields()
            .then((values) => {
                const params = new URLSearchParams();
                params.append("wallet", wallet);
                params.append("tokenID", isModalOpenForTokneID);
                for (const [key, value] of Object.entries(values)) {
                    // console.log(`${key}: ${value}`);
                    params.append(key, value);
                }

                return axios.post("https://www.formbackend.com/f/e91eb102c26633b2", params, config);
            })
            .then(() => {
                return auctionContract.methods.claimReward(isModalOpenForTokneID).send({
                    from: wallet,
                });
            })
            .then((result) => {
                console.log("result", result);
                const params = new URLSearchParams();
                params.append("wallet", wallet);
                params.append("tokenID", isModalOpenForTokneID);
                params.append("transactionHash", result.transactionHash);
                return axios.post("https://www.formbackend.com/f/bf68bb6574b69f0c", params, config);
            })
            .then(() => {
                const objIndex = data.findIndex((obj) => obj.id == isModalOpenForTokneID);
                data[objIndex].isClaimed = true;
                setData(data);
                _form.resetFields();
                setIsConfirmModalOpen(false);
            })
            .catch((info) => {
                console.log("Validate Failed:", info);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="bg-primary">
            <Navigation />
            <div className="pt-12 container mx-auto mb-16 sm:px-0 px-4">
                <div className="pt-16 flex sm:flex-row flex-col items-center">
                    <Moon className="h-24 sm:mr-6 sm:mb-0 mb-6" />
                    <div className="flex flex-col text-white space-y-2">
                        <span className="font-semibold text-xl">
                            <div>Total Bidding Value Lock</div>
                            <div>{displayTVL(tvl)} BUSD</div>
                        </span>
                        <div className="flex flex-col space-y-2 mt-2">
                            {rewardHeroNum[tvlToRewardIndex(tvl)].map((num, idx) =>
                                num === 0 ? null : (
                                    <div className="flex space-x-2 items-center" key={idx}>
                                        <Star className="w-4" />
                                        <div>
                                            Get {num} {rewardHeroName[idx]} per auction
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex sm:flex-row flex-col align-middle items-center sm:space-x-4 space-x-0 sm:space-y-0 space-y-2">
                    {rewardHeroImg.slice(0, tvlToRewardIndex(tvl) + 1).map((url, idx) => (
                        <div
                            key={idx}
                            className={`bg-white rounded-full ${
                                tvlToRewardIndex(tvl) > 2 ? "p-2" : "p-3"
                            } h-48 w-48 flex justify-center items-center`}
                        >
                            <LazyLoadImage alt={rewardHeroName[idx]} src={url} />
                        </div>
                    ))}
                </div>
                <div className="mt-12">
                    <h1 className="text-4xl text-white font-semibold my-6">My Collection</h1>
                    <div className="">
                        <Row gutter={[16, 16]}>
                            {data.map((current) => (
                                <Col sm={12} md={8} key={current.id}>
                                    <ShirtCard
                                        id={current.id}
                                        bidPrice={current.bidPrice}
                                        bidAddress={current.bidAddress}
                                        isClaimed={current.isClaimed}
                                        setIsInfoModalOpen={setIsInfoModalOpen}
                                        setIsModalOpenForTokneID={setIsModalOpenForTokneID}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
            <LiveAuctionFooter />
            <Modal
                // title="Receiver Information"
                visible={isInfoModalOpen}
                onCancel={() => setIsInfoModalOpen(false)}
                footer={[
                    <Button key="s" className="bg-primary" type="primary" size="large" block onClick={handleFormSubmit}>
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
                    <span className="text-2xl font-bold">Receiver Information</span>
                    <Row gutter={16} className="mt-4">
                        <Col xs={24} md={12}>
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
                                <Input placeholder="Name" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
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
                                <Input placeholder="Last name" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="Country Code"
                                name="countryCode"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select your country code",
                                    },
                                ]}
                                initialValue="Thailand (+66)"
                            >
                                <Select
                                    showSearch
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    {countryCodes.map((c) => (
                                        <Select.Option value={c.code} key={c.code}>
                                            {`${c.name} (${c.dial_code})`}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
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
                                        message: "Please input your phone number",
                                        // type: "regexp",
                                        // eslint-disable-next-line no-useless-escape
                                    },
                                ]}
                            >
                                <Input placeholder="Phone number" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
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
                                <Input placeholder="Email" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
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
                                <Input placeholder="username" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <span className="text-2xl font-bold">Size</span>
                    <div className="flex flex-col space-y-3 my-4">
                        {rewardHeroNum[tvlToRewardIndex(tvl)].map((num, idx) => {
                            let options, name, imgUrl;
                            switch (idx) {
                                case 0:
                                    name = rewardHeroName[idx];
                                    options = shirtOptions;
                                    imgUrl = rewardHeroImg[idx];
                                    break;
                                case 1:
                                    name = rewardHeroName[idx];
                                    options = null;
                                    imgUrl = rewardHeroImg[idx];
                                    break;
                                case 2:
                                    name = rewardHeroName[idx];
                                    options = shirtOptions;
                                    imgUrl = rewardHeroImg[idx];
                                    break;
                                case 3:
                                    name = rewardHeroName[idx];
                                    options = shirtOptions.slice(0, shirtOptions.length - 2);
                                    imgUrl = rewardHeroImg[idx];
                                    break;
                                case 4:
                                    name = rewardHeroName[idx];
                                    options = null;
                                    imgUrl = rewardHeroImg[idx];
                                    break;

                                default:
                                    break;
                            }

                            return options ? (
                                Array.from(Array(num)).map((_, idx) => (
                                    <div
                                        key={name + idx}
                                        className="flex border rounded border-warmGray-300 p-4 space-x-8 items-center"
                                    >
                                        <LazyLoadImage alt={name} src={imgUrl} className="h-24" />
                                        <div className="sm:w-1/3 w-full">
                                            <span className="text-lg sm:text-xl">{name}</span>

                                            <Form.Item
                                                label="Size"
                                                name={name + idx}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Please select your size",
                                                    },
                                                ]}
                                            >
                                                <Select
                                                    // defaultValue={options[0]}
                                                    placeholder={"Select your size"}
                                                >
                                                    {options.map((option) => (
                                                        <Select.Option value={option} key={option}>
                                                            {option}
                                                        </Select.Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                        </div>
                                    </div>
                                ))
                            ) : num > 0 ? (
                                <div
                                    key={name}
                                    className="flex border rounded border-warmGray-300 p-4 space-x-8 items-center"
                                >
                                    <LazyLoadImage alt={name} src={imgUrl} className="h-24" />
                                    <div style={{ width: "30%" }}>
                                        <span className="text-lg sm:text-xl">
                                            {name} x{num}
                                        </span>
                                    </div>
                                </div>
                            ) : null;
                        })}
                    </div>
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
                            <Input.TextArea rows={3} placeholder="Address" />
                            {/* <Input
                                placeholder="Address (Cont.)"
                                className="mt-4"
                            /> */}
                        </Form.Item>
                    </div>
                    <Row gutter={16}>
                        <Col xs={24} md={12}>
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
                                <Input placeholder="Country" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
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
                                <Input placeholder="State" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
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
                                <Input placeholder="City" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
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
                                <Input placeholder="Post code" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
            <Modal visible={isConfirmModalOpen} footer={null}>
                <div className="flex flex-col items-center space-y-4">
                    <QuestionRobot />
                    <span className="text-xl text-center">Once you submitted, your response cannot be edited</span>
                    <div className="flex space-x-4">
                        <Button
                            key="cancel"
                            type="text"
                            onClick={() => {
                                setIsConfirmModalOpen(false);
                                setIsInfoModalOpen(true);
                            }}
                            size="large"
                            loading={loading}
                        >
                            Cancel
                        </Button>
                        <Button
                            key="submit"
                            type="primary"
                            className="bg-primary px-8"
                            onClick={handleConfirmSubmit}
                            size="large"
                            loading={loading}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
