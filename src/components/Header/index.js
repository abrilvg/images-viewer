import React from 'react';
import Select from '../Select';

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

const Header = () => {
    return (
        <div className="header">
            <section className="logo">
                <img src='/mars.svg' height="50" width="50" alt="Mars logo"/>
                <h2>Rover Mars</h2>
            </section>
            <section className="rovers">
                <Select options={roverOptions} />
            </section>
        </div>
    );
};

export default Header;
