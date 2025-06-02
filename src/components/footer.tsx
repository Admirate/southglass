'use client';

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-blue-900/30 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Contact Us Button */}
          <Link 
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-8 py-3 rounded-lg text-white font-medium shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-lg"
          >
            Contact Us
              </Link>
        
        {/* Back to top button */}
          <button 
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 p-3 rounded-full text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
} 