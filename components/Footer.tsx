import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border ">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between justify-center text-center">
        <p className="font-mono text-xs">
          © {year} {profile.name}. Built with Next.js &amp; Tailwind.
        </p>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-widest justify-center text-center">
          <a href={profile.social.github} className="hover:text-amber">
            GitHub
          </a>
          <a href={profile.social.facebook} className="hover:text-amber">
            Facebook
          </a>
           <a href={profile.social.linkedin} className="hover:text-amber">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
