import { Project } from "@/types/projects";

export const allCategories = [
  "Architecture"
];

export const projects: Project[] = [
  {
    id: "one-golden-mile",
    title: "One Golden Mile",
    description: "A Grade-A commercial tower offering premium office spaces with LEED Gold pre-certification, strategically positioned near Hyderabad's Financial District.",
    categories: ["Architecture"],
    year: "2026",
    location: "Kokapet, Hyderabad",
    isFeatured: true,
    image: "/projects/one-golden-mile.jpg",
    specs: {
      area: "5,10,000 sq ft",
      floors: "G+14 (4 Basements)",
      completion: "December 2026",
      client: "Aurean Eskar Ventures LLP"
    }
  },
  {
    id: "phoenix-285",
    title: "Phoenix Business Hub",
    description: "A landmark commercial development by Phoenix Group, featuring five towers with modern architecture, designed to accommodate IT/ITES companies in a sustainable environment.",
    categories: ["Architecture"],
    year: "2024",
    location: "Financial District, Hyderabad",
    image: "/projects/Phoenix Business Hub.jpg",
    specs: {
      area: "2 million sq ft",
      floors: "G+29 (4–5 Basements)",
      completion: "2024",
      client: "Phoenix Group"
    }
  },
  {
    id: "rajapushpa-provincia",
    title: "DSR The Twins",
    description: "India's largest single-floor luxury residences, each spanning 15,999 sq ft, featuring a full glass façade, 13 ft ceilings, and smart automation—redefining ultra-premium living in Hyderabad.",
    categories: ["Architecture"],
    year: "2026",
    location: "Puppalaguda, Hyderabad",
    image: "/projects/DSR The Twins.PNG",
    specs: {
      area: "3 acres",
      floors: "G+43 (2 Towers)",
      completion: "August 2026",
      client: "DSR Builders & Developers"
    }
  },
  {
    id: "gmr-airport",
    title: "Atluri Ascend",
    description: "A Grade-A commercial tower offering premium bare-shell office spaces, strategically located near HITEC City with excellent connectivity and modern amenities.",
    categories: ["Architecture"],
    year: "2024",
    location: "Kondapur, Hyderabad",
    image: "/projects/Atluri Ascend.jpg",
    specs: {
      area: "0.83 acres",
      floors: "G+1",
      completion: "April 2024",
      client: "Atluri Developers Pvt. Ltd."
    }
  },
  {
    id: "electric-locomotive",
    title: "ITC Kohenur",
    description: "A luxury hotel inspired by the Koh-i-Noor diamond, featuring a crystal-clear glass façade, sustainable design, and panoramic views of Durgam Cheruvu Lake.",
    categories: ["Architecture"],
    year: "2018",
    location: "HITEC City, Hyderabad",
    image: "/projects/ITC Kohenur.PNG",
    specs: {
      completion: "2018",
      client: "ITC Hotels"
    }
  },
  {
    id: "luxury-yacht",
    title: "Kohinoor by Auro Realty",
    description: "A residential project comprising seven high-rise towers, offering spacious 2, 3, and 4 BHK apartments with luxurious amenities and expansive open spaces.",
    categories: ["Architecture"],
    year: "2026",
    location: "HITEC City, Hyderabad",
    image: "/projects/Kohinoor by Auro Realty.png",
    specs: {
      area: "25 acres",
      floors: "G+41",
      completion: "January 2026",
      client: "Auro Realty"
    }
  }
];

export const getFeaturedProject = (): Project | undefined => {
  return projects.find(project => project.isFeatured);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const filterProjects = (
  category: string = "all", 
  searchQuery: string = ""
): Project[] => {
  const normalizedSearch = searchQuery.toLowerCase().trim();
  
  return projects.filter(project => {
    // Filter by category
    const categoryMatch = 
      category === "all" || 
      project.categories.includes(category);
    
    // Filter by search query
    const searchMatch = normalizedSearch === "" || 
      project.title.toLowerCase().includes(normalizedSearch) ||
      project.description.toLowerCase().includes(normalizedSearch) ||
      project.location.toLowerCase().includes(normalizedSearch);
    
    return categoryMatch && searchMatch;
  });
}; 