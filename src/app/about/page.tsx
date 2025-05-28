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
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Welcome to Our Glass 
                <span className="relative inline-block">
                  <span className="relative z-10">Manufacturing</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-500/40 to-transparent -z-10 transform skew-x-12"></span>
                </span>
                Company
              </h1>
              <div className="h-px w-24 bg-gradient-to-r from-blue-400 to-transparent mx-auto my-6"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Precision in Every Pane
              </p>
              <p className="mt-2 text-base sm:text-lg text-gray-400 max-w-3xl mx-auto font-light">
                Where engineered glass meets modern architecture.
              </p>
              
              {/* Adding the Ethics text below button */}
              <div className="mt-10">
                
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
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">THE </span>
                <span className="text-[#3BA6C4]">SOUTH GLASS </span>
                <span className="text-white">STORY</span>
              </h2>
              <p className="text-gray-300 mt-6 text-lg">The journey that shaped who we are today</p>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500/50 to-transparent mx-auto mt-6"></div>
            </div>
            
            <div className="mt-20 w-full relative flex">
              <div className="flex-1 relative">
                {/* Modern timeline line */}
                <div className="absolute left-[15px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/50 via-yellow-400/50 to-blue-500/50"></div>
                
                <TimelineItem
                  year="2014"
                  title="The Beginning"
                  description="Operations commence in one of India's largest facilities for automotive glass—a 100,000 sq. ft. PEB shed designed for scale and precision."
                />
                
                <TimelineItem
                  year="2015"
                  title="Key Partnerships"
                  description="Becomes OEM supplier for Hyundai. Also begins OEM partnership with SANY."
                />
                
                <TimelineItem
                  year="2016"
                  title="Expansion Phase"
                  description="Expands portfolio to include architectural glass solutions."
                />
                
                <TimelineItem
                  year="2017"
                  title="Technology Acquisition"
                  description="Procures a state-of-the-art tempering machine from South Tech—enabling capabilities in bent glass and low-e glass processing."
                />
                
                <TimelineItem
                  year="2018"
                  title="Manufacturing Expansion"
                  description="Installs a lamination line from Hangdong, a global leader in glass lamination with convection furnace technology."
                />
                
                <TimelineItem
                  year="2019"
                  title="OEM Partnership"
                  description="Becomes OEM supplier for Olectra."
                />
                
                <TimelineItem
                  year="2021"
                  title="Growth & Recognition"
                  description="Joins hands with MG as an OEM glass supplier for its bus division. Marks a milestone with One Golden Mile winning &quot;Facade of the Year&quot;—a landmark project solely supplied by South Glass."
                />
                
                <TimelineItem
                  year="2022"
                  title="Expansion & Innovation"
                  description="Launches a new 50,000 sq. ft. manufacturing plant dedicated to architectural glass. Installs a Cyclone Series tempering furnace from LandGlass—one of India's first and largest—alongside a fully automated pre-processing line with inline seaming and four-edge processing."
                />
                
                <TimelineItem
                  year="2024"
                  title="New Product Line"
                  description="Introduces a new product line—manufacturing bullet-resistant glass. Partners with Ion Mobility as an OEM glass supplier."
                />
                
                <TimelineItem
                  year="2025"
                  title="Sustainability & Growth"
                  description="Installs a fully automatic autoclave from LNBF, a global leader in lamination systems. Goes green with a 1MW solar power installation across its manufacturing unit. Enters a landmark partnership with Pyroguard UK, bringing certified fire-rated glass to the Indian market."
                />
                
                <TimelineItem
                  year="Present"
                  title="Industry Leadership"
                  description="Continuing our journey of innovation and excellence, we remain committed to pushing the boundaries of what's possible in glass manufacturing."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure - Modern Clean Design */}
      <section className="py-24 md:py-32 relative">
        <div className="container px-4 md:px-6 relative z-10 max-w-screen-lg mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-right whitespace-nowrap">
                <span className="text-white">STRATEGICALLY LOCATED.</span>
                <span className="text-[#3BA6C4]"> BUILT TO DELIVER</span>
              </h2>
            </div>
            
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-600/5 mb-4">
              <Building2 className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Infrastructure</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500/50 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Modern image card */}
            <div className="relative rounded-2xl overflow-hidden group h-[400px] mx-auto w-full">
              <img 
                src="/hero-background.jpg"
                alt="South Glass state-of-the-art manufacturing facility"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75"
                width="800"
                height="600"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-300 transition-all duration-300">Facility</h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 max-w-md mx-auto">
                    150,000 sq. ft. of optimised workflow. Built for volume. Tuned for precision.
                  </p>
                </div>
              </div>
              
              {/* Modern badge */}
              <div className="absolute top-6 right-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black/30 border border-blue-400/30 backdrop-blur-sm">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                </div>
              </div>
            </div>

            {/* Modern info card */}
            <div className="relative rounded-2xl overflow-hidden group mx-auto w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-gray-900/80 backdrop-blur-sm border border-white/5"></div>
              
              <div className="relative p-8 md:p-10 text-center">
                <div className="flex flex-col items-center mb-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 mb-4">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-blue-300 transition-colors duration-300">Location</h3>
                </div>
                
                <p className="text-gray-300 mb-10 leading-relaxed max-w-md mx-auto">
                  On NH 44—logistics that work as efficiently as we do.
                </p>

                <ul className="space-y-5 max-w-md mx-auto">
                  <li className="group/item relative pl-8 transition-all duration-300 text-left">
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full border border-blue-400/30 flex items-center justify-center group-hover/item:bg-blue-500/20 transition-all duration-300">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="block text-gray-300 group-hover/item:text-white transition-colors duration-300 py-1">Easy access to major transportation networks</span>
                    <div className="h-px w-0 group-hover/item:w-full bg-gradient-to-r from-blue-500/50 to-transparent transition-all duration-500"></div>
                  </li>
                  <li className="group/item relative pl-8 transition-all duration-300 text-left">
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full border border-blue-400/30 flex items-center justify-center group-hover/item:bg-blue-500/20 transition-all duration-300">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="block text-gray-300 group-hover/item:text-white transition-colors duration-300 py-1">Reduced logistics costs and delivery time</span>
                    <div className="h-px w-0 group-hover/item:w-full bg-gradient-to-r from-blue-500/50 to-transparent transition-all duration-500"></div>
                  </li>
                  <li className="group/item relative pl-8 transition-all duration-300 text-left">
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full border border-blue-400/30 flex items-center justify-center group-hover/item:bg-blue-500/20 transition-all duration-300">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="block text-gray-300 group-hover/item:text-white transition-colors duration-300 py-1">Proximity to key industrial hubs</span>
                    <div className="h-px w-0 group-hover/item:w-full bg-gradient-to-r from-blue-500/50 to-transparent transition-all duration-500"></div>
                  </li>
                </ul>
              </div>
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