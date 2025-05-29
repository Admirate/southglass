import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange,
  className = "" 
}: PaginationProps) {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  const pageNumbers = getPageNumbers();

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`} role="navigation" aria-label="Pagination">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
        className={`
          flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all
          ${currentPage === 1
            ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
            : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
          }
        `}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pageNumbers.map((number, index) => {
          if (number === '...') {
            return (
              <span
                key={`dots-${index}`}
                className="px-3 py-2 text-gray-400"
                aria-hidden="true"
              >
                ...
              </span>
            );
          }

          const pageNumber = number as number;
          const isActive = pageNumber === currentPage;

          return (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              aria-label={`Go to page ${pageNumber}`}
              aria-current={isActive ? 'page' : undefined}
              className={`
                min-w-[40px] h-10 px-3 py-2 rounded-lg text-sm font-medium transition-all
                ${isActive
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }
              `}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
        className={`
          flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all
          ${currentPage === totalPages
            ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
            : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
          }
        `}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
} 