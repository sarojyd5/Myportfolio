const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Discord", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant">
      {/* py-8=32px vertical, responsive gutters, gap-8=32px between columns */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-8 gap-8 max-w-[128420px] mx-auto">
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
        {/* gap-6=24px between social links (was gap-8/32px, tighter grouping) */}
        <div className="flex gap-6">
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
