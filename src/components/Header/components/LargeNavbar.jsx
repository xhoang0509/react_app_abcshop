import AbcIcon from '@mui/icons-material/Abc';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, createTheme, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
LargeNavbar.propTypes = {};

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
        color: theme.palette.primary.main,
    },
}));

function LargeNavbar({ pages }) {
    const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontWeight: 'bold' }}
            >
                <NavLink to="/" className={classes.logo}>
                    ABC SHOP <AbcIcon />
                </NavLink>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">
                                <NavLink className={classes.link} to={page.url}>
                                    {page.name}
                                </NavLink>
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </>
    );
}

export default LargeNavbar;
