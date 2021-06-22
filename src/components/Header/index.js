import React from 'react';
import SelectField from '../SelectField';
import { withRouter } from 'react-router-dom';
import QueryString from 'query-string';
import PropTypes from 'prop-types';

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

    let filters = QueryString.parse(history.location.search);

    const handleChangeRover = (rover) => {
        filters = {...filters, rover, page: 1};
        history.push(`?${QueryString.stringify(filters)}`);
    };

    return (
        <div className="header">
            <a href="#" className="logo" onClick={clearFilters}>
                <img src='/mars.svg' height="50" width="50" alt="Mars logo"/>
                <h2>Rover Mars</h2>
            </a>
            <section className="rovers">
                <SelectField
                    options={roverOptions}
                    value={filters.rover? filters.rover : ''}
                    onChange={handleChangeRover}
                />
            </section>
        </div>
    );
};

Header.propTypes = {
    clearFilters: PropTypes.func.isRequired
}

export default withRouter(Header);
export {Header};
