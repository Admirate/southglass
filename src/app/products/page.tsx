'use client';

import { useState, useEffect, useCallback } from "react";
import { Search, Filter, X, ChevronDown, Loader2, Settings } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductSkeleton from "@/components/products/ProductSkeleton";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { Product } from "@/types/products";

const PRODUCTS_PER_PAGE = 9;

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    category: "",
    type: "",
    search: "",
  });
  const [showFilters, setShowFilters] = useState(false);

  // State for infinite scroll
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Categories and types for filters
  const [categories, setCategories] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);

  // Fetch products from API
  const fetchProducts = useCallback(async (pageNum: number, isNewSearch: boolean = false) => {
    if (isLoading || (!hasMore && !isNewSearch)) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const params = new URLSearchParams({
        page: pageNum.toString(),
        limit: PRODUCTS_PER_PAGE.toString(),
        ...(filters.category && { category: filters.category }),
        ...(filters.type && { type: filters.type }),
        ...(filters.search && { search: filters.search }),
      });
      
      const response = await fetch(`/api/products?${params}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data = await response.json();
      
      if (data.success) {
        if (isNewSearch) {
          setProducts(data.data);
        } else {
          setProducts(prev => [...prev, ...data.data]);
        }
        
        setHasMore(data.meta.hasMore);
        
        // Extract unique categories and types for filters
        const allProducts = isNewSearch ? data.data : [...products, ...data.data];
        const uniqueCategories = [...new Set(allProducts.map((p: Product) => p.categoryName).filter(Boolean))] as string[];
        const uniqueTypes = [...new Set(allProducts.map((p: Product) => p.type))] as string[];
        setCategories(uniqueCategories);
        setTypes(uniqueTypes);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching products:', err);
    } finally {
      setIsLoading(false);
      setIsInitialLoading(false);
    }
  }, [filters, hasMore, isLoading, products]);

  // Load more products
  const loadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      setPage(prev => prev + 1);
    }
  }, [isLoading, hasMore]);

  // Set up infinite scroll
  const infiniteScrollRef = useInfiniteScroll(loadMore, {
    enabled: hasMore && !isLoading,
    rootMargin: '200px',
  });

  // Initial load
  useEffect(() => {
    fetchProducts(1, true);
  }, []);

  // Load more when page changes
  useEffect(() => {
    if (page > 1) {
      fetchProducts(page);
    }
  }, [page]);

  // Reset and reload when filters change
  useEffect(() => {
    setPage(1);
    setHasMore(true);
    fetchProducts(1, true);
  }, [filters.category, filters.type, filters.search]);

  const clearFilters = () => {
    setFilters({
      category: "",
      type: "",
      search: "",
    });
  };

  const handleRetry = () => {
    fetchProducts(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Header with navigation back to home */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black" />
          <div 
            className="w-full h-full transform scale-105 animate-slow-zoom" 
            style={{
              backgroundImage: "url('/glass-hero-bg.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl space-y-6">
            <div className="space-y-2">
              <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-medium">
                Premium Quality
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Premium Glass Solutions
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Discover our collection of high-quality glass products for architectural, automotive, and specialty applications.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Specifications Link */}
      <div className="border-b border-white/10 bg-black/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-white mb-2">Need Technical Data?</h3>
              <p className="text-gray-400 text-sm">
                View comprehensive specifications, standards, and certifications for all our glass products.
              </p>
            </div>
            <Link 
              href="/specifications" 
              className="glass-button px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-accent/20 transition-all duration-300 border border-accent/50"
            >
              <Settings className="h-5 w-5 text-accent" />
              <span className="text-white font-medium">View Technical Specifications</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-4">
            {/* Mobile Search and Filter Toggle */}
            <div className="flex gap-3">
              <div className="flex-1 relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all text-sm backdrop-blur-sm"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-2 hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                <Filter className="h-5 w-5" />
                <span className="hidden sm:inline">Filters</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Expandable Filters */}
            <div className={`${showFilters ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3">
                <div className="relative group">
                  <select 
                    className="appearance-none w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-10 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all text-sm backdrop-blur-sm [&>option]:text-black"
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>

                <div className="relative group">
                  <select 
                    className="appearance-none w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-10 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all text-sm backdrop-blur-sm [&>option]:text-black"
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                  >
                    <option value="">All Types</option>
                    {types.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
              </div>

              {/* Active Filters */}
              {(filters.category || filters.type || filters.search) && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {filters.category && (
                    <div className="bg-blue-500/10 text-blue-400 rounded-full px-4 py-1.5 text-sm flex items-center gap-2 border border-blue-500/20">
                      <span className="truncate max-w-[150px]">Category: {filters.category}</span>
                      <button 
                        onClick={() => setFilters({ ...filters, category: "" })}
                        className="hover:text-white transition-colors flex-shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  {filters.type && (
                    <div className="bg-blue-500/10 text-blue-400 rounded-full px-4 py-1.5 text-sm flex items-center gap-2 border border-blue-500/20">
                      <span className="truncate max-w-[150px]">Type: {filters.type}</span>
                      <button 
                        onClick={() => setFilters({ ...filters, type: "" })}
                        className="hover:text-white transition-colors flex-shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  {(filters.category || filters.type || filters.search) && (
                    <button
                      onClick={clearFilters}
                      className="bg-white/5 text-gray-300 rounded-full px-4 py-1.5 text-sm flex items-center gap-2 hover:bg-white/10 transition-all border border-white/10"
                    >
                      <X className="h-4 w-4" />
                      <span>Clear all</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our Products
            </h2>
            <p className="text-gray-400 mt-1">
              {isInitialLoading ? 'Loading...' : `${products.length} products loaded`}
            </p>
          </div>
          
          <div className="hidden md:block text-center w-2/4">
            <h2 className="text-3xl font-bold text-[#3BA6C4]">
              Built with Legacy.Backed by Leaders.
            </h2>
          </div>
          
          <div className="w-full md:w-1/4"></div>
        </div>
        
        {/* Error State */}
        {error && !isInitialLoading && (
          <div className="text-center py-12">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 max-w-md mx-auto">
              <p className="text-red-400 mb-4">{error}</p>
              <button
                onClick={handleRetry}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Initial Loading State */}
        {isInitialLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[...Array(PRODUCTS_PER_PAGE)].map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Products Grid */}
        {!isInitialLoading && !error && (
          <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/70 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                <div 
                  className="w-full h-full bg-blue-500/30 group-hover:bg-blue-500/40 transition-colors duration-300"
                  style={{
                    backgroundImage: product.image ? `url(${product.image})` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                {product.featured && (
                  <div className="absolute top-4 right-4 z-20 bg-blue-500 text-black text-xs font-semibold py-1.5 px-3 rounded-full">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-medium">
                    {product.type}
                  </div>
                </div>
                
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                {product.features && (
                  <div className="mb-4">
                    <h4 className="font-medium mb-2 text-sm text-gray-300">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Applications */}
                {product.applications && (
                  <div>
                    <h4 className="font-medium mb-2 text-sm text-gray-300">Applications</h4>
                    <ul className="space-y-2">
                      {product.applications.slice(0, 2).map((application, index) => (
                        <li key={index} className="text-sm text-gray-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                          <span className="line-clamp-1">{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

            {/* Loading More Indicator */}
            {isLoading && !isInitialLoading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
                {[...Array(3)].map((_, i) => (
                  <ProductSkeleton key={`loading-${i}`} />
                ))}
              </div>
            )}

            {/* Infinite Scroll Trigger */}
            <div ref={infiniteScrollRef} className="h-10" />

            {/* End of Products Message */}
            {!hasMore && products.length > 0 && (
              <div className="text-center py-12">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 max-w-md mx-auto">
                  <p className="text-gray-400">
                    You've reached the end! That's all {products.length} products.
                  </p>
                </div>
              </div>
            )}

            {/* No Products Found */}
            {!isInitialLoading && products.length === 0 && !error && (
              <div className="text-center py-12">
                <div className="bg-white/5 border border-white/10 rounded-xl p-8 max-w-md mx-auto">
                  <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-gray-400">
                    Try adjusting your filters or search query
                  </p>
                  {(filters.category || filters.type || filters.search) && (
                    <button
                      onClick={clearFilters}
                      className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
} 