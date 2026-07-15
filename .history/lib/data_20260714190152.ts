
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