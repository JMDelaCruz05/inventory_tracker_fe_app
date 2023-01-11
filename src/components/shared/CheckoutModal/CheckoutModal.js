import React from "react";
import { Card, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CheckoutForm from "./components/CheckoutForm";
import { changeModalState } from "../../../common/redux/slices/modalSlice";

const styles = {
    modal: {
        py: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        p: 3,
        width: '70%',
        minWidth: 400,
        maxHeight: "95vh",
        backgroundColor: 'white',
        color: 'black',
        border: '1px solid black',
        overflowY: 'auto',
    },
    cardHeader: {
        mb: 3,
        textAlign: 'center'
    },
    buttonBox: {
        my: 3,
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }
}

function CheckoutModal() {

    const open = useSelector(state => state.modal.checkoutModal)
    const dispatch = useDispatch()

    function handleClose() {
        dispatch(changeModalState('checkoutModal'));
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={styles.modal}
        >
            <Card sx={styles.card}>
                <Typography variant="h5">
                    Checkout
                </Typography>
                <CheckoutForm handleClose={handleClose} />
            </Card>
        </Modal>
    );
}

export default CheckoutModal;