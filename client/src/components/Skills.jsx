import { SectionHeading } from "./About.jsx";

const PALETTE = [
  "bg-bubblegum/20 border-bubblegum text-bubblegumDark",
  "bg-lavender/25 border-lavender text-lavenderDark",
  "bg-mint/25 border-mint text-mintDark",
  "bg-buttercup/35 border-buttercup text-ink",
];

export default function Skills({ skills = {} }) {
  const groups = Object.entries(skills);

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-16">
      <SectionHeading eyebrow="my toolkit" title="skills jar 🫙" />

      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        {groups.map(([group, list], i) => (
          <div
            key={group}
            className="bg-white/70 border-2 border-ink/15 rounded-2xl p-5 pop-in"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <h3 className="font-display font-semibold text-base text-ink mb-3">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map((skill) => (
                <span
                  key={skill}
                  className={`text-xs sm:text-sm font-body font-semibold px-3 py-1.5 rounded-full border-2 ${PALETTE[i % PALETTE.length]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
