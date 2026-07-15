export const profile = {
  name: "Phailin Khodyotha",
  role: "Frontend Developer / Graphic Designer",
  location: "Laos",
  bio: "IT graduate with experience in web development, graphic design, and system support. I build user-friendly websites and support client systems from requirements through to launch.",
  email: "phailinkhodyotha02@gmail.com",
  phone: "+856 20 5486 7757",
  languages: ["English", "Thai"],
  photoUrl: "./profile.png",
  resumeUrl: "./resume.pdf",
  social: {
    github: "https://github.com/Phailin1003",
    linkedin: "https://www.linkedin.com/in/phailin-khodyotha-10698a314/",
    facebook: "https://www.facebook.com/share/1DEs4cvExd/?mibextid=wwXIfr",
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
    company: "ຮ້ານ ເຄຄິງອໍໂຕ້ກຣຸ໊ບ",
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
    image: "./projects/teamplate2.png",
    slug: "teamplate-website",
    name: "Teamplate Website",
    description:
      "Developed a responsive teamplate website featuring company information, services, project portfolio, and contact forms with a modern UI and optimized performance.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    status: "shipped",
    href: "https://www.teamplate.dev/",
  },
  {
    image: "./projects/pixelxpert.png",
    slug: "pixelxpert-agency",
    name: "PixelXpert Agency",
    description:
      "Designed and developed a responsive WordPress website for a digital agency, featuring service pages, portfolio showcases, contact forms, and SEO-friendly content with a modern and user-friendly interface.",
    stack: ["WordPress", "Elementor", "CSS"],
    href: "https://pixelxpert.agency/",
    status: "shipped",
  },
  {
    image: "./projects/ast-printing.png",
    slug: "ast-printing",
    name: "AST Printing & Media",
    description:
      "Designed and developed a responsive WordPress website for a commercial printing company, including service pages, product management, contact forms, and SEO-friendly pages to enhance the company's online presence.",
    stack: ["WordPress", "Elementor", "CSS"],
    href: "https://ast-printing.com/",
    status: "shipped",
  },
  {
    image: "./projects/fm-laos.png",
    slug: "fm-laos",
    name: "FM Laos",
    description:
      "Designed and developed a responsive corporate website for a construction company using WordPress. The website showcases the company's services, completed projects, business profile, and contact information with a modern, professional, and mobile-friendly design.",
    stack: ["WordPress", "Elementor", "CSS", "JavaScript"],
    href: "https://fm-laos.com/",
    status: "shipped",
  },
  {
    image: "./projects/taksa-training.png",
    slug: "taksa-training",
    name: "Taksa Training",
    description:
      "Developed a responsive WordPress training website featuring course pages, service sections, company information, and user-friendly navigation to improve the organization's online presence.",
    stack: ["WordPress", "Elementor", "WooCommerce", "LearnPress"],
    href: "https://taksa-training.com/",
    status: "shipped",
  },
];
export type Graphic = {
  name: string;
  category: string;
  image: string;
};

export const graphics: Graphic[] = [
  {
    name: "HongHong Design",
    category: "Plateform",
    image:
      "https://res.cloudinary.com/eotyuuny/image/upload/v1784035534/Honghong_u2ucub.png",
  },
  {
    name: "Education1",
    category: "Education",
    image:
      "https://res.cloudinary.com/eotyuuny/image/upload/v1784035785/WhatsApp_Image_2025-06-19_at_16.59.32_2_f1sk7j.jpg",
  },
  {
    name: "Education2",
    category: "Education",
    image:
      "https://res.cloudinary.com/eotyuuny/image/upload/v1784035784/WhatsApp_Image_2025-06-19_at_16.59.32_1_gbigp7.jpg",
  },
  {
    name: "Education3",
    category: "Education",
    image:
      "https://res.cloudinary.com/eotyuuny/image/upload/v1784035784/WhatsApp_Image_2025-06-19_at_17.00.12_magduw.jpg",
  },
  {
    name: "Education4",
    category: "Education",
    image:
      "https://res.cloudinary.com/eotyuuny/image/upload/v1784035784/WhatsApp_Image_2025-06-19_at_16.59.31_ji7ayq.jpg",
  },
  {
    name: "Education5",
    category: "Education",
    image:
      "https://res.cloudinary.com/eotyuuny/image/upload/v1784035784/WhatsApp_Image_2025-06-19_at_16.59.32_mdgfuz.jpg",
  },
  {
    name: "Education6",
    category: "Education",
    image:
      "https://res.cloudinary.com/eotyuuny/image/upload/v1784035783/WhatsApp_Image_2025-06-19_at_16.59.33_qpjd0t.jpg",
  },
  {
    name: "car1",
    category: "Artwork Cars",
    image: "https://res.cloudinary.com/eotyuuny/image/upload/car1.jpg",
  },
  {
    name: "car2",
    category: "Artwork Cars",
    image:
      "https://res.cloudinary.com/eotyuuny/image/upload/v1784036131/PHOTO-2024-09-11-12-26-42_moukrr.jpg",
  },
  {
    name: "car3",
    category: "Artwork Cars",
    image:
      "https://res.cloudinary.com/eotyuuny/image/upload/v1784036131/PHOTO-2024-09-11-12-17-19_5_bk0ehc.jpg",
  },
  {
    name: "car4",
    category: "Artwork Cars",
    image:
      "https://res.cloudinary.com/eotyuuny/image/upload/v1784036131/PHOTO-2024-09-11-12-17-19_4_eb5jdg.jpg",
  },
  {
    name: "car5",
    category: "Artwork Cars",
    image:
      "https://res.cloudinary.com/eotyuuny/image/upload/v1784038412/IMG_6374_rhfw8p.jpg",
  },
  {
    name: "car6",
    category: "Artwork Cars",
    image:
      "https://res.cloudinary.com/eotyuuny/image/upload/v1784038411/IMG_6371_bl6anz.jpg",
  },
  {
    name: "car7",
    category: "Artwork Cars",
    image:
      "https://res.cloudinary.com/eotyuuny/image/upload/v1784038405/b886fc66-3ce5-4260-b66f-61a4b2dd9b2a_altlud.jpg",
  },
  {
    name: "car8",
    category: "Artwork Cars",
    image:
      "https://res.cloudinary.com/eotyuuny/image/upload/v1784036130/artwork_cm_Recovered_1_-01_dezyjf.jpg",
  },
  {
    name: "car9",
    category: "Artwork Cars",
    image:
      "https://res.cloudinary.com/eotyuuny/image/upload/v1784039170/Cold_Weather_2_hjaczg.jpg",
  },
  {
    name: "car10",
    category: "Artwork Cars",
    image:
      "https://res.cloudinary.com/eotyuuny/image/upload/v1784039129/boat_racing_festival_zkhx9w.jpg",
  },
  {
    name: "car12",
    category: "Artwork Cars",
    image:
      "https://res.cloudinary.com/eotyuuny/image/upload/v1784036130/PHOTO-2024-09-11-12-17-19_hube1u.jpg",
  },
  {
    name: "car12",
    category: "Artwork Cars",
    image:
      "https://res.cloudinary.com/eotyuuny/image/upload/v1784036130/PHOTO-2024-09-11-12-17-19_2_iult2h.jpg",
  },
];
export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Technical",
    items: [
      "WordPress",
      "Next.js",
      "JavaScript",
      "HTML, CSS",
      "MySQL / SQL",
    ],
  },
  { category: "Design", items: ["Photoshop", "Illustrator", "Canva", "Figma"] },
  {
    category: "Tools",
    items: ["Microsoft Word", "Excel", "PowerPoint", "Figma"],
  },
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
