import { NextRequest, NextResponse } from 'next/server';
import { projects } from '@/data/projects';
import { Project } from '@/types/projects';

// Helper function to filter projects
function filterProjects(
  projects: Project[],
  category: string,
  searchQuery: string
): Project[] {
  let filtered = [...projects];
  
  // Filter by category
  if (category && category !== 'all') {
    filtered = filtered.filter(project => 
      project.categories.some(cat => 
        cat.toLowerCase() === category.toLowerCase()
      )
    );
  }
  
  // Filter by search query
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(project =>
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.location?.toLowerCase().includes(query) ||
      project.categories.some(cat => cat.toLowerCase().includes(query))
    );
  }
  
  return filtered;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    // Pagination parameters
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '6');
    const offset = (page - 1) * limit;
    
    // Filter parameters
    const category = searchParams.get('category') || 'all';
    const searchQuery = searchParams.get('search') || '';
    
    // Apply filters
    const filteredProjects = filterProjects(projects, category, searchQuery);
    
    // Calculate pagination
    const totalProjects = filteredProjects.length;
    const totalPages = Math.ceil(totalProjects / limit);
    const hasMore = page < totalPages;
    
    // Get paginated results
    const paginatedProjects = filteredProjects.slice(offset, offset + limit);
    
    // Simulate network delay in development for testing loading states
    if (process.env.NODE_ENV === 'development') {
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    
    return NextResponse.json({
      success: true,
      data: paginatedProjects,
      meta: {
        page,
        limit,
        total: totalProjects,
        totalPages,
        hasMore,
        category,
        searchQuery,
      },
    });
    
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch projects',
      },
      { status: 500 }
    );
  }
} 