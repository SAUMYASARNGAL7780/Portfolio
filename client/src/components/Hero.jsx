export default function Hero({ profile }) {
  const initials = (profile?.name || "SS")
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section id="top" className="relative max-w-5xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
      {/* floating doodles */}
      <span className="hidden md:block absolute top-10 left-2 text-4xl float sticker" style={{ "--r": "-8deg" }}>
        ✨
      </span>
      <span className="hidden md:block absolute top-40 left-16 text-3xl float sticker" style={{ animationDelay: "1.2s", "--r": "6deg" }}>
        🎀
      </span>
      <span className="hidden md:block absolute top-6 right-10 text-4xl float sticker" style={{ animationDelay: "0.6s", "--r": "10deg" }}>
        💌
      </span>
      <span className="hidden md:block absolute top-52 right-2 text-3xl float sticker" style={{ animationDelay: "1.8s", "--r": "-6deg" }}>
        🌸
      </span>

      <div className="grid md:grid-cols-[1fr_auto] items-center gap-10">
        <div className="pop-in">
          <p className="inline-block bg-buttercup/70 border-2 border-ink/10 rounded-full px-4 py-1 font-body font-semibold text-sm mb-5">
            welcome to my corner of the internet 💗
          </p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-ink">
            hii, i'm
            <br />
            <span className="text-bubblegumDark">{profile?.name || "Saumya Sarngal"}</span>
          </h1>
          <p className="mt-5 font-hand text-3xl text-lavenderDark">
            {profile?.tagline || "code cutie ✨ full-stack dev ✨ AI/ML enthusiast"}
          </p>
          <p className="mt-4 max-w-md font-body text-ink/80">
            B.Tech student at NIT Srinagar who loves building things end-to-end — from
            RAG pipelines to pretty pixel-perfect UIs. Currently obsessed with turning
            resumes into things that don't look like resumes.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="wiggle-hover bg-bubblegum text-white font-display font-semibold px-6 py-3 rounded-full border-2 border-ink shadow-pop hover:-translate-y-0.5 transition-transform"
            >
              let's connect 💌
            </a>
            <a
              href="#experience"
              className="wiggle-hover bg-white text-ink font-display font-semibold px-6 py-3 rounded-full border-2 border-ink hover:-translate-y-0.5 transition-transform"
            >
              see my work ✨
            </a>
          </div>
        </div>

        {/* cute avatar blob */}
        <div className="relative mx-auto md:mx-0 pop-in" style={{ animationDelay: "0.15s" }}>
          <div className="absolute inset-0 bg-mint/60 rounded-blob spin-slow" aria-hidden="true" />
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-blob bg-gradient-to-br from-bubblegum to-lavender flex items-center justify-center border-4 border-white shadow-cute">
            <span className="font-display font-bold text-5xl sm:text-6xl text-white drop-shadow">{initials}</span>
          </div>
          <span className="absolute -bottom-2 -left-4 text-3xl float sticker" style={{ animationDelay: "0.4s" }}>
            🌷
          </span>
          <span className="absolute -top-3 -right-3 text-3xl float sticker" style={{ animationDelay: "1s" }}>
            ⭐
          </span>
        </div>
      </div>
    </section>
  );
}
