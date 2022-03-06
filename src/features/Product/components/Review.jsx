import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { createTheme, Grid, Rating, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ReviewUser from './ProductReview/ReviewUser';
import ReviewInfo from './ProductReview/ReviewInfo';

Review.propTypes = {
    review: PropTypes.object,
};
const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        borderBottom: `1px solid ${theme.palette.grey[200]}`,
        paddingBottom: theme.spacing(2),
    },
    left: {
        width: '250px',
    },

    right: {
        flex: '1 1 0',
    },
}));
function Review({ review = {} }) {
    const classes = useStyles();
    return (
        <Box className={classes.root} sx={{ p: 2 }}>
            <Grid container>
                <Grid item className={classes.left}>
                    <ReviewUser review={review} />
                </Grid>
                <Grid item className={classes.right}>
                    <ReviewInfo review={review} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Review;
