import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import Product from './Product';

ProductList.propTypes = {
    productList: PropTypes.array,
};

function ProductList({ productList }) {
    return (
        <Box>
            
            <Grid container>
                {productList.map((product) => (
                    <Grid item key={product.id} xs={12} md={6} lg={4} padding={1}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductList;
