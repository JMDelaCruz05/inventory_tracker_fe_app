import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const productApiSlice = createApi({
    reducerPath: 'productApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_BASE,
    }),

    endpoints: (builder) => ({
        getProductList: builder.query({
            query: () => 'api/product/'
        }),
        getProduct: builder.query({
            query: (id) => {
                return `api/product/${id}/`
            }
        }),

    })
})


export const { useGetProductListQuery, useGetProductQuery } = productApiSlice;
export default productApiSlice;
