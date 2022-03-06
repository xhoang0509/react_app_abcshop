import React from 'react';
import PropTypes from 'prop-types';
import { Box, createTheme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

ReviewUser.propTypes = {
    review: PropTypes.object,
};
const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',

        '& > img': {
            borderRadius: '50%',
            marginRight: theme.spacing(2),
        },
    },
    name: {
        fontWeight: 'bold',
    },
    info: {
        color: theme.palette.grey[500],
    },
}));
function ReviewUser({ review = {} }) {
    const classes = useStyles();
    const {
        name,
        avatar,
        summary: { joined_time, total_review },
    } = review.created_by.contribute_info;

    return (
        <Box className={classes.root}>
            <img src={avatar} alt="" />
            <Box>
                <Typography className={classes.name}>{name}</Typography>
                <Typography className={classes.info} variant="body2">
                    {joined_time}
                </Typography>
                <Typography className={classes.info} variant="body2">
                    Đã viết: {total_review} Đánh giá
                </Typography>
            </Box>
        </Box>
    );
}

export default ReviewUser;
