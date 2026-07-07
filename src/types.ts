export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name to dynamically render
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: "Web" | "Mobile" | "System";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export interface ContactLead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export interface InertiaProduct {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  focusArea: string;
  tagline: string;
}
