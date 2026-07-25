export default function Contact() {
  return (
    <section id="contact" className="py-section-gap relative overflow-hidden">
      <div className="absolute inset-0 line-pattern opacity-10" />
 
      {/* Container: responsive gutters */}
      <div className="max-w-[1680px] mx-auto px-4 md:px-6 relative z-10">
        {/* Card: p-8=32px mobile, p-16=64px desktop (was p-12/p-24, p-16 is on 8px grid) */}
        <div className="bg-primary-container/5 border border-outline-variant rounded-[40px] p-8 md:p-16 text-center overflow-hidden relative">
          {/* Background glow orbs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
 
          {/* mb-6=24px below heading (was mb-8/32px, tighter vertical flow) */}
          <h2 className="font-inter text-[clamp(36px,5vw,72px)] leading-[1.1] tracking-[-0.02em] font-[800] uppercase mb-6 relative">
            Let's build something
            <br />
            <span className="text-primary neon-glow italic">
              legendary together
            </span>
          </h2>
 
          {/* mb-8=32px below paragraph (was mb-12/48px, proportional to section-gap reduction) */}
          <p className="font-inter text-[18px] leading-[1.6] text-on-surface-variant max-w-2xl mx-auto mb-8 relative">
            Currently available for new opportunities and freelance
            collaborations. Send me a message and let's start talking about your
            next big idea.
          </p>
 
          {/* gap-4=16px between buttons (was gap-6/24px, tighter button pair) */}
          <div className="flex flex-col md:flex-row justify-center gap-4 relative">
            <a
              href="mailto:saroj@example.com"
              className="bg-primary text-on-primary px-8 py-4 rounded-full font-geist text-[14px] leading-none tracking-[0.05em] font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer"
            >
              GET IN TOUCH{" "}
              <span className="material-symbols-outlined">mail</span>
            </a>
            <a
              href="#"
              className="border border-outline-variant text-on-surface px-8 py-4 rounded-full font-geist text-[14px] leading-none tracking-[0.05em] font-bold hover:bg-surface-container transition-colors cursor-pointer text-center"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
 