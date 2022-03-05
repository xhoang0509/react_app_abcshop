import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { createTheme, Typography } from '@mui/material';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import { formatPrice } from 'utils/common';
import { makeStyles } from '@mui/styles';

Product.propTypes = {
    product: PropTypes.object,
};
const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        '&:hover': {
            cursor: 'pointer',
        },
    },
    percent: {
        background: theme.palette.success.light,
        color: '#fff',
    },
}));
function Product({ product }) {
    const classes = useStyles();
    const thumbnailUrl = product.thumbnail
        ? STATIC_HOST + product.thumbnail.url
        : THUMBNAIL_PLACEHOLDER;
    return (
        <Box padding={1} className={classes.root}>
            <Box padding={1} minHeight="215px">
                <img src={thumbnailUrl} alt={product.name} width="100%" />
            </Box>
            <Typography variant="body2">{product.name}</Typography>
            <Typography variant="body2">
                <Box component="span" mr={1} fontSize="16px" fontWeight="bold">
                    {formatPrice(product.salePrice)}
                </Box>
                <Typography component="span" className={classes.percent}>
                    {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
                </Typography>
            </Typography>
        </Box>
    );
}

export default Product;
