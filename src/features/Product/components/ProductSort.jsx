import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from '@mui/material';
import { makeStyles } from '@mui/styles';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

const useStyles = makeStyles(() => ({
    tab: {
        fontWeight: 'bold',
    },
}));
function ProductSort({ currentSort, onChange }) {
    const classes = useStyles();
    const handleSortChange = (e, newValue) => {
        if (onChange) onChange(newValue);
    };
    return (
        <Tabs value={currentSort} onChange={handleSortChange} aria-label="basic tabs example">
            <Tab className={classes.tab} label="Giá thấp tới cao" value="salePrice:ASC" />
            <Tab className={classes.tab} label="Giá cao xuống thấp" value="salePrice:DESC" />
        </Tabs>
    );
}

export default ProductSort;
