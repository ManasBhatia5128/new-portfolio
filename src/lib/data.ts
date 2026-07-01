/**
 * Typed constants extracted from resume.txt.
 * Single source of truth for all portfolio content.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  github: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  score: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  logo?: string;
  bullets: string[];
}

export interface ProjectEntry {
  title: string;
  tech: string[];
  link: string;
  cover?: string;
  description: string;
}

export interface PositionEntry {
  role: string;
  organization: string;
  duration: string;
  logo?: string;
  bullets: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  tags: string[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: "Manas Bhatia",
  title: "Software Development Engineer & Technical Lead",
  email: "manasbhatia724@gmail.com",
  phone: "+91 87089 86724",
  website: "manasbhatia.me",
  linkedin: "https://linkedin.com/in/manas-bhatia",
  github: "https://github.com/manasbhatia5128",
};

export const profileSummary =
  "Full-stack engineer with deep expertise in MERN, Next.js, and FastAPI, specializing in B2B API integrations, cloud-native infrastructure on AWS (EC2, S3, Amplify, CloudFront), and AI-powered product development using RAG pipelines with Azure OpenAI. Technical lead driving 1.5L+ monthly revenue through high-speed web platforms and cross-platform logistics automation.";

export const education: Education[] = [
  {
    institution: "Punjab Engineering College (Deemed to be University)",
    location: "Chandigarh, India",
    degree: "B.Tech in Electrical Engineering, Minor in CSE (AI)",
    duration: "Aug 2023 – May 2027",
    score: "CGPA: 8.00",
  },
  {
    institution: "SD Public School",
    location: "Yamuna Nagar, Haryana",
    degree: "Senior Secondary Education",
    duration: "Mar 2021 – Mar 2023",
    score: "91.6%",
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Java"],
  },
  {
    category: "Frameworks & Tools",
    items: [
      "Next.js",
      "React Native",
      "FastAPI",
      "Supabase",
      "Node.js",
      "Bun",
      "Tailwind CSS",
    ],
  },
  {
    category: "AI/ML & Cloud",
    items: [
      "Azure OpenAI",
      "Google Gemini API",
      "Vector Embeddings",
      "RAG",
      "AWS EC2",
      "AWS S3",
      "AWS Amplify",
      "CloudFront",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "DynamoDB", "Redis", "MySQL", "Google Firebase"],
  },
  {
    category: "CS Fundamentals",
    items: ["DSA", "DBMS", "OOP", "Operating Systems", "Linux"],
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: "Humara Pandit",
    role: "Technical Lead",
    duration: "Jan 2026 – Present",
    logo: "/images/hp_logo.png",
    bullets: [
      "Engineered a React Native app with a FastAPI backend deployed on AWS EC2, implementing a RAG pipeline via Azure OpenAI. Architected multi-profile authentication and a centralized Redis payment session loop to optimize transaction routing.",
      "Developed a Supabase-backed REST API (GET/POST/PATCH) enabling external partners to list products and sync order and payment statuses. Built an internal order management panel and collaborated directly with external technical leads for seamless cross-platform integration.",
      "Deployed high-speed Next.js web apps on AWS Amplify, overcoming sub-10% conversion rates to drive 1.5 Lakh in monthly revenue. Built an internal MongoDB-based sales tool integrating Zoho Billing, Delhivery, and Shadowfax APIs to automate invoicing and cross-platform logistics scheduling.",
    ],
  },
];

export const projects: ProjectEntry[] = [
  {
    title: "Gemstone Consultation Landing Page",
    tech: ["Next.js", "DynamoDB"],
    link: "https://gems.humarapandit.com",
    cover: "/images/gems_hp.png",
    description:
      "Driven 1L+ monthly revenue across multiple meta ad campaigns. (Made during my tenure at Humara Pandit)",
  },
  {
    title: "AI Astrologer (Humara Pandit App)",
    tech: ["React Native", "FastAPI", "AWS EC2", "AWS S3", "CloudFront"],
    link: "https://play.google.com/store/apps/details?id=com.humarapandit.tejasai",
    cover: "/images/astro_hp.png",
    description:
      "AI Astrologer predictions based on chart data derived from birth details. (Made during my tenure at Humara Pandit)",
  },
  {
    title: "Alignify",
    tech: ["React", "Google Gemini API"],
    link: "#",
    cover: "/images/alignify.png",
    description:
      "AI-powered resume reviewer using the Gemini API to provide job-specific suggestions, scoring, and keyword insights with deep contextual awareness.",
  },
  {
    title: "E-Summit'25 Website",
    tech: ["React", "Google Firebase"],
    link: "#",
    cover: "/images/esummit.png",
    description:
      "Official registration portal for PEC's flagship E-Summit, integrating Firebase for real-time operations to serve over 2,000 participants and 1,000+ concurrent users.",
  },
];

export const positions: PositionEntry[] = [
  {
    role: "Vice President",
    organization: "IMAGES (NGO by PEC Students)",
    duration: "June 2025 – Present",
    logo: "/images/images_logo.jpg",
    bullets: [
      "Led community outreach programs benefiting 200+ individuals and managed logistics and fundraising by coordinating with senior stakeholders to ensure successful execution.",
    ],
  },
  {
    role: "Lead Coordinator",
    organization: "Hindi Editorial Board, PEC",
    duration: "Aug 2024 – Present",
    logo: "/images/heb_logo.jpg",
    bullets: [
      "Led cross-functional collaboration with poets, faculty, and logistics teams to execute Hindi Diwas, engaging 250+ participants and promoting cultural inclusion.",
    ],
  },
];

/**
 * Maps skill item names → Devicon class names.
 * Only skills with a matching devicon entry get an icon rendered.
 * @see https://devicon.dev/ for the full icon set.
 */
export const skillIconMap: Record<string, string> = {
  Python: "devicon-python-plain",
  TypeScript: "devicon-typescript-plain",
  JavaScript: "devicon-javascript-plain",
  SQL: "devicon-azuresqldatabase-plain",
  Java: "devicon-java-plain",
  "Next.js": "devicon-nextjs-plain",
  "React Native": "devicon-react-original",
  FastAPI: "devicon-fastapi-plain",
  Supabase: "devicon-supabase-plain",
  "Node.js": "devicon-nodejs-plain",
  Bun: "devicon-bun-plain",
  "Tailwind CSS": "devicon-tailwindcss-original",
  "Azure OpenAI": "devicon-azure-plain",
  "Google Gemini API": "devicon-google-plain",
  "AWS EC2": "devicon-amazonwebservices-plain-wordmark",
  "AWS S3": "devicon-amazonwebservices-plain-wordmark",
  "AWS Amplify": "devicon-amazonwebservices-plain-wordmark",
  MongoDB: "devicon-mongodb-plain",
  DynamoDB: "devicon-dynamodb-plain",
  Redis: "devicon-redis-plain",
  MySQL: "devicon-mysql-plain",
  "Google Firebase": "devicon-firebase-plain",
  Linux: "devicon-linux-plain",
};

export const achievements: string[] = [
  "Special Mention, Ideathon 4.0 by ACM-PEC for UniMart — a peer-to-peer delivery platform.",
  "Certificate of Appreciation from PEC for event management and cultural involvement.",
];

/** Placeholder blog posts — will be replaced with MDX content */
export const blogPosts: BlogPost[] = [
  {
    slug: "building-rag-pipelines",
    title: "Building Production RAG Pipelines with Azure OpenAI",
    date: "2026-05-15",
    readingTime: "8 min",
    excerpt:
      "A deep dive into architecting retrieval-augmented generation pipelines that actually work in production — from vector embeddings to response quality.",
    tags: ["AI/ML", "Azure", "RAG"],
  },
  {
    slug: "aws-amplify-nextjs",
    title: "Deploying Next.js on AWS Amplify: Lessons from the Trenches",
    date: "2026-04-22",
    readingTime: "6 min",
    excerpt:
      "What they don't tell you about deploying ISR-heavy Next.js apps on Amplify — caching pitfalls, cold starts, and the fixes that worked.",
    tags: ["AWS", "Next.js", "DevOps"],
  },
  {
    slug: "supabase-b2b-api",
    title: "Designing a B2B API with Supabase and Edge Functions",
    date: "2026-03-10",
    readingTime: "10 min",
    excerpt:
      "How we built a partner-facing REST API for order and payment sync, complete with row-level security and real-time webhooks.",
    tags: ["Supabase", "API Design", "Backend"],
  },
];
