import React from 'react';
import SelectField from '../SelectField';
import { withRouter } from 'react-router-dom';
import QueryString from 'query-string';

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

const Header = ({history}) => {

    let values = QueryString.parse(history.location.search);

    const handleChangeRover = (rover) => {
        values = {...values, rover};
        history.push(`?${QueryString.stringify(values)}`);
    };

    return (
        <div className="header">
            <section className="logo">
                <img src='/mars.svg' height="50" width="50" alt="Mars logo"/>
                <h2>Rover Mars</h2>
            </section>
            <section className="rovers">
                <SelectField
                    options={roverOptions}
                    initialValue={values.rover? values.rover : null}
                    onChange={handleChangeRover}
                />
            </section>
        </div>
    );
};

export default withRouter(Header);
export {Header};
