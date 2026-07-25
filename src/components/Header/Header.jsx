import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-outline-variant transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      {/* Container: px-4 (16px) on mobile, px-6 (24px) on desktop for consistent gutters */}
      <div
        className={`flex justify-between items-center px-4 md:px-6 max-w-[16680px] mx-auto transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-inter text-[32px] leading-[1.3] font-bold text-primary tracking-tighter hover:opacity-80 transition-opacity"
        >
          SAROJ.
        </a>

        {/* Desktop Nav */}
        {/* gap-6 = 24px between nav links (was gap-8/32px, tighter for balanced spacing) */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-geist text-[14px] leading-none tracking-[0.05em] font-medium transition-colors duration-300 ${
                activeSection === link.href.slice(1)
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden sm:flex bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-geist text-[14px] leading-none tracking-[0.05em] font-bold hover:opacity-90 transition-opacity cursor-pointer"
          >
            Let's Talk
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-surface-container/95 backdrop-blur-xl border-t border-outline-variant ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* gap-2=8px between mobile nav items (was gap-1/4px, too tight) */}
        <nav className="flex flex-col gap-2 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`py-3 px-4 rounded-xl font-geist text-[14px] tracking-[0.05em] font-medium transition-all duration-200 ${
                activeSection === link.href.slice(1)
                  ? "text-primary bg-primary/10"
                  : "text-on-surface-variant hover:text-primary hover:bg-surface-container-high"
              }`}
            >
              {link.label}
            </a>
          ))}
          {/* mt-4=16px separates CTA from nav items (was mt-2/8px, too close) */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="mt-4 text-center bg-primary-container text-on-primary-container px-6 py-3 rounded-full font-geist text-[14px] font-bold"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
}
