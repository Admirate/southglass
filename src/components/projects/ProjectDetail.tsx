'use client';

import { Project } from "@/types/projects";
import { MapPin, Calendar, ChevronLeft, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  // Get the primary category for gradient color
  const primaryCategory = project.categories[0];
  let gradientClass = 'from-blue-900 to-indigo-800'; // Default for Architecture
  
  if (primaryCategory === 'Automotive') {
    gradientClass = 'from-gray-800 to-gray-900';
  } else if (primaryCategory === 'Locomotive') {
    gradientClass = 'from-blue-800 to-blue-950';
  } else if (primaryCategory === 'Navimotive') {
    gradientClass = 'from-teal-900 to-emerald-950';
  }

  return (
    <div className="container mx-auto px-4 pt-28 pb-16">
      <div className="mb-8">
        <Link 
          href="/projects"
          className="inline-flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors mb-6"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          <span>Back to all projects</span>
        </Link>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.categories.map(category => (
            <span 
              key={category} 
              className="bg-blue-500/20 text-blue-300 text-xs py-1 px-3 rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-400" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-400" />
            <span>{project.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-blue-400" />
            <span>{project.specs?.client || "Various Clients"}</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
        <div className="lg:col-span-3">
          <div className="relative rounded-xl overflow-hidden mb-8 aspect-video">
            <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`}>
              {/* Project title overlay on gradient background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white text-center max-w-md px-6">{project.title}</h3>
              </div>
            </div>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none space-y-6">
            <p className="text-lg leading-relaxed text-justify">{project.description}</p>
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-blue-500/50 inline-block">Project Overview</h2>
              <p className="text-base leading-relaxed text-justify mb-6">This project showcases South Glass's expertise in providing premium glass solutions that meet both aesthetic and functional requirements. Our team worked closely with the client to ensure every detail was executed to perfection.</p>
            </div>
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-blue-500/50 inline-block">Our Approach</h2>
              <p className="text-base leading-relaxed text-justify mb-6">The approach for this project involved detailed planning and precise execution to meet the unique challenges presented. We implemented innovative techniques and utilized our extensive experience to deliver exceptional results.</p>
            </div>
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-blue-500/50 inline-block">Key Features</h2>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">Premium quality materials selected for durability and aesthetic appeal</li>
                <li className="text-base leading-relaxed">Innovative installation methods to ensure longevity</li>
                <li className="text-base leading-relaxed">Energy-efficient design considerations</li>
                <li className="text-base leading-relaxed">Custom solutions tailored to the specific project requirements</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/80 rounded-xl border border-white/10 p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">Project Specifications</h3>
            <div className="space-y-4">
              {project.specs && Object.entries(project.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center pb-2 border-b border-white/10 last:border-none">
                  <span className="text-gray-400 capitalize">{key}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/80 rounded-xl border border-white/10 p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4 text-white">Interested in similar projects?</h3>
            <p className="text-gray-300 mb-6">Contact our team to discuss your project requirements and discover how South Glass can help bring your vision to life.</p>
            <Link 
              href="#contact"
              className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 