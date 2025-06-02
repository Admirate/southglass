'use client';

import { useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Award, Building2, ChevronRight, Factory, Shield, MapPin, Check, Sparkles } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import TimelineItem from "@/components/timeline-item";
import CertificationCard from "@/components/certification-card";
import StaggeredReveal from "@/components/staggered-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import JsonLd from "@/components/JsonLd";

// Add About page structured data
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About South Glass",
  "description": "Learn about South Glass's history, mission, vision, infrastructure, certifications and commitment to quality since 2014.",
  "url": "https://southglass.com/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "South Glass",
    "foundingDate": "2014",
    "description": "Premium glass manufacturer specializing in architectural, automotive and specialty glass solutions with advanced manufacturing facilities in India.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India",
      "addressLocality": "Hyderabad"
    },
    "award": [
      {
        "@type": "Award",
        "name": "Facade of the Year - One Golden Mile Project",
        "description": "Landmark project solely supplied by South Glass"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "BIS Certification",
        "credentialCategory": "Indian standards certification"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "ISO Certification",
        "credentialCategory": "Global quality benchmarks"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "ARAI Certification",
        "credentialCategory": "Automotive-grade approval"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "NABL Certification",
        "credentialCategory": "Lab-tested assurance"
      }
    ]
  }
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased">
      <JsonLd data={aboutPageSchema} />
      
      {/* Modern Decorative Elements */}
      <div className="fixed w-screen h-screen opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-orange-500/10 to-transparent"></div>
      </div>
      
      {/* Subtle grid overlay for texture - Using CSS instead of image */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Header with navigation back to home */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
        <div className="absolute inset-0 z-0 opacity-75">
          <div className="relative w-full h-full">
            <img 
              src="/about page .jpg" 
              alt="South Glass manufacturing facility interior view" 
              className="object-cover w-full h-full"
              loading="eager"
              fetchPriority="high"
              width="1920"
              height="1080"
            />
          </div>
        </div>
        
        {/* Modern gradient overlay - reduced darkness */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10"></div>
        
        <div className="container relative z-20 px-4 md:px-6">
          <StaggeredReveal>
            <div className="max-w-4xl mx-auto text-center">
              {/* Adding history text and Ethics text */}
              <div className="mt-10">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-semibold leading-relaxed mb-40">
                  Since 2014, South Glass has delivered high-performance glass for automotive and architectural applications—designed for the demands of today, and tomorrow.
                </p>
                <p className="text-[#3BA6C4] tracking-[0.15em] sm:tracking-[0.25em] text-xl sm:text-2xl font-light">ETHICS . EXPERTISE . EXECUTION</p>
              </div>
            </div>
          </StaggeredReveal>
        </div>
      </section>

      {/* Our Story Section - Modern Clean Design */}
      <section className="py-24 md:py-32 relative">
        {/* Subtle divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center max-w-screen-lg mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">THE </span>
                <span className="text-[#3BA6C4]">SOUTH GLASS </span>
                <span className="text-white">STORY</span>
              </h2>
              <p className="text-gray-300 mt-6 text-lg">The journey that shaped who we are today</p>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500/50 to-transparent mx-auto mt-6"></div>
            </div>
            
            <div className="mt-8 w-full relative flex">
              <div className="flex-1 relative">
                {/* Modern timeline line */}
                <div className="absolute left-[15px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/50 via-yellow-400/50 to-blue-500/50"></div>
                
                <StaggeredReveal delay={100}>
                  <TimelineItem
                    year="2014"
                    title="The Beginning"
                    description="Operations commence in one of India's largest facilities for automotive glass—a 100,000 sq. ft. PEB shed designed for scale and precision."
                    className="text-justify"
                  />
                </StaggeredReveal>
                
                <StaggeredReveal delay={200}>
                  <TimelineItem
                    year="2015"
                    title="Key Partnerships"
                    description="Becomes OEM supplier for Hyundai. Also begins OEM partnership with SANY."
                    className="text-justify"
                  />
                </StaggeredReveal>
                
                <StaggeredReveal delay={300}>
                  <TimelineItem
                    year="2016"
                    title="Expansion Phase"
                    description="Expands portfolio to include architectural glass solutions."
                    className="text-justify"
                  />
                </StaggeredReveal>
                
                <StaggeredReveal delay={400}>
                  <TimelineItem
                    year="2017"
                    title="Technology Acquisition"
                    description="Procures a state-of-the-art tempering machine from South Tech—enabling capabilities in bent glass and low-e glass processing."
                    className="text-justify"
                  />
                </StaggeredReveal>
                
                <StaggeredReveal delay={500}>
                  <TimelineItem
                    year="2018"
                    title="Manufacturing Expansion"
                    description="Installs a lamination line from Hangdong, a global leader in glass lamination with convection furnace technology."
                    className="text-justify"
                  />
                </StaggeredReveal>
                
                <StaggeredReveal delay={600}>
                  <TimelineItem
                    year="2019"
                    title="OEM Partnership"
                    description="Becomes OEM supplier for Olectra."
                    className="text-justify"
                  />
                </StaggeredReveal>
                
                <StaggeredReveal delay={700}>
                  <TimelineItem
                    year="2021"
                    title="Growth & Recognition"
                    description="Joins hands with MG as an OEM glass supplier for its bus division. Marks a milestone with One Golden Mile winning &quot;Facade of the Year&quot;—a landmark project solely supplied by South Glass."
                    className="text-justify"
                  />
                </StaggeredReveal>
                
                <StaggeredReveal delay={800}>
                  <TimelineItem
                    year="2022"
                    title="Expansion & Innovation"
                    description="Launches a new 50,000 sq. ft. manufacturing plant dedicated to architectural glass. Installs a Cyclone Series tempering furnace from LandGlass—one of India's first and largest—alongside a fully automated pre-processing line with inline seaming and four-edge processing."
                    className="text-justify"
                  />
                </StaggeredReveal>
                
                <StaggeredReveal delay={900}>
                  <TimelineItem
                    year="2024"
                    title="New Product Line"
                    description="Introduces a new product line—manufacturing bullet-resistant glass. Partners with Ion Mobility as an OEM glass supplier."
                    className="text-justify"
                  />
                </StaggeredReveal>
                
                <StaggeredReveal delay={1000}>
                  <TimelineItem
                    year="2025"
                    title="Sustainability & Growth"
                    description="Installs a fully automatic autoclave from LNBF, a global leader in lamination systems. Goes green with a 1MW solar power installation across its manufacturing unit. Enters a landmark partnership with Pyroguard UK, bringing certified fire-rated glass to the Indian market."
                    className="text-justify"
                  />
                </StaggeredReveal>
                
                <StaggeredReveal delay={1100}>
                  <TimelineItem
                    year="Present"
                    title="Industry Leadership"
                    description="Continuing our journey of innovation and excellence, we remain committed to pushing the boundaries of what's possible in glass manufacturing."
                    className="text-justify"
                  />
                </StaggeredReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure - Modern Clean Design */}
      <section className="py-11 md:py-12 relative">
        <div className="container px-4 md:px-6 relative z-10 max-w-screen-lg mx-auto">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-600/5 mb-4">
              <Building2 className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">WHERE WE'RE AT</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500/50 to-transparent mx-auto mb-12"></div>
                </div>
              </div>
              
        {/* Full-width Image Container */}
        <div className="container px-4 md:px-6 mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <Image 
              src="/NH 44.png"
              alt="South Glass facility location at NH-44"
              className="w-full h-[500px] sm:h-[600px] md:h-[800px] object-cover rounded-2xl"
              width={1536}
              height={800}
              priority
              quality={100}
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>

            {/* Location Buttons */}
            <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 inset-x-0 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-16 px-4">
              {/* Head Office Button */}
              <a 
                href="https://www.google.com/maps/place/SOUTH+GLASS+PVT+LTD/@17.4272383,78.4274096,15z/data=!4m6!3m5!1s0x3bcb913a7bc4bad7:0x665f484e07c26b45!8m2!3d17.4272383!4d78.4274096!16s%2Fg%2F11v0b_x_0l" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex flex-col items-center px-6 sm:px-8 py-4 sm:py-5 bg-black/70 backdrop-blur-md rounded-2xl border border-blue-400/30 hover:bg-black/80 transition-all duration-300 group hover:scale-[1.02] hover:border-blue-400/50 shadow-lg hover:shadow-blue-900/20"
              >
                <div className="bg-blue-500/10 p-2 sm:p-3 rounded-xl mb-2 sm:mb-3">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <span className="text-white font-medium text-base sm:text-lg mb-1">Head Office</span>
                <span className="text-xs sm:text-sm text-gray-300 mt-1 group-hover:text-blue-300 transition-colors text-center">
                  Door No. 89/A, Road No. 3
                </span>
                <span className="text-xs sm:text-sm text-gray-300 group-hover:text-blue-300 transition-colors text-center">
                  Sri Nagar Colony, Banjara Hills
                </span>
                <span className="text-xs sm:text-sm text-gray-300 group-hover:text-blue-300 transition-colors text-center">
                  Hyderabad - 500073
                </span>
              </a>

              {/* Factory Button */}
              <a 
                href="https://www.google.com/maps/place/South+Glass+Pvt+Ltd/@16.9723250,78.1954660,15z/data=!4m6!3m5!1s0x3bcbcc9ee16634cb:0x3929109e24f99f3a!8m2!3d16.972325!4d78.195466!16s%2Fg%2F11v0b_x_0l" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex flex-col items-center px-6 sm:px-8 py-4 sm:py-5 bg-black/70 backdrop-blur-md rounded-2xl border border-blue-400/30 hover:bg-black/80 transition-all duration-300 group hover:scale-[1.02] hover:border-blue-400/50 shadow-lg hover:shadow-blue-900/20"
              >
                <div className="bg-blue-500/10 p-2 sm:p-3 rounded-xl mb-2 sm:mb-3">
                  <Factory className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <span className="text-white font-medium text-base sm:text-lg mb-1">Factory</span>
                <span className="text-xs sm:text-sm text-gray-300 mt-1 group-hover:text-blue-300 transition-colors text-center">
                  Survey No. 467, NH-44
                </span>
                <span className="text-xs sm:text-sm text-gray-300 group-hover:text-blue-300 transition-colors text-center">
                  Burgul
                </span>
                <span className="text-xs sm:text-sm text-gray-300 group-hover:text-blue-300 transition-colors text-center">
                  Telangana - 509202
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Machinery */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Our Machinery"
            subtitle="Cutting-edge technology for superior results"
            icon={<Factory className="w-8 h-8 text-blue-400" />}
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <ArrowRight className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">LandGlass Cyclone Tempering Furnace</h3>
              <p className="text-gray-400">Advanced tempering technology that ensures uniform heating and superior glass strength.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">CNC Machines</h3>
              <p className="text-gray-400">Precision cutting and edging equipment that delivers flawless glass components with tight tolerances.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Autoclave</h3>
              <p className="text-gray-400">High-pressure equipment for laminated glass manufacturing, ensuring perfect bonding and durability.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lamination Line</h3>
              <p className="text-gray-400">Automated production line for creating multi-layer glass products with superior clarity and safety features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission - Modern Card Design */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-black to-gray-900/50 relative">
        {/* Subtle separator lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-screen-lg mx-auto">
            
            {/* Vision Card - Clean Modern Design */}
            <div className="group relative">
              {/* Card background with subtle glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl"></div>
              
              {/* Card content */}
              <div className="relative p-8 md:p-10 flex flex-col items-center text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-2 rounded-lg bg-orange-500/10 backdrop-blur-sm">
                    <Shield className="w-8 h-8 text-orange-400" />
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-orange-300 transition-colors duration-300">Vision</h2>
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-6">Designing Tomorrow. Delivering Today.</p>
                <div className="h-px w-24 bg-gradient-to-r from-orange-500/50 via-orange-500/50 to-transparent mx-auto mb-6"></div>
                
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Setting benchmarks in glass technology with intent, discipline, and responsibility.
                </p>
                
                <ul className="space-y-4 w-full max-w-md mx-auto">
                  <li className="flex items-start transition-all duration-300 hover:translate-x-1 group/item text-left">
                    <div className="flex-shrink-0 p-1 mr-3 mt-0.5 group-hover/item:bg-orange-500/10 rounded transition-colors duration-300">
                      <ChevronRight className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">Smarter processes</span>
                  </li>
                  <li className="flex items-start transition-all duration-300 hover:translate-x-1 group/item text-left">
                    <div className="flex-shrink-0 p-1 mr-3 mt-0.5 group-hover/item:bg-orange-500/10 rounded transition-colors duration-300">
                      <ChevronRight className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">Safer materials</span>
                  </li>
                  <li className="flex items-start transition-all duration-300 hover:translate-x-1 group/item text-left">
                    <div className="flex-shrink-0 p-1 mr-3 mt-0.5 group-hover/item:bg-orange-500/10 rounded transition-colors duration-300">
                      <ChevronRight className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">Sustainable choices</span>
                  </li>
                </ul>
              </div>
              
              {/* Modern decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 bg-orange-500/10 w-12 h-12"></div>
              </div>
            </div>
            
            {/* Mission Card - Clean Modern Design */}
            <div className="group relative">
              {/* Card background with subtle glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl"></div>
              
              {/* Card content */}
              <div className="relative p-8 md:p-10 flex flex-col items-center text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-2 rounded-lg bg-blue-500/10 backdrop-blur-sm">
                    <Sparkles className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">Mission</h2>
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-6">Glass That Holds. Values That Last.</p>
                <div className="h-px w-24 bg-gradient-to-r from-blue-500/50 via-blue-500/50 to-transparent mx-auto mb-6"></div>
                
                <p className="text-gray-300 mb-8 leading-relaxed">
                  We craft solutions that meet real-world demands—without compromise.
                </p>
                
                <ul className="space-y-4 w-full max-w-md mx-auto">
                  <li className="flex items-start transition-all duration-300 hover:translate-x-1 group/item text-left">
                    <div className="flex-shrink-0 p-1 mr-3 mt-0.5 group-hover/item:bg-blue-500/10 rounded transition-colors duration-300">
                      <ChevronRight className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">Zero-defect quality checks</span>
                  </li>
                  <li className="flex items-start transition-all duration-300 hover:translate-x-1 group/item text-left">
                    <div className="flex-shrink-0 p-1 mr-3 mt-0.5 group-hover/item:bg-blue-500/10 rounded transition-colors duration-300">
                      <ChevronRight className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">Engineering-led execution</span>
                  </li>
                  <li className="flex items-start transition-all duration-300 hover:translate-x-1 group/item text-left">
                    <div className="flex-shrink-0 p-1 mr-3 mt-0.5 group-hover/item:bg-blue-500/10 rounded transition-colors duration-300">
                      <ChevronRight className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">Relationships built on trust</span>
                  </li>
                </ul>
              </div>
              
              {/* Modern decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 bg-blue-500/10 w-12 h-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Strategic Partnerships"
            subtitle="Collaborating with industry leaders for excellence"
            icon={<Shield className="w-8 h-8 text-blue-400" />}
          />
          
          <div className="mt-16 bg-gray-800/80 rounded-xl overflow-hidden border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Pyroguard UK</h3>
                <p className="text-gray-300 mb-6">
                  A collaboration rooted in performance—combining tested fire resistance with scalable production.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Up to 120 minutes fire protection</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Multi-layer integrity</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Globally certified systems</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="/partnerships/pyroguard.jpg" 
                  alt="South Glass partnership with Pyroguard UK for fire-rated glass solutions" 
                  className="absolute inset-0 w-full h-full object-cover"
                  width="600"
                  height="400"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 md:py-32 relative">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Our Certifications"
            subtitle="Recognised. Verified. Compliant."
            icon={<Check className="w-12 h-12 text-green-400" />}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-14">
            <CertificationCard
              title="BIS"
              description="Indian standards"
              logo="/certifications/BIS Logo.png"
            />
            <CertificationCard
              title="ISO"
              description="Global quality benchmarks"
              logo="/certifications/ISO Logo.png"
            />
            <CertificationCard
              title="ARAI"
              description="Automotive-grade approval"
              logo="/certifications/ARAI Logo.png"
            />
            <CertificationCard
              title="NABL"
              description="Lab-tested assurance"
              logo="/certifications/NABL Logo.png"
            />
            <CertificationCard
              title="Pyroguard"
              description="Fire-rated certification"
              logo="/certifications/PG Logo.png"
            />
          </div>
        </div>
      </section>

      {/* Footer for About Page */}
      <Footer />
    </div>
  );
} 