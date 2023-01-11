import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        orderDetails: [],
        productCount: 0,
        totalCost: 0,
    },
    reducers: {
        addToCart: (state, { payload }) => {
            let total = payload.price + state.totalCost;
            return {
                orderDetails: [...state.orderDetails, payload],
                productCount: state.productCount + 1,
                totalCost: total
            };
        },
        updateCart: (state, { payload }) => {
            state.orderDetails.forEach(product => {
                if (product.productId == payload.productId) {
                    product.productQty = Number(payload.productQty);
                }
            });

            state.totalCost = updateTotal(state.orderDetails);

            return state;
        },
        removeFromCart: (state, { payload }) => {
            state.orderDetails = state.orderDetails.filter(product => product.productId != payload.productId);
            state.totalCost = updateTotal(state.orderDetails);
            state.productCount--;

            return state;
        },
        resetCart: (state, { payload }) => {
            state = {
                orderDetails: [],
                productCount: 0,
                totalCost: 0,
            }

            return state;
        },
    }
})

function updateTotal(orderDetails) {

    let total = 0;
    orderDetails.forEach(prod => { total += prod.price * prod.productQty });
    return total;
}

export const { addToCart, updateCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;