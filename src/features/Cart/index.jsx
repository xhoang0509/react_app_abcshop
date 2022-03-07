import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Container, createTheme, IconButton, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from 'utils/common';
import CartTable from './components/CartTable';
import { cartItemsCountSelector, cartTotalSelector } from './selectors';
import Link from '@mui/material/Link';

CartFeature.propTypes = {};
const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {},

    paper: {
        padding: theme.spacing(2),
        minHeight: theme.spacing(100),
    },

    header: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(2),
    },

    back: {
        '&:hover': {
            cursor: 'pointer',
        },
        '& > button': {
            margin: theme.spacing(2),
            borderRadius: '4px',
        },
    },
    here: {
        color: theme.palette.primary.light,
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

function CartFeature(props) {
    const classes = useStyles();
    const navigate = useNavigate();

    const cartTotal = useSelector(cartTotalSelector);
    const cartCount = useSelector(cartItemsCountSelector);
    const cartList = useSelector((state) => state.cart.cartItems);

    return (
        <Box pt={4} className={classes.root}>
            <Container>
                <Paper className={classes.paper}>
                    <Box className={classes.back}>
                        <IconButton onClick={() => navigate(-1)}>
                            <ArrowBackIcon />
                            Quay lại
                        </IconButton>
                    </Box>
                    {cartList.length === 0 ? (
                        <Box textAlign="center" component="h1">
                            <Typography>
                                Giỏ hàng trống, bấm vào{' '}
                                <span
                                    onClick={() => navigate('../product')}
                                    className={classes.here}
                                >
                                    đây
                                </span>{' '}
                                để mua hàng
                            </Typography>
                            <img
                                src="https://www.pngfind.com/pngs/m/272-2727925_continue-shopping-empty-cart-png-transparent-png.png"
                                alt=""
                                width="100%"
                            />
                        </Box>
                    ) : (
                        <>
                            <Box className={classes.header}>
                                <Typography component="h4" variant="h6">
                                    Tất cả ({cartCount} sản phẩm)
                                </Typography>
                                <Typography component="h4" variant="h6">
                                    Tổng số tiền: {formatPrice(cartTotal)}
                                </Typography>
                            </Box>

                            <Box>
                                <CartTable cartList={cartList} />
                            </Box>
                        </>
                    )}
                </Paper>
            </Container>
        </Box>
    );
}

export default CartFeature;
