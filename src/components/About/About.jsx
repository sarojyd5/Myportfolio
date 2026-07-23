import aboutImg from "../../assets/images/about-portrait.png";

const stats = [
  { value: "5+", label: "Years Exp." },
  { value: "48+", label: "Projects", accent: true },
  { value: "12+", label: "Awards" },
];

export default function About() {
  return (
    <section id="about" className="py-section-gap relative">
      <div className="max-w-[1280px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Left – Image */}
        <div className="relative">
          <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-primary/20 rounded-full line-pattern opacity-30" />
          <div className="bg-surface-container overflow-hidden rounded-3xl border border-outline-variant relative z-10 p-6">
            <img
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              src={aboutImg}
              alt="Saroj Kumar Yadav working at desk"
            />
          </div>
        </div>

        {/* Right – Content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 bg-primary-container/10 border border-primary/20 rounded-full text-primary font-geist text-[14px] leading-none tracking-[0.05em] font-medium">
            ABOUT ME
          </div>

          <h2 className="font-inter text-[clamp(32px,4vw,48px)] leading-[1.2] tracking-[-0.01em] font-bold uppercase">
            I AM AVAILABLE FOR{" "}
            <span className="text-primary">FULL STACK</span>
            <br />
            PROJECT DEVELOPMENT
          </h2>

          <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant">
            With a deep passion for clean code and scalable architecture, I help
            businesses transform complex ideas into robust software solutions.
            My approach combines technical excellence with a keen eye for
            user-centric design, ensuring every product is not just functional
            but delightful to use.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 pt-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className={`text-center p-6 border border-outline-variant rounded-2xl transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 ${
                  s.accent ? "bg-primary-container/5" : ""
                }`}
              >
                <div className="font-inter text-[32px] leading-[1.3] font-bold text-primary">
                  {s.value}
                </div>
                <div className="font-geist text-[14px] leading-none tracking-[0.05em] font-medium text-on-surface-variant uppercase tracking-widest mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex bg-primary-container text-on-primary-container px-10 py-4 rounded-full font-geist text-[14px] leading-none tracking-[0.05em] font-bold items-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer"
          >
            GET IN TOUCH{" "}
            <span className="material-symbols-outlined">arrow_outward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
