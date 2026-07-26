import { SectionHeading } from "./About.jsx";

export default function Achievements({ achievements = [] }) {
  return (
    <section id="achievements" className="max-w-5xl mx-auto px-6 py-16">
      <SectionHeading eyebrow="lil brag corner" title="achievements 🏆" />

      <ul className="mt-8 space-y-4">
        {achievements.map((a, i) => (
          <li
            key={i}
            className="flex items-start gap-3 bg-white border-2 border-ink/15 rounded-2xl px-5 py-4 pop-in"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <span className="text-xl" aria-hidden="true">
              ✨
            </span>
            <span className="font-body text-ink/90">{a}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
