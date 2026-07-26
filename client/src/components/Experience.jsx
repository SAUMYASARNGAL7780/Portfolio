import { SectionHeading } from "./About.jsx";

const ROTATIONS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];
const BG = ["bg-bubblegum/15", "bg-lavender/20", "bg-mint/20"];
const EMOJI = ["🎪", "🔐", "🤖"];

export default function Experience({ experience = [] }) {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-16">
      <SectionHeading eyebrow="the resume, but pinned to a corkboard" title="things i've worked on 📌" />

      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {experience.map((job, i) => (
          <div
            key={job.role}
            className={`washi ${ROTATIONS[i % ROTATIONS.length]} hover:rotate-0 transition-transform duration-300 bg-white border-2 border-ink rounded-2xl p-5 shadow-pop pop-in`}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <div className={`w-full h-16 rounded-xl ${BG[i % BG.length]} border-2 border-ink/10 flex items-center justify-center text-3xl mb-4`}>
              {EMOJI[i % EMOJI.length]}
            </div>
            <p className="font-body font-semibold text-xs uppercase tracking-wide text-lavenderDark">{job.date}</p>
            <h3 className="font-display font-bold text-lg mt-1">{job.role}</h3>
            <p className="font-hand text-xl text-bubblegumDark -mt-0.5">{job.org}</p>
            <ul className="mt-3 space-y-2">
              {job.points.map((pt, idx) => (
                <li key={idx} className="text-sm font-body text-ink/80 flex gap-2">
                  <span aria-hidden="true">💗</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
