"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { Mail, Phone, MapPin} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend is wired up yet — this opens the visitor's email client
    // with the message pre-filled. Swap this for a real endpoint (e.g.
    // Resend, Formspree, or an API route) when you're ready to go live.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[0.4fr_0.6fr] md:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">
              07 · Contact
            </p>
            <h2 className="mt-4 font-display text-3xl italic text-text sm:text-4xl">
              Let's work together
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Have a project in mind or just want to say hi? My inbox is
              always open.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 block font-mono text-sm text-blue hover:text-text"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="mt-2 block font-mono text-sm text-blue hover:text-text"
            >
              {profile.phone}
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="font-mono text-[11px] uppercase tracking-widest text-muted"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none placeholder:text-muted focus:border-amber"
                  placeholder="Ada Lovelace"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-mono text-[11px] uppercase tracking-widest text-muted"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none placeholder:text-muted focus:border-amber"
                  placeholder="ada@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="font-mono text-[11px] uppercase tracking-widest text-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none placeholder:text-muted focus:border-amber"
                placeholder="Tell me about your project…"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-amber px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-transform hover:scale-[1.03]"
            >
              Send Message
            </button>
            {status === "sent" && (
              <p className="font-mono text-xs text-green">
                Your email client should have opened — send it over!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}