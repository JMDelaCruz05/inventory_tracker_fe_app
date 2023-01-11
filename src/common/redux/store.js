import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import cartReducer from "./slices/cartSlice";
import productApi from "./apiSlices/productApiSlice";
import customerApi from "./apiSlices/customerApiSlice";
import orderApi from "./apiSlices/orderApiSlice";


const store = configureStore({
    reducer: {
        modal: modalReducer,
        cart: cartReducer,
        [productApi.reducerPath]: productApi.reducer,
        [customerApi.reducerPath]: customerApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(productApi.middleware)
        .concat(customerApi.middleware)
        .concat(orderApi.middleware)
    }
})

export default store;