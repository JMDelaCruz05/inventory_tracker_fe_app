import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const customerApiSlice = createApi({
    reducerPath: 'customerApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_BASE,
    }),

    endpoints: (builder) => ({
        getCustomerList: builder.query({
            query: () => 'api/customer/'
        }),
    })
})


export const { useGetCustomerListQuery } = customerApiSlice;
export default customerApiSlice;
