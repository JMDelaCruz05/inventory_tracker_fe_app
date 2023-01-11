import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { changeModalState } from "../../../common/redux/slices/modalSlice";

const styles = {
    page: {
        p: 5
    },
    buttonBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 5
    },
}

function Cart() {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    function handleCheckout(){
        dispatch(changeModalState("checkoutModal"));
    }

    return (
        <Stack sx={styles.page}>
            <Box sx={styles.buttonBox}>
                <Typography variant="h3">
                    My Cart
                </Typography>
                <Button 
                    disabled={!cart.orderDetails.length}
                    variant="contained" 
                    size="large" 
                    onClick={handleCheckout}
                    sx={{ color: "white" }}>
                    Checkout
                </Button>
            </Box>
            <CartContainer cart={cart}/>

        </Stack>
    )
}


export default Cart;