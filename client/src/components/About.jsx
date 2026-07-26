const ACCENTS = ["bg-bubblegum", "bg-lavender", "bg-mint"];

export default function About({ education = [] }) {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16">
      <SectionHeading eyebrow="the basics" title="education, but make it cute 🎓" />

      <div className="mt-10 grid sm:grid-cols-3 gap-6">
        {education.map((e, i) => (
          <div
            key={e.school}
            className="bg-white border-2 border-ink rounded-3xl p-5 shadow-pop pop-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <span className={`inline-block ${ACCENTS[i % ACCENTS.length]} text-ink font-display font-semibold text-xs px-3 py-1 rounded-full border-2 border-ink`}>
              {e.year}
            </span>
            <h3 className="mt-3 font-display font-semibold text-lg leading-snug">{e.school}</h3>
            <p className="mt-2 font-hand text-2xl text-bubblegumDark">{e.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }) {
  return (
    <div>
      {eyebrow && (
        <p className="font-body font-semibold text-sm uppercase tracking-wide text-lavenderDark">{eyebrow}</p>
      )}
      <h2 className="font-display font-bold text-3xl sm:text-4xl mt-1">{title}</h2>
    </div>
  );
}
