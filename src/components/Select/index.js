import React from 'react';
import PropTypes from 'prop-types';

import './select.scss';

const Select = ({options}) => {
    return (
        <select className="select">
            {
                options.map(o => <option value={o.key}>{o.name}</option>)
            }
        </select>
    )
};

Select.propTypes = {
    options: PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string
    }).isRequired
};

export default Select;
