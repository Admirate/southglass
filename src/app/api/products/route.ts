import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data/products';
import { Product } from '@/types/products';

// Helper function to filter products
function filterProducts(
  products: Product[],
  filters: {
    category?: string;
    type?: string;
    search?: string;
  }
): Product[] {
  return products.filter(product => {
    const categoryMatch = !filters.category || product.categoryName === filters.category;
    const typeMatch = !filters.type || product.type === filters.type;
    const searchMatch = !filters.search || 
      product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      product.description.toLowerCase().includes(filters.search.toLowerCase());
    return categoryMatch && typeMatch && searchMatch;
  });
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    // Pagination parameters
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '9');
    const offset = (page - 1) * limit;
    
    // Filter parameters
    const filters = {
      category: searchParams.get('category') || undefined,
      type: searchParams.get('type') || undefined,
      search: searchParams.get('search') || undefined,
    };
    
    // Apply filters
    const filteredProducts = filterProducts(products, filters);
    
    // Calculate pagination
    const totalProducts = filteredProducts.length;
    const totalPages = Math.ceil(totalProducts / limit);
    const hasMore = page < totalPages;
    
    // Get paginated results
    const paginatedProducts = filteredProducts.slice(offset, offset + limit);
    
    // Simulate network delay in development for testing loading states
    if (process.env.NODE_ENV === 'development') {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    return NextResponse.json({
      success: true,
      data: paginatedProducts,
      meta: {
        page,
        limit,
        total: totalProducts,
        totalPages,
        hasMore,
      },
    });
    
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch products',
      },
      { status: 500 }
    );
  }
} 