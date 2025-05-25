'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectFilter from "@/components/projects/ProjectFilter";
import ProjectList from "@/components/projects/ProjectList";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function ProjectsPage() {
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (newCategory: string, newSearchQuery: string) => {
    setCategory(newCategory);
    setSearchQuery(newSearchQuery);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with navigation */}
      <Navbar />

      {/* Hero Section with Background Image */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          {/* Background image */}
          <Image
            src="/projects/projects-hero.png"
            alt="Innovative glass projects background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black/80 to-black" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl space-y-6">
            <div className="space-y-2">
              <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-medium">
                Our Portfolio
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Innovative Projects
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Explore our showcase of successful glass solutions across various industries and applications.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FeaturedProject />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Browse Our Projects</h2>
          <ProjectFilter onFilterChange={handleFilterChange} />
          <ProjectList category={category} searchQuery={searchQuery} />
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
} 