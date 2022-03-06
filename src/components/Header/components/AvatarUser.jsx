import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { logout } from 'features/Auth/userSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
AvatarUser.propTypes = {};

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        '& > p': {
            marginRight: '20px',
        },
    },
    avatar: {
        fontSize: '35px',
        color: '#fff',
    },
}));
function AvatarUser({ settings }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.current);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogoutClick = () => {
        const action = logout();
        dispatch(action);
        handleCloseUserMenu();
    };
    return (
        <Box className={classes.root} sx={{ flexGrow: 0 }}>
            <Typography>Xin chào, {user.fullName}</Typography>
            <Box>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                    <AccountCircleIcon className={classes.avatar} />
                </IconButton>
            </Box>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Trang cá nhân</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Đơn hàng</Typography>
                </MenuItem>
                <MenuItem onClick={handleLogoutClick}>
                    <Typography textAlign="center">Đăng xuất</Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default AvatarUser;
