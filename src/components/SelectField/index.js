import React from 'react';
import PropTypes from 'prop-types';

import './selectField.scss';

const SelectField = ({options, label, secondary, value, onChange}) => {

    const handleChange = ({target: {value}}) => onChange(value);

    const classNameValue = secondary? 'select-content secondary': 'select-content';

    return (
        <div className={classNameValue}>
            {label && <label>{label}</label>}
            <select value={value} onChange={handleChange}>
                { value === '' && <option value={'empty'} key={'empty'}>{'Select an option...'}</option>}
                {
                    options.map((o, index) => <option value={o.key} key={index}>{o.name}</option>)
                }
            </select>
        </div>
    )
};

SelectField.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    label: PropTypes.string,
    secondary: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default SelectField;
