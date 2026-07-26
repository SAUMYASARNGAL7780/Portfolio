import { useState } from "react";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#skills", label: "skills" },
  { href: "#notes", label: "notes wall" },
  { href: "#contact", label: "say hi" },
];

export default function Navbar({ name }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="mx-auto max-w-5xl flex items-center justify-between bg-white/80 backdrop-blur-md border-2 border-ink/10 rounded-full shadow-cute px-5 py-2.5">
        <a href="#top" className="font-display font-semibold text-lg text-bubblegumDark">
          {name?.split(" ")[0] || "Saumya"}
          <span className="ml-1">🎀</span>
        </a>

        <ul className="hidden md:flex items-center gap-6 font-body font-medium text-sm">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-bubblegumDark transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-xl"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-auto max-w-5xl mt-2 bg-white/95 border-2 border-ink/10 rounded-3xl shadow-cute px-6 py-4 flex flex-col gap-3 font-body font-medium">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-bubblegumDark">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
