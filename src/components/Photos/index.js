import React from 'react';
import PropTypes from 'prop-types';

import Photo from '../Photo';

import './photos.scss';

const Photos = ({list}) => {
    return (
        <div className='photos'>
            {
                list.map(photo => <Photo photo={photo} key={photo.id}/>)
            }
        </div>
    )
}

Photos.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Photos;
