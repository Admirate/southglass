"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Building2,
  ChevronRight,
  Factory,
  Shield,
  MapPin,
  Check,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import TimelineItem from "@/components/timeline-item";
import CertificationCard from "@/components/certification-card";
import StaggeredReveal from "@/components/staggered-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCountUp } from "@/hooks/useCountUp";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import JsonLd from "@/components/JsonLd";
import TypingText from "@/components/TypingText";
import { useParallax } from "@/hooks/useParallax";

// Add About page structured data
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About South Glass",
  description:
    "Learn about South Glass's history, mission, vision, infrastructure, certifications and commitment to quality since 2014.",
  url: "https://southglass.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "South Glass",
    foundingDate: "2014",
    description:
      "Premium glass manufacturer specializing in architectural, automotive and specialty glass solutions with advanced manufacturing facilities in India.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
      addressLocality: "Hyderabad",
    },
    award: [
      {
        "@type": "Award",
        name: "Facade of the Year - One Golden Mile Project",
        description: "Landmark project solely supplied by South Glass",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "BIS Certification",
        credentialCategory: "Indian standards certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "ISO Certification",
        credentialCategory: "Global quality benchmarks",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "ARAI Certification",
        credentialCategory: "Automotive-grade approval",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "NABL Certification",
        credentialCategory: "Lab-tested assurance",
      },
    ],
  },
};

export default function AboutPage() {

  useParallax(); // parallax hook

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  // counter (120+)
  const counterRef = useRef<HTMLDivElement>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, []);

  const minutes = useCountUp(120, startCount, 500);

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
        <div
          data-parallax
          data-parallax-speed="0.25"
          className="absolute inset-[-10%] z-0 opacity-75 will-change-transform"
        >
          <div className="relative w-full h-full">
            <Image
              src="/optimized/about page .webp"
              alt="South Glass manufacturing facility interior view"
              fill
              priority
              quality={90}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDA..."
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
                <StaggeredReveal staggerChildren delay={120}>
                  <div className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-semibold leading-relaxed mb-40">
                    {[
                      "Since 2014, South Glass has delivered high-performance glass",
                      "for automotive and architectural applications—",
                      "designed for the demands of today, and tomorrow.",
                    ].map((line, i) => (
                      <span
                        key={i}
                        className="block text-gray-300"
                        style={{
                          transitionDuration: i === 0 ? "0.9s" : "0.7s", // first line slightly slower
                          transitionDelay: `${i * 60}ms`, // subtle micro-delay
                        }}
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </StaggeredReveal>

                <TypingText
                  text="ETHICS . EXPERTISE . EXECUTION"
                  speed={90}
                  className="text-[#3BA6C4] tracking-[0.15em] sm:tracking-[0.25em] text-xl sm:text-2xl font-light"
                />
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
              {/* Heading */}
              <StaggeredReveal delay={100}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="text-white">THE </span>
                  <span className="text-[#3BA6C4]">SOUTH GLASS </span>
                  <span className="text-white">STORY</span>
                </h2>
              </StaggeredReveal>

              {/* Subtitle */}
              <StaggeredReveal delay={260}>
                <p className="text-gray-300 mt-6 text-lg">
                  The journey that shaped who we are today
                </p>
              </StaggeredReveal>

              {/* Demo-style gradient line */}
              <StaggeredReveal delay={320}>
                <div className="h-1 w-24 mx-auto mt-6 overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-blue-500/50 to-transparent origin-left scale-x-0 animate-[grow_0.9s_cubic-bezier(0.4,0,0.2,1)_forwards]" />
                </div>
              </StaggeredReveal>
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
                    description={
                      <>
                        <div className="mb-2">
                          Becomes OEM supplier for Hyundai.
                        </div>
                        <div>Also begins OEM partnership with SANY.</div>
                      </>
                    }
                    className="text-justify"
                    backgroundImage="/timeline/oem%20Hyundai.png"
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
                    description={
                      <>
                        <div className="mb-2">
                          Joins hands with MG as an OEM glass supplier for its
                          bus division.
                        </div>
                        <div>
                          Marks a milestone with One Golden Mile winning
                          &quot;Facade of the Year&quot;—a landmark project
                          solely supplied by South Glass.
                        </div>
                      </>
                    }
                    className="text-justify"
                    backgroundImage="/timeline/Growth%20Recognition.png"
                  />
                </StaggeredReveal>

                <StaggeredReveal delay={800}>
                  <TimelineItem
                    year="2022"
                    title="Expansion & Innovation"
                    description={
                      <>
                        <div className="mb-2">
                          Launches a new 50,000 sq. ft. manufacturing plant
                          dedicated to architectural glass.
                        </div>
                        <div>
                          Installs a Cyclone Series tempering furnace from
                          LandGlass—one of India's first and largest—alongside a
                          fully automated pre-processing line with inline
                          seaming and four-edge processing.
                        </div>
                      </>
                    }
                    className="text-justify"
                  />
                </StaggeredReveal>

                <StaggeredReveal delay={900}>
                  <TimelineItem
                    year="2023"
                    title="Product Innovation"
                    description="Starts manufacturing Bullet resistant glasses"
                    className="text-justify"
                  />
                </StaggeredReveal>

                <StaggeredReveal delay={1000}>
                  <TimelineItem
                    year="2024"
                    title="New Product Line"
                    description={
                      <>
                        <div className="mb-2">
                          Introduces a new product line—manufacturing
                          bullet-resistant glass.
                        </div>
                        <div>
                          Partners with Ion Mobility as an OEM glass supplier.
                        </div>
                      </>
                    }
                    className="text-justify"
                  />
                </StaggeredReveal>

                <StaggeredReveal delay={1100}>
                  <TimelineItem
                    year="2025"
                    title="Sustainability & Growth"
                    description={
                      <>
                        <div className="mb-2">
                          Installs a fully automatic autoclave from LNBF, a
                          global leader in lamination systems.
                        </div>
                        <div className="mb-2">
                          Goes green with a 1MW solar power installation across
                          its manufacturing unit.
                        </div>
                        <div>
                          Enters a landmark partnership with Pyroguard UK,
                          bringing certified fire-rated glass to the Indian
                          market.
                        </div>
                      </>
                    }
                    className="text-justify"
                  />
                </StaggeredReveal>

                <StaggeredReveal delay={1200}>
                  <TimelineItem
                    year="Present"
                    title="Industry Leadership"
                    description={
                      <>
                        <div className="mb-2">
                          Continuing our journey of innovation and excellence,
                          we remain committed to pushing the boundaries of
                          what's possible in glass manufacturing.
                        </div>
                        <div>
                          Pioneering with multiple state of art quality and
                          product variety
                        </div>
                      </>
                    }
                    className="text-justify"
                    backgroundImage="/timeline/Industry%20leaders.png"
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
            {/* Icon */}
            <StaggeredReveal delay={0}>
              <div className="inline-flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-600/5 mb-4">
                <Building2 className="w-6 h-6 text-blue-400" />
              </div>
            </StaggeredReveal>

            {/* Heading */}
            <StaggeredReveal delay={120}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 tracking-wide">
                WHERE WE&apos;RE AT
              </h2>
            </StaggeredReveal>

            {/* Underline */}
            <StaggeredReveal delay={240}>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500/50 to-transparent mx-auto mb-12"></div>
            </StaggeredReveal>
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
              <StaggeredReveal delay={0}>
                <a
                  href="https://www.google.com/maps/place/SOUTH+GLASS+PVT+LTD/@17.4272383,78.4274096,15z/data=!4m6!3m5!1s0x3bcb913a7bc4bad7:0x665f484e07c26b45!8m2!3d17.4272383!4d78.4274096!16s%2Fg%2F11v0b_x_0l"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex flex-col items-center px-6 sm:px-8 py-4 sm:py-5 bg-black/70 backdrop-blur-md rounded-2xl border border-blue-400/30 hover:bg-black/80 transition-all duration-300 group hover:scale-[1.02] hover:border-blue-400/50 shadow-lg hover:shadow-blue-900/20"
                >
                  <div className="bg-blue-500/10 p-2 sm:p-3 rounded-xl mb-2 sm:mb-3">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <span className="text-white font-medium text-base sm:text-lg mb-1">
                    Head Office
                  </span>
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
              </StaggeredReveal>

              {/* Factory Button */}
              <StaggeredReveal delay={120}>
                <a
                  href="https://www.google.com/maps/place/South+Glass+Pvt+Ltd/@16.9723250,78.1954660,15z/data=!4m6!3m5!1s0x3bcbcc9ee16634cb:0x3929109e24f99f3a!8m2!3d16.972325!4d78.195466!16s%2Fg%2F11v0b_x_0l"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex flex-col items-center px-6 sm:px-8 py-4 sm:py-5 bg-black/70 backdrop-blur-md rounded-2xl border border-blue-400/30 hover:bg-black/80 transition-all duration-300 group hover:scale-[1.02] hover:border-blue-400/50 shadow-lg hover:shadow-blue-900/20"
                >
                  <div className="bg-blue-500/10 p-2 sm:p-3 rounded-xl mb-2 sm:mb-3">
                    <Factory className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <span className="text-white font-medium text-base sm:text-lg mb-1">
                    Factory
                  </span>
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
              </StaggeredReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Machinery */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              {/* Icon */}
              <StaggeredReveal delay={0}>
                <div className="flex flex-col items-center mb-8">
                  <div className="w-16 h-16 rounded-lg bg-[#0D1117] border border-[#3BA6C4]/20 flex items-center justify-center mb-6">
                    <Factory className="w-8 h-8 text-[#3BA6C4]" />
                  </div>
                </div>
              </StaggeredReveal>

              {/* Heading line 1 */}
              <StaggeredReveal delay={120}>
                <h2 className="text-[2.5rem] font-light tracking-wide text-[#3BA6C4]">
                  MACHINES THAT DEFINE THE
                </h2>
              </StaggeredReveal>

              {/* Heading line 2 */}
              <StaggeredReveal delay={240}>
                <h2 className="text-[2.5rem] font-light tracking-wide text-[#3BA6C4]">
                  BENCHMARK
                </h2>
              </StaggeredReveal>
            </div>

            {/* Paragraph – editorial line reveal */}
            <StaggeredReveal staggerChildren delay={360}>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {[
                    "We don't just follow industry standards —",
                    "we manufacture with the machines that set them.",
                    "Our facility houses some of India's first and largest advanced equipment,",
                    "including the LandGlass Cyclone Series Tempering Furnace,",
                    "known for delivering unmatched mechanical strength and optical clarity.",
                  ].map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </StaggeredReveal>

            <div className="mt-16 relative group">
              {/* Outer highlight layer */}
              <div
                className="
      pointer-events-none
      absolute -inset-[2px]
      rounded-[26px]
      opacity-0
      group-hover:opacity-100
      transition-opacity duration-300
      bg-gradient-to-r
      from-[#3BA6C4]/40
      via-[#3BA6C4]/20
      to-transparent
      blur-[2px]
    "
              />

              {/* Actual card */}
              <StaggeredReveal>
                <div
                  className="
      relative
      bg-[#0B1120]
      rounded-3xl
      p-12
      border border-gray-800/60
      transition-colors duration-300
      group-hover:border-[#3BA6C4]/40
    "
                >
                  <h3 className="text-[1.75rem] font-light tracking-wide text-[#3BA6C4] mb-8">
                    KEY EQUIPMENT
                  </h3>

                  <div className="h-px w-16 bg-[#3BA6C4]/30 mb-8"></div>

                  <ul className="space-y-4 text-gray-300/90 text-lg">
                    {[
                      "LandGlass Cyclone Tempering Furnace (One of India's first and largest)",
                      "HanJiang Automatic Insulated Glass Line",
                      "LNBF Autoclave",
                      "2 Intermac CNC Machines with Online Edge Finish",
                      "Double Edger & Seaming by GoLive",
                      "Hangdong Lamination Line",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="
            flex items-center gap-3
            transition-colors duration-300
            group-hover:text-gray-200
          "
                      >
                        <span className="text-[#3BA6C4]">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggeredReveal>
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
              {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl"></div> */}

              {/* Card content */}
              <StaggeredReveal>
                <div className="group relative">
                  {/* Outer highlight */}
                  <div className="pointer-events-none absolute -inset-[2px] rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-orange-500/40 to-transparent blur-[2px]" />

                  {/* Card */}
                  <div
                    className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl transition-colors duration-300 group-hover:border-orange-400/40"
                    style={{
                      animation:
                        "slideInLeft 0.9s cubic-bezier(0.4,0,0.2,1) both",
                    }}
                  >
                    <div className="relative p-8 md:p-10 flex flex-col items-center text-center">
                      <div className="flex items-center justify-center mb-6">
                        <div className="p-2 rounded-lg bg-orange-500/10 relative overflow-hidden">
                          <img
                            src="/Icons/vision.png"
                            className="w-8 h-8 relative z-10"
                          />
                          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-orange-400/40 to-transparent animate-shine" />
                        </div>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-orange-300 transition-colors duration-300">
                        Vision
                      </h2>

                      <p className="text-sm uppercase tracking-wider text-gray-400 mb-6">
                        Designing Tomorrow. Delivering Today.
                      </p>

                      <div className="h-px w-24 bg-gradient-to-r from-orange-500/50 to-transparent mx-auto mb-6" />

                      <p className="text-gray-300 mb-8 leading-relaxed">
                        Setting benchmarks in glass technology with intent,
                        discipline, and responsibility.
                      </p>

                      <ul className="space-y-4 w-full max-w-md mx-auto">
                        {[
                          "Smarter processes",
                          "Safer materials",
                          "Sustainable choices",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start transition-all duration-300 hover:translate-x-1 text-left"
                          >
                            <ChevronRight className="w-4 h-4 text-orange-400 mr-2 mt-1" />
                            <span className="text-gray-300 hover:text-white transition-colors duration-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </StaggeredReveal>

              {/* Modern decorative corner */}
              {/* <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 bg-orange-500/10 w-12 h-12"></div>
              </div> */}
            </div>

            {/* Mission Card - Clean Modern Design */}
            <StaggeredReveal>
              <div className="group relative">
                {/* Outer highlight */}
                <div className="pointer-events-none absolute -inset-[2px] rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-l from-blue-500/40 to-transparent blur-[2px]" />

                {/* Card */}
                <div
                  className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl transition-colors duration-300 group-hover:border-blue-400/40"
                  style={{
                    animation:
                      "slideInRight 0.9s cubic-bezier(0.4,0,0.2,1) both",
                  }}
                >
                  <div className="relative p-8 md:p-10 flex flex-col items-center text-center">
                    <div className="flex items-center justify-center mb-6">
                      <div className="p-2 rounded-lg bg-blue-500/10 relative overflow-hidden">
                        <Sparkles className="w-8 h-8 text-blue-400 relative z-10" />
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-shine" />
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      Mission
                    </h2>

                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-6">
                      Glass That Holds. Values That Last.
                    </p>

                    <div className="h-px w-24 bg-gradient-to-r from-blue-500/50 to-transparent mx-auto mb-6" />

                    <p className="text-gray-300 mb-8 leading-relaxed">
                      We craft solutions that meet real-world demands—without
                      compromise.
                    </p>

                    <ul className="space-y-4 w-full max-w-md mx-auto">
                      {[
                        "Zero-defect quality checks",
                        "Engineering-led execution",
                        "Relationships built on trust",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start transition-all duration-300 hover:translate-x-1 text-left"
                        >
                          <ChevronRight className="w-4 h-4 text-blue-400 mr-2 mt-1" />
                          <span className="text-gray-300 hover:text-white transition-colors duration-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </StaggeredReveal>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-950 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.06),transparent_50%)]"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="text-center mb-20 group">
              {/* Icon */}
              <div className="flex flex-col items-center mb-8">
                <div
                  className="
        relative
        w-20 h-20
        rounded-2xl
        bg-gradient-to-br from-blue-500/20 via-orange-500/15 to-cyan-500/20
        border border-orange-500/20
        flex items-center justify-center
        backdrop-blur-sm
        overflow-hidden
      "
                >
                  {/* shine */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
                  <img
                    src="/Icons/hand-shake.png"
                    alt="Partnership Icon"
                    className="w-10 h-10 relative z-10 transition-all duration-300 group-hover:brightness-125"
                  />
                </div>
              </div>

              {/* Heading */}
              <h2
                className="
      text-4xl md:text-5xl lg:text-6xl
      font-light tracking-wide
      text-white mb-6
      relative inline-block
      transition-all duration-500
      group-hover:text-transparent
      group-hover:bg-clip-text
      group-hover:bg-gradient-to-r
      group-hover:from-blue-400
      group-hover:via-orange-400
      group-hover:to-cyan-400
    "
              >
                Strategic Partnerships
              </h2>

              {/* Divider */}
              <div
                className="
      w-24 h-1 mx-auto
      bg-gradient-to-r from-blue-500 via-orange-400 to-cyan-400
      transition-all duration-500
      group-hover:shadow-[0_0_18px_rgba(251,146,60,0.6)]
      group-hover:w-32
    "
              />
            </div>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Collaborating with industry leaders for excellence
            </p>
          </div>

          {/* Enhanced Partnership Card */}
          <div className="max-w-7xl mx-auto">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl relative group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              style={
                {
                  "--mouse-x": `${mousePosition.x}%`,
                  "--mouse-y": `${mousePosition.y}%`,
                } as React.CSSProperties
              }
            >
              {/* Cursor-following glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(251, 146, 60, 0.15), transparent 40%)`,
                }}
              />
              {/* Enhanced border glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), transparent, transparent 40%, rgba(251, 146, 60, 0.4) 50%, transparent 70%)`,
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "xor",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  padding: "2px",
                }}
              />
              {/* Decorative Elements */}
              <div className="absolute -top-1 -right-1 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-full blur-3xl group-hover:from-orange-500/30 group-hover:to-cyan-500/30 group-hover:scale-110 transition-all duration-500"></div>
              <div className="absolute -bottom-1 -left-1 w-32 h-32 bg-gradient-to-tr from-cyan-500/20 to-orange-500/20 rounded-full blur-3xl group-hover:from-cyan-500/30 group-hover:to-orange-500/30 group-hover:scale-110 transition-all duration-500"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                {/* Content Section */}
                <div className="p-12 lg:p-16 flex flex-col justify-center relative z-10">
                  <div className="mb-8">
                    <div className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500/10 to-blue-500/10 border border-orange-500/20 mb-6 group-hover:from-orange-500/20 group-hover:to-blue-500/20 group-hover:border-orange-500/40 transition-all duration-300">
                      <Sparkles className="w-4 h-4 text-orange-400 mr-2 group-hover:text-orange-300 transition-colors duration-300" />
                      <span className="text-orange-400 font-medium text-sm group-hover:text-orange-300 transition-colors duration-300">
                        Premium Partnership
                      </span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-gray-300 bg-clip-text text-transparent group-hover:from-orange-100 group-hover:via-orange-100 group-hover:to-white transition-all duration-300">
                      Pyroguard UK
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      A collaboration rooted in performance—combining tested
                      fire resistance with scalable production for the most
                      demanding applications.
                    </p>
                  </div>

                  {/* Enhanced Features List */}
                  <div className="space-y-4 mb-10">
                    <div className="flex items-start group">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-blue-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <span className="text-white font-medium">
                          Up to 120 minutes fire protection
                        </span>
                        <p className="text-gray-400 text-sm mt-1">
                          Certified performance under extreme conditions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <span className="text-white font-medium">
                          Multi-layer integrity
                        </span>
                        <p className="text-gray-400 text-sm mt-1">
                          Advanced lamination technology
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-cyan-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <span className="text-white font-medium">
                          Globally certified systems
                        </span>
                        <p className="text-gray-400 text-sm mt-1">
                          Meeting international standards
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Image Section */}
                <div className="relative lg:min-h-[500px] bg-black flex items-center justify-center group-hover:bg-gray-950 transition-colors duration-500">
                  <img
                    src="/partnerships/pyroguard.jpg"
                    alt="South Glass partnership with Pyroguard UK for fire-rated glass solutions"
                    className="max-w-full max-h-full object-contain p-12 lg:p-16 group-hover:scale-105 transition-transform duration-500"
                    width="600"
                    height="400"
                    loading="lazy"
                  />

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-orange-400/50 rounded-tr-2xl group-hover:border-orange-400/80 group-hover:scale-110 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-2xl group-hover:border-cyan-400/80 group-hover:scale-110 transition-all duration-300"></div>
                </div>
              </div>
            </div>

            {/* Bottom Statistics/Highlights */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div
                ref={counterRef}
                className="text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-orange-500/20"
              >
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  {minutes}+
                </div>
                <div className="text-gray-300 font-medium">
                  Minutes Protection
                </div>
              </div>

              <div
                className="
  group text-center p-6
  bg-gray-900/50 backdrop-blur-sm
  rounded-2xl
  border border-blue-500/20
  hover:border-blue-400/40
  transition-all duration-300
"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2 transition-all duration-300 group-hover:tracking-wide">
                  EN14449
                </div>
                <div className="text-gray-300 font-medium transition-colors duration-300 group-hover:text-gray-200">
                  Certified Standards
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 md:py-32 relative">
        <div className="container px-4 md:px-6">
          <StaggeredReveal>
            <SectionHeading
              title="Our Certifications"
              subtitle="Recognised. Verified. Compliant."
              icon={<Check className="w-12 h-12 text-green-400" />}
            />
          </StaggeredReveal>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-14">
            <StaggeredReveal delay={0}>
              <CertificationCard
                title="BIS"
                description="Indian standards"
                logo="/certifications/BIS Logo.png"
              />
            </StaggeredReveal>

            <StaggeredReveal delay={120}>
              <CertificationCard
                title="ISO"
                description="Global quality benchmarks"
                logo="/certifications/ISO Logo.png"
              />
            </StaggeredReveal>

            <StaggeredReveal delay={240}>
              <CertificationCard
                title="ARAI"
                description="Automotive-grade approval"
                logo="/certifications/ARAI Logo.png"
              />
            </StaggeredReveal>

            <StaggeredReveal delay={360}>
              <CertificationCard
                title="NABL"
                description="Lab-tested assurance"
                logo="/certifications/NABL Logo.png"
              />
            </StaggeredReveal>
          </div>
        </div>
      </section>

      {/* Footer for About Page */}
      <Footer />
    </div>
  );
}
