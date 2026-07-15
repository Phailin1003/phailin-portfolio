"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { Mail, Phone, MapPin} from "lucide-react";
import { FaGithub, FaFacebook } from "react-icons/fa";
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
    Have a project in mind or just want to say hi? My inbox is always open.
  </p>


  {/* Contact Cards */}
  <div className="mt-8 space-y-6">

    {/* Email */}
    <a
      href={`mailto:${profile.email}`}
      className="
        flex items-center gap-6
        rounded-[30px]
        bg-white
        px-7 py-6
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        transition hover:-translate-y-1
      "
    >
      <div
        className="
          flex h-20 w-20 items-center justify-center
          rounded-3xl
          bg-blue-50
          text-blue
        "
      >
        <Mail size={34}/>
      </div>

      <div>
        <p className="font-mono text-lg font-bold text-muted">
          EMAIL
        </p>

        <p className="mt-1 font-mono text-xl font-semibold text-text">
          {profile.email}
        </p>
      </div>
    </a>



    {/* Phone */}
    <a
      href={`tel:${profile.phone.replace(/\s+/g, "")}`}
      className="
        flex items-center gap-6
        rounded-[30px]
        bg-white
        px-7 py-6
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        transition hover:-translate-y-1
      "
    >

      <div
        className="
          flex h-20 w-20 items-center justify-center
          rounded-3xl
          bg-blue-50
          text-blue
        "
      >
        <Phone size={34}/>
      </div>


      <div>
        <p className="font-mono text-lg font-bold text-muted">
          PHONE
        </p>

        <p className="mt-1 font-mono text-xl font-semibold text-text">
          {profile.phone}
        </p>
      </div>

    </a>



    {/* Location */}
    <div
      className="
        flex items-center gap-6
        rounded-[30px]
        bg-white
        px-7 py-6
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      "
    >

      <div
        className="
          flex h-20 w-20 items-center justify-center
          rounded-3xl
          bg-blue-50
          text-blue
        "
      >
        <MapPin size={34}/>
      </div>


      <div>
        <p className="font-mono text-lg font-bold text-muted">
          LOCATION
        </p>

        <p className="mt-1 font-mono text-xl font-semibold text-text">
          {profile.location}
        </p>
      </div>

    </div>


  </div>



  {/* Social Buttons */}
  <div className="mt-8 flex gap-5">

    <a
      href={profile.github}
      className="
        flex h-16 w-16 items-center justify-center
        rounded-3xl
        bg-white
        shadow-[0_8px_25px_rgba(0,0,0,0.08)]
        text-muted
        hover:text-blue
      "
    >
      <Github size={30}/>
    </a>


    <a
      href={profile.facebook}
      className="
        flex h-16 w-16 items-center justify-center
        rounded-3xl
        bg-white
        shadow-[0_8px_25px_rgba(0,0,0,0.08)]
        text-muted
        hover:text-blue
      "
    >
      <Facebook size={30}/>
    </a>


    <a
      href={`mailto:${profile.email}`}
      className="
        flex h-16 w-16 items-center justify-center
        rounded-3xl
        bg-white
        shadow-[0_8_25px_rgba(0,0,0,0.08)]
        text-muted
        hover:text-blue
      "
    >
      <Mail size={30}/>
    </a>

  </div>

</div>
        </div>
      </div>
    </section>
  );
}
