import { useEffect, useState } from "react";
import { SectionHeading } from "./About.jsx";

const COLORS = {
  pink: "bg-bubblegum/20 border-bubblegum",
  lavender: "bg-lavender/25 border-lavender",
  mint: "bg-mint/25 border-mint",
  yellow: "bg-buttercup/40 border-buttercup",
};
const ROTATIONS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-3", "-rotate-3"];

export default function Guestbook() {
  const [notes, setNotes] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [color, setColor] = useState("pink");
  const [status, setStatus] = useState("idle"); // idle | loading | sent | error

  useEffect(() => {
    fetch("/api/notes")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then(setNotes)
      .catch(() => setNotes([]));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, text, color }),
      });
      if (!res.ok) throw new Error();
      const newNote = await res.json();
      setNotes((prev) => [newNote, ...prev]);
      setName("");
      setText("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="notes" className="max-w-5xl mx-auto px-6 py-16">
      <SectionHeading eyebrow="leave a lil mark" title="notes wall 💌" />
      <p className="mt-2 font-body text-ink/70 max-w-lg">
        drop a sticky note for me — say hi, leave feedback, or just some good vibes. saved straight to the database!
      </p>

      <form onSubmit={handleSubmit} className="mt-6 bg-white border-2 border-ink rounded-2xl p-5 shadow-pop grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="note-name" className="font-body font-semibold text-sm">
            your name
          </label>
          <input
            id="note-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={40}
            required
            className="rounded-xl border-2 border-ink/20 px-3 py-2 font-body focus:border-bubblegum"
            placeholder="e.g. a fellow gen-z dev"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="note-color" className="font-body font-semibold text-sm">
            pick a color
          </label>
          <select
            id="note-color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="rounded-xl border-2 border-ink/20 px-3 py-2 font-body focus:border-bubblegum"
          >
            <option value="pink">pink 🩷</option>
            <option value="lavender">lavender 💜</option>
            <option value="mint">mint 💚</option>
            <option value="yellow">yellow 💛</option>
          </select>
        </div>

        <div className="sm:col-span-2 flex flex-col gap-1">
          <label htmlFor="note-text" className="font-body font-semibold text-sm">
            your note
          </label>
          <textarea
            id="note-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={240}
            required
            rows={2}
            className="rounded-xl border-2 border-ink/20 px-3 py-2 font-body focus:border-bubblegum resize-none"
            placeholder="loved your portfolio!! ✨"
          />
        </div>

        <div className="sm:col-span-2 flex items-center gap-3">
          <button
            type="submit"
            disabled={status === "loading"}
            className="wiggle-hover bg-lavender text-ink font-display font-semibold px-5 py-2.5 rounded-full border-2 border-ink shadow-pop hover:-translate-y-0.5 transition-transform disabled:opacity-60"
          >
            {status === "loading" ? "pinning it up..." : "pin my note 📌"}
          </button>
          {status === "sent" && <span className="font-body text-mintDark text-sm">yay, thank you! 🎉</span>}
          {status === "error" && (
            <span className="font-body text-bubblegumDark text-sm">
              hmm, couldn't save that — is the backend running?
            </span>
          )}
        </div>
      </form>

      {notes.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-5">
          {notes.map((n, i) => (
            <div
              key={n._id}
              className={`w-44 p-4 border-2 rounded-xl shadow-cute ${COLORS[n.color] || COLORS.pink} ${ROTATIONS[i % ROTATIONS.length]} hover:rotate-0 transition-transform`}
            >
              <p className="font-body text-sm text-ink/90 break-words">{n.text}</p>
              <p className="mt-3 font-hand text-lg text-ink/70">— {n.name}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
