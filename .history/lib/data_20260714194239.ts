
export const profile = {
  name: "Phailin Khodyotha",
  role: "Frontend Developer / Graphic Designer",
  location: "Laos",
  bio: "IT graduate with experience in web development, graphic design, and system support. I build user-friendly websites and support client systems from requirements through to launch.",
  email: "phailinkhodyotha02@gmail.com",
  phone: "+856 20 5486 7757",
  languages: ["English", "Thai"],
  photoUrl: "/phailin.jpg",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "",
  },
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
};
export const experience: ExperienceItem[] = [
  {
    period: "2025 — Present",
    role: "Software Analyst",
    company: "CS Intellect Lao",
    description:
      "Provide system support for the Cadena HRM system used by client companies including Lao Tobacco Limited, acting as the liaison between clients and Cadena. Collect and analyze requirements for a web-based license issuance system for the Ministry of Industry and Commerce, and support implementation and ongoing improvements for client projects.",
  },
  {
    period: "03.2025 — 09.2025",
    role: "IT Developer",
    company: "Teamplate Company",
    description:
      "Developed Teamplate, a website for a property developer company, using React and Next.js.",
  },
  {
    period: "10.2024 — 01.2025",
    role: "Graphic Designer",
    company: "ຮ້ານ ເຄິກ ອໍໂຕ້ກຣຸ໊ບ",
    description:
      "Designed EV-related artwork for digital platforms, created social media content and promotional materials, and maintained consistent branding across campaigns.",
  },
  {
    period: "03.2024 — 06.2024",
    role: "Frontend Developer",
    company: "Humascot",
    description:
      "Developed a QR code-based food ordering web application for restaurant use and built frontend features for a job listing platform, creating responsive UI with React.js, integrating APIs, and handling dynamic data rendering.",
  },
  {
    period: "11.2023 — 03.2024",
    role: "Graphic Designer",
    company: "Laos EV Center",
    description:
      "Designed EV-related artwork for digital platforms, created social media content and promotional materials, and maintained consistent branding across campaigns.",
  },
  {
    period: "2023",
    role: "Frontend Development Intern",
    company: "Houng Ah Loun Technology",
    description:
      "Assisted with front-end web development tasks and supported UI implementation and testing.",
  },
  {
    period: "2022",
    role: "Media Intern",
    company: "STELLA",
    description:
      "Participated in media development and content creation, and assisted with design and digital media tasks.",
  },
];
export type EducationItem = {
  period: string;
  degree: string;
  school: string;
  major: string;
};

export const education: EducationItem[] = [
  {
    period: "2022 — 2024",
    degree: "Bachelor of Science in Computer Science",
    school: "National University of Laos",
    major: "Computer Science",
  },
  {
    period: "2020 — 2023",
    degree: "Higher Diploma in TVET",
    school: "Mesay Financial College",
    major: "Business English",
  },
  {
    period: "2019 — 2022",
    degree: "Higher Diploma in TVET",
    school: "Soutsaka Institute of Technology",
    major: "Computer Science",
  },
];
export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  image?: string;
  href?: string;
  repo?: string;
  status: "shipped" | "in-progress" | "archived";
};
 
export const projects: Project[] = [
  {
    image: "/projects/teamplate2.png",
    slug: "honghong",
    name: "HongHong",
    description:
      "A property rental and real estate listing platform with search and filtering across apartments, houses, and commercial properties.",
    stack: ["Next.js", "React", "JavaScript"],
    status: "shipped",
  },
  {
    slug: "qr-food-ordering",
    name: "QR Food Ordering",
    description:
      "A QR code-based food ordering web application built for restaurant use, from menu browsing to order placement.",
    stack: ["React.js", "JavaScript", "REST APIs"],
    status: "shipped",
  },
  {
    slug: "job-listing-platform",
    name: "Job Listing Platform",
    description:
      "Frontend features for a job listing platform, including dynamic data rendering and API integration.",
    stack: ["React.js", "JavaScript"],
    status: "shipped",
  },
  {
    slug: "cadena-hrm-support",
    name: "Cadena HRM System",
    description:
      "Ongoing system support and requirements analysis for an HRM platform used by client companies, plus a license-issuance system for a government ministry.",
    stack: ["System Support", "Requirements Analysis"],
    status: "in-progress",
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { category: "Technical", items: ["WordPress", "Next.js", "React.js", "JavaScript", "HTML, CSS", "MySQL / SQL"] },
  { category: "Design", items: ["Photoshop", "Illustrator", "Canva", "Figma"] },
  { category: "Tools", items: ["Microsoft Word", "Excel", "PowerPoint", "Figma"] },
  { category: "Soft Skills", items: ["Teamwork", "Communication"] },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readMinutes: number;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "welcome",
    title: "Welcome to my blog",
    date: "2026-07-14",
    excerpt: "A short introduction to what I'll be writing about here.",
    readMinutes: 2,
    content: [
      "This is the first post on my new site — more to come soon about the projects I'm working on, things I'm learning, and notes from client work.",
      "Feel free to reach out through the contact section if anything here is useful to you.",
    ],
  },
];