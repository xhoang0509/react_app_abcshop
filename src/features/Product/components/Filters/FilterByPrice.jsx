import { Button, createTheme, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};

const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        padding: theme.spacing(2),
        borderTop: '1px solid #ccc',
    },
    range: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',

        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),

        '& > span': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
    },

    buttonCancel: {
        marginLeft: theme.spacing(2),
    },
}));

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <NumberFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
        />
    );
});

function FilterByPrice({ onChange = null }) {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    const handleSubmit = () => {
        if (!onChange) return;
        console.log(values);

        if (values.salePrice_gte <= 0 || values.salePrice_lte <= 0) {
            enqueueSnackbar('Yêu cầu nhập giá lọc lớn hơn 0đ', { variant: 'error' });
            return;
        }
        onChange(values);
        enqueueSnackbar('Sản phầm đã được lọc theo giá !', { variant: 'info' });
    };

    const handleCancelSubmit = () => {
        if (!onChange) return;

        if (!onChange) return;
        setValues({
            salePrice_gte: '',
            salePrice_lte: '',
        });
        onChange({
            salePrice_gte: null,
            salePrice_lte: null,
        });
        enqueueSnackbar('Hủy lọc theo giá !', { variant: 'warning' });
    };
    return (
        <Box className={classes.root}>
            <Typography component="h3" variant="">
                LỌC THEO GIÁ
            </Typography>
            <Box className={classes.range}>
                <TextField
                    variant="standard"
                    name="salePrice_gte"
                    value={values.salePrice_gte}
                    onChange={handleChange}
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
                <span>-</span>
                <TextField
                    variant="standard"
                    name="salePrice_lte"
                    value={values.salePrice_lte}
                    onChange={handleChange}
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
            </Box>
            <Button size="small" variant="outlined" color="primary" onClick={handleSubmit}>
                ÁP DỤNG
            </Button>
            <Button
                className={classes.buttonCancel}
                size="small"
                variant="outlined"
                color="error"
                onClick={handleCancelSubmit}
            >
                HỦY
            </Button>
        </Box>
    );
}

export default FilterByPrice;
