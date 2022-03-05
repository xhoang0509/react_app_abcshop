import { Checkbox, createTheme, FormControlLabel, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
FilterByService.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        padding: theme.spacing(2),
        borderTop: '1px solid #ccc',
    },
    list: {
        padding: 0,
        listStyleType: 'none',
    },
}));

const services = [
    { value: 'isFreeShip', label: 'Giao hàng miễn phí' },
    { value: 'isPromotion', label: 'Có khuyễn mãi' },
];

function FilterByService({ filters = {}, onChange = null }) {
    const classes = useStyles();

    const handleChange = (e) => {
        if (!onChange) return;
        const { name, checked } = e.target;
        let newFilters = { [name]: checked };

        if (checked === false) {
            newFilters = { [name]: null };
        }
        onChange(newFilters);
    };
    return (
        <Box className={classes.root}>
            <Typography component="h3" variant="">
                CHỌN DỊCH VỤ
            </Typography>

            <ul className={classes.list}>
                {services.map((service) => (
                    <li key={service.value}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Boolean(filters[service.value])}
                                    onChange={handleChange}
                                    name={service.value}
                                    color="primary"
                                />
                            }
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByService;
