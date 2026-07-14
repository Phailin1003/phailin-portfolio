import { profile } from "@/lib/data";
import Link from "next/link";
import React from "react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-text hover:text-amber"
        >
          {" "}
          <span className="text-amber">Portfolio</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>
          <a
          href={profile.resumeUrl}
          download
          className="rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:border-amber hover:text-amber"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
