import { Product, Category } from "@/types/products";

export const categories: Category[] = [
  {
    id: "architecture",
    name: "Architecture Glass",
    description: "Premium glass solutions for architectural applications"
  },
  {
    id: "automotive",
    name: "Automotive Glass",
    description: "High-performance glass for automotive applications"
  },
  {
    id: "locomotive",
    name: "Locomotive Glass",
    description: "Specialized glass solutions for locomotive applications"
  },
  {
    id: "navimotive",
    name: "Navimotive Glass",
    description: "Marine safety glass solutions"
  },
  {
    id: "specialty",
    name: "Specialty Glass",
    description: "Specialized glass solutions for unique applications"
  }
];

export const products: Product[] = [
  {
    id: "temp-glass-01",
    name: "Tempered Glass",
    description: "High-strength tempered glass that's up to 5 times stronger than regular glass. Ideal for safety-critical applications in buildings and vehicles.",
    image: "/product-images/tempered_glass.png",
    categoryId: "architecture",
    categoryName: "Architecture Glass",
    type: "Safety",
    featured: true,
    features: [
      "Up to 5x stronger than regular glass",
      "Shatters into small, dull-edged pieces",
      "Resistant to thermal stress",
      "Available in various tints and finishes"
    ],
    applications: [
      "Glass doors and partitions",
      "Exterior building facades",
      "Shower enclosures",
      "Table tops and shelving"
    ]
  },
  {
    id: "heat-soak-glass-02",
    name: "Heat-Soaked Glass",
    description: "Undergoes additional thermal processing to eliminate nickel sulfide inclusions, reducing the risk of spontaneous breakage.",
    image: "/product-images/heat_soaked_glass.png",
    categoryId: "architecture",
    categoryName: "Architecture Glass",
    type: "Commercial",
    features: [
      "Reduced risk of spontaneous breakage",
      "Ideal for overhead glazing applications",
      "Additional quality assurance processing",
      "Meets strict safety standards"
    ],
    applications: [
      "Overhead glazing",
      "External facade panels",
      "Balustrades",
      "Structural glass elements"
    ]
  },
  {
    id: "laminated-glass-03",
    name: "Laminated Glass",
    description: "Multiple layers of glass bonded with interlayers for enhanced safety, security, and acoustic performance.",
    image: "/product-images/laminated_glass.png",
    categoryId: "architecture",
    categoryName: "Architecture Glass",
    type: "Security",
    features: [
      "High impact resistance",
      "Holds in place when broken",
      "Superior sound insulation",
      "UV radiation protection"
    ],
    applications: [
      "Security windows and doors",
      "Skylights and canopies",
      "Acoustic barriers",
      "Hurricane-resistant glazing"
    ]
  },
  {
    id: "insulated-glass-04",
    name: "Insulated Glass Units",
    description: "Double or triple glazing units with sealed air or gas spaces for superior thermal and acoustic insulation.",
    image: "/product-images/insulated_glass_units.png",
    categoryId: "architecture",
    categoryName: "Architecture Glass",
    type: "Energy Efficient",
    features: [
      "Superior thermal insulation",
      "Reduced condensation",
      "Enhanced sound reduction",
      "Energy cost savings"
    ],
    applications: [
      "Residential windows",
      "Commercial buildings",
      "Cold climate installations",
      "Noise-sensitive environments"
    ]
  },
  {
    id: "windshield-01",
    name: "Advanced Windshield",
    description: "Laminated safety glass designed for automotive windshields with enhanced impact resistance and optical clarity.",
    image: "/product-images/advanced_windshield_truck.png",
    categoryId: "automotive",
    categoryName: "Automotive Glass",
    type: "Windshield",
    features: [
      "High optical clarity",
      "Impact resistant design",
      "UV protection coating",
      "Acoustic dampening layer"
    ],
    applications: [
      "Passenger vehicles",
      "Commercial trucks",
      "Luxury automobiles",
      "Performance vehicles"
    ]
  },
  {
    id: "highspeed-safety-01",
    name: "High-Speed Safety Glass",
    description: "Specialized laminated glass designed for high-speed train applications with superior impact resistance and noise reduction.",
    image: "/product-images/High_speed_safety_glass.png",
    categoryId: "locomotive",
    categoryName: "Locomotive Glass",
    type: "High-Speed",
    featured: true,
    features: [
      "Extreme impact resistance",
      "Specialized for high-velocity applications",
      "Superior noise reduction",
      "Anti-splintering technology"
    ],
    applications: [
      "High-speed trains",
      "Bullet trains",
      "Metro systems",
      "Light rail vehicles"
    ]
  },
  {
    id: "marine-glass-01",
    name: "Marine Safety Glass",
    description: "Corrosion-resistant glass specially designed for maritime applications, withstanding harsh saltwater environments.",
    image: "/product-images/marine_safety_glass.png",
    categoryId: "navimotive",
    categoryName: "Navimotive Glass",
    type: "Marine",
    features: [
      "Salt-water corrosion resistant",
      "Impact resistant design",
      "UV filtering properties",
      "Custom shape capabilities"
    ],
    applications: [
      "Yacht windows",
      "Commercial vessels",
      "Marine facilities",
      "Offshore platforms"
    ]
  },
  {
    id: "fire-resistant-01",
    name: "Fire-Resistant Glass",
    description: "Specialized glass that maintains its integrity and prevents the spread of flames, smoke, and heat during fires.",
    image: "/product-images/fire_resistant_glass.png",
    categoryId: "specialty",
    categoryName: "Specialty Glass",
    type: "Fire Safety",
    features: [
      "Integrity during fire exposure",
      "Blocks heat transfer",
      "Prevents smoke passage",
      "Available in various fire ratings"
    ],
    applications: [
      "Fire separation barriers",
      "Emergency exits",
      "Stairwells and corridors",
      "High-risk commercial spaces"
    ]
  },
  {
    id: "bullet-resistant-02",
    name: "Bullet-Resistant Glass",
    description: "Multi-layered glass and polycarbonate composite designed to withstand ballistic impacts while maintaining visibility.",
    image: "/product-images/bullet_resistant_glass.png",
    categoryId: "specialty",
    categoryName: "Specialty Glass",
    type: "Security",
    features: [
      "Multi-level ballistic protection",
      "Certified to international standards",
      "Maintains optical clarity",
      "Custom thicknesses available"
    ],
    applications: [
      "Financial institutions",
      "Government facilities",
      "Secure transport vehicles",
      "High-security installations"
    ]
  },
  {
    id: "blast-resistant-03",
    name: "Blast-Resistant Glass",
    description: "Engineered to withstand explosion pressure waves, preventing glass fragmentation and protecting building occupants.",
    image: "/product-images/blast_resistant_glass.png",
    categoryId: "specialty",
    categoryName: "Specialty Glass",
    type: "Security",
    features: [
      "High blast pressure resistance",
      "Fragmentation prevention",
      "Flexible installation options",
      "Tested to government standards"
    ],
    applications: [
      "Embassy buildings",
      "Military facilities",
      "Critical infrastructure",
      "High-security zones"
    ]
  },
  {
    id: "burglar-resistant-04",
    name: "Burglar Resistant Glass",
    description: "Multi-layered laminated glass designed to resist forced entry attempts, providing enhanced security for residential and commercial properties.",
    image: "/product-images/burglar_resistant_glass.png",
    categoryId: "specialty",
    categoryName: "Specialty Glass",
    type: "Security",
    features: [
      "Multi-layer laminated construction",
      "Resists impact and penetration",
      "Maintains structural integrity",
      "Available in various security levels"
    ],
    applications: [
      "Residential security windows",
      "Retail storefronts",
      "Jewelry stores",
      "High-value display cases"
    ]
  }
]; 