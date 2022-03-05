import { Container, createTheme, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';
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
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}

export default DetailPage;
