import React from 'react';
import './HeadCellSort.css';

function HeadCellSort({ children }) {
    return (
        <td className='head_cell'>
            <p className='head_cell_title'>{children}</p>
        </td>
    )
}

export default HeadCellSort