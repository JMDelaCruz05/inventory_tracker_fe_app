import React from "react";
import { Card, Grid } from "@mui/material";

const styles = {
    card: {
        p: 2,
        fontWeight: "bold"
    },
}

function OrderRowHeader() {

    return (
        <Card sx={styles.card}>
            <Grid container>
                <Grid item xs={1}>
                    ID
                </Grid>
                <Grid item xs={2}>
                    Customomer ID
                </Grid>
                <Grid item xs={1}>
                    Prod Qty
                </Grid>
                <Grid item xs={2}>
                    Total Price
                </Grid>
                <Grid item xs={5}>
                    Timestamp
                </Grid>
            </Grid>
        </Card>
    )
}


export default OrderRowHeader;

