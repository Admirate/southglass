'use client';

import { useState, useEffect } from 'react';
import { Project } from '@/types/projects';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Building } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  allProjects: Project[];
}

export default function ProjectModal({ project, isOpen, onClose, allProjects }: ProjectModalProps) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState<Project | null>(project);

  useEffect(() => {
    if (project) {
      const index = allProjects.findIndex(p => p.id === project.id);
      setCurrentProjectIndex(index);
      setCurrentProject(project);
    }
  }, [project, allProjects]);

  const handlePrevious = () => {
    const newIndex = currentProjectIndex === 0 ? allProjects.length - 1 : currentProjectIndex - 1;
    setCurrentProjectIndex(newIndex);
    setCurrentProject(allProjects[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentProjectIndex === allProjects.length - 1 ? 0 : currentProjectIndex + 1;
    setCurrentProjectIndex(newIndex);
    setCurrentProject(allProjects[newIndex]);
  };

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

  if (!currentProject) return null;

  const primaryCategory = currentProject.categories[0];
  const gradientClass = getGradientByCategory(primaryCategory);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              className="relative bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                {/* Image/Visual Section */}
                <div className="relative h-64 md:h-full">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {currentProject.categories.map(category => (
                      <span
                        key={category}
                        className="bg-white/20 backdrop-blur-sm text-white text-sm py-1 px-3 rounded-full border border-white/30"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details Section with Scrollbar */}
                <div className="p-6 md:p-8 overflow-y-auto max-h-[90vh] md:max-h-[600px] scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-800">
                  <div className="space-y-6">
                    {/* Location and Year */}
                    <div className="flex items-center gap-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{currentProject.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{currentProject.year}</span>
                      </div>
                    </div>

                    {/* Title and Overview */}
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{currentProject.title}</h2>
                      <h3 className="text-xl font-semibold text-white mb-3">Project Overview</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {currentProject.description}
                      </p>
                    </div>

                    {/* Specifications */}
                    {currentProject.specs && (
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Specifications</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {Object.entries(currentProject.specs).map(([key, value]) => (
                            <div key={key} className="bg-white/5 rounded-lg p-3">
                              <p className="text-sm text-gray-400 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </p>
                              <p className="text-white font-medium">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Project Counter */}
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-gray-400 text-center">
                        Project {currentProjectIndex + 1} of {allProjects.length}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 