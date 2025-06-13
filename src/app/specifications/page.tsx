'use client';

import { useState } from 'react';
import { 
  Settings, 
  Shield, 
  Flame, 
  Target,
  Zap,
  Layers,
  Factory,
  Gauge,
  ArrowLeft,
  ChevronDown,
  Train
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

interface GridTableData {
  headers: string[];
  rows: string[][];
  title?: string;
}

interface SpecificationCategory {
  title: string;
  icon: React.ReactNode;
  tables: GridTableData[];
  description?: string;
}

const specifications: SpecificationCategory[] = [
  {
    title: "Manufacturing Processes",
    icon: <Factory className="h-4 w-4" />,
    description: "Comprehensive glass processing capabilities and specifications",
    tables: [
      {
        headers: ["PROCESS", "MAX SIZE (mm)", "MIN SIZE (mm)", "REMARKS"],
        rows: [
          ["Cutting", "6000 x 3210", "300 x 300", "Precision cutting for all glass types and sizes"],
          ["Screen Printing", "3660 x 1800", "400 x 450", "In-house screen printing with custom design capabilities"],
          ["Tempering", "5000 x 2440", "300 x 300", "Heat-treated for increased strength and safety"],
          ["-", "4200 x 2440", "300 x 500", "Flat / Curved (1000R-3000R), 5-8 mm thickness range"],
          ["-", "-", "-", "Curved (1000R-3000R), 10-12 mm thickness, critical stress testing"],
          ["Heat-soaked Test", "5000 x 2440", "300 x 300", "Reduces risk of spontaneous breakage in tempered glass"],
          ["DGU", "5000 x 2440", "400 x 450", "Available in flat and bent forms. Supports toggles, Step glasses, and automatic argon filling. Available thickness up to 100 mm"],
          ["Lamination", "5000 x 2440", "300 x 450", "Available in flat and bent configurations"]
        ]
      }
    ]
  },
  {
    title: "Automotive Glass Types",
    icon: <Layers className="h-4 w-4" />,
    description: "Automotive windshield and glass specifications",
    tables: [
      {
        headers: ["TYPE", "MAX SIZE (mm)", "MIN SIZE (mm)", "MAX DEPTH / CURVATURE", "MIN THICKNESS (mm)"],
        rows: [
          ["TOUGHENED WINDSHIELD", "1800 x 2100", "490 x 1150", "350 mm", "5"],
          ["LAMINATED WINDSHIELD", "2000 x 3000 mm", "450 x 450", "400 mm", "4.76"],
          ["TOUGHENED GLASSES", "2000 x 5000 mm", "300 x 300", "1000 R - 10000 R", "4"]
        ]
      }
    ]
  },
  {
    title: "Heated Glass Electrical Specification",
    icon: <Zap className="h-4 w-4" />,
    description: "Power and electrical specifications for heated glass systems",
    tables: [
      {
        headers: ["PARAMETER", "SPECIFICATION"],
        rows: [
          ["Power Density", "0.1 - 1.5 Watts/square inch (1.6 - 24 W/dm2)"],
          ["Voltage", "12, 24, 48, 74, 110/240, 380 V and others"],
          ["Wire Thickness", "16 - 44 μm for heated windshields and backlites"],
          ["Wire Spacing", "1.7 - 3.0 mm for heated windshields and backlites"]
        ]
      }
    ]
  },
  {
    title: "Bullet Resistant Glass",
    icon: <Target className="h-4 w-4" />,
    description: "Ballistic protection standards and specifications",
    tables: [
      {
        title: "CERTIFIED TO EN 1063 STANDARDS",
        headers: ["RATING", "CALIBRE", "BULLET MASS", "TEST RANGE (m)", "VELOCITY (m/s)", "NO. OF STRIKES (mm)","THICKNESS", ""],
        rows: [
          ["", "", "", "", "", "", "SPLINTERS", "NON-SPLINTERS"],
          ["BR1", ".22 Long Rifle", "2.6+/-0.1", "10+/-0.5", "360+/-10", "3", "20", "22"],
          ["BR2", "9mm Luger", "8+/-0.1", "5+/-0.5", "400+/-10", "3", "21", "24"],
          ["BR3", "0.357 Magnum", "10.2+/-0.1", "5+/-0.5", "430+/-10", "3", "25", "40"],
          ["BR4", "0.44 Magnum", "15.6+/-0.1", "5+/-0.5", "440+/-10", "3", "33", "43"],
          ["BR5", "5.56x45", "4+/-0.1", "10+/-0.5", "950+/-10", "3", "35", "55"],
          ["BR6", "7.62x51 MSC", "9.5+/-0.1", "10+/-0.5", "830+/-10", "3", "42", "50"],
          ["BR7", "7.62x51 HSC", "9.8+/-0.1", "10+/-0.5", "820+/-10", "3", "65", "75"]
        ]
      },
      {
        title: "CERTIFIED TO NATO STANAG STANDARDS",
        headers: ["RATING", "CALIBRE", "BULLET MASS", "TEST RANGE (m)", "VELOCITY (m/s)", "NO. OF STRIKES (mm)","THICKNESS", ""],
        rows: [
          ["", "", "", "", "", "", "SPLINTERS", "NON-SPLINTERS"],
          ["STANAG LVL 2", "7.62x39", "8+/-0.1", "10+/-0.5", "700+/-15", "3", "50", "60"],
          ["STANAG LVL 3", "7.62x54R", "9.6+/-0.1", "10+/-0.5", "830+/-20", "1", "55", "62"]
        ]
      }
    ]
  },
  {
    title: "Blast Resistant Glass",
    icon: <Shield className="h-4 w-4" />,
    description: "Impact-resilient glass designed to absorb explosive forces",
    tables: [
      {
        title: "Standard Specification-EN 13541",
        headers: ["PRODUCT", "REFLECTIVE BLAST OVER PRESSURE (kPa)"],
        rows: [
          ["ER1", "50 - 100"],
          ["ER2", "100 - 150"],
          ["ER3", "150 - 200"],
          ["ER4", "200 - 250"]
        ]
      }
    ]
  },
  {
    title: "Burglar Resistant Glass",
    icon: <Shield className="h-4 w-4" />,
    description: "Fortified glass solutions to deter forced entry",
    tables: [
      {
        title: "Standard Specification - EN 356",
        headers: ["PRODUCT", "DROP HEIGHT / HITS", "NO. OF STRIKES", "PERFORMANCE CRITERIA"],
        rows: [
          ["P1A", "3000 mm", "3", "Hard body impact"],
          ["P2A", "6000 mm", "3", "Hard body impact test carried out using a 4.11 kg steel sphere to (100 mm diameter) to simulate a hammer attack"],
          ["P3A", "7500 mm", "3", ""],
          ["P4A", "9000 mm", "3", ""],
          ["P5A", "9000 mm", "9", ""],
          ["P6B", "-", "30 - 50 Hits", "Number of axe blows required to create a hole in a 400 mm x 400 mm area"],
          ["P7B", "-", "51 - 70 Hits", ""],
          ["P8B", "-", "71+ Hits", ""]
        ]
      }
    ]
  },
  {
    title: "Locomotive/Navimotive",
    icon: <Train className="h-4 w-4" />,
    description: "Specialized glass solutions for locomotive and naval applications. Both locomotive and navimotive applications use identical laminated safety glass specifications with engineering optimized for their respective environments.",
    tables: [
      {
        headers: ["SPECIFICATION", "MAX SIZE (mm)", "MIN SIZE (mm)", "MAX DEPTH (mm)", "THICKNESS RANGE (mm)"],
        rows: [
          ["Laminated Safety Glasses", "1800 x 2100", "450 x 450", "400", "4.76 - 90"]
        ]
      }
    ]
  },
  {
    title: "Fire Resistant Glass",
    icon: <Flame className="h-4 w-4" />,
    description: "Reliable glass protection against extreme heat and flame",
    tables: [
      {
        title: "Certified En14449",
        headers: ["SPECIFICATION", "VALUE"],
        rows: [
          ["Fire Rating", "Up to EW 120 (Radiation Control) and EI 20 (Insulation Control)"],
          ["Maximum Size", "2440 x 5000 mm"],
          ["Minimum Size", "300 x 300 mm"],
          ["Thickness Range", "13-19mm, meeting EW classifications under EN 14449"],
          ["Fire Protection", "Prevents spread of flames and radiant heat, providing up to 120 minutes of protection (EW 120)"],
          ["Insulation Protection", "Ensures complete insulation protection for 20 minutes (EI 20)"],
          ["Applications", "Vision Panels in Fire Doors, Facades and Windows, Skylights and Partitions, Data Centers / Server Rooms, Fire Doors and Stair Enclosures, Fireman Shafts and Emergency Exits"]
        ]
      }
    ]
  }
];

export default function GlassSpecifications() {
  const [activeCategory, setActiveCategory] = useState("Manufacturing Processes");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentCategory = specifications.find(cat => cat.title === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-slate-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(15,23,42,0.2),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 pt-16 sm:pt-20">
        {/* Header */}
        <div className="border-b border-gray-700/30 bg-black/60 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 sm:mb-6">
              <Link 
                href="/products" 
                className="flex items-center gap-2 text-accent hover:text-blue-300 transition-colors glass-button px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Back to Products</span>
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight leading-tight">
                Technical Specifications
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-2 sm:px-0">
                Comprehensive data for performance, durability, and compliance across all our products.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6 sm:py-8">
          {/* Navigation - Mobile Dropdown & Desktop Tabs */}
          <div className="mb-6 sm:mb-8">
            {/* Mobile Dropdown */}
            <div className="block lg:hidden">
              <div className="relative">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white font-medium"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-accent">{currentCategory?.icon}</div>
                    <span className="text-sm sm:text-base">{activeCategory}</span>
                  </div>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileMenuOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-lg shadow-xl z-20 max-h-80 overflow-y-auto">
                    {specifications.map((category) => (
                      <button
                        key={category.title}
                        onClick={() => {
                          setActiveCategory(category.title);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                          activeCategory === category.title
                            ? 'bg-accent text-white'
                            : 'text-gray-300 hover:bg-gray-800/50'
                        }`}
                      >
                        <div className="text-base">{category.icon}</div>
                        <span className="text-sm font-medium">{category.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Tab Navigation */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 xl:grid-cols-7 gap-2 p-2 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-lg">
                {specifications.map((category) => (
                  <button
                    key={category.title}
                    onClick={() => setActiveCategory(category.title)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-md transition-all duration-200 text-xs font-medium min-h-[70px] ${
                      activeCategory === category.title
                        ? 'bg-accent text-white shadow-lg'
                        : 'text-gray-300 hover:bg-gray-800/50'
                    }`}
                  >
                    <div className="text-base">{category.icon}</div>
                    <span className="text-center leading-tight">{category.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Table Content */}
          {specifications.map((category) => (
            activeCategory === category.title && (
              <div key={category.title} className="space-y-4 sm:space-y-6">
                {/* Category Header */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-accent flex-shrink-0">
                      {category.icon}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                      <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">{category.title}</h2>
                      {category.title === "Fire Resistant Glass" && (
                        <div className="bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/40 hover:border-orange-500/60 px-3 py-1.5 rounded-lg transition-all duration-200 hover:scale-105">
                          <span className="text-sm sm:text-base text-orange-400 font-medium italic">
                            In Partnership with PYROGUARD
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  {category.description && (
                    <p className="text-gray-400 text-sm sm:text-base">{category.description}</p>
                  )}
                </div>

                {/* Special layout for Blast Resistant Glass */}
                {category.title === "Blast Resistant Glass" ? (
                  <div className="flex flex-col lg:flex-row lg:items-start gap-9">
                    {/* Table */}
                    <div className="flex-shrink-0">
                      {category.tables.map((table, tableIndex) => (
                        <div key={tableIndex} className="space-y-2">
                          {/* Table Title */}
                          {table.title && (
                            <div className="bg-accent text-white px-4 py-2 rounded-t-lg text-center font-semibold text-sm sm:text-base max-w-md">
                              {table.title}
                            </div>
                          )}
                          
                          <div className="glass-card p-0 rounded-lg overflow-hidden rounded-t-none max-w-md">
                            {/* Responsive Table Container */}
                            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800/50" style={{ WebkitOverflowScrolling: 'touch' }}>
                              <table className="w-full" style={{ minWidth: 'auto' }}>
                                {/* Table Header */}
                                <thead className="sticky top-0 z-10">
                                  <tr className="bg-gradient-to-r from-accent/80 to-gray-800/80 border-b border-gray-600">
                                    {table.headers.map((header, headerIndex) => (
                                      <th 
                                        key={headerIndex} 
                                        className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4 text-white font-semibold text-xs sm:text-sm uppercase tracking-wide border-r border-gray-600/50 last:border-r-0 whitespace-nowrap"
                                      >
                                        <span className="block leading-tight">
                                          {header}
                                        </span>
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                {/* Table Body */}
                                <tbody>
                                  {table.rows.map((row, rowIndex) => (
                                    <tr
                                      key={rowIndex}
                                      className={`border-b border-gray-700/30 transition-colors duration-200 ${rowIndex % 2 === 0 ? 'bg-gray-800/20' : 'bg-gray-800/40'} hover:bg-accent/10`}
                                    >
                                      {row.map((cell, cellIndex) => (
                                        <td 
                                          key={cellIndex} 
                                          className="py-2 sm:py-3 px-2 sm:px-3 md:px-4 border-r border-gray-700/30 last:border-r-0 text-xs sm:text-sm"
                                        >
                                          <span className="text-gray-200 leading-tight break-words">
                                            {cell}
                                          </span>
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Note Card */}
                    <div className="glass-card p-10 sm:p-10 rounded-lg max-w-sm flex-shrink-0">
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <div className="p-1 rounded bg-accent">
                          <Shield className="h-4 w-4" />
                        </div>
                        BLAST RESISTANT GLASS - EN 13541
                      </h3>
                      <div className="text-gray-300 space-y-4 text-xs sm:text-sm">
                        <p className="text-white font-medium">Built to endure extreme blast forces without compromise.</p>
                        
                        <div className="bg-accent/10 p-3 rounded-lg border-l-4 border-accent">
                          <p className="text-accent font-semibold">Used in Military vehicles, Data centers, and VIP installations.</p>
                        </div>
                        
                        <div className="space-y-2">
                          <p><strong className="text-white">Available in thicknesses from 6.76 mm to 36 mm</strong></p>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-3">
                          <div>
                            <p className="font-semibold text-white text-sm">Maximum size</p>
                            <p>2000×4000 mm</p>
                            <p className="text-xs text-gray-400 italic">*Maximum size is subject to thickness</p>
                          </div>
                          <div>
                            <p className="font-semibold text-white text-sm">Minimum size</p>
                            <p>100×100 mm</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Normal table layout for other categories */
                  category.tables.map((table, tableIndex) => (
                    <div key={tableIndex} className="space-y-2">
                      {/* Table Title */}
                      {table.title && (
                        <div className="bg-accent text-white px-4 py-2 rounded-t-lg text-center font-semibold text-sm sm:text-base">
                          {table.title}
                        </div>
                      )}
                      
                      <div className={`glass-card p-0 rounded-lg overflow-hidden ${table.title ? 'rounded-t-none' : ''} relative`}>
                        {/* Enhanced Responsive Table Container */}
                        <div className="relative">
                          {/* Left Scroll Fade Indicator */}
                          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent z-10 pointer-events-none opacity-0 transition-opacity duration-300 scroll-fade-left"></div>
                          
                          {/* Right Scroll Fade Indicator */}
                          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-gray-900/90 via-gray-900/60 to-transparent z-10 pointer-events-none opacity-100 transition-opacity duration-300 scroll-fade-right"></div>
                          
                          {/* Scroll Progress Bar */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800/30 z-10">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-150 ease-out scroll-progress" style={{ width: '0%' }}></div>
                          </div>
                          
                          <div 
                            className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800/50 scroll-container" 
                            style={{ 
                              WebkitOverflowScrolling: 'touch',
                              scrollBehavior: 'smooth',
                              scrollSnapType: 'x proximity'
                            }}
                            onScroll={(e) => {
                              const container = e.currentTarget;
                              const scrollLeft = container.scrollLeft;
                              const maxScrollLeft = container.scrollWidth - container.clientWidth;
                              const scrollPercentage = maxScrollLeft > 0 ? (scrollLeft / maxScrollLeft) * 100 : 0;
                              
                              // Update fade indicators
                              const leftFade = container.parentElement?.querySelector('.scroll-fade-left') as HTMLElement;
                              const rightFade = container.parentElement?.querySelector('.scroll-fade-right') as HTMLElement;
                              const progressBar = container.parentElement?.querySelector('.scroll-progress') as HTMLElement;
                              
                              if (leftFade) {
                                leftFade.style.opacity = scrollLeft > 20 ? '1' : '0';
                              }
                              if (rightFade) {
                                rightFade.style.opacity = scrollLeft < maxScrollLeft - 20 ? '1' : '0';
                              }
                              if (progressBar) {
                                progressBar.style.width = `${scrollPercentage}%`;
                              }
                            }}
                          >
                          <table className="w-full" style={{ minWidth: '800px' }}>
                            {/* Table Header */}
                            <thead className="sticky top-0 z-10">
                              <tr className="bg-gradient-to-r from-accent/80 to-gray-800/80 border-b border-gray-600">
                                {table.headers.map((header, headerIndex) => (
                                  <th 
                                    key={headerIndex} 
                                    className={`text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4 text-white font-semibold text-xs sm:text-sm uppercase tracking-wide border-r border-gray-600/50 last:border-r-0 whitespace-nowrap ${headerIndex === 0 ? 'min-w-[120px] w-[120px] sticky left-0 bg-accent/90 z-20' : 'min-w-[140px] w-[140px]'}`}
                                  >
                                    <span className="block leading-tight">
                                      {header.length > 15 ? (
                                        <span className="block sm:hidden" title={header}>
                                          {header.substring(0, 12)}...
                                        </span>
                                      ) : null}
                                      <span className={header.length > 15 ? "hidden sm:block" : ""}>
                                        {header}
                                      </span>
                                    </span>
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            {/* Table Body */}
                            <tbody>
                              {table.rows.map((row, rowIndex) => (
                                <tr
                                  key={rowIndex}
                                  className={`border-b border-gray-700/30 transition-colors duration-200 ${rowIndex % 2 === 0 ? 'bg-gray-800/20' : 'bg-gray-800/40'} hover:bg-accent/10 ${row.some(cell => cell.includes('CERTIFIED')) ? 'bg-accent/20 font-medium' : ''}`}
                                >
                                  {row.map((cell, cellIndex) => {
                                    // Special handling for Performance Criteria column in Burglar Resistant Glass
                                    const isBurglarResistantPerformanceColumn = category.title === "Burglar Resistant Glass" && 
                                      table.headers[cellIndex] === "PERFORMANCE CRITERIA" && 
                                      cell !== "" && 
                                      !cell.includes('CERTIFIED');
                                    
                                    return (
                                      <td 
                                        key={cellIndex} 
                                        className={`py-2 sm:py-3 px-2 sm:px-3 md:px-4 text-xs sm:text-sm ${
                                          isBurglarResistantPerformanceColumn 
                                            ? 'border-0' // Remove all borders for performance criteria
                                            : 'border-r border-gray-700/30 last:border-r-0'
                                        } ${cellIndex === 0 ? 'min-w-[120px] w-[120px] sticky left-0 bg-inherit z-10 font-medium' : 'min-w-[140px] w-[140px]'}`}
                                      >
                                        {cell.includes('CERTIFIED') ? (
                                          <span className="bg-accent text-white px-1 sm:px-2 py-1 text-xs font-medium rounded whitespace-nowrap block text-center">
                                            <span className="sm:hidden">{cell.substring(0, 10)}...</span>
                                            <span className="hidden sm:inline">{cell}</span>
                                          </span>
                                        ) : cell === '-' ? (
                                          <span className="text-gray-500 text-center block">-</span>
                                        ) : isBurglarResistantPerformanceColumn ? (
                                          <div className="bg-gray-800/60 p-2 sm:p-3 rounded text-gray-200 leading-tight">
                                            {cell}
                                          </div>
                                        ) : (
                                          <span className="text-gray-200 leading-tight break-words">
                                            {cell.length > 30 ? (
                                              <>
                                                <span className="sm:hidden" title={cell}>
                                                  {cell.substring(0, 25)}...
                                                </span>
                                                <span className="hidden sm:inline">
                                                  {cell}
                                                </span>
                                              </>
                                            ) : (
                                              cell
                                            )}
                                          </span>
                                        )}
                                      </td>
                                    );
                                  })}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          </div>
                        </div>
                        
                        {/* Enhanced Mobile Scroll Hint */}
                        <div className="block sm:hidden border-t border-gray-700/30 table-scroll-hint bg-gradient-to-r from-gray-900/50 to-gray-800/50 px-4 py-3">
                          <div className="flex items-center justify-center gap-2 text-center">
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </div>
                            <p className="text-xs text-gray-300 font-medium px-2">
                              Swipe to explore all columns
                            </p>
                            <div className="flex items-center gap-1">
                              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
                            </div>
                          </div>
                          <div className="flex justify-center mt-2">
                            <div className="flex gap-1">
                              <div className="w-6 h-1 bg-blue-500 rounded-full"></div>
                              <div className="w-3 h-1 bg-gray-600 rounded-full"></div>
                              <div className="w-3 h-1 bg-gray-600 rounded-full"></div>
                              <div className="w-3 h-1 bg-gray-600 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}

                {/* Special notes for Automotive Glass Types */}
                {category.title === "Automotive Glass Types" && (
                  <div className="mt-6 space-y-4">
                    {/* Glass Types Information */}
                    <div className="glass-card p-4 sm:p-6 rounded-lg max-w-2xl">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <div className="p-1 rounded bg-accent">
                          <Layers className="h-4 w-4" />
                        </div>
                        Glass Types & Applications
                      </h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm sm:text-base">
                        {/* Laminated Safety Glasses */}
                        <div>
                          <h4 className="text-lg font-semibold text-blue-400 mb-3">Laminated safety glasses</h4>
                          <div className="text-gray-300 space-y-2 ml-4">
                            <p>• Windshields</p>
                            <p>• Sunroofs/Glass roofs</p>
                            <p>• Windows</p>
                            <p>• De-fogging/De-icing/Heated</p>
                            <div className="mt-3 bg-accent/10 p-3 rounded-lg border-l-4 border-accent">
                              <p className="font-semibold text-white">Available in both Bend/Curve glasses</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Tempered Safety Glasses */}
                        <div>
                          <h4 className="text-lg font-semibold text-blue-400 mb-3">Tempered safety glasses</h4>
                          <div className="text-gray-300 space-y-2 ml-4">
                            <p>• Side and Rear windows</p>
                            <p>• (curved or flat panels available)</p>
                            <p>• Emergency Exit Windows</p>
                            <div className="mt-3 bg-blue-600/20 p-3 rounded-lg border-l-4 border-blue-500">
                              <p className="font-semibold text-blue-200">Built for safety and visibility</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Special notes for Heated Glass Electrical Specification */}
                {category.title === "Heated Glass Electrical Specification" && (
                  <div className="mt-6">
                    <div className="glass-card p-4 sm:p-6 rounded-lg">
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <div className="p-1 rounded bg-accent">
                          <Zap className="h-4 w-4" />
                        </div>
                        Application Note
                      </h3>
                      <div className="text-gray-300 text-sm sm:text-base">
                        <p>Applicable for Locomotive, Automotive, Navimotive, Bullet resistant glasses and architectural glasses</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Special notes for Bullet Resistant Glass */}
                {category.title === "Bullet Resistant Glass" && (
                  <div className="mt-6">
                    <div className="glass-card p-4 sm:p-6 rounded-lg">
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <div className="p-1 rounded bg-accent">
                          <Target className="h-4 w-4" />
                        </div>
                        Performance & Specifications
                      </h3>
                      <div className="text-gray-300 space-y-4 text-sm sm:text-base">
                        <div>
                          <p className="font-semibold text-white mb-2">Tested against:</p>
                          <ul className="space-y-1 ml-4">
                            <li>• Handguns (.22, 9mm, .357, .44)</li>
                            <li>• Rifles (5.56x45, 7.62x51, 7.62x54R)</li>
                            <li>• STANAG Levels 2 & 3</li>
                          </ul>
                        </div>
                        
                        <div className="bg-accent/10 p-3 rounded-lg border-l-4 border-accent">
                          <p>Offers multi-hit resistance, anti-spall performance, and optical clarity. Also available with de-icing, defogging, and heated configurations for all-weather.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <p className="font-semibold text-white">Maximum size</p>
                            <p>2000×4000 mm</p>
                            <p className="text-xs text-gray-400 italic">*Maximum size is subject to thickness</p>
                          </div>
                          <div>
                            <p className="font-semibold text-white">Minimum size</p>
                            <p>100×100 mm</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Special notes for Burglar Resistant Glass */}
                {category.title === "Burglar Resistant Glass" && (
                  <div className="mt-6 space-y-4">
                    {/* Specifications Card */}
                    <div className="glass-card p-4 sm:p-6 rounded-lg">
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <div className="p-1 rounded bg-accent">
                          <Shield className="h-4 w-4" />
                        </div>
                        Specifications & Applications
                      </h3>
                      <div className="text-gray-300 space-y-4 text-sm sm:text-base">
                        <div className="bg-accent/10 p-3 rounded-lg border-l-4 border-accent">
                          <p>Available in thicknesses from 6.76 mm to 30 mm, tailored to protection levels EN 356 P1A-P8B</p>
                        </div>
                        
                        <div className="bg-blue-600/20 p-3 rounded-lg border-l-4 border-blue-500">
                          <p className="text-blue-200 font-semibold">Designed for Showrooms, Museums, Banks, and Galleries.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <p className="font-semibold text-white">Maximum size</p>
                            <p>2000×4000 mm</p>
                            <p className="text-xs text-gray-400 italic">*Maximum size is subject to thickness</p>
                          </div>
                          <div>
                            <p className="font-semibold text-white">Minimum size</p>
                            <p>100×100 mm</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Special notes for Locomotive/Navimotive */}
                {category.title === "Locomotive/Navimotive" && (
                  <div className="mt-6 space-y-4">
                    {/* Locomotive Notes */}
                    <div className="glass-card p-4 sm:p-6 rounded-lg">
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <div className="p-1 rounded bg-accent">
                          <Factory className="h-4 w-4" />
                        </div>
                        Locomotive Applications
                      </h3>
                      <div className="text-gray-300 space-y-2 text-sm sm:text-base">
                        <p><strong>Purpose:</strong> Engineered glazing for high-speed safety and visibility</p>
                        <p><strong>Applications:</strong> Windshields, Sunroofs/Glass roofs, Side Windows, De-fogging/Defrosting/Heated, Display Windows</p>
                        <p><strong>Engineering Focus:</strong> Visibility, Thermal Insulation, and Durability during High-Speed Transit</p>
                      </div>
                    </div>

                    {/* Navimotive Notes */}
                    <div className="glass-card p-4 sm:p-6 rounded-lg">
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <div className="p-1 rounded bg-accent">
                          <Shield className="h-4 w-4" />
                        </div>
                        Navimotive Applications
                      </h3>
                      <div className="text-gray-300 space-y-2 text-sm sm:text-base">
                        <p><strong>Purpose:</strong> Glass solutions built for the harshest seas</p>
                        <p><strong>Applications:</strong> Windshields, Balustrades, Windows and Portholes, Interior Partitions, Glass Floors, Skylights, Elevator Shafts, Underwater Decks/Viewing Windows</p>
                        <p><strong>Engineering Focus:</strong> Built to withstand high-wind pressure, vibration, and extreme weather</p>
                        <p><strong>Special Features:</strong> Available with integrated defogging, de-icing, and heated functionalities for marine environments</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700/50 bg-black/40 backdrop-blur-sm mt-8 sm:mt-12">
          <div className="container mx-auto px-4 py-4 sm:py-6">
            <div className="text-center">
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                &copy; 2024 South Glass Technical Specifications. Certified to international standards including EN 1063, EN 13541, EN 356, EN 14449, and NATO STANAG.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 