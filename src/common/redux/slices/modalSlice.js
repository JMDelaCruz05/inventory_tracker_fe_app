import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modalSlice',
    initialState: {
        checkoutModal: false,
    },
    reducers: {
        changeModalState: (state, { payload }) => {
            const key = payload;
            return {
                ...state,
                [key]: !state[key]
            };
        }
    }
})

export const { changeModalState } = modalSlice.actions;
export default modalSlice.reducer;