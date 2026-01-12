"use client";

import { useState } from "react";
import { ArrowDown, Book, Eye, FileText } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SectionHeading from "@/components/section-heading";
import JsonLd from "@/components/JsonLd";
import StaggeredReveal from "@/components/staggered-reveal";
import BrochureLink from "@/components/BrochureLink";

// Add Resources page structured data
const resourcesPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "South Glass Resources",
  description:
    "Download brochures and resources about South Glass products and services.",
  url: "https://southglass.com/resources",
};

// Brochure data
const brochures = [
  {
    id: 1,
    title: "Brand Brochure",
    description:
      "An overview of South Glass, our brand identity, values, and vision.",
    thumbnail: "/brochure-thumbnails/brand-brochure-thumb.jpg",
    file: "/brochures/SG-BRAND Brochure.pdf",
    pages: 15,
    size: "1.1 MB",
  },
  {
    id: 2,
    title: "Product Catalogue",
    description:
      "Detailed specifications and applications of our entire product lineup.",
    thumbnail: "/brochure-thumbnails/product-catalogue-thumb.jpg",
    file: "/brochures/SG-PRODUCT BROCHURE-FINAL.pdf",
    pages: 32,
    size: "2.8 MB",
  },
];

export default function ResourcesPage() {
  const [activePreview, setActivePreview] = useState<number | null>(null);
  const [previewHeight, setPreviewHeight] = useState<number>(0);

  const togglePreview = (id: number) => {
    if (activePreview === id) {
      // Animate closing
      setPreviewHeight(0);
      setTimeout(() => {
        setActivePreview(null);
      }, 300);
    } else {
      setActivePreview(id);
      // Set height for animation (approximate height of preview)
      setTimeout(() => {
        setPreviewHeight(400);
        // Scroll to the preview section with smooth behavior
        document.getElementById(`preview-${id}`)?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased">
      <JsonLd data={resourcesPageSchema} />

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
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
          <div className="w-full h-full">
            <div className="w-full h-full bg-[url('/hero-background.jpg')] bg-cover bg-center"></div>
          </div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <StaggeredReveal>
              <div className="text-center mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                  Resources
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent mx-auto mb-6"></div>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Download our brochures to learn more about South Glass
                  products, services, and capabilities.
                </p>
              </div>
            </StaggeredReveal>
          </div>
        </div>
      </section>

      {/* Brochures Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <StaggeredReveal delay={120}>
            <SectionHeading
              title="Company Brochures"
              subtitle="Detailed information about our company and products"
              icon={<Book className="w-8 h-8 text-blue-400" />}
            />
          </StaggeredReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {brochures.map((brochure, index) => (
              <StaggeredReveal key={brochure.id} delay={index * 120}>
                <div
                  className="
        bg-gradient-to-br from-gray-900/90 to-gray-800/60
        rounded-xl overflow-hidden shadow-lg
        border border-white/10
        group hover:border-blue-500/40
        transition-all duration-300
      "
                >
                 
                  <div className="relative">
                    <div className="aspect-video bg-gray-800/80 w-full overflow-hidden">
                      {brochure.thumbnail ? (
                        <img
                          src={brochure.thumbnail}
                          alt={`${brochure.title} thumbnail`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        // Fallback to icon if no thumbnail is available
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/30 to-black/60">
                          <FileText className="w-12 h-12 text-blue-400 opacity-80" />
                        </div>
                      )}
                      {/* Add an overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {brochure.title}
                    </h3>

                    <p className="text-gray-300 mb-6">{brochure.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <span className="flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-blue-400" />
                        {brochure.pages} pages
                      </span>
                      <span>{brochure.size}</span>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <button
                        onClick={() => togglePreview(brochure.id)}
                        className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-3 rounded-xl transition-all duration-300 border border-white/5 hover:border-white/20"
                      >
                        <Eye className="w-5 h-5" />
                        <span>
                          {activePreview === brochure.id
                            ? "Close Preview"
                            : "Quick View"}
                        </span>
                      </button>

                      <BrochureLink
                        href={brochure.file}
                        download
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-black px-4 py-3 rounded-xl transition-all duration-300"
                      >
                        <ArrowDown className="w-5 h-5" />
                        <span>Download</span>
                      </BrochureLink>
                    </div>
                  </div>

                  {activePreview === brochure.id && (
                    <div
                      id={`preview-${brochure.id}`}
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ maxHeight: `${previewHeight}px` }}
                    >
                      <div className="p-4 md:p-6 border-t border-white/10 bg-black/30 animate-fadeIn">
                        <div className="aspect-[4/3] relative overflow-hidden">
                          <iframe
                            src={`${brochure.file}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                            className="absolute inset-0 w-full h-full rounded-lg border border-white/10 transition-opacity duration-300 ease-in-out"
                            title={`Preview of ${brochure.title}`}
                            style={{ scrollBehavior: "smooth" }}
                          ></iframe>
                        </div>
                        <div className="mt-4 text-center">
                          <BrochureLink
                            href={brochure.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center gap-1 transition-colors"
                          >
                            <span>Open in full screen</span>
                            <ArrowDown className="w-4 h-4 rotate-[135deg]" />
                          </BrochureLink>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </StaggeredReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section - Can be expanded later */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="container px-4 md:px-6 mx-auto">
          <StaggeredReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">
                Need More Information?
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-transparent mx-auto my-4"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Contact our team for custom specifications, project
                consultations, or additional materials.
              </p>
            </div>
          </StaggeredReveal>

          <StaggeredReveal delay={80}>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-blue-500 hover:bg-blue-600 text-black px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2"
              >
                Contact Us
                <ArrowDown className="w-4 h-4 rotate-[135deg]" />
              </Link>
            </div>
          </StaggeredReveal>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
