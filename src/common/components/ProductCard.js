import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddToCart from '@mui/icons-material/AddShoppingCart';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { addToCart } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { moneyFormat } from '../functions/formatter';

export default function ProductCard(props) {

    const { prodDetails, onCart } = props;
    const dispatch = useDispatch();

    function handleAddToCart() {
        dispatch(addToCart({
            ...prodDetails,
            productQty: 1
        }));
    }

    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardContent sx={{
                maxWidth: 345,
                minHeight: 150,
            }}>
                <Typography gutterBottom variant="h5" component="div">
                    {prodDetails.productName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {moneyFormat(prodDetails.price)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    disabled={onCart || prodDetails.stocks <= 0}>
                    <AddToCart onClick={handleAddToCart} />
                </Button>
            </CardActions>
        </Card>
    );
}