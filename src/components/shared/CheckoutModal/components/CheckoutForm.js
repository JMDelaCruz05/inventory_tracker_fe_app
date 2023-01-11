import React, { useState } from "react";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Form } from "react-bootstrap";
import { CreditExpirationValidation, CreditNumValidation, CVCValidation, EmailValidation, NameValidation } from "../../../../common/functions/validator";
import { useGetCustomerListQuery } from "../../../../common/redux/apiSlices/customerApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { usePostOrderMutation } from "../../../../common/redux/apiSlices/orderApiSlice";
import { changeModalState } from "../../../../common/redux/slices/modalSlice";
import { resetCart } from "../../../../common/redux/slices/cartSlice";

const styles = {
    textfield: {
        width: "100%",
        p: 1
    },
    buttonBox: {
        my: 3,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    button: {
        mx: 2
    }
}


function CheckoutForm(props) {

    const { handleClose } = props;

    const dispatch = useDispatch();
    const [postOrder, {data: postData, isUninitialized, isLoading, isSuccess}] = usePostOrderMutation();
    const cart = useSelector(state => state.cart);
    const { data, error } = useGetCustomerListQuery();

    const [formInput, setFormInput] = useState({
        customerId: "",
        email: "",
        accName: "",
        creditCardNum: "",
        expiration: "",
        cvc: "",
    });
    const [formErrors, setFormErrors] = useState({
        customerId: false,
        email: false,
        accName: false,
        creditCardNum: false,
        expiration: false,
        cvc: false,
    })

    function resetFields(){
        setFormInput({
            customerId: "",
            email: "",
            accName: "",
            creditCardNum: "",
            expiration: "",
            cvc: "",
        })
        
        setFormErrors({
            customerId: false,
            email: false,
            accName: false,
            creditCardNum: false,
            expiration: false,
            cvc: false,
        })
    }

    function validate(fieldID, value) {
        let resp = {
            valid: false
        };

        if (fieldID == "accName") {
            resp = NameValidation(value);
        } else if (fieldID == "email") {
            resp = EmailValidation(value);
        } else if (fieldID == "customerId") {
            resp = {
                valid: value > 0,
                error: value > 0 ? false : "Account is required"
            };
        } else if (fieldID == "creditCardNum") {
            resp = CreditNumValidation(value);
        } else if (fieldID == "expiration") {
            resp = CreditExpirationValidation(value);
        } else if (fieldID == "cvc") {
            resp = CVCValidation(value);
        }


        setFormErrors({ ...formErrors, [fieldID]: resp.err });

        return resp.valid;
    }

    function handleChange(e) {

        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        });

        validate(e.target.name, e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        for (const key in formInput) {
            if (!validate(key, formInput[key])) return;
        }

        const order = {
            ...cart,
            timeStamp: new Date().toJSON(),
            customerId: formInput.customerId
        }

        postOrder(order);
        dispatch(changeModalState("checkoutModal"));
        dispatch(resetCart());
        resetFields();

        setTimeout(() => {
            alert("Ordered Successfully!")
        }, 3000);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <FormControl sx={styles.textfield}>
                        <InputLabel>Account</InputLabel>
                        <Select
                            id="customerId"
                            name="customerId"
                            value={formInput.customerId}
                            label="Account"
                            onChange={handleChange}
                            inputProps={{
                                id: "customerId",
                                name: "customerId"
                            }}
                        >
                            {
                                data && !error ? data.map((customer) => {
                                    return (
                                        <MenuItem key={customer.customerId} value={customer.customerId}>
                                            {customer.customerName}
                                        </MenuItem>
                                    )
                                }) : null
                            }
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        variant="outlined"
                        error={Boolean(formErrors.email)}
                        helperText={formErrors.email}
                        value={formInput.email}
                        onChange={handleChange}
                        sx={styles.textfield} />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        id="accName"
                        name="accName"
                        label="Account Name"
                        variant="outlined"
                        error={Boolean(formErrors.accName)}
                        helperText={formErrors.accName}
                        value={formInput.accName}
                        onChange={handleChange}
                        sx={styles.textfield} />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        id="creditCardNum"
                        name="creditCardNum"
                        label="Debit Card Number"
                        variant="outlined"
                        placeholder="xxxx - xxxx - xxxx - xxxx"
                        error={Boolean(formErrors.creditCardNum)}
                        helperText={formErrors.creditCardNum}
                        value={formInput.creditCardNum}
                        onChange={handleChange}
                        inputProps={{
                            maxLength: 25
                        }}
                        sx={styles.textfield} />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        id="expiration"
                        name="expiration"
                        label="Expiration"
                        variant="outlined"
                        placeholder="MM/YY"
                        error={Boolean(formErrors.expiration)}
                        helperText={formErrors.expiration}
                        value={formInput.expiration}
                        onChange={handleChange}
                        inputProps={{
                            maxLength: 5
                        }}
                        sx={styles.textfield} />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        id="cvc"
                        name="cvc"
                        label="CVC"
                        variant="outlined"
                        placeholder="xxx"
                        error={Boolean(formErrors.cvc)}
                        helperText={formErrors.cvc}
                        value={formInput.cvc}
                        onChange={handleChange}
                        inputProps={{
                            maxLength: 3
                        }}
                        sx={styles.textfield} />
                </Grid>
            </Grid>

            <Box sx={styles.buttonBox}>
                <Button
                    disabled={isLoading}
                    variant='outlined'
                    size='large'
                    onClick={handleClose}
                    sx={styles.button}>
                    Cancel
                </Button>
                <Button
                    disabled={isLoading}
                    type="submit"
                    variant='contained'
                    size='large'
                    sx={{ ...styles.button, color: "white" }}>
                    Submit
                </Button>
            </Box>
        </Form>
    )
}


export default CheckoutForm;