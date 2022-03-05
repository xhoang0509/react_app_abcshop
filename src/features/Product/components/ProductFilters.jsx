import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

function ProductFilters({ filters = {}, onChange }) {
    const handleFiltersChange = (newFiltersValue) => {
        if (!onChange) return;

        onChange(newFiltersValue);
    };
    return (
        <Box>
            <FilterByCategory onChange={handleFiltersChange} />
            <FilterByPrice onChange={handleFiltersChange} />
            <FilterByService filters={filters} onChange={handleFiltersChange} />
        </Box>
    );
}

export default ProductFilters;
