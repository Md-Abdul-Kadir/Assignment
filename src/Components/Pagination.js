import React from 'react';

const Pagination = ({ postPerPage, totoalposts,paginate }) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totoalposts / postPerPage); i++) {
        pageNumber.push(i);
    }
    return (
        <nav className="d-flex">
            <ul className="pagination my-5 mx-auto">
                {pageNumber.map(number => (
                    <li key={number} className="page-item ">
                        <a onClick={()=>paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}

            </ul>
        </nav>
    );
};

export default Pagination;