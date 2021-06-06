import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Redirect } from "react-router";
import {
    LiveAuctionPage,
    InfoPage,
    HomePage,
    TopAuction,
    MyCollectionPage,
} from "../page";
import { AppProvider } from "../context";
import { Web3Provider } from "../hooks/useWeb3";
import { END_AUCTION_REDIRECT_DATE_STRING } from "../config/common";

const Router = () => {
    const [isCloseAuction, setIsCloseAuction] = useState(
        new Date() >= new Date(END_AUCTION_REDIRECT_DATE_STRING)
    );

    useEffect(() => {
        if (!isCloseAuction) {
            const diffTime = new Date(END_AUCTION_REDIRECT_DATE_STRING) - new Date();
            console.log("diffTime", diffTime);
            const timeout = setTimeout(() => {
                setIsCloseAuction(true);
            }, diffTime);
            return () => clearTimeout(timeout);
        }
    }, [isCloseAuction]);

    return (
        <AppProvider>
            <Web3Provider>
                <BrowserRouter>
                    <Route
                        exact
                        path={"/"}
                        component={HomePage}
                    />
                    <Route
                        exact
                        path={"/live-auction"}
                    >
                        {isCloseAuction ? <Redirect to="/my-collection" /> : <LiveAuctionPage />}
                    </Route>
                    <Route exact path={"/home"} component={HomePage} />
                    <Route exact path={"/info"} component={InfoPage} />
                    <Route exact path={"/top-auction"} >
                        {isCloseAuction ? <Redirect to="/my-collection" /> : <TopAuction />}
                    </Route>
                    <Route
                        exact
                        path={"/my-collection"}
                        component={MyCollectionPage}
                    />
                </BrowserRouter>
            </Web3Provider>
        </AppProvider>
    );
};
export default Router;
