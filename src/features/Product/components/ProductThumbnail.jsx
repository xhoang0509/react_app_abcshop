import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { STATIC_HOST } from 'constants';
import { THUMBNAIL_PLACEHOLDER } from 'constants';
import ReactImageZoom from 'react-image-zoom';

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail({ product }) {
    const thumbnailUrl = product.thumbnail
        ? STATIC_HOST + product.thumbnail.url
        : THUMBNAIL_PLACEHOLDER;
    const propsReactImageZoom = { width: '100%', height: 250, zoomWidth: 500, img: thumbnailUrl };
    return (
        <Box>
            <img src={thumbnailUrl} alt={product.name} width="100%" />
        </Box>
    );
}

export default ProductThumbnail;
