import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './inputField.scss';

const InputField = ({label, type, initialValue, onChange}) => {

    const [inputValue, setInputValue] = useState(initialValue);

    const handleChange = (event) => {
        setInputValue(event.target.value);
        onChange(event.target.value);
    };

    return (
        <div className="input-content">
            {label && <label>{label}:</label>}
            <input type={type} value={inputValue} onChange={handleChange}/>
        </div>
    )
}

InputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    initial: PropTypes.oneOfType([
        PropTypes.number
    ]).isRequired,
    onChange: PropTypes.func.isRequired
};

export default InputField;
