import React, { useEffect, useState } from "react";
import "./Nav.css";  

const menuLinks = [
  "Journal",
  "Offerings",
  "Space",
  "Experience",
  "Store",
  "Films",
  "Portraits & Events",
];

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.3M12 19.2v2.3M4.4 4.4l1.6 1.6M18 18l1.6 1.6M2.5 12h2.3M19.2 12h2.3M4.4 19.6 6 18M18 6l1.6-1.6" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      {open ? (
        <path d="M5 5l14 14M19 5 5 19" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);  

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);  
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <header
      className={[
        "skelaw-nav sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#FAF7F0]/80 backdrop-blur-md shadow-[0_1px_0_rgba(60,44,31,0.08)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Left: logo */}
        <a href="#" className="font-serif text-lg font-bold tracking-tight text-[#2E2018]">
          QUAMS STUDIO   
        </a>

        {/* Center: menu (desktop only) */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {menuLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="skelaw-nav__link text-sm text-[#6b6b6b] hover:text-[#2E2018] transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right: toggle + CTA (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsDark((d) => !d)}
            aria-label="Toggle dark mode"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D9D3C8] text-[#4a4a4a] hover:border-[#B8AF9E] transition-colors"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            href="#enquire"
            className="rounded-full bg-[#4A90E2] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#3E7FC9] transition-colors"
          >
            Enquire
          </a>
        </div>

        {/* Mobile: hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="flex h-9 w-9 items-center justify-center rounded-full text-[#2E2018] md:hidden"
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="skelaw-nav__mobile-panel md:hidden bg-[#FAF7F0]/95 backdrop-blur-md border-t border-[#E7E0D3] px-6 py-5">
          <nav className="flex flex-col gap-4" aria-label="Primary mobile">
            {menuLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-[#4a4a4a]"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsDark((d) => !d)}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D9D3C8] text-[#4a4a4a]"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <a
              href="#enquire"
              className="flex-1 rounded-full bg-[#4A90E2] px-6 py-2.5 text-center text-sm font-medium text-white hover:bg-[#3E7FC9] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Enquire
            </a>
          </div>
        </div>
      )}
    </header>
  );
}