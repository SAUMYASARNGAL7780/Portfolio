import { useState } from "react";
import { SectionHeading } from "./About.jsx";

export default function Contact({ contact = {} }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
      <div className="bg-white border-2 border-ink rounded-3xl p-6 sm:p-10 shadow-pop grid md:grid-cols-2 gap-10">
        <div>
          <SectionHeading eyebrow="let's chat" title="say hi 👋" />
          <p className="mt-3 font-body text-ink/80 max-w-sm">
            open to internships, collabs, and just friendly hellos from fellow devs.
            hit me up on any of these!
          </p>

          <ul className="mt-6 space-y-3 font-body">
            <li>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-bubblegumDark">
                <span aria-hidden="true">📧</span> {contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 hover:text-bubblegumDark">
                <span aria-hidden="true">📱</span> {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`https://github.com/${contact.github}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-bubblegumDark"
              >
                <span aria-hidden="true">💻</span> github/{contact.github}
              </a>
            </li>
            <li>
              <a
                href={`https://linkedin.com/in/${contact.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-bubblegumDark"
              >
                <span aria-hidden="true">🔗</span> linkedin/{contact.linkedin}
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="c-name" className="font-body font-semibold text-sm">
              name
            </label>
            <input
              id="c-name"
              required
              value={form.name}
              onChange={update("name")}
              className="rounded-xl border-2 border-ink/20 px-3 py-2 font-body focus:border-bubblegum"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="c-email" className="font-body font-semibold text-sm">
              email
            </label>
            <input
              id="c-email"
              type="email"
              required
              value={form.email}
              onChange={update("email")}
              className="rounded-xl border-2 border-ink/20 px-3 py-2 font-body focus:border-bubblegum"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="c-message" className="font-body font-semibold text-sm">
              message
            </label>
            <textarea
              id="c-message"
              required
              rows={4}
              value={form.message}
              onChange={update("message")}
              className="rounded-xl border-2 border-ink/20 px-3 py-2 font-body focus:border-bubblegum resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="wiggle-hover mt-1 bg-bubblegum text-white font-display font-semibold px-5 py-2.5 rounded-full border-2 border-ink shadow-pop hover:-translate-y-0.5 transition-transform disabled:opacity-60 self-start"
          >
            {status === "loading" ? "sending..." : "send it 💌"}
          </button>
          {status === "sent" && <p className="font-body text-mintDark text-sm">message sent, thank you! 🎉</p>}
          {status === "error" && (
            <p className="font-body text-bubblegumDark text-sm">couldn't send — is the backend running?</p>
          )}
        </form>
      </div>
    </section>
  );
}
