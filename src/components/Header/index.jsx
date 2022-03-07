import { Close } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
    AppBar,
    Badge,
    Box,
    Button,
    Container,
    createTheme,
    Dialog,
    DialogContent,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { cartItemsTotalCountSelector } from 'features/Cart/selectors';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AvatarUser from './components/AvatarUser';
import LargeNavbar from './components/LargeNavbar';
import SmallNavbar from './components/SmallNavbar';

const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {},
    diaLogRoot: {
        position: 'fiexd',
        top: 0,
        left: 0,
        right: 0,
    },
    closeButton: {
        position: 'absolute !important',
        top: theme.spacing(1),
        right: theme.spacing(1),
        zIndex: 1,
        color: theme.palette.grey[800],
    },
    toggleBox: {
        marginTop: theme.spacing(2),
    },
    loginButton: {
        cursor: 'pointer',
        '&:hover': {
            color: theme.palette.primary.light,
            transition: 'all 0.2s ease-in',
        },
    },
}));

const pages = [
    {
        name: 'Sản phẩm',
        url: 'product',
    },
    {
        name: 'Bài viết',
        url: 'blog',
    },
    {
        name: 'Giới thiệu',
        url: 'about',
    },
    {
        name: 'Liên hệ',
        url: 'contact',
    },
];
const settings = ['Trang cá nhân', 'Đơn hàng', 'Đăng xuất'];
const MODE = { LOGIN: 'login', REGISTER: 'register' };

function Header() {
    const classes = useStyles();
    const user = useSelector((state) => state.user.current);
    const cartTotalCount = useSelector(cartItemsTotalCountSelector);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const handleClickOpenDialog = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMenuClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleUserLogout = () => {
        handleCloseMenu();
    };

    const handleCartClick = () => {
        navigate('cart');
    };
    return (
        <div className={classes.root}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="success">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <LargeNavbar pages={pages} onNavbarClick={handleClickOpenDialog} />

                            <SmallNavbar pages={pages} />

                            {Object.keys(user).length !== 0 ? (
                                <AvatarUser settings={settings} />
                            ) : (
                                <Typography
                                    className={classes.loginButton}
                                    onClick={handleClickOpenDialog}
                                    textAlign="center"
                                >
                                    Đăng nhập
                                </Typography>
                            )}
                            <IconButton
                                size="large"
                                aria-label="show 4 new mails"
                                color="inherit"
                                onClick={handleCartClick}
                            >
                                <Badge badgeContent={cartTotalCount} color="error">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>

            <Dialog
                disableEscapeKeyDown
                onBackdropClick
                open={open}
                onClose={handleClose}
                className={classes.diaLogRoot}
            >
                <IconButton className={classes.closeButton} onClick={handleClose}>
                    <Close />
                </IconButton>
                <DialogContent>
                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} />
                            <Box className={classes.toggleBox} textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                                    Nếu đã có tài khoản, đăng nhập tài đây !
                                </Button>
                            </Box>
                        </>
                    )}
                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />

                            <Box className={classes.toggleBox} textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                                    Nếu chưa có tài khoản, đăng kí tại đây
                                </Button>
                            </Box>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Header;
