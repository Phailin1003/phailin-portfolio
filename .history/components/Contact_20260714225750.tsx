"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name}`
    );

    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );

    window.location.href =
      `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setStatus("sent");
  }

  const socialStyle = `
    group
    flex h-16 w-16 items-center justify-center
    rounded-3xl
    border border-white/10
    bg-white/5
    text-white/60
    backdrop-blur-md
    shadow-[0_10px_30px_rgba(0,0,0,0.25)]
    transition-all duration-300
    hover:-translate-y-2
  `;

  return (
    <section id="contact" className="relative overflow-hidden">

      {/* Background glow */}
      <div className="
        absolute left-1/2 top-0
        h-96 w-96
        -translate-x-1/2
        rounded-full
        bg-amber/10
        blur-3xl
      " />

      <div className="relative mx-auto max-w-6xl px-6 py-24">

        <div className="
          grid gap-12
          rounded-[2.5rem]
          border border-white/10
          bg-white/[0.03]
          p-8
          backdrop-blur-xl
          md:grid-cols-[0.45fr_0.55fr]
          md:p-12
        ">

          {/* LEFT */}
          <div>

            <p className="
              font-mono text-xs
              uppercase tracking-[0.3em]
              text-amber
            ">
              07 · Contact
            </p>


            <h2 className="
              mt-5
              font-display
              text-4xl
              italic
              text-text
              sm:text-5xl
            ">
              Let's work together
            </h2>


            <p className="
              mt-6
              max-w-sm
              text-sm
              leading-relaxed
              text-muted
            ">
              Have a project in mind or want to collaborate?
              Feel free to reach out. My inbox is always open.
            </p>


            {/* Contact info */}
            <div className="mt-8 space-y-4">

              <a
                href={`mailto:${profile.email}`}
                className="
                  block
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  px-5 py-4
                  text-sm
                  text-blue
                  transition
                  hover:border-amber
                  hover:text-amber
                "
              >
                ✉ {profile.email}
              </a>


              <a
                href="https://wa.me/8562054867757"
                target="_blank"
                className="
                  block
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  px-5 py-4
                  text-sm
                  text-blue
                  transition
                  hover:border-amber
                  hover:text-amber
                "
              >
                ☎ {profile.phone}
              </a>


              <div
                className="
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  px-5 py-4
                  text-sm
                  text-muted
                "
              >
                📍 {profile.location}
              </div>

            </div>



            {/* Social */}
            <div className="mt-10 flex gap-5">

              <a
                href={profile.social.github}
                target="_blank"
                className={`${socialStyle}
                  hover:border-black
                  hover:bg-black
                  hover:text-white
                `}
              >
                <FaGithub size={30}/>
              </a>


              <a
                href={profile.social.facebook}
                target="_blank"
                className={`${socialStyle}
                  hover:border-blue-500
                  hover:bg-blue-500
                  hover:text-white
                `}
              >
                <FaFacebook size={30}/>
              </a>


              <a
                href={profile.social.linkedin}
                target="_blank"
                className={`${socialStyle}
                  hover:border-blue-700
                  hover:bg-blue-700
                  hover:text-white
                `}
              >
                <FaLinkedin size={30}/>
              </a>

            </div>

          </div>



          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="
              rounded-3xl
              border border-white/10
              bg-black/20
              p-6
              shadow-xl
              sm:p-8
              space-y-6
            "
          >

            <div className="grid gap-6 sm:grid-cols-2">


              <div>
                <label className="label-style">
                  Name
                </label>

                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="input-style"
                />
              </div>


              <div>
                <label className="label-style">
                  Email
                </label>

                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="input-style"
                />
              </div>

            </div>


            <div>

              <label className="label-style">
                Message
              </label>


              <textarea
                name="message"
                rows={6}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="input-style resize-none"
              />

            </div>


            <button
              className="
                rounded-full
                bg-amber
                px-8 py-4
                font-mono
                text-xs
                uppercase
                tracking-widest
                text-bg
                transition
                hover:-translate-y-1
                hover:shadow-[0_10px_30px_rgba(245,158,11,.35)]
              "
            >
              Send Message
            </button>


            {status === "sent" && (
              <p className="
                font-mono
                text-xs
                text-green
              ">
                Your email client should have opened.
              </p>
            )}

          </form>


        </div>

      </div>


      <style jsx>{`
        .label-style {
          display:block;
          margin-bottom:8px;
          font-family:monospace;
          font-size:11px;
          text-transform:uppercase;
          letter-spacing:.2em;
          color:#999;
        }

        .input-style {
          width:100%;
          border-radius:1rem;
          border:1px solid rgba(255,255,255,.1);
          background:rgba(255,255,255,.05);
          padding:14px 18px;
          color:white;
          outline:none;
          transition:.3s;
        }

        .input-style::placeholder {
          color:#777;
        }

        .input-style:focus {
          border-color:#f59e0b;
          box-shadow:0 0 0 3px rgba(245,158,11,.15);
        }
      `}</style>

    </section>
  );
}