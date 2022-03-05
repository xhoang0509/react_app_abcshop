import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Grid, Skeleton } from '@mui/material';

ProductSkeleton.propTypes = {
    length: PropTypes.number,
};

function ProductSkeleton({ length = 6 }) {
    return (
        <Box pt={4}>
            <Grid container>
                {Array.from(new Array(length)).map((x, index) => (
                    <Grid item key={index} xs={12} md={6} lg={4} padding={1}>
                        <Skeleton variant="rectangular" width={210} height={118} />
                        <Skeleton width="100%" />
                        <Skeleton width="60%" />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductSkeleton;
