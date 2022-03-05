import { Button, createTheme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

SmallNavbar.propTypes = {};
const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {},
    logo: {
        color: '#fff',
        textDecoration: 'none',
        cursor: 'pointer',
    },
    link: {
        textDecoration: 'none',
        '& > button': {
            color: theme.palette.white,
            fontWeight: 'bold',
        },
        '&.active > button': {
            color: 'red',
        },
    },
}));
function SmallNavbar({ pages }) {
    const classes = useStyles();

    return (
        <>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
                <NavLink to="/" className={classes.logo}>
                    ABC SHOP
                </NavLink>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <NavLink to={page.url} key={page.name} className={classes.link}>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                            {page.name}
                        </Button>
                    </NavLink>
                ))}
            </Box>
        </>
    );
}

export default SmallNavbar;
