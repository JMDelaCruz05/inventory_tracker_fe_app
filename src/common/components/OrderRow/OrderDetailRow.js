import React from "react";
import { Box, Grid } from "@mui/material";



function OrderDetailRow(prop) {


    const { orderDetail, sx } = prop;

    return (

        <Box sx={sx}>
            <Grid container>
                <Grid item xs={2}>
                    {orderDetail.orderDetailsId}
                </Grid>
                <Grid item xs={2}>
                    {orderDetail.productId}
                </Grid>
                <Grid item xs={6}>
                    {orderDetail.productName}
                </Grid>
                <Grid item xs={2}>
                    {orderDetail.productQty}
                </Grid>
            </Grid>
        </Box>
    )
}


export default OrderDetailRow;

