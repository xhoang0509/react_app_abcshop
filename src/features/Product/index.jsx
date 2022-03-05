import { Box } from '@mui/system';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

function ProductFeature() {
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
