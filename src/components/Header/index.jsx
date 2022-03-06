import { AppBar, Container, Link, Toolbar } from '@mui/material';
import React from 'react';
import AvatarUser from './components/AvatarUser';
import LargeNavbar from './components/LargeNavbar';
import SmallNavbar from './components/SmallNavbar';

Header.propTypes = {};

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
function Header() {
    return (
        <AppBar position="static" color="success">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <LargeNavbar pages={pages} />

                    <SmallNavbar pages={pages} />

                    {/* <AvatarUser settings={settings} /> */}
                    <div>Đăng kí</div>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
