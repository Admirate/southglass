import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className={`
            fixed bottom-8 right-8 z-50 
            p-3 rounded-full 
            bg-blue-600 hover:bg-blue-700 
            text-white shadow-lg shadow-blue-600/25 
            transition-all duration-300 ease-in-out
            hover:scale-110 hover:shadow-xl hover:shadow-blue-600/40
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black
          `}
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
} 