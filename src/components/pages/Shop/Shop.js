import React from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import CartIcon from '@mui/icons-material/ShoppingCart';
import ProductCard from "../../../common/components/ProductCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetProductListQuery } from "../../../common/redux/apiSlices/productApiSlice";

const styles = {
    page: {
        width: "100%",
        p: 5
    },
    item: {
        p: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 2
    },
    shopBar: {
        display: "flex",
        justifyContent: "flex-end",
        borderBottom: "1px solid #8c9eff",
        py: 1,
        px: 2,
        mb: 3
    },
    cartIcon: {
        "&:hover": {
            color: "#448aff"
        }
    }
}

function Shop() {

    const { orderDetails } = useSelector(state => state.cart);
    const { data, error, isLoading } = useGetProductListQuery();

    return (
        <Box sx={styles.page}>
            <Grid container>
                <Grid item xs={12} sx={styles.title}>
                    <Typography variant="h2" component="div">
                        Shop
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={styles.shopBar}>
                        <Link to="/my-cart">
                            <CartIcon color="primary" sx={styles.cartIcon} />
                        </Link>
                    </Box>
                </Grid>
                {
                    isLoading ? <CircularProgress /> :
                    data.map(product => {
                        return (
                            <Grid key={product.productId} item xs={12} sm={6} md={4} lg={3} sx={styles.item}>
                                <ProductCard
                                    onCart={Boolean(orderDetails.find(prod => prod.productId == product.productId))}
                                    prodDetails={product} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    );
}


export default Shop;