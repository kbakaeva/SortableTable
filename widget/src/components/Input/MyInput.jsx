import React from 'react';
import './MyInput.css'

function MyInput(props) {
    return (
        <input
            {...props}
            className="sort_input" />
    )
}

export default MyInput