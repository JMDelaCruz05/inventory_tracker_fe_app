import { Grid, Typography } from "@mui/material";
import React from "react";
import InventoryTable from "./components/InventoryTable";

const styles = {
    body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh'
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 2
    }
}


function Inventory() {


    return (
        <div>
            <Grid container sx={styles.body}>
                <Grid item xs={12} sx={styles.title}>
                    <Typography variant="h2" component="div">
                        Inventory
                    </Typography>
                </Grid>
                <Grid item xs={11} sm={10} md={8} lg={6}>
                    <InventoryTable />
                </Grid>
            </Grid>
        </div>
    );
}


export default Inventory;