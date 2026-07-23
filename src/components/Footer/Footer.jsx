const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Discord", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter py-12 gap-6 max-w-[1280px] mx-auto">
        {/* Logo */}
        <a
          href="#home"
          className="font-inter text-[32px] leading-[1.3] font-bold text-primary tracking-tighter hover:opacity-80 transition-opacity"
        >
          SAROJ.
        </a>

        {/* Copyright */}
        <div className="font-geist text-[14px] leading-none tracking-[0.05em] font-medium opacity-80 uppercase tracking-widest text-center text-on-surface-variant">
          © {new Date().getFullYear()} DEVPORTO. ENGINEERED FOR PRECISION BY SAROJ KUMAR YADAV.
        </div>

        {/* Social Links */}
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-geist text-[14px] leading-none tracking-[0.05em] font-medium text-on-surface-variant hover:text-primary transition-all opacity-80 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
