import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/system';
import { formatPrice } from 'utils/common';

FilterViewer.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',

        padding: 0,
        margin: theme.spacing(2, 0),
        listStyleType: 'none',

        '& > li': {
            margin: 0,
            padding: theme.spacing(1),
        },
    },
}));

const FILTER_LIST = [
    {
        id: 1,
        getLabel: () => 'Giao hàng miễn phí',
        isActive: (filters) => filters.isFreeShip,
        isVisible: () => true,
        isRemovable: false,
        onRemove: () => {},
        onToggle: (filters) => {
            const newFilters = { ...filters };
            if (newFilters.isFreeShip) {
                delete newFilters.isFreeShip;
            } else {
                newFilters.isFreeShip = true;
            }
            return newFilters;
        },
    },
    {
        id: 2,
        getLabel: () => 'Có khuyễn mãi',
        isActive: () => true,
        isVisible: (filters) => filters.isPromotion,
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters };
            delete newFilters.isPromotion;
            return newFilters;
        },
        onToggle: () => {},
    },
    {
        id: 3,
        getLabel: (filters) =>
            `Từ ${formatPrice(filters.salePrice_gte)} đến ${formatPrice(filters.salePrice_lte)}`,
        isActive: () => true,
        isVisible: (filters) =>
            Object.keys(filters).includes('salePrice_lte') &&
            Object.keys(filters).includes('salePrice_gte') &&
            filters.salePrice_gte > 0 &&
            filters.salePrice_lte > 0,
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters };
            delete newFilters.salePrice_gte;
            delete newFilters.salePrice_lte;
            return newFilters;
        },
        onToggle: () => {},
    },
    {
        id: 4,
        getLabel: (filters) => `${filters['category.name']}`,
        isActive: () => true,
        isVisible: (filters) =>
            Object.keys(filters).includes('category.id') &&
            Object.keys(filters).includes('category.name'),
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters };
            delete newFilters['category.id'];
            delete newFilters['category.name'];
            return newFilters;
        },
        onToggle: () => {},
    },
];

function FilterViewer({ filters = {}, onChange }) {
    const classes = useStyles();

    const visibleFilters = useMemo(() => {
        return FILTER_LIST.filter((x) => x.isVisible(filters));
    }, [filters]);

    return (
        <Box component="ul" className={classes.root}>
            {visibleFilters.map((x) => (
                <li key={x.id}>
                    <Chip
                        size="small"
                        label={x.getLabel(filters)}
                        color={x.isActive(filters) ? 'primary' : 'default'}
                        clickable={!x.isRemovable}
                        onClick={
                            x.isRemovable
                                ? null
                                : () => {
                                      if (!onChange) return;

                                      const newFilters = x.onToggle(filters);
                                      onChange(newFilters);
                                  }
                        }
                        onDelete={
                            x.isRemovable
                                ? () => {
                                      if (!onChange) return;

                                      const newFilters = x.onRemove(filters);
                                      console.log(newFilters);
                                      onChange(newFilters);
                                  }
                                : null
                        }
                    />
                </li>
            ))}
        </Box>
    );
}

export default FilterViewer;
