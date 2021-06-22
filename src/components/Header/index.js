import React from 'react';
import SelectField from '../SelectField';
import { withRouter } from 'react-router-dom';
import QueryString from 'query-string';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import {saveSearch} from '../../actions/actions';

import './header.scss';

const roverOptions = [
    {
        key: 'curiosity',
        name: 'Curiosity'
    },
    {
        key: 'opportunity',
        name: 'Opportunity'
    },
    {
        key: 'spirit',
        name: 'Spirit'
    }
];

const Header = ({history, clearFilters}) => {

    const dispatch = useDispatch();

    let filters = QueryString.parse(history.location.search);

    const handleChangeRover = (rover) => {
        filters = {...filters, rover, page: 1};
        history.push(`?${QueryString.stringify(filters)}`);
    };

    const handleSaveCurrentSearch = () => {
        const searchName = window.prompt('Please enter a search name, otherwise search wont be saved');
        if (searchName) {
            const filtersToSave = QueryString.stringify(filters);
            const randomId = filtersToSave.toString(); //use as unique id
            saveSearch(dispatch, {
                searchName,
                id: randomId,
                filters: QueryString.stringify(filters)
            });
        }
    }

    return (
        <div className="header">
            <a href="#" className="logo" onClick={clearFilters}>
                <img src='/mars.svg' height="50" width="50" alt="Mars logo"/>
                <h2>Rover Mars</h2>
            </a>
            <section className="main-filters">
                <SelectField
                    options={roverOptions}
                    value={filters.rover? filters.rover : ''}
                    onChange={handleChangeRover}
                />
                <button onClick={handleSaveCurrentSearch}>
                    Save Current Search
                </button>
            </section>
        </div>
    );
};

Header.propTypes = {
    clearFilters: PropTypes.func.isRequired
}

export default withRouter(Header);
export {Header};
