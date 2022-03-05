import { Container, Grid, Pagination, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box, createTheme } from '@mui/system';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import FilterViewer from '../components/FilterViewer';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import ProductSkeleton from '../components/ProductSkeleton';
import ProductSlider from '../components/ProductSlider';
import ProductSort from '../components/ProductSort';

ListPage.propTypes = {};
const theme = createTheme();
const useStyles = makeStyles(() => ({
    paper: {
        padding: theme.spacing(4),
    },
    left: {
        width: '250px',
    },

    right: {
        flex: '1 1 0',
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
    },
}));
function ListPage(props) {
    const classes = useStyles();
    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({});
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 9,
        _sort: 'salePrice:ASC',
    });
    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filters);
                setProductList(data);
                setPagination(pagination);
            } catch (error) {
                console.log('Failed to fetch product list ', error);
            }
            setLoading(false);
        })();
    }, [filters]);

    const handlePageChange = (e, page) => {
        setFilters((prevFilters) => ({ ...prevFilters, _page: page }));
    };

    const handleFiltersChange = (newFiltersValue) => {
        setFilters((prevFilters) => ({ ...prevFilters, ...newFiltersValue }));
    };

    const handleSortChange = (newSortValue) => {
        setFilters((prevFilters) => ({ ...prevFilters, _sort: newSortValue }));
    };

    const setNewFilter = (newFilters) => {
        setFilters({ ...newFilters });
    };
    
    return (
        <Box pt={4}>
            <Container sx={{ maxWidth: '1400px' }}>
                <Paper className={classes.paper} elevation={0}>
                    <ProductSlider />

                    <Box pt={4}>
                        <Grid container spacing={1}>
                            <Grid item className={classes.left}>
                                <Paper elevation={1}>
                                    <ProductFilters
                                        filters={filters}
                                        onChange={handleFiltersChange}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item className={classes.right}>
                                <ProductSort
                                    currentSort={filters._sort}
                                    onChange={handleSortChange}
                                />
                                <FilterViewer filters={filters} onChange={setNewFilter} />
                                {loading ? (
                                    <ProductSkeleton length={9} />
                                ) : (
                                    <ProductList productList={productList} />
                                )}
                                <Box className={classes.pagination}>
                                    <Pagination
                                        className={classes.pagination}
                                        count={Math.ceil(pagination.total / filters._limit)}
                                        page={filters._page}
                                        onChange={handlePageChange}
                                        color="primary"
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}

export default ListPage;
