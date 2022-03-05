import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
    return (
        <Box>
            <Routes>
                <Route index element={<ListPage />} />
                <Route path=":id/*" element={<DetailPage />} />
            </Routes>
        </Box>
    );
}

export default ProductFeature;
