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
    title: "Electrical Specifications",
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
        headers: ["RATING", "CALIBER", "BULLET MASS", "TEST RANGE (m)", "VELOCITY (m/s)", "NO. OF STRIKES (mm)", "THICKNESS"],
        rows: [
          ["", "", "CERTIFIED TO EN 1063 STANDARDS", "", "", "SPLINTERS", "NON-SPLINTERS"],
          ["BR1", ".22 Long Rifle", "2.6+/-0.1", "10+/-0.5", "360+/-10", "3", "20", "22"],
          ["BR2", "9mm Luger", "8+/-0.1", "5+/-0.5", "400+/-10", "3", "21", "24"],
          ["BR3", "0.357 Magnum", "10.2+/-0.1", "5+/-0.5", "430+/-10", "3", "25", "40"],
          ["BR4", "0.44 Magnum", "15.6+/-0.1", "5+/-0.5", "440+/-10", "3", "33", "43"],
          ["BR5", "5.56x45", "4+/-0.1", "10+/-0.5", "950+/-10", "3", "35", "55"],
          ["BR6", "7.62x51 MSC", "9.5+/-0.1", "10+/-0.5", "830+/-10", "3", "40", "40"],
          ["BR7", "7.62x51 HSC", "9.8+/-0.1", "10+/-0.5", "820+/-10", "3", "68", "75"]
        ]
      },
      {
        headers: ["", "", "CERTIFIED TO NATO STANAG STANDARDS", "", "", "", ""],
        rows: [
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
        headers: ["PRODUCT", "DROP HEIGHT / HITS", "NO. OF STRIKES", "PERFORMANCE CRITERIA"],
        rows: [
          ["P1A", "3000 mm", "3", "Hard body impact"],
          ["P2A", "6000 mm", "3", "Steel ball dropped using a 4.11 kg steel sphere to (100 mm) steel ball"],
          ["P4A", "9000 mm", "3", "simulate a hammer attack"],
          ["P5A", "9000 mm", "9", "-"],
          ["P6B", "30 - 50 Hits", "-", "Number of axe blows required to create a hole in a 400 mm x 400 mm area"],
          ["P7B", "51 - 70 Hits", "-", "-"],
          ["P8B", "71+ Hits", "-", "-"]
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
        headers: ["SPECIFICATION", "VALUE"],
        rows: [
          ["Fire Rating", "Up to EW 120 (Radiation Control) and EI 20 (Insulation Control)"],
          ["Standard Compliance", "Certified to EN 14449 (under Pyroguard EN)"],
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
                    <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">{category.title}</h2>
                  </div>
                  {category.description && (
                    <p className="text-gray-400 text-sm sm:text-base">{category.description}</p>
                  )}
                </div>

                {/* Tables */}
                {category.tables.map((table, tableIndex) => (
                  <div key={tableIndex} className="glass-card p-0 rounded-lg overflow-hidden">
                    {/* Responsive Table Container */}
                    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800/50" style={{ WebkitOverflowScrolling: 'touch' }}>
                      <table className="w-full" style={{ minWidth: '800px' }}>
                        {/* Table Header */}
                        <thead className="sticky top-0 z-10">
                          <tr className="bg-gradient-to-r from-accent/80 to-gray-800/80 border-b border-gray-600">
                            {table.headers.map((header, headerIndex) => (
                              <th 
                                key={headerIndex} 
                                className={`
                                  text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4 
                                  text-white font-semibold text-xs sm:text-sm uppercase tracking-wide 
                                  border-r border-gray-600/50 last:border-r-0 whitespace-nowrap
                                  ${headerIndex === 0 ? 'min-w-[120px] w-[120px] sticky left-0 bg-accent/90 z-20' : 'min-w-[140px] w-[140px]'}
                                `}
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
                              className={`
                                border-b border-gray-700/30 transition-colors duration-200
                                ${rowIndex % 2 === 0 ? 'bg-gray-800/20' : 'bg-gray-800/40'}
                                hover:bg-accent/10
                                ${row.some(cell => cell.includes('CERTIFIED')) ? 'bg-accent/20 font-medium' : ''}
                              `}
                            >
                              {row.map((cell, cellIndex) => (
                                <td 
                                  key={cellIndex} 
                                  className={`
                                    py-2 sm:py-3 px-2 sm:px-3 md:px-4 
                                    border-r border-gray-700/30 last:border-r-0 
                                    text-xs sm:text-sm
                                    ${cellIndex === 0 ? 'min-w-[120px] w-[120px] sticky left-0 bg-inherit z-10 font-medium' : 'min-w-[140px] w-[140px]'}
                                  `}
                                >
                                  {cell.includes('CERTIFIED') ? (
                                    <span className="bg-accent text-white px-1 sm:px-2 py-1 text-xs font-medium rounded whitespace-nowrap block text-center">
                                      <span className="sm:hidden">{cell.substring(0, 10)}...</span>
                                      <span className="hidden sm:inline">{cell}</span>
                                    </span>
                                  ) : cell === '-' ? (
                                    <span className="text-gray-500 text-center block">-</span>
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
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    {/* Mobile Scroll Hint */}
                    <div className="block sm:hidden border-t border-gray-700/30 table-scroll-hint px-4 py-2">
                      <p className="text-xs text-gray-400 text-center font-medium">
                        ← Scroll horizontally to view all columns →
                      </p>
                    </div>
                  </div>
                ))}

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