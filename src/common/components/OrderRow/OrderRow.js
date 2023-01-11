import React, { useState } from "react";
import { Button, Card, Collapse, Grid } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { moneyFormat } from "../../functions/formatter";
import OrderDetailRow from "./OrderDetailRow";
import { Stack } from "@mui/system";

const styles = {
    card: {
        p: 2,
        cursor: "pointer",
    },
    detailsCard: {
        p: 2
    },
}

function OrderRow(prop) {


    const { order } = prop;
    const [collapse, setCollapse] = useState(true);

    function handleCollapse() {
        setCollapse(!collapse);
    }

    return (
        <Card onClick={handleCollapse} sx={styles.card}>
            <Grid container>
                <Grid item xs={1}>
                    {order.orderId}
                </Grid>
                <Grid item xs={2}>
                    {order.customerId}
                </Grid>
                <Grid item xs={1}>
                    {order.productCount}
                </Grid>
                <Grid item xs={2}>
                    {moneyFormat(order.totalCost)}
                </Grid>
                <Grid item xs={5}>
                    {
                        new Date(order.timeStamp).toString()
                    }
                </Grid>
                <Grid item xs={1}>
                    <Button onClick={handleCollapse}>
                        {
                            collapse ? <ExpandLessIcon /> : <ExpandMoreIcon />
                        }
                    </Button>
                </Grid>
            </Grid>
            <Collapse in={!collapse}>
                <Card sx={styles.detailsCard}>
                    <Stack>
                        <OrderDetailRow
                            sx={styles.rowHeader}
                            orderDetail={{
                                orderDetailsId: "Detail ID",
                                productId: "Product ID",
                                productName: "Product",
                                productQty: "Quantity"
                            }} />
                        {
                            order.orderDetails.map(orderDetail => {
                                return (
                                    <OrderDetailRow key={orderDetail.orderDetailsId} orderDetail={orderDetail} />
                                )
                            })
                        }
                    </Stack>
                </Card>
            </Collapse>
        </Card>
    )
}


export default OrderRow;

