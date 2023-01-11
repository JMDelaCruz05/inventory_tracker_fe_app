import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../Nav/Nav";
import ScrollWrapper from "./components/ScrollWrapper";
import Inventory from "../../pages/Inventory/Inventory";
import Shop from "../../pages/Shop/Shop";
import TransactionHistory from "../../pages/TransactionHistory/TransactionHistory";
import Cart from "../../pages/Cart/Cart";
import CheckoutModal from "../CheckoutModal/CheckoutModal";


function AppRouter() {

    return (
        <BrowserRouter>
            <ScrollWrapper>
                <Nav />

                <CheckoutModal/>

                <Routes>
                    <Route path="/" element={<Inventory />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/my-cart" element={<Cart />} />
                    <Route path="/transaction-history" element={<TransactionHistory />} />
                </Routes>
                
                {/* <Footer /> */}
            </ScrollWrapper>
        </BrowserRouter>
    )
}

export default AppRouter;