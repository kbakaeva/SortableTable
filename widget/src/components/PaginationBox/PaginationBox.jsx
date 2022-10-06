import React from 'react'
import './PaginationBox.css'

function PaginationBox({ totalPages, setPage, gaps }) {
    return (
        <div>
            <button
                onClick={() => setPage(1)}
                className="page_button">
                1
            </button>
            {gaps.before ? "..." : null}
            {gaps.paginationGroup.map((el) => (
                <button
                    onClick={() => setPage(el)}
                    key={el}
                    className="page_button">
                    {el}
                </button>
            ))}
            {gaps.after ? "..." : null}
            <button
                onClick={() => setPage(totalPages)}
                className="page_button">
                {totalPages}
            </button>
        </div>
    )
}

export default PaginationBox