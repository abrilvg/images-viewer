import React from 'react';
import PropTypes from 'prop-types';

import './inputField.scss';

const InputField = ({label, type, value, onChange}) => {

    const handleChange = ({target: {value}}) => onChange(value);

    return (
        <div className="input-content">
            {label && <label>{label}:</label>}
            <input type={type} value={value} onChange={handleChange}/>
        </div>
    )
};

InputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.number
    ]).isRequired,
    onChange: PropTypes.func.isRequired
};

export default InputField;
