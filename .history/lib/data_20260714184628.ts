// ─────────────────────────────────────────────────────────────
// Edit this file to make the site yours. Everything on the page
// (name, bio, projects, skills, blog posts) is pulled from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Jordan Reyes",
  role: "Software Engineer",
  location: "Remote",
  bio: "I build fast, accessible web apps and the occasional CLI tool that outlives every project it was written for. Currently focused on developer tooling and distributed systems.",
  email: "hello@jordanreyes.dev",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
  terminalLines: [
    { prompt: "whoami", output: "Jordan Reyes" },
    { prompt: "cat role.txt", output: "Software Engineer, open to new projects" },
    { prompt: "./run_portfolio.sh", output: "Loading skills, projects, and blog…" },
  ],
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "Senior Software Engineer",
    company: "Northline Labs",
    description:
      "Leading the platform team rebuilding the core API on a service-oriented architecture, cutting p95 latency by 40%.",
  },
  {
    period: "2021 — 2024",
    role: "Software Engineer",
    company: "Fieldnote",
    description:
      "Owned the editor product end to end — real-time collaboration, offline sync, and the plugin API used by 200+ integrations.",
  },
  {
    period: "2019 — 2021",
    role: "Frontend Developer",
    company: "Studio Basin",
    description:
      "Built marketing sites and internal tools for clients across fintech and healthcare, mentored two junior developers.",
  },
];

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  href?: string;
  repo?: string;
  status: "shipped" | "in-progress" | "archived";
};

export const projects: Project[] = [
  {
    slug: "taskflow",
    name: "TaskFlow",
    description:
      "A keyboard-first task manager with offline sync and a command palette for power users.",
    stack: ["Next.js", "TypeScript", "SQLite", "Tailwind"],
    href: "#",
    repo: "#",
    status: "shipped",
  },
  {
    slug: "logline",
    name: "Logline",
    description:
      "A lightweight structured-logging library for Node with pretty local output and JSON in production.",
    stack: ["Node.js", "TypeScript"],
    repo: "#",
    status: "shipped",
  },
  {
    slug: "gridscope",
    name: "GridScope",
    description:
      "Real-time dashboard for visualizing energy-grid load data, built for a hackathon and still growing.",
    stack: ["React", "D3.js", "WebSockets"],
    href: "#",
    repo: "#",
    status: "in-progress",
  },
  {
    slug: "porter",
    name: "porter-cli",
    description:
      "A CLI that scaffolds and deploys small full-stack apps to your provider of choice in one command.",
    stack: ["Go"],
    repo: "#",
    status: "archived",
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Go", "Python", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Redux"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "REST", "GraphQL"] },
  { category: "Tooling", items: ["Docker", "Git", "CI/CD", "AWS"] },
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
    slug: "why-i-write-clis",
    title: "Why I keep writing CLIs nobody asked for",
    date: "2026-05-12",
    excerpt:
      "Small command-line tools are the fastest way I know to learn a new language or idea properly.",
    readMinutes: 4,
    content: [
      "Every time I want to actually learn a language, framework, or protocol, I reach for a CLI tool rather than a web app. There's no routing to configure, no CSS to fight — just input, logic, and output.",
      "The constraint is the point. A CLI forces you to think about the shape of your data and the shape of your commands before anything else. That clarity tends to carry over into whatever I build next.",
      "It also means I end up with a small drawer of genuinely useful tools, most of which nobody but me will ever run — and that's fine.",
    ],
  },
  {
    slug: "the-cost-of-a-migration",
    title: "The real cost of a framework migration",
    date: "2026-03-02",
    excerpt:
      "Rewrites are rarely about the code. They're about the six months of decisions that follow.",
    readMinutes: 6,
    content: [
      "When a team decides to migrate frameworks, the conversation is almost always about the technical delta: bundle size, DX, ecosystem support. The part that gets underestimated is everything downstream of the migration — the onboarding docs, the internal tooling, the muscle memory of everyone on the team.",
      "On a recent project, the migration itself took three weeks. Rebuilding the surrounding tooling and habits took closer to four months, spread out in small increments nobody tracked as 'migration work.'",
      "If you're planning one, budget for the second number, not the first.",
    ],
  },
  {
    slug: "debugging-in-production",
    title: "A short list of things I check before blaming production",
    date: "2026-01-18",
    excerpt: "A checklist I wish I'd had three postmortems ago.",
    readMinutes: 3,
    content: [
      "Clock skew, stale caches, a config value that only exists in one environment — most 'it works on my machine' bugs come down to one of a handful of usual suspects.",
      "I keep a short checklist taped above my desk at this point: env vars, cache headers, feature flags, timezone assumptions, and connection pool limits. It catches the bug faster than staring at a stack trace ever does.",
    ],
  },
];
