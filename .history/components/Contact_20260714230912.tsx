"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend is wired up yet — this opens the visitor's email client
    // with the message pre-filled. Swap this for a real endpoint (e.g.
    // Resend, Formspree, or an API route) when you're ready to go live.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );
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
              Have a project in mind or just want to say hi? My inbox is always
              open.
            </p>
        <div className="mt-8 space-y-4">

  {/* Email */}
  <a
    href={`mailto:${profile.email}`}
    className="group flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 transition-all hover:border-blue hover:bg-blue/5"
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue/10 text-blue transition group-hover:bg-blue group-hover:text-white">
      <Mail size={18} />
    </div>

    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        Email
      </p>
      <span className="font-mono text-sm text-text group-hover:text-blue">
        {profile.email}
      </span>
    </div>
  </a>


  {/* WhatsApp */}
  <a
    href="https://wa.me/8562054867757"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 transition-all hover:border-green-500 hover:bg-green-500/5"
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-500 transition group-hover:bg-green-500 group-hover:text-white">
      <Phone size={18} />
    </div>

    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        WhatsApp
      </p>
      <span className="font-mono text-sm text-text group-hover:text-green-500">
        {profile.phone}
      </span>
    </div>
  </a>


  {/* Location */}
  <div
    className="group flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 transition-all hover:border-amber hover:bg-amber/5"
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber/10 text-amber transition group-hover:bg-amber group-hover:text-white">
      <MapPin size={18} />
    </div>

    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        Location
      </p>
      <span className="font-mono text-sm text-text group-hover:text-amber">
        {profile.location}
      </span>
    </div>
  </div>

</div>
          {/* Social Buttons */}
<div className="mt-8 flex gap-5">
  {/* Github */}
  <a
    href={profile.social.github}
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      flex h-12 w-12 items-center justify-center
      rounded-xl
      border border-gray-200
      bg-white/80
      text-gray-500
      backdrop-blur-sm
      shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      transition-all duration-300
      hover:-translate-y-2
      hover:border-black
      hover:bg-black
      hover:text-white
      hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]
    "
  >
    <FaGithub
      size={30}
      className="transition-transform duration-300 group-hover:scale-110"
    />
  </a>

  {/* Facebook */}
  <a
    href={profile.social.facebook}
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      flex h-12 w-12 items-center justify-center
      rounded-xl
      border border-gray-200
      bg-white/80
      text-gray-500
      backdrop-blur-sm
      shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      transition-all duration-300
      hover:-translate-y-2
      hover:border-blue-500
      hover:bg-blue-500
      hover:text-white
      hover:shadow-[0_15px_35px_rgba(59,130,246,0.35)]
    "
  >
    <FaFacebook
      size={30}
      className="transition-transform duration-300 group-hover:scale-110"
    />
  </a>

{/* LinkedIn */}
<a
  href={profile.social.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    flex h-12 w-12 items-center justify-center
    rounded-xl
    border border-gray-200
    bg-white/80
    text-gray-500
    backdrop-blur-sm
    shadow-[0_8px_30px_rgba(0,0,0,0.08)]
    transition-all duration-300
    hover:-translate-y-2
    hover:border-blue-700
    hover:bg-blue-700
    hover:text-white
    hover:shadow-[0_15px_35px_rgba(29,78,216,0.35)]
  "
>
  <FaLinkedin
    size={30}
    className="transition-transform duration-300 group-hover:scale-110"
  />
</a>
</div>
          </div>

        <form onSubmit={handleSubmit} className="space-y-6 border border-border bg-background/50 p-4 transition-all hover:border-blue hover:bg-blue/5">

  <div className="grid gap-6 sm:grid-cols-2">

    {/* Name */}
    <div className="group">
      <label
        htmlFor="name"
        className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
      >
        Name
      </label>

      <input
        id="name"
        name="name"
        required
        value={form.name}
        onChange={handleChange}
        className="
          mt-3 w-full rounded-xl
          border border-border
          bg-surface/70
          px-4 py-3.5
          text-sm text-text
          outline-none
          transition-all duration-300
          placeholder:text-muted
          focus:border-amber
          focus:ring-2
          focus:ring-amber/20
        "
        placeholder="Ada Lovelace"
      />
    </div>


    {/* Email */}
    <div className="group">
      <label
        htmlFor="email"
        className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
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
        className="
          mt-3 w-full rounded-xl
          border border-border
          bg-surface/70
          px-4 py-3.5
          text-sm text-text
          outline-none
          transition-all duration-300
          placeholder:text-muted
          focus:border-amber
          focus:ring-2
          focus:ring-amber/20
        "
        placeholder="ada@example.com"
      />
    </div>

  </div>


  {/* Message */}
  <div>
    <label
      htmlFor="message"
      className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
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
      className="
        mt-3 w-full rounded-xl
        border border-border
        bg-surface/70
        px-4 py-3.5
        text-sm text-text
        outline-none
        resize-none
        transition-all duration-300
        placeholder:text-muted
        focus:border-amber
        focus:ring-2
        focus:ring-amber/20
      "
      placeholder="Tell me about your project..."
    />
  </div>


  {/* Button */}
  <button
    type="submit"
    className="
      group relative overflow-hidden
      rounded-full
      bg-amber
      px-8 py-3.5
      font-mono
      text-xs
      uppercase
      tracking-[0.2em]
      text-bg
      transition-all
      duration-300
      hover:scale-[1.04]
      hover:shadow-lg
      hover:shadow-amber/30
    "
  >
    <span className="relative z-10">
      Send Message →
    </span>
  </button>


  {/* Success Message */}
  {status === "sent" && (
    <div
      className="
        rounded-lg
        border border-green/30
        bg-green/10
        px-4 py-3
      "
    >
      <p className="font-mono text-xs text-green">
        ✓ Your email client should have opened — send it over!
      </p>
    </div>
  )}

</form>
        </div>
      </div>
    </section>
  );
}
