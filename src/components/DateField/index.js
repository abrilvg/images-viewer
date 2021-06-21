import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './dateField.scss';

const DateField = ({label, value, onChange}) => {

    let valueFormatted = '';
    if (value) {
        value = new Date(value);
        let year = value.getFullYear();
        let month = value.getMonth() + 1 < 10 ? `0${value.getMonth()+1}` : value.getMonth()+1;
        let day = value.getDate() < 10 ? `0${value.getDate()}` : value.getDate();
        valueFormatted = `${year}-${month}-${day}`;
    }

    const handleChange = ({target: {value}}) => onChange(value);

    return (
        <div className="date-content">
            {label && <label>{label}:</label>}
            <input
                type="date"
                value={valueFormatted}
                onChange={handleChange}
            />
        </div>
    )
}

DateField.propTypes = {
    label: PropTypes.string,
    initialValue: PropTypes.oneOfType([
        PropTypes.string
    ]).isRequired,
    onChange: PropTypes.func.isRequired
};

export default DateField;
