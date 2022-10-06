import React from 'react';
import './BodyRow.css';

function BodyRow({ children }) {
    return (
        <td className='body_row'>{children}</td>
    )
}

export default BodyRow