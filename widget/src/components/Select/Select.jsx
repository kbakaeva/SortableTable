import React from 'react';
import './Select.css';

function Select({ options, defaultValue, value, onChange }) {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
            className='sort_column'>
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}

export default Select