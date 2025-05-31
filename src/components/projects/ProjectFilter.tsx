'use client';

import { useState, useRef, useEffect } from "react";
import { Search, X, ChevronDown, Filter } from "lucide-react";
import { allCategories } from "@/data/projects";

interface ProjectFilterProps {
  onFilterChange: (category: string, searchQuery: string) => void;
  initialCategory?: string;
  initialSearch?: string;
}

export default function ProjectFilter({ 
  onFilterChange, 
  initialCategory = "all",
  initialSearch = ""
}: ProjectFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Update state when initial values change (from URL)
  useEffect(() => {
    setSelectedCategory(initialCategory);
    setSearchQuery(initialSearch);
    setIsInitialized(true);
  }, [initialCategory, initialSearch]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (isInitialized) {
    onFilterChange(category, searchQuery);
    }
    setDropdownOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);
    if (isInitialized) {
      onFilterChange(selectedCategory, newSearchQuery);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    if (isInitialized) {
    onFilterChange(selectedCategory, "");
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-8 md:mb-12">
      <div className="flex flex-col gap-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full bg-gray-900/50 border border-white/10 rounded-xl pl-10 pr-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all"
          />
          {searchQuery && (
            <button 
              onClick={clearSearch} 
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
            </button>
          )}
        </div>
        
        {/* Mobile Dropdown Filter */}
        <div className="block md:hidden relative" ref={dropdownRef}>
          <button 
            className="w-full flex items-center justify-between bg-gray-800 border border-white/10 text-white px-4 py-3 rounded-lg"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>
                {selectedCategory === 'all' ? 'All Projects' : selectedCategory}
              </span>
            </div>
            <ChevronDown className={`h-5 w-5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {dropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-[#0a1929] border border-blue-500/30 rounded-lg shadow-xl z-10">
              <div className="p-2 max-h-60 overflow-y-auto">
                <button
                  onClick={() => handleCategoryChange("all")}
                  className={`w-full text-left px-4 py-3 rounded-md text-sm mb-1 ${
                    selectedCategory === "all"
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-700/50"
                  }`}
                >
                  All Projects
                </button>
                
                {allCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full text-left px-4 py-3 rounded-md text-sm mb-1 ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-700/50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Desktop Filter Buttons */}
        <div className="hidden md:flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar flex-nowrap">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
            }`}
          >
            All Projects
          </button>
          
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 