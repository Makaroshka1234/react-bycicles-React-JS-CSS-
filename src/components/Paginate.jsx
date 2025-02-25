import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ onChangePage, pageCount }) => {
    return (

        <ReactPaginate
            className='pagination'
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={event => onChangePage(event.selected + 1)
            }
            pageRangeDisplayed={4}
            pageCount={3}

            renderOnZeroPageCount={null}
        />

    )
}

export default Pagination;
