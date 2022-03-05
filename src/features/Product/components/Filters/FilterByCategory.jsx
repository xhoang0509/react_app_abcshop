import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { createTheme } from '@mui/material';
import { Typography } from '@mui/material';
import categoryApi from 'api/categoryApi';
import { makeStyles } from '@mui/styles';

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};
const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        padding: theme.spacing(2),
    },
    menu: {
        padding: 0,
        margin: 0,
        listStyleType: 'none',

        '& > li': {
            paddingTop: theme.spacing(1),
            paddingLeft: theme.spacing(1),
            cursor: 'pointer',

            '&:hover': {
                color: theme.palette.primary.light,
                transition: 'all 0.2s ease-in',
            },
        },
    },
}));
function FilterByCategory({ onChange }) {
    const classes = useStyles();
    const [categoriesList, setCategoriesList] = useState([]);

    useEffect(() => {
        try {
            (async () => {
                const response = await categoryApi.getAll();
                const newResponse = response.map((x) => ({ id: x.id, name: x.name }));
                setCategoriesList(newResponse);
            })();
        } catch (error) {
            console.log('Failed to fetch list categories');
        }
    }, []);

    const handleCategoryClick = (category) => {
        const { id, name } = category;
        if (onChange) {
            const newFilters = {
                'category.id': id,
                'category.name': name,
                _page: 1,
            };
            onChange(newFilters);
        }
    };
    return (
        <Box className={classes.root}>
            <Typography component="h3" variant="">
                DANH MỤC SẢN PHẨM
            </Typography>

            <ul className={classes.menu}>
                {categoriesList.map((category) => (
                    <li key={category.id} onClick={() => handleCategoryClick(category)}>
                        <Typography>{category.name}</Typography>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategory;
