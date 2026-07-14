import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-xs">
          © {year} {profile.name}. Built with Next.js &amp; Tailwind.
        </p>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-widest">
          <a href={profile.social.github} className="hover:text-text">
            GitHub
          </a>
          <a href={profile.social.linkedin} className="hover:text-text">
            LinkedIn
          </a>
          {profile.social.twitter && (
            <a href={profile.social.twitter} className="hover:text-text">
              Twitter
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
