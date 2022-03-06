import { Box, createTheme, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import Review from './Review';

ProductReviews.propTypes = {};
const url =
    'https://tiki.vn/api/v2/reviews?limit=10&include=comments,contribute_info&sort=score%7Cdesc,id%7Cdesc,stars%7Call&page=1&spid=71881461&product_id=71881455&seller_id=1';

const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {},
}));
function ProductReviews(props) {
    const classes = useStyles();
    const [reviewsList, setReviewsList] = useState();

    useEffect(() => {
        try {
            (async () => {
                const response = await fetch(url);
                const responseJSON = await response.json();
                const { data } = responseJSON;

                setReviewsList(data);
            })();
        } catch (error) {
            console.log('Failed to fetch list review');
        }
    }, []);

    if (!reviewsList) {
        return <div>Loading</div>;
    }

    return (
        <Box className={classes.root}>
            <Paper elevation={0}>
                {reviewsList.map((review) => (
                    <Review key={review.id} review={review} />
                ))}
            </Paper>
        </Box>
    );
}

export default ProductReviews;
