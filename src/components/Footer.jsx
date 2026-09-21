import React from "react";
import "./Footer.css";

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Pinterest", href: "https://pinterest.com" },
  { name: "YouTube", href: "https://youtube.com" },
];

const menuRows = [
  ["Home", "Journal", "Offerings", "Space"],
  ["Experience", "Store", "Films", "Portraits & Events"],
  ["FAQ", "Contact", "Join our team", "The Jema Family"],
];

const bottomLinks = ["Privacy", "Terms", "Quick links", "Ghana · USA · Canada · Europe"];

// Minimal inline icon set so the component has no external icon dependency
function SocialIcon({ name }) {
  switch (name) {
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M15 8.5h-2a1.5 1.5 0 0 0-1.5 1.5v2H15l-.4 3H11.5V21" />
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        </svg>
      );
    case "Pinterest":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 19c.6-2 1.6-6.4 1.6-6.4M12 12a2.3 2.3 0 1 0 4.5-1c0-1.9-1.5-3.5-4-3.5-2.8 0-4.6 2-4.6 4.2 0 1.1.5 1.9 1 2.3" />
        </svg>
      );
    case "YouTube":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="6.5" width="18" height="11" rx="3.5" />
          <path d="M11 10.2v3.6l3.2-1.8Z" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  return (
    <footer className="skelaw-footer">
      <div className="skelaw-footer__inner">
        <div className="skelaw-footer__header">
          <div className="skelaw-footer__brand">
            <h2 className="skelaw-footer__title">Jema Studios</h2>
            <p className="skelaw-footer__tagline">
              Wedding photography &amp; film, told with care, across Ghana, the USA, Canada and Europe.
            </p>
          </div>

          <div className="skelaw-footer__socials">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="skelaw-footer__social-link"
                aria-label={s.name}
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon name={s.name} />
              </a>
            ))}
          </div>
        </div>

        <nav className="skelaw-footer__menu" aria-label="Footer menu">
          {menuRows.map((row, i) => (
            <div className="skelaw-footer__menu-row" key={i}>
              {row.map((link) => (
                <a key={link} href="#" className="skelaw-footer__menu-link">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </nav>

        <hr className="skelaw-footer__divider" />

        <div className="skelaw-footer__bottom">
          <p className="skelaw-footer__copyright">© 2026 Jema Studios</p>
          <div className="skelaw-footer__bottom-links">
            {bottomLinks.map((link, i) => (
              <React.Fragment key={link}>
                {link.includes("·") ? (
                  <span className="skelaw-footer__bottom-link skelaw-footer__bottom-link--static">
                    {link}
                  </span>
                ) : (
                  <a href="#" className="skelaw-footer__bottom-link">
                    {link}
                  </a>
                )}
                {i < bottomLinks.length - 1 && (
                  <span className="skelaw-footer__bottom-dot" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}