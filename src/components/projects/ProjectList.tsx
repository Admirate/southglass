'use client';

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Project } from "@/types/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import ProjectSkeleton from "./ProjectSkeleton";
import Pagination from "@/components/Pagination";

interface ProjectListProps {
  category: string;
  searchQuery: string;
}

const PROJECTS_PER_PAGE = 6;

export default function ProjectList({ category, searchQuery }: ProjectListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Pagination state
  const currentPage = parseInt(searchParams.get('page') || '1');
  const [totalPages, setTotalPages] = useState(1);
  const [totalProjects, setTotalProjects] = useState(0);

  // Fetch projects from API
  const fetchProjects = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: PROJECTS_PER_PAGE.toString(),
        category,
        search: searchQuery,
      });
      
      const response = await fetch(`/api/projects?${params}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      
      const data = await response.json();
      
      if (data.success) {
        setProjects(data.data);
        setTotalPages(data.meta.totalPages);
        setTotalProjects(data.meta.total);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching projects:', err);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, category, searchQuery]);

  // Fetch projects when dependencies change
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    router.push(`?${params.toString()}`, { scroll: true });
    
    // Scroll to top of projects section after a short delay
    setTimeout(() => {
      if (projectsRef.current) {
        projectsRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  };

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Small delay before clearing the project to allow exit animation
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleRetry = () => {
    fetchProjects();
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[...Array(PROJECTS_PER_PAGE)].map((_, i) => (
            <ProjectSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
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
    );
  }

  // No projects found
  if (projects.length === 0) {
    return (
      <div className="text-center py-10 px-4 bg-gray-900/30 rounded-xl border border-white/5">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/80 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-medium mb-2">No projects found</h3>
        <p className="text-gray-400 max-w-md mx-auto">
          We couldn't find any projects matching your search criteria. Try adjusting your filters or search term.
        </p>
      </div>
    );
  }

  return (
    <>
      <div ref={projectsRef} className="space-y-8">
        {/* Results info */}
        <div className="flex items-center justify-between">
          <p className="text-gray-400">
            Showing {(currentPage - 1) * PROJECTS_PER_PAGE + 1}-{Math.min(currentPage * PROJECTS_PER_PAGE, totalProjects)} of {totalProjects} projects
          </p>
        </div>

        {/* Projects Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onViewDetails={handleViewDetails}
          />
      ))}
    </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mt-12"
        />
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        allProjects={projects}
      />
    </>
  );
} 