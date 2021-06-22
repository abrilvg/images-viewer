import React from 'react'
import QueryString from 'query-string';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import SelectField from '../SelectField';
import InputField from '../InputField';
import DateField from '../DateField';
import {clearAllSearches} from '../../actions';

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

const Searchbox = ({history, savedSearches}) => {

    const dispatch = useDispatch();

    let filters = QueryString.parse(history.location.search);

    const handleChangeFilter = (name, value) => {
        filters = {...filters, [name]: value, page: 1};
        history.push(`?${QueryString.stringify(filters)}`);
    };

    const handleSelectSavedSearch = (searchId) => {
        const savedSearch = savedSearches.find(s => s.id === searchId);
        const savedSearchFilters = QueryString.parse(savedSearch.filters);
        history.push(`?${QueryString.stringify(savedSearchFilters)}`);
    };

    const handleClearAllSearches = () => {
        let proceed = window.confirm('Are you sure you want delete all searches?');
        if (proceed) {
            clearAllSearches(dispatch);
        }
    }

    return (
        <div className="searchbox">
            <h1>Mars Rover Photos</h1>
            <section className="filters">
                <InputField
                    options={cameras}
                    secondary
                    label='Select Sol Date'
                    value={filters.sol}
                    type="number"
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
            <section className="saved-searches">
                <SelectField
                    options={savedSearches.map(s => ({...s, key: s.id, name: s.searchName}))}
                    secondary
                    label='Saved Searches'
                    value={QueryString.stringify(filters)? QueryString.stringify(filters): ''}
                    onChange={handleSelectSavedSearch.bind(this)}
                />
                <button onClick={handleClearAllSearches}>
                    Clear All Searches
                </button>
            </section>
        </div>
    )
};

Searchbox.propTypes = {
    savedSearches: PropTypes.arrayOf(PropTypes.object)
}

export default Searchbox;
