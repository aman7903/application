import React from 'react';

const Pagination = ({ totalPosts, limit, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalPosts / limit);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='page'>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
