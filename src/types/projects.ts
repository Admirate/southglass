export interface Project {
  id: string;
  title: string;
  description: string;
  categories: string[];
  year: string;
  location: string;
  isFeatured?: boolean;
  image: string;  // Path to the project image
  specs?: {
    [key: string]: string;
  };
} 