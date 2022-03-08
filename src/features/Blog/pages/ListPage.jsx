import { Box, Container, Paper } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BLogItem from '../components/BlogItem';

ListPage.propTypes = {};

function ListPage(props) {
    const url = `https://gadgets.dantri.com.vn/api/corona`;
    const [listBlog, setListBlog] = useState([]);
    useEffect(() => {
        try {
            (async () => {
                const { data } = await axios.get(url);
                setListBlog(data);
            })();
        } catch (error) {
            console.log('Failed to fetch blog list ', error);
        }
    }, []);

    console.log(listBlog);
    return (
        <Box pt={4}>
            <Container>
                <Paper elevation={0} sx={{ p: 2 }}>
                    <BLogItem />
                </Paper>
            </Container>
        </Box>
    );
}

export default ListPage;
