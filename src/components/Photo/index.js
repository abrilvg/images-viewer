import React from 'react';
import PropTypes from 'prop-types';

import './photo.scss';

const Photo = ({photo}) => {
    return (
        <div className="photo">
            <img src={photo.img_src} alt="Rover"/>
        </div>
    )
};

Photo.propTypes = {
    photo: PropTypes.object
}

export default Photo;
