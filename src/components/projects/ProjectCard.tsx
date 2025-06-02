'use client';

import { Project } from "@/types/projects";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  // Generate a consistent background color based on the project category
  const getGradientByCategory = (category: string) => {
    switch (category) {
      case 'Architecture':
        return 'from-blue-900 to-indigo-800';
      case 'Automotive':
        return 'from-gray-800 to-gray-900';
      case 'Locomotive':
        return 'from-blue-800 to-blue-950';
      case 'Navimotive':
        return 'from-teal-900 to-emerald-950';
      default:
        return 'from-blue-900 to-blue-950';
    }
  };

  const primaryCategory = project.categories[0];
  const gradientClass = getGradientByCategory(primaryCategory);

  return (
    <div className="group relative bg-gradient-to-br from-gray-900/80 to-black border border-white/10 hover:border-blue-500/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 h-full flex flex-col">
      <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transform transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1.5">
          {project.categories.map(category => (
            <span 
              key={category} 
              className="bg-blue-500/20 text-blue-300 text-xs py-0.5 px-2 rounded-md border border-blue-500/30 backdrop-blur-sm"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-3 flex-grow flex flex-col">
        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>{project.year}</span>
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
        
        <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 flex-grow">
          {project.description}
        </p>
        
        <div className="pt-2 sm:pt-3">
          <button 
            onClick={() => onViewDetails(project)}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-4 py-2 rounded-lg text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-md hover:shadow-blue-500/30 group"
          >
            <span>View details</span>
            <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
} 