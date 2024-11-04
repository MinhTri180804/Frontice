import React from 'react';
import './Pagination.scss';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      // Show all pages if total pages are 7 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first 1, last 1, current, and surrounding pages
      if (currentPage > 4) pages.push(1, '...');

      for (
        let i = Math.max(1, currentPage - 2);
        i <= Math.min(totalPages, currentPage + 2);
        i++
      ) {
        pages.push(i);
      }

      // Adjust the condition to ensure the last page is always displayed
      if (currentPage < totalPages - 3 && currentPage + 2 < totalPages) {
        pages.push('...');
      }

      // Ensure last page is always shown
      if (currentPage + 2 < totalPages) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number' && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination">
      <button
        className={`pagination__item ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          className={`pagination__item ${currentPage === page ? 'active' : ''}`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      ))}

      <button
        className={`pagination__item ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
