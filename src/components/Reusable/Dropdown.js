import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({value, data, onChange}) => {

    const handleChange = (event) => {
        const {value} = event.target;
        onChange(value);
    };

    return (
        <div className="form-group">
            <select
                value={value}
                className="form-control"
                onChange={handleChange}>
                <option value="">"Select Category"</option>
                {data.map((item, key) => (
                    <option
                        key={key}
                        value={item.Category_Name}>
                        {item.Category_Name}
                    </option>
                ))}
            </select>
        </div>
    )
};

Dropdown.propTypes = {
    value: PropTypes.string,
    data: PropTypes.array.isRequired,
    styleClass: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

Dropdown.defaultProps = {
    value: '',
    styleClass: '',
    placeholder: ''
};

export default Dropdown;