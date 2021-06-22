import React from 'react';
import PropTypes from 'prop-types';

import './photo.scss';

const Photo = ({photo}) => {
    const {rover: {landing_date, launch_date}} = photo;
    const formattedLandingDate = landing_date? (new Date(landing_date)).toLocaleDateString() : '-';
    const formattedLaunchDate = launch_date? (new Date(launch_date)).toLocaleDateString() : '-';

    return (
        <div className="photo">
            <img src={photo.img_src} alt="Rover"/>
            <div className="description">
                <strong>Landing Date:</strong>&nbsp;{formattedLandingDate}<br/>
                <strong>Launch Date:</strong>&nbsp;{formattedLaunchDate}<br/>
            </div>
        </div>
    )
};

Photo.propTypes = {
    photo: PropTypes.object
}

export default Photo;
