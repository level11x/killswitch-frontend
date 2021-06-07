import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Redirect } from "react-router";
import { LiveAuctionPage, InfoPage, HomePage, TopAuction, MyCollectionPage } from "../page";
import { AppProvider } from "../context";
import { Web3Provider } from "../hooks/useWeb3";
import useCountdownCloseAuction from "../hooks/useCountdownCloseAuction";
import Download from "../component/download";

const Router = () => {
    const { isCloseAuction } = useCountdownCloseAuction();

    return (
        <AppProvider>
            <Web3Provider>
                <BrowserRouter>
                    <Route exact path={"/"} component={HomePage} />
                    <Route exact path={"/live-auction"}>
                        {isCloseAuction ? <Redirect to="/my-collection" /> : <LiveAuctionPage />}
                    </Route>
                    <Route exact path={"/home"} component={HomePage} />
                    <Route exact path={"/info"} component={InfoPage} />
                    <Route exact path={"/top-auction"} component={TopAuction} />
                    <Route exact path={"/my-collection"} component={MyCollectionPage} />
                    <Route path={"/download/:id"} component={Download} />
                </BrowserRouter>
            </Web3Provider>
        </AppProvider>
    );
};
export default Router;
