import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './dateField.scss';

const DateField = ({label, initialValue, onChange}) => {

    let initialValueFormatted = '';
    if (initialValue) {
        initialValue = new Date(initialValue);
        let year = initialValue.getFullYear();
        let month = initialValue.getMonth() + 1 < 10 ? `0${initialValue.getMonth()+1}` : initialValue.getMonth()+1;
        let day = initialValue.getDate() < 10 ? `0${initialValue.getDate()}` : initialValue.getDate();
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
