import { Link, Box, createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { NavLink } from 'react-router-dom';

ProductMenu.propTypes = {};
const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        justifyContent: 'center',

        padding: 0,
        listStyleType: 'none',

        '& > li': {
            padding: theme.spacing(2, 4),
        },

        '& > li > a': {
            color: theme.palette.grey[700],
            textDecoration: 'none',
        },

        '& > li > a.active': {
            color: theme.palette.primary.main,
            textDecoration: 'underline',
            fontWeight: 'bold',
        },
    },
}));
function ProductMenu() {
    const classes = useStyles();
    return (
        <Box className={classes.root} component="ul">
            <li>
                <Link component={NavLink} to="" end>
                    Mô tả
                </Link>
            </li>
            <li>
                <Link component={NavLink} to="additional">
                    Sản phẩm tương tự
                </Link>
            </li>
            <li>
                <Link component={NavLink} to="reviews">
                    Đánh giá
                </Link>
            </li>
        </Box>
    );
}

export default ProductMenu;
