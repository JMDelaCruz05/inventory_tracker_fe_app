import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const orderApiSlice = createApi({
    reducerPath: 'orderApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_BASE,
    }),

    endpoints: (builder) => ({
        postOrder: builder.mutation({
            query: (body) => ({
                url: `api/Order/`,
                method: 'POST',
                body
            })
        }),
        getOrderList: builder.query({
            query: () => 'api/Order/'
        }),
    })
})


export const { usePostOrderMutation, useGetOrderListQuery } = orderApiSlice;
export default orderApiSlice;
