import React from 'react';

const Paginate = ({ cardsPerPage, totalCards, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex space-x-4">
        <li>
          <button
            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
            className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-200 rounded-full"
          >
            &larr; Prev
          </button>
        </li>

        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 ${number === currentPage ? 'bg-gray-300' : 'bg-white'} text-gray-600 hover:bg-gray-200 rounded-full`}
            >
              {number}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={() => paginate(currentPage < pageNumbers.length ? currentPage + 1 : currentPage)}
            className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-200 rounded-full"
          >
            Next &rarr;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginate;
