import React from "react";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useGetOrderListQuery } from "../../../common/redux/apiSlices/orderApiSlice";
import OrderRow from "../../../common/components/OrderRow/OrderRow";
import OrderRowHeader from "./components/OrderRowHeader";

const styles = {
    page: {
        p: 5,
        minHeight: 800,
        overflowY: "auto"
    },
    stack: {
        border: "1px solid black"
    }
}

function TransactionHistory() {

    const { data, error, isLoading } = useGetOrderListQuery();

    return (
        <Box sx={styles.page}>
            <Stack spacing={1}>
                <Typography variant="h3">
                    Transaction History
                </Typography>
                <OrderRowHeader/>
                {
                    isLoading ? <CircularProgress />
                        : data ? data.map((order) => {
                            return (
                                <OrderRow key={order.orderId} order={order} />
                            )
                        }) : null
                }
            </Stack>
        </Box>
    );
}


export default TransactionHistory;