import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './dateField.scss';

const DateField = ({label, initialValue, onChange}) => {

    let initialValueFormatted = '';
    if (initialValue) {
        let year = initialValue.getFullYear();
        let month = initialValue.getMonth() < 10 ? `0${initialValue.getMonth()}` : initialValue.getMonth();
        let day = initialValue.getDay() < 10 ? `0${initialValue.getDay()}` : initialValue.getMonth();
        initialValueFormatted = `${year}-${month}-${day}`;
    }

    const [inputValue, setInputValue] = useState(initialValueFormatted);

    const handleChange = (event) => {
        setInputValue(event.target.value);
        onChange(event.target.value);
    };

    return (
        <div className="date-content">
            {label && <label>{label}:</label>}
            <input
                type="date"
                value={inputValue}
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
