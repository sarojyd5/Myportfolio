const services = [
  {
    icon: "code",
    title: "Web Development",
    desc: "Scalable, performant web apps using React, Next.js, and modern CSS frameworks.",
  },
  {
    icon: "database",
    title: "Backend Architecture",
    desc: "Robust API design and database optimization with Node.js and PostgreSQL.",
  },
  {
    icon: "terminal",
    title: "DevOps & Cloud",
    desc: "Streamlining deployment pipelines with Docker, AWS, and CI/CD automation.",
  },
  {
    icon: "palette",
    title: "UI/UX Design",
    desc: "Creating high-fidelity, user-centered interfaces with Figma and Framer.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-section-gap">
      <div className="max-w-[1280px] mx-auto px-gutter">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="font-geist text-[14px] leading-none tracking-[0.05em] font-medium text-primary tracking-widest uppercase">
            SERVICES
          </span>
          <h2 className="font-inter text-[clamp(32px,4vw,48px)] leading-[1.2] tracking-[-0.01em] font-bold uppercase mt-4">
            TECHNICAL SERVICES{" "}
            <span className="text-primary">I AM PROVIDING</span>
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bento-card p-10 rounded-3xl group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary-container/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
                <span className="material-symbols-outlined text-3xl">
                  {service.icon}
                </span>
              </div>

              <h3 className="font-inter text-[24px] leading-[1.3] font-[600] mb-4">
                {service.title}
              </h3>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
