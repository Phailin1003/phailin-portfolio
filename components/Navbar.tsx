"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#graphics", label: "Graphics" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
          className="hidden md:inline-block rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:border-amber hover:text-amber"
        >
          Resume
        </a>
        {/* Hamburger Icon Button for Mobile */}
        <button
          onClick={toggleMenu}
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted hover:text-text hover:bg-border/30 focus:outline-none transition-colors"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            // "X" Close Icon
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden border-t border-border/80 bg-bg/95 backdrop-blur`}
        id="mobile-menu"
      >
        <div className="flex flex-col gap-4 px-6 py-6 font-mono text-xs uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)} // Closes the drawer when clicked
              className="text-muted hover:text-text transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <hr className="border-border/50 my-2" />

          {/* Mobile Resume Link */}
          <a
            href={profile.resumeUrl}
            download
            className="text-center rounded-full border border-border px-4 py-3 text-text transition-colors hover:border-amber hover:text-amber"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
