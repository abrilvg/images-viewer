import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './selectField.scss';

const SelectField = ({options, label, secondary, value, onChange}) => {

    const handleChange = ({target: {value}}) => onChange(value);

    const classNameValue = secondary? 'select-content secondary': 'select-content';

    console.log(value, '############ value');

    return (
        <div className={classNameValue}>
            {label && <label>{label}:</label>}
            <select value={value} onChange={handleChange}>
                { !value && <option value={'empty'} key={'empty'}>{'Select an option...'}</option>}
                {
                    options.map((o, index) => <option value={o.key} key={index}>{o.name}</option>)
                }
            </select>
        </div>
    )
};

SelectField.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string
    }).isRequired),
    label: PropTypes.string,
    secondary: PropTypes.bool,
    value: PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string
    }),
    onChange: PropTypes.func.isRequired
};

export default SelectField;
