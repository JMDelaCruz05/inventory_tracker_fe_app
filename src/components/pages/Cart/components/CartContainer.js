import React from "react";
import { Box, Button, Card, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import IncrementIcon from '@mui/icons-material/AddCircle';
import DecrementIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { moneyFormat } from "../../../../common/functions/formatter";
import { removeFromCart, updateCart } from "../../../../common/redux/slices/cartSlice";

const styles = {
    cartContainer: {
        padding: 3,
        height: 500,
        overflowY: "scroll",
        overflowX: "hidden"
    },
    rowStack: {
        minHeight: "100%"
    },
    row: {
        px: 2,
        py: 1,
        my: 0.5,
    },
    rowText: {
        py: 1,
        display: "flex",
        alignItems: "center"
    },
    totalRow: {
        borderTop: "1px solid grey",
    },
    incButton: {
        "&:hover": {
            color: "#448aff",
            cursor: "pointer"
        }
    },
    deleteButton: {
        color: "red",
        ml: 2,

        "&:hover": {
            color: "#ff5349",
            cursor: "pointer"
        },
    }
}

function CartContainer(prop) {

    const { cart } = prop;
    const dispatch = useDispatch();

    function handleQtyChange(productId, productQty) {
        dispatch(updateCart({ productId, productQty }))
    }

    function handleOnBlur(productId, productQty) {
        if (!Number(productQty)) {
            dispatch(updateCart({ productId, productQty: 1 }))
        }
    }

    function handleQtyIncrement(prod, increment) {
        if(prod.productQty + increment > prod.stocks) return;

        let productQty = Number(prod.productQty) + increment;

        dispatch(updateCart({
            productId: prod.productId,
            productQty: productQty > 0 ? productQty : 1
        }));
    }

    function handleRemove(productId) {
        dispatch(removeFromCart({ productId }))
    }

    return (

        <Card>
            <Box sx={styles.cartContainer}>
                <Stack sx={styles.rowStack}>
                    {
                        cart.orderDetails.map(prodDetails => {
                            console.log(prodDetails);
                            return (
                                <Card key={prodDetails.productId} sx={styles.row}>
                                    <Grid container>
                                        <Grid item xs={1} sx={styles.rowText}>
                                            {prodDetails.productId}
                                        </Grid>
                                        <Grid item xs={7} sm={5} sx={styles.rowText}>
                                            {prodDetails.productName}
                                        </Grid>
                                        <Grid item xs={4} sm={2} md={3} sx={styles.rowText}>
                                            {moneyFormat(prodDetails.price * prodDetails.productQty)}
                                        </Grid>
                                        <Grid item xs={12} sm={4} md={3} sx={styles.rowText}>
                                            <IconButton
                                                disabled={prodDetails.productQty <= 1}
                                                onClick={() => handleQtyIncrement(prodDetails, -1)}
                                                color={prodDetails.productQty <= 1 ? "secondary" : "primary"}>
                                                <DecrementIcon
                                                    sx={styles.incButton} />
                                            </IconButton>

                                            <TextField
                                                id="outlined-basic"
                                                label="Amount"
                                                variant="outlined"
                                                size="small"
                                                value={prodDetails.productQty}
                                                onChange={(e) => {
                                                    handleQtyChange(prodDetails.productId, e.target.value)
                                                }}
                                                onKeyUp={e => e.key == 'Enter' ? handleOnBlur(prodDetails.productId, prodDetails.productQty) : null}
                                                onBlur={(e) => handleOnBlur(prodDetails.productId, prodDetails.productQty)}
                                                sx={{ p: 1 }} />

                                            <IconButton
                                                onClick={() => handleQtyIncrement(prodDetails, 1)}
                                                disabled={prodDetails.productQty >= prodDetails.stocks}
                                                color={prodDetails.productQty <= 1 ? "secondary" : "primary"}>
                                                <IncrementIcon
                                                    sx={styles.incButton} />

                                            </IconButton>

                                            <DeleteIcon
                                                onClick={() => handleRemove(prodDetails.productId)}
                                                sx={styles.deleteButton} />
                                        </Grid>
                                    </Grid>
                                </Card>
                            )
                        })
                    }
                </Stack>
            </Box>

            <Box sx={styles.totalRow}>
                <Grid container sx={{ p: 1 }}>
                    <Grid item xs={8} sm={6}>
                        <Typography variant="body1">
                            {"Total: "}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={2}>
                        <Typography variant="body1">
                            {moneyFormat(cart.totalCost ? cart.totalCost : 0)}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    );
}


export default CartContainer;