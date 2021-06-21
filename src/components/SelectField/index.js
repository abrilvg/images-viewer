import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './selectField.scss';

const SelectField = ({options, label, secondary, initialValue, onChange}) => {

    const [selectValue, setSelectValue] = useState(initialValue);

    const handleChange = ({target: {value}}) => {
        setSelectValue(value);
        onChange(value);
    };

    const classNameValue = secondary? 'select-content secondary': 'select-content';

    return (
        <div className={classNameValue}>
            {label && <label>{label}:</label>}
            <select value={selectValue} onChange={handleChange}>
                { !initialValue && <option value={'empty'} key={'empty'}>{'Select an option...'}</option>}
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
    initialValue: PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string
    }),
    onChange: PropTypes.func.isRequired
};

export default SelectField;
