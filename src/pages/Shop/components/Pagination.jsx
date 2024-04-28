import { useState, useEffect } from 'react';
import Item from '../../../components/Item/Item';

import { Select } from '@chakra-ui/react'

const Pagination = ({ data, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const numPages = Math.ceil(data.length / itemsPerPage);
        setTotalPages(numPages);
    }, [data, itemsPerPage]);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const firstTenItems = data.slice(0, 10);
    const paginatedItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const isPrevDisabled = currentPage === 1;
    const isNextDisabled = currentPage === totalPages;

    return (
        <div className="">
            <div className='w-[265px]'>
                <div className='border-2 border-grey-500 my-4'>
                    <select id="underline_select" className="block px-3 py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
            </div>
            {firstTenItems.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                    {paginatedItems.map((item, index) => (
                        <Item key={index} products={item} />
                    ))}
                </div>
            )}

            {totalPages > 1 && (
                <ul className="py-12 pagination-controls flex gap-5 justify-end items-center text-[1.3em]">
                    <li className={`pagination-button mt-2 ${isPrevDisabled ? 'disabled hidden' : ''}`}>
                        <button type="button" disabled={isPrevDisabled} onClick={() => handlePageChange(currentPage - 1)}>
                            <box-icon type='solid' name='chevron-left'></box-icon>
                        </button>
                    </li>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                        <li key={pageNumber} className={`pagination-button ${pageNumber === currentPage ? 'active font-bold' : ''}`}>
                            <button type="button" onClick={() => handlePageChange(pageNumber)}>
                                {pageNumber}
                            </button>
                        </li>
                    ))}

                    <li className={`pagination-button mt-2 ${isNextDisabled ? 'disabled hidden' : ''}`}>
                        <button type="button" disabled={isNextDisabled} onClick={() => handlePageChange(currentPage + 1)}>
                            <box-icon name='chevron-right' type='solid' ></box-icon>
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Pagination;
