import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { createTheme, Rating, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
ReviewInfo.propTypes = {
    review: PropTypes.object,
};
const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {},
    title: {
        fontWeight: 'bold',
    },
    rating: {
        display: 'flex',
        alignItems: 'center',
        '& > span': {
            marginRight: theme.spacing(2),
        },
    },
    bought: {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.success.light,
        '& > span': {
            marginLeft: theme.spacing(0.5),
        },
        marginBottom: theme.spacing(2),
    },
    image: {
        display: 'flex',

        '& > img': {
            margin: theme.spacing(2),
            width: '152px',
            maxHeight: '100%',
        },
    },
    timeline: {
        color: theme.palette.grey[500],
    },
}));
function ReviewInfo({ review = {} }) {
    const classes = useStyles();
    const { title, rating, content, images, timeline } = review;
    console.log(images);
    return (
        <Box className={classes.root}>
            <Box className={classes.rating}>
                <Rating name="read-only" value={rating} readOnly />
                <span className={classes.title}>{title}</span>
            </Box>
            <Typography className={classes.bought} variant="body2">
                <CheckCircleIcon />
                <span>Đã mua hàng</span>
            </Typography>
            <Typography variant="body2">{content}</Typography>
            <Box className={classes.image}>
                {images.map((image) => {
                    if (image.full_path) {
                        return <img key={image.id} src={image.full_path} alt="" />;
                    } else {
                        return <div></div>;
                    }
                })}
            </Box>
            <Typography className={classes.timeline} sx={{ mt: 2 }} variant="body2">
                {timeline.explain}
            </Typography>
        </Box>
    );
}

export default ReviewInfo;
