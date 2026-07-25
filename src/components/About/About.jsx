import aboutImg from "../../assets/images/about-portrait.png";

const stats = [
  { value: "5+", label: "Years Exp." },
  { value: "48+", label: "Projects", accent: true },
  { value: "12+", label: "Awards" },
];

export default function About() {
  return (
    <section id="about" className="py-section-gap relative">
      {/* Container: responsive gutters + tighter gap on mobile (was gap-24/96px on all screens, now gap-12/48px → gap-16/64px) */}
      <div className="max-w-[16680px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left – Image */}
        <div className="relative">
          {/* Decorative circle positioned on 8px grid: -bottom-8=32px, -left-8=32px (was -10/40px) */}
          <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-primary/20 rounded-full line-pattern opacity-30" />
          {/* p-4=16px mobile, p-6=24px desktop for image frame breathing room */}
          <div className="bg-surface-container overflow-hidden rounded-3xl border border-outline-variant relative z-10 p-4 md:p-6">
            {/* Image height: 480px=60×8, on grid (was 500px not on grid) */}
            <img
              className="w-full h-[480px] object-cover rounded-2xl shadow-xl"
              src={aboutImg}
              alt="Saroj Kumar Yadav working at desk"
            />
          </div>
        </div>

        {/* Right – Content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-primary-container/10 border border-primary/20 rounded-full text-primary font-geist text-[14px] leading-none tracking-[0.05em] font-medium">
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
          {/* Stats: gap-4 mobile gap-6 desktop, pt-8=32px top separation (was pt-6/24px for more breathing room) */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 pt-8">
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
            className="inline-flex bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-geist text-[14px] leading-none tracking-[0.05em] font-bold items-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer"
          >
            GET IN TOUCH{" "}
            <span className="material-symbols-outlined">arrow_outward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
