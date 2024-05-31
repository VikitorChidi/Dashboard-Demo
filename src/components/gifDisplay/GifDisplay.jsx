import React from 'react';
import propTypes from 'prop-types';

const GifDisplay = ({src, alt, width, height}) => {
    return (
            <img src={src} alt={alt || 'GIF'} style={{width: width, height: height, objectFit: 'cover'}}/>
    );
};

export default GifDisplay;

GifDisplay.propTypes = {
    src: propTypes.string.isRequired,
    alt: propTypes.string,
    width: propTypes.string,
    height: propTypes.string,
}
