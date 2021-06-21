import React from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import QueryString from 'query-string';

import SelectField from '../SelectField';
import InputField from '../InputField';
import DateField from '../DateField';

import './searchbox.scss';

const cameras = [
    {
        key: 'FHAZ',
        name: 'Front Hazard Avoidance Camera'
    },
    {
        key: 'RHAZ',
        name: 'Rear Hazard Avoidance Camera'
    },
    {
        key: 'MAST',
        name: 'Mast Camera'
    },
    {
        key: 'CHEMCAM',
        name: '	Chemistry and Camera Complex'
    },
    {
        key: 'MAHLI',
        name: 'Mars Hand Lens Imager'
    },
    {
        key: 'MARDI',
        name: 'Mars Descent Imager'
    },
    {
        key: 'NAVCAM',
        name: 'Navigation Camera'
    },
    {
        key: 'PANCAM',
        name: 'Panoramic Camera'
    },
    {
        key: 'MINITES',
        name: 'Miniature Thermal Emission Spectrometer (Mini-TES)'
    }
];

const Searchbox = ({history}) => {

    let filters = QueryString.parse(history.location.search);

    const handleChangeFilter = (name, value) => {
        filters = {...filters, [name]: value, page: 1};
        history.push(`?${QueryString.stringify(filters)}`);
    };

    return (
        <div className="searchbox">
            <h1>Mars Rover Photos</h1>
            <section className="filters">
                <InputField
                    options={cameras}
                    secondary
                    label='Select Sol Date'
                    value={filters.sol}
                    onChange={handleChangeFilter.bind(this, 'sol')}
                />
                <SelectField
                    options={cameras}
                    secondary
                    label='Select Camera'
                    value={filters.camera? filters.camera : ''}
                    onChange={handleChangeFilter.bind(this, 'camera')}
                />
                <DateField
                    label='Select Earth Day'
                    onChange={handleChangeFilter.bind(this, 'earth_date')}
                    value={filters.earth_date}
                />
            </section>
        </div>
    )
};

Searchbox.propTypes = {};

export default withRouter(Searchbox);
export {Searchbox};
