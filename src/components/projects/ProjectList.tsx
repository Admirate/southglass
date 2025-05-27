'use client';

import { useState, useEffect } from "react";
import { Project } from "@/types/projects";
import { filterProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

interface ProjectListProps {
  category: string;
  searchQuery: string;
}

export default function ProjectList({ category, searchQuery }: ProjectListProps) {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    
    // Simple loading simulation for better UI feedback
    const timer = setTimeout(() => {
      setFilteredProjects(filterProjects(category, searchQuery));
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [category, searchQuery]);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Small delay before clearing the project to allow exit animation
    setTimeout(() => setSelectedProject(null), 300);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="animate-pulse bg-gray-800/50 rounded-xl overflow-hidden shadow-sm"
          >
            <div className="h-40 sm:h-48 md:h-56 bg-gray-700/50"></div>
            <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
              <div className="h-4 bg-gray-700/50 rounded w-1/3"></div>
              <div className="h-5 sm:h-6 bg-gray-700/50 rounded w-3/4"></div>
              <div className="h-3 sm:h-4 bg-gray-700/50 rounded w-full"></div>
              <div className="h-3 sm:h-4 bg-gray-700/50 rounded w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (filteredProjects.length === 0) {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        allProjects={filteredProjects}
      />
    </>
  );
} 