import heroImg from "../../assets/images/hero-portrait.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 line-pattern pointer-events-none opacity-50" />
      <div className="absolute top-1/4 right-0 w-96 h-96 circle-bg blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 circle-bg blur-3xl opacity-15" />

      <div className="max-w-[1280px] mx-auto px-gutter w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left – Copy */}
        <div className="space-y-6">
          <span className="font-geist text-[14px] leading-none tracking-[0.2em] font-medium text-primary uppercase">
            SAROJ KUMAR YADAV
          </span>

          <h1 className="font-inter uppercase leading-none">
            <span className="block text-[clamp(36px,6vw,72px)] font-[800] leading-[1.1] tracking-[-0.02em]">
              HAY! I'M{" "}
              <span className="text-primary">SAROJ</span>
            </span>
            <span className="block text-[clamp(36px,6vw,72px)] font-[800] leading-[1.1] tracking-[-0.02em] text-primary-container neon-glow">
              I'M A FULL STACK
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[clamp(36px,6vw,72px)] font-[800] leading-[1.1] tracking-[-0.02em] text-primary">
                DEVELOPER
              </span>
              <span className="w-1 h-16 bg-primary animate-pulse" />
            </div>
          </h1>

          <p className="font-inter text-[18px] leading-[1.6] text-on-surface-variant max-w-lg">
            Engineering digital experiences that bridge the gap between complex
            backend architectures and intuitive user interfaces. Specializing in
            high-performance web systems.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="bg-primary text-on-primary font-geist text-[14px] leading-none tracking-[0.05em] font-medium px-8 py-4 rounded-full flex items-center gap-2 hover:bg-white transition-colors group cursor-pointer"
            >
              GET IN TOUCH
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>

            <div className="flex gap-4">
              {[
                { icon: "public", label: "Website", href: "#" },
                { icon: "terminal", label: "GitHub", href: "#" },
                { icon: "work", label: "LinkedIn", href: "#" },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary-container hover:border-primary-container transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-sm">
                    {s.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right – Portrait */}
        <div className="relative flex justify-center">
          {/* Orbital rings */}
          <div className="absolute -z-10 w-full h-full flex items-center justify-center">
            <div className="w-[450px] h-[450px] border border-outline-variant rounded-full animate-spin-slow opacity-20" />
            <div className="absolute w-[350px] h-[350px] border border-primary/30 rounded-full animate-spin-reverse opacity-20" />
          </div>

          {/* Photo */}
          <div className="relative w-[340px] sm:w-[400px] h-[460px] sm:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-outline-variant">
            <img
              className="w-full h-full object-cover"
              src={heroImg}
              alt="Saroj Kumar Yadav — Full Stack Developer"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
          </div>

          {/* Floating spheres */}
          <div className="absolute top-10 right-0 w-16 h-16 bg-surface-container-highest rounded-full shadow-inner animate-float opacity-50 backdrop-blur-md" />
          <div className="absolute bottom-20 -left-10 w-24 h-24 bg-primary-container/20 rounded-full border border-primary/30 animate-float-delayed opacity-40 backdrop-blur-md" />
        </div>
      </div>
    </section>
  );
}
