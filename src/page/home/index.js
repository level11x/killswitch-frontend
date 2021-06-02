import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

// import '../../full-tailwind.css'

const Container = ({ children }) => {
  return (
    <div className="w-full" style={{ maxWidth: "1440px" }}>
      {children}
    </div>
  );
};

const HomePage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isPopupShow, setIsPopupShow] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleOpenModal = () => {
    if (!isPopupShow) {
      document.body.style.overflow = "hidden";
      setIsShowModal(true);
    }
  };

  const handleCloseModal = () => {
    document.body.style.overflow = "unset";
    setIsShowModal(false);
    setIsPopupShow(true);
  };

  const handleCloseDefultModal = () => {
    document.body.style.overflow = "unset";
    setIsShowModal(false);
  };

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden relative">
      <nav className="flex px-6 h-nav w-full bg-white justify-center mmd:px-0">
        <Container>
          <div className="mmd:hidden w-full h-full flex items-center ">
            <a href="">
              <img src="/svg/home/logo.svg" alt="" />
            </a>
            <div className="pr-8 h-full flex items-center flex-1 justify-end">
              <a
                className="px-6 flex h-full items-center border-blue-500 border-b-4 text-xl font-semibold py-6 "
                href="/home"
              >
                Home
              </a>
              {isPopupShow ? (
                <a
                  className="px-6 flex h-full items-center border-transparent border-b-4 text-xl font-semibold py-6 "
                  href="/"
                >
                  Auction
                </a>
              ) : (
                <div
                  className="px-6 flex h-full items-center border-transparent border-b-4 text-xl font-semibold py-6 cursor-pointer "
                  onClick={handleOpenModal}
                >
                  Auction
                </div>
              )}
            </div>
          </div>

          <div className="w-full fixed left-0 p-4 flex md:hidden bg-white">
            <button className="cursor-pointer" onClick={toggleMenuOpen}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </button>
            <div className="h-full flex items-center flex-1 justify-end space-x-lg ">
              <button className="px-4 py-2 bg-primaries-1000 rounded text-white">
                Launch App
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div
              className="w-full fixed top-nav left-0 bg-white flex flex-col md:hidden"
              style={{ top: "72px" }}
            >
              <a
                className="px-4 flex h-full items-center text-xl font-semibold py-4 border-grey-70 border-b-2 bg-grey-10"
                href="/"
              >
                Home
              </a>
              <a
                className="px-4 flex h-full items-center text-xl font-semibold py-4 bg-grey-10"
                href="/"
              >
                Live Auction
              </a>
            </div>
          )}
        </Container>
      </nav>
      <section className="Hero">
        <div className="bg-blue-900 w-full">
          <div
            className="w-full h-full bg-cover bg-no-repeat bg-bottom-center flex justify-center h-[830px] mmd:h-full"
            style={{
              backgroundImage: `url('/svg/home/bg_large.svg')`,
            }}
          >
            <Container>
              <div className="block ml-16 w-[675px] mmd:m-4 mmd:mt-48 mmd:w-auto">
                <div className="font-semibold text-5xl flex flex-wrap text-white mb-4 leading-normal mmd:text-3xl mmd:mt-24 mt-32 whitespace-pre-line">
                  {`KillSwitch is a Smart Yield
                  Farming Aggregator`}
                </div>
                <div className="text-base flex flex-wrap text-white leading-relaxed mb-12 mmd:mb-8 whitespace-pre-line">
                  {`KillSwitch is a smart yield farming aggregator targeting to
                  increase convenience and security for Binance Smart Chain
                  yield farmers. Users are free to unstake, withdraw Liquidity
                  Position from their funds and sell their high risk coins
                  instantly in one click.`}
                </div>

                <div className="flex space-x-5 mb-24 mmd:block mmd:space-x-0 mmd:mb-8">
                  <button className="bg-secondaries-500 px-4 py-2 rounded text-white font-semibold  mmd:block mmd:mb-4">
                    White paper
                  </button>
                  <button
                    className="border-secondaries-500 border-2 px-4 py-2 rounded text-secondaries-500 font-semibold  mmd:block"
                    onClick={handleOpenModal}
                  >
                    KillSwitch Auction
                  </button>
                </div>

                <div className="block w-max mmd:w-auto">
                  <img
                    className="shadow-md rounded mb-4 cursor-pointer w-[540px] h-[220px] mmd:h-auto "
                    onClick={handleOpenModal}
                    src="/img/home/banner.png"
                    alt="banner"
                  />

                  <div className="flex space-x-2 justify-center">
                    <div className="rounded-full bg-white w-4 h-4 mmd:w-3 mmd:h-3"></div>
                    <div className="rounded-full bg-secondaries-400 w-4 h-4 mmd:w-3 mmd:h-3"></div>
                    <div className="rounded-full bg-white w-4 h-4 mmd:w-3 mmd:h-3"></div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>
      <section className="Hero-detail">
        <div className="bg-primaries-600 w-full flex justify-center">
          <Container>
            <div className="block ml-16 mb-8 mt-16 mmd:mx-4 mmd:my-6">
              <div className="font-semibold text-4xl flex flex-wrap text-white mb-4 leading-normal w-[916px] mmd:w-auto mmd:text-2xl">
                KillSwitch is created for high risk yield farmers by high risk
                yield farmers (HRYF).
              </div>
              <div className="block w-[640px] mmd:w-auto">
                <div className="text-base flex flex-wrap text-white leading-relaxed mb-10 mmd:mb-4">
                  The original idea is that while the Shit coin price keeps
                  falling, everyone wants to withdraw it. Besides, it takes
                  several steps and long time to unstake, withdraw liquidity and
                  swap shit coin to altcoins so that you will get different
                  price from your intention.
                </div>
                <div className="text-base flex flex-wrap text-white leading-relaxed mb-10 mmd:mb-4">
                  While people are scrambled out, the site may unable to access
                  or got deleted anytime with accidentally or intentionally.
                </div>
                <div className="text-base flex flex-wrap text-white leading-relaxed mb-10 mmd:mb-4">
                  That is why we want to make this process easier for all HRYF
                  just for one click, so we developed KillSwitch.
                </div>
              </div>
              <button className="text-xl text-secondaries-300 border-transparent border-2 px-4 py-2 rounded font-semibold">
                <div className="flex items-center space-x-4">
                  <div>Learn more</div>
                  <FontAwesomeIcon icon={faChevronRight} size="xs" />
                </div>
              </button>
            </div>
          </Container>
        </div>
      </section>
      <section className="roadmap">
        <div className="bg-grey-10 w-full flex justify-center py-20 h-[616px] mlg:h-auto">
          <Container>
            <div className="flex space-x-4 justify-center mb-16 mmd:mb-8">
              <div className="text-primaries-1000 font-semibold text-5xl mmd:text-4xl">
                KillSwitch
              </div>
              <div className="text-black font-semibold text-5xl mmd:text-4xl">
                Roadmap
              </div>
            </div>
            <div className="flex space-x-36 justify-center mmd:space-x-0 mmd:flex-wrap mmd:space-y-4 mxl:space-x-8 mlg:block">
              <div className="flex space-x-2 mlg:justify-center">
                <div className="absolute mmd:hidden mxl:hidden">
                  <div className="flex">
                    <img
                      className="w-[320px] "
                      style={{ marginLeft: "120px" }}
                      src="/svg/home/road_sym.svg"
                      alt=""
                    />
                    <img
                      className="w-[320px] "
                      style={{ marginLeft: "120px" }}
                      src="/svg/home/road_sym.svg"
                      alt=""
                    />
                  </div>
                </div>
                <img className="self-start" src="/svg/home/cube.svg" alt="cube" />

                <div className="block w-[266px]">
                  <div className="text-primaries-900 font-semibold text-4xl mb-8">
                    Q2
                  </div>

                  <div className="text-black text-base mb-4">Auction Event</div>
                  <div className="text-black text-base mb-4">
                    KillSwitch on Test net
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 mlg:justify-center">
                <img className="self-start" src="/svg/home/cube.svg" alt="cube" />
                <div className="block w-[266px]">
                  <div className="text-primaries-900 font-semibold text-4xl mb-8">
                    Q3
                  </div>
                  <div className="text-black text-base mb-4">
                    KillSwitch V.1
                  </div>
                  <div className="text-black text-base mb-4">Audit</div>
                  <div className="text-black text-base mb-4">
                    Private sale , Public sale
                  </div>
                  <div className="text-black text-base mb-4">
                    KillSwitch Token Launch
                  </div>
                  <div className="text-black text-base mb-4">
                    Liquidity Mining and Staking
                  </div>
                  <div className="text-black text-base mb-4">Airdrop</div>
                </div>
              </div>
              <div className="flex space-x-2 mlg:justify-center">
                <img className="self-start" src="/svg/home/cube.svg" alt="cube" />
                <div className="block w-[266px]">
                  <div className="text-primaries-900 font-semibold text-4xl mb-8">
                    Q4
                  </div>
                  <div className="text-black text-base mb-4">
                    KillSwitch V.2 (Take profit /Stop lost )
                  </div>
                  <div className="text-black text-base mb-4">NFT Game</div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section className="feature">
        <div className="bg-primaries-1000 w-full flex justify-center px-4 py-16">
          <Container>
            <div className="flex space-x-4 justify-center mb-16">
              <div className="text-secondaries-400 font-semibold text-5xl mmd:text-4xl">
                KillSwitch
              </div>
              <div className="text-white font-semibold text-5xl mmd:text-4xl">
                Features
              </div>
            </div>
            <div className="flex justify-center space-x-4 mmd:flex-wrap mxl:space-x-0 mxl:space-y-4 mxl:flex-wrap">
              <div className="bg-white p-8 rounded h-[664px] w-[642px] mxl:h-auto">
                <img src="/img/home/feature_banner.png" alt="" />
              </div>
              <div className="block space-y-4 h-[664px] w-[642px] mxl:h-auto">
                <div className="bg-grey-30 rounded p-4 cursor-pointer h-[154px] mxl:h-auto">
                  <div className="text-grey-70 font-semibold text-2xl mb-4">
                    One click Stake V.1
                  </div>
                  <div className="flex flex-warp text-grey-70 font-semibold text-base">
                    Swap, Provide Liquidity and Stake your position in one easy
                    step
                  </div>
                </div>
                <div className="bg-grey-30 rounded p-4 cursor-pointer h-[154px] mxl:h-auto">
                  <div className="text-grey-70 font-semibold text-2xl mb-4">
                    One click Stake V.1
                  </div>
                  <div className="flex flex-warp text-grey-70 font-semibold text-base">
                    All the farmed tokens will be automatically converted to add
                    into users' positions every 24 hours or will be
                    automatically reinvested when Guardian of the Galaxy takes
                    action.
                  </div>
                </div>
                <div className="bg-grey-30 rounded p-4 cursor-pointer h-[154px] mxl:h-auto">
                  <div className="text-grey-70 font-semibold text-2xl mb-4">
                    Kill Position V.1
                  </div>
                  <div className="flex flex-warp text-grey-70 font-semibold text-base">
                    Users can kill position any time. KillSwitch will
                    automatically Unstake LP tokens , withdraw liquidity form
                    liquidity providing pool and swap assets to BNB or BUSD or
                    another token user can chose.
                  </div>
                </div>
                <div className="bg-white rounded p-4 cursor-pointer h-[154px] mxl:h-auto">
                  <div className="text-grey-90 font-semibold text-2xl mb-4">
                    Stop loss / Take profit V.2
                  </div>
                  <div className="flex flex-warp text-grey-90 font-semibold text-base">
                    Users can set TP and SL when use one-click stake and can
                    edit . A stop loss (SL) is a value of pool limit entered by
                    a trader. When the value limit is reached the open position
                    will close to prevent further losses.
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section className="participate">
        <div className="bg-grey-10 w-full flex justify-center py-28 mmd:py-20 ">
          <Container>
            <div className="flex justify-center mb-16">
              <div className="text-primaries-900 font-semibold text-5xl mmd:text-4xl">
                How to Participate?
              </div>
            </div>
            <div className="flex space-x-28 justify-center mxl:mx-4 mmd:space-x-0 mmd:grid mmd:space-y-8 max-w-screen-lg m-auto px-2">
              <div className="flex-1 max-w-[310px]">
                <div className="mb-4">
                  <img src="/img/home/partic_01.png" alt="" />
                </div>
                <div className="flex flex-warp text-black font-semibold text-xl mb-2">
                  Yield farmer
                </div>
                <div className="flex flex-warp text-black text-base">
                  As a farmer, you can earn yield by chose farm on KillSwitch
                  and add you money (BUSD , BNB , any asset on pancake router)
                  to farm.
                </div>
              </div>
              <div className="flex-1 max-w-[310px]">
                <div className="mb-4">
                  <img src="/img/home/partic_02.png" alt="" />
                </div>
                <div className="flex flex-warp text-black font-semibold text-xl mb-2">
                  Guardian of the Galaxy (Reinvestor)
                </div>
                <div className="flex flex-warp text-black text-base">
                  can call compound function to sell all yield farmed tokens in
                  KillSwitch portfolio , and reinvest into the yield farming
                  pool, earning 0.3% of the total reward in the process!
                </div>
              </div>
              <div className="flex-1 max-w-[310px]">
                <div className="mb-4">
                  <img src="/img/home/partic_03.png" alt="" />
                </div>
                <div className="flex flex-warp text-black font-semibold text-xl mb-2">
                  Space sweepers (TP/SL Master)
                </div>
                <div className="flex flex-warp text-black text-base">
                  Earn 0.4 % of the position value for kill positions at Take
                  profit or Stop loss.
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section className="ksw-work">
        <div className="bg-grey-10 w-full flex justify-center">
          <Container>
            <div className="flex justify-center px-16 mlg:px-8">
              <div className="bg-primaries-1000 rounded-2xl w-full bg-bottom-custom bg-auto bg-no-repeat flex items-center px-16 bg-ksw-work h-[286px] mlg:px-4 mlg:py-8 mlg:bg-ksw-work-mobile mlg:bg-bottom-custom-mobile mlg:h-[178px] mlg:items-start">
                <div className="block">
                  <div className="text-white font-semibold text-4xl mb-4 mmd:text-xl mmd:mb-2">
                    How does KillSwitch work?
                  </div>
                  <button className="text-xl text-white border-transparent border-2 px-4 rounded mmd:text-base mmd:px-0">
                    <div className="flex items-center space-x-4">
                      <div>Learn more</div>
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section className="community">
        <div className="bg-grey-10 w-full flex justify-center py-20 mmd:pb-0">
          <Container>
            <div className="flex space-x-4 justify-center mb-16 flex-wrap">
              <div className="text-black font-semibold text-5xl mmd:text-4xl">
                Join our
              </div>
              <div className="text-primaries-900 font-semibold text-5xl mmd:text-4xl mmd:hidden">
                KillSwitch community
              </div>
              <div className="text-primaries-900 font-semibold text-5xl mmd:text-4xl md:hidden">
                KillSwitch
              </div>
              <div className="text-primaries-900 font-semibold text-5xl mmd:text-4xl md:hidden">
                community
              </div>
            </div>
            <div className="flex justify-center flex-wrap mmd:px-0">
              <a href="/">
                <div className="rounded-2xl bg-white p-4 m-2 w-[200px] mmd:w-40 m-4">
                  <img
                    className="m-auto mb-2"
                    src="/img/home/finance_logo.png"
                    alt="Finance"
                  />
                  <div className="flex flex-warp text-black text-base justify-center">
                    killswitch.finance
                  </div>
                </div>
              </a>
              <a href="/">
                <div className="rounded-2xl bg-white p-4 m-2 w-[200px] mmd:w-40">
                  <img
                    className="m-auto mb-2"
                    src="/img/home/medium_logo.png"
                    alt="Medium"
                  />
                  <div className="flex flex-warp text-black text-base justify-center">
                    Medium
                  </div>
                </div>
              </a>
              <a href="/">
                <div className="rounded-2xl bg-white p-4 m-2 w-[200px] mmd:w-40">
                  <img
                    className="m-auto mb-2"
                    src="/img/home/gitbook_logo.png"
                    alt="GitBook"
                  />
                  <div className="flex flex-warp text-black text-base justify-center">
                    Gitbook
                  </div>
                </div>
              </a>
              <a href="/">
                <div className="rounded-2xl bg-white p-4 m-2 w-[200px] mmd:w-40">
                  <img
                    className="m-auto mb-2"
                    src="/img/home/twitter_logo.png"
                    alt="Twitter"
                  />
                  <div className="flex flex-warp text-black text-base justify-center">
                    Twitter
                  </div>
                </div>
              </a>
              <a href="/">
                <div className="rounded-2xl bg-white p-4 m-2 w-[200px] mmd:w-40">
                  <img
                    className="m-auto mb-2"
                    src="/img/home/telegram_logo.png"
                    alt="Telegram"
                  />
                  <div className="flex flex-warp text-black text-base justify-center text-center">
                    Telegram International
                  </div>
                </div>
              </a>
              <a href="/">
                <div className="rounded-2xl bg-white p-4 m-2 w-[200px] mmd:w-40">
                  <img
                    className="m-auto mb-2"
                    src="/img/home/telegram_logo.png"
                    alt=""
                  />
                  <div className="flex flex-warp text-black text-base justify-center text-center">
                    Telegram Thailand
                  </div>
                </div>
              </a>
            </div>
          </Container>
        </div>
      </section>
      <footer
        className="bg-grey-10 w-full h-full bg-cover bg-no-repeat bg-center flex justify-center h-[504px]"
        style={{
          backgroundImage: `url('/svg/home/bg_footer.svg')`,
        }}
      >
        <div className="block self-end space-y-10  mb-16 ">
          <img src="/img/home/killswitch_logo_white.png" alt="killswitch_logo" />
          <div className="flex space-x-6 justify-center ">
            <div className="cursor-pointer">
              <img src="/svg/home/medium.svg" alt="medium" />
            </div>
            <div className="cursor-pointer">
              <img src="/svg/home/git.svg" alt="git" />
            </div>
            <div className="cursor-pointer">
              <img src="/svg/home/telegram.svg" alt="telegram" />
            </div>
            <div className="cursor-pointer">
              <img src="/svg/home/telegram.svg" alt="telegram" />
            </div>
            <div className="cursor-pointer">
              <img src="/svg/home/twitter.svg" alt="twitter" />
            </div>
          </div>
          <div className="text-sm text-white">
            Copyright © 2021 KillSwitch. All Rights Reserved.
          </div>
        </div>
      </footer>

      {isShowModal && (
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 flex  justify-center">
          <div
            className="bg-white rounded-xl p-8 w-[490px] mx-auto my-0 top-32 fixed msm:w-auto msm:mx-8"
            style={{ height: "min-content" }}
          >
            <div className="flex justify-between">
              <div className="text-black font-semibold text-base mb-4">
                Welcome!
              </div>
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faTimes}
                size="lg"
                onClick={handleCloseDefultModal}
              />
            </div>
            <div className="flex flex-wrap text-black text-base">
              For mutual understanding, please read the disclaimer below:
            </div>
            <ul className="list-disc ml-6 mb-4">
              <li>
                This event is for KillSwitch shirts auction and souvenirs only
                *Not for selling Token Digital (NFT)
              </li>
              <li>The NFT is only a souvenir from the auction event</li>
              <li>
                The NFT provided to bidders cannot be leveraged in the future on
                the KillSwitch Platform
              </li>
              <li>
                KillSwitch auction transaction is based on a smart contract,
                please be careful before placing a bid
              </li>
              <li>
                KillSwitch reserves the right for retruning bidding amount if
                the shipping information is not completed within 7 days after
                the auction has been ended.
              </li>
            </ul>
            <button
              className="bg-primaries-1000 px-4 py-3 rounded text-white text-base font-semibold w-full"
              onClick={handleCloseModal}
            >
              I have read and agree
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default HomePage;
