import { Service, Project, FAQItem, Testimonial, InertiaProduct } from "./types";

export const SERVICES: Service[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    description: "High-converting corporate websites that build brand authority, build trust with clients, and clearly communicate your unique value proposition.",
    iconName: "Briefcase",
    features: ["SEO Optimized", "Responsive Design", "Lead Capture Integration", "Speed Optimization"]
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    description: "Stunning, immersive personal brand showcases for artists, freelancers, and professionals designed to land high-paying contracts and opportunities.",
    iconName: "UserCheck",
    features: ["Interactive Galleries", "Smooth Animations", "Contact Funnels", "Downloadable Resume"]
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "Ultra-fast, single-purpose conversion funnels designed to pitch a single product, service, or campaign with persuasive copywriting and clear CTAs.",
    iconName: "Target",
    features: ["A/B Testing Ready", "Fast Load Speed", "Analytical Hooks", "Copywriting Alignment"]
  },
  {
    id: "school-websites",
    title: "School & Institution Websites",
    description: "Comprehensive information hubs for schools, universities, and academies to present curricula, calendars, portals, and student achievements.",
    iconName: "GraduationCap",
    features: ["Parent-Student Portals", "Events Calendars", "Admissions Forms", "Document Centers"]
  },
  {
    id: "church-websites",
    title: "Church Websites",
    description: "Enlightening online platforms for ministries and places of worship to share sermon archives, schedule services, collect tithes, and manage events.",
    iconName: "Sparkles",
    features: ["Sermon Media Player", "Secure Tithes & Donations", "Event RSVP", "Ministry Directories"]
  },
  {
    id: "ngo-websites",
    title: "NGO & Non-Profit Websites",
    description: "Impactful, mission-driven portals that share stories, attract global volunteers, raise funding, and catalog ongoing community programs.",
    iconName: "Heart",
    features: ["Fundraising Integrations", "Volunteer Signup", "Impact Analytics", "Newsletter Signups"]
  },
  {
    id: "ecommerce-stores",
    title: "E-commerce Stores",
    description: "Secure, high-performance retail systems optimized for smooth user shopping experiences, product categorization, inventory, and payment gates.",
    iconName: "ShoppingBag",
    features: ["Mobile Checkout Optimization", "Multi-gateway Payments", "Inventory Trackers", "Automated Receipts"]
  },
  {
    id: "custom-web-apps",
    title: "Custom Web Applications",
    description: "Bespoke SaaS products, customer portals, or administrative dashboards tailored to streamline your unique operational bottlenecks and workflows.",
    iconName: "Cpu",
    features: ["Secure API Architectures", "Custom Database Designs", "Real-time Operations", "Role-based Dashboards"]
  },
  {
    id: "uiux-design",
    title: "UI/UX Design",
    description: "Wireframing, interactive prototyping, and pixel-perfect design languages modeled to deliver frictionless and modern digital interfaces.",
    iconName: "Layers",
    features: ["Interactive Figma Prototypes", "Visual Typography Pairing", "User Journey Audits", "Design System Setup"]
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description: "Transform outdated, slow-loading websites into fast, modern, and high-converting systems while preserving your current search engine rankings.",
    iconName: "RefreshCw",
    features: ["Modern Visual Redesign", "Core Web Vitals Boosts", "Mobile Optimization", "Content Restructuring"]
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    description: "Proactive uptime monitoring, core software updates, routine file and database backups, and emergency hotfixes to keep your systems running flawlessly.",
    iconName: "ShieldCheck",
    features: ["24/7 Security Audits", "Weekly DB & File Backups", "Speed Maintenance", "Priority Tech Support"]
  },
  {
    id: "ai-consulting",
    title: "AI & Prompt Consulting",
    description: "Empower your workflows by integrating Gemini and large language models (LLMs) to automate content creation, client support, or internal queries.",
    iconName: "BrainCircuit",
    features: ["Custom Prompt Engineering", "API Setup & Orchestration", "Workflow Automation", "Staff Onboarding Tutorials"]
  },
  {
    id: "linux-support",
    title: "Linux Support & Hosting",
    description: "Professional VPS, cloud server setups, terminal environments, Nginx configurations, and secure hosting deployments optimized for fast delivery.",
    iconName: "Terminal",
    features: ["Secure SSH Hardening", "Nginx Reverse Proxies", "Docker Containers Setup", "Performance Tuning"]
  },
  {
    id: "cybersecurity-consulting",
    title: "Cybersecurity Consulting",
    description: "Vulnerability assessments, code audits, SSL enforcements, and penetration scans designed to shield user databases and sensitive client communications.",
    iconName: "ShieldAlert",
    features: ["Vulnerability Audits", "Data Encryption Enforced", "Firewall Deployments", "Compliance Alignment"]
  }
];

export const WHY_CHOOSE_ME = [
  {
    title: "Affordable Pricing",
    description: "Premium agency-grade development and design delivered at highly competitive, value-optimized rates designed to give you maximum ROI.",
    icon: "BadgeDollarSign"
  },
  {
    title: "Fast Delivery",
    description: "Agile workflows and clean architecture ensure your project is built, thoroughly tested, and deployed to live production without delays.",
    icon: "Zap"
  },
  {
    title: "Mobile Responsive Design",
    description: "Meticulously coded interfaces that scale flawlessly on ultra-wide desktop monitors, standard laptops, tablets, and mobile screens.",
    icon: "Smartphone"
  },
  {
    title: "Modern UI/UX",
    description: "Polished interfaces utilizing luxury white space, high-contrast dark aesthetics, subtle neon glows, and delightful interactive motion.",
    icon: "Sparkles"
  },
  {
    title: "Secure Development",
    description: "Rigorous standards for input sanitization, safe session management, token-based requests, and secure database parameters.",
    icon: "ShieldAlert"
  },
  {
    title: "SEO Optimized",
    description: "Semantic HTML structures, fast loading times, schema markups, and structured metadata configurations to ensure your brand ranks on Google.",
    icon: "TrendingUp"
  },
  {
    title: "Excellent Communication",
    description: "Clear, transparent project progress updates. Jargon-free explanations and collaborative sessions tailored to capture your precise intent.",
    icon: "MessageSquareText"
  },
  {
    title: "Reliable Support",
    description: "Ongoing post-deployment system checks, quick security patches, and friendly maintenance support so your digital presence never experiences downtime.",
    icon: "LifeBuoy"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "business-corporate",
    title: "Prime Tech Corporate Hub",
    description: "A luxury corporate website featuring dynamic service selectors, localized multilingual supports, high-contrast typography, and an automated lead intake pipeline.",
    imageUrl: "https://picsum.photos/seed/corporate/800/600",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Motion", "Express"],
    category: "Web"
  },
  {
    id: "restaurant-gourmet",
    title: "L'Ambroisie Culinary Portal",
    description: "A high-end restaurant digital presence. Implements an interactive seasonal menu visualizer, table reservation desk with real-time slot selection, and gallery layouts.",
    imageUrl: "https://picsum.photos/seed/culinary/800/600",
    technologies: ["React", "Tailwind CSS", "Motion", "LocalStorage"],
    category: "Web"
  },
  {
    id: "ecommerce-beast",
    title: "Solstice Luxury Store",
    description: "A fully custom e-commerce solution featuring persistent local shopping carts, instant search filters, smooth checkout flows, and custom inventory alerts.",
    imageUrl: "https://picsum.photos/seed/store/800/600",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Node.js"],
    category: "Web"
  },
  {
    id: "school-system",
    title: "Aegis School Administration Manager",
    description: "An enterprise-grade school dashboard enabling teachers to submit marks, catalog real-time student attendance, and coordinate parent communication logs.",
    imageUrl: "https://picsum.photos/seed/school/800/600",
    technologies: ["React", "TypeScript", "Tailwind CSS", "D3.js", "Express"],
    category: "System"
  },
  {
    id: "personal-portfolio-pro",
    title: "Mattaniah Ilunga Signature Showcase",
    description: "The premium technology brand portfolio, illustrating dynamic services, interactive skill progression meters, and custom responsive layouts.",
    imageUrl: "https://picsum.photos/seed/portfolio/800/600",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    category: "Web"
  },
  {
    id: "saas-landing",
    title: "Velocity SaaS Automation Funnel",
    description: "A high-performance landing page presenting feature bento grids, pricing comparison matrix, lightning-fast dark-to-light loaders, and optimized lead flows.",
    imageUrl: "https://picsum.photos/seed/saas/800/600",
    technologies: ["React", "Tailwind CSS", "Motion", "Vite"],
    category: "Web"
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 92 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 98 },
      { name: "Framer Motion", level: 90 },
      { name: "Responsive UI/UX", level: 95 }
    ]
  },
  {
    name: "Backend & Systems",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 90 },
      { name: "PHP", level: 82 },
      { name: "Python", level: 80 },
      { name: "API Development", level: 92 },
      { name: "Database Design", level: 88 }
    ]
  },
  {
    name: "Infrastructure & Security",
    skills: [
      { name: "Linux Administration", level: 85 },
      { name: "Cybersecurity Audits", level: 80 },
      { name: "Git & GitHub", level: 92 },
      { name: "AI Prompt Engineering", level: 95 },
      { name: "Cloud Server Deployment", level: 87 }
    ]
  }
];

export const INERTIA_PRODUCTS: InertiaProduct[] = [
  {
    id: "inertia-unfazed",
    title: "Inertia Unfazed",
    subtitle: "Continuum Unfazed",
    description: "Our core cybersecurity shield and digital asset auditor, engineered to encrypt databases, block intrusion attempts, and secure remote team infrastructure from cyber threats.",
    focusArea: "Cybersecurity & Risk Audits",
    tagline: "Unshakable Digital Protection"
  },
  {
    id: "inertia-hustler",
    title: "Inertia Hustler",
    subtitle: "Continuum Hustler",
    description: "An automated entrepreneurship enablement engine, compiling local business tools, e-commerce templates, billing automation, and CRM funnels in one fast, mobile platform.",
    focusArea: "Entrepreneurship & Commercial Systems",
    tagline: "Turbocharge Digital Cashflows"
  },
  {
    id: "inertia-stack",
    title: "Inertia Stack",
    subtitle: "Continuum Stack",
    description: "A revolutionary application runtime framework and custom database model, streamlining API creations, system scalability, and client-server synchronization speeds.",
    focusArea: "Software Innovation & Core Runtime",
    tagline: "Agency-Grade Code Framework"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ephraim Phiri",
    role: "Managing Director",
    company: "Apex Trade Logistics",
    text: "Working with Mattaniah was an outstanding experience. He completely redesigned our outdated corporate portal, boosting our speed by 300% and helping us land two massive enterprise contracts in our first month live.",
    rating: 5
  },
  {
    id: "t2",
    name: "Nesta Mukela",
    role: "Founder",
    company: "Vibrant Hub Africa",
    text: "ILUNGA MAN delivered our NGO's community donation portal three days ahead of schedule! His attention to detail, secure transaction setups, and responsive layout are unmatched. Highly recommended.",
    rating: 5
  },
  {
    id: "t3",
    name: "Dr. Sibongile Tembo",
    role: "Principal Coordinator",
    company: "St. Andrews Academic Institution",
    text: "Mattaniah built a custom student-parent communication directory for us. He guided us through the entire process, explaining technical points with complete clarity. Our parents love the new secure portal!",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "How much does a professional website cost?",
    answer: "Every digital solution has unique requirements. After a free initial consultation, I provide a comprehensive, transparent price proposal based on feature complexity, page volume, and integration needs. I always optimize to deliver elite agency quality at a competitive rate."
  },
  {
    id: "faq2",
    question: "How long does it typically take to deliver a project?",
    answer: "Landing pages and high-converting single-screen sites are completed in 3 to 7 business days. Standard corporate websites and e-commerce stores take 10 to 20 days. Large, complex custom web applications may take 3 to 6 weeks, structured into fast, iterative milestones."
  },
  {
    id: "faq3",
    question: "Do you redesign existing, slow-loading websites?",
    answer: "Yes, web redesign is one of my core specializations! I analyze your current site bottlenecks, rebuild the layout for pristine speed and mobile-responsiveness, and upgrade your SEO structure while preserving existing domain rankings and links."
  },
  {
    id: "faq4",
    question: "Do you provide web hosting support and Linux server setups?",
    answer: "Absolutely. I configure virtual private servers (VPS), set up hardened SSH accesses, deploy Nginx reverse proxies, implement SSL security certificates, and establish automatic automated file/database backup systems so your app remains live 24/7."
  },
  {
    id: "faq5",
    question: "Can you build fully customized software or SaaS dashboards?",
    answer: "Yes. Using the Inertia Stack and modern React/Node/Express frameworks, I design, code, and deploy secure databases, multi-role user authentications, and beautiful analytics dashboards tailored specifically to solve your unique operational problems."
  }
];
