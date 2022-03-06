import { createTheme, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import React from 'react';
ProductDescription.propTypes = {
    product: PropTypes.object,
};
const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        padding: theme.spacing(4),
    },
}));
function ProductDescription({ product = {} }) {
    const classes = useStyles();
    const safeDescription = DOMPurify.sanitize(product.description);
    return (
        <Paper className={classes.root}>
            <div className="content" dangerouslySetInnerHTML={{ __html: safeDescription }}></div>
        </Paper>
    );
}

export default ProductDescription;
