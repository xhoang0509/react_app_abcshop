import { Container, createTheme, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import AddToCartForm from '../components/AddToCartForm';
import ProductAdditional from '../components/ProductAdditional';
import ProductDescription from '../components/ProductDescription';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductReviews from '../components/ProductReviews';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';


const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        paddingBottom: theme.spacing(5),
    },
    left: {
        width: '400px',
        padding: theme.spacing(1.5),
        borderRight: `1px solid ${theme.palette.grey[300]}`,
    },
    right: { flex: '1 1 0', padding: theme.spacing(1.5) },
}));
function DetailPage() {
    const classes = useStyles();
    const urlParams = useParams();
    const productId = urlParams.id;

    const { product, loading } = useProductDetail(productId);

    const handleAddToCartSubmit = ({ quantity }) => {};

    if (loading) {
        return <Box>loading</Box>;
    }
    return (
        <Box pt={4} className={classes.root}>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            <ProductThumbnail product={product} />
                        </Grid>
                        <Grid item className={classes.right}>
                            <ProductInfo product={product} />
                            <AddToCartForm onSubmit={handleAddToCartSubmit} />
                        </Grid>
                    </Grid>
                </Paper>
                <ProductMenu />

                <Routes>
                    <Route index element={<ProductDescription product={product} />} />
                    <Route path="additional" element={<ProductAdditional />} />
                    <Route path="reviews" element={<ProductReviews />} />
                </Routes>
            </Container>
        </Box>
    );
}

export default DetailPage;
