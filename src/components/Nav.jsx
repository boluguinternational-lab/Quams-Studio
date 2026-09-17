import { useState } from 'react'
import Asterisk from './ui/Asterisk.jsx'
import './Nav.css'

const LINKS = ['The Studio', 'Journal', 'Offerings', 'Gallery', 'Contact']
const slug = (s) => '#' + s.toLowerCase().replace(/\s+/g, '-')

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  return (
    <header className="nav-header">
      <div className="nav-inner">
        <a
          href="#home"
          className={`nav-logo ${activeLink === 'Home' ? 'active' : ''}`}
          onClick={() => setActiveLink('Home')}
        >
          Quams Studio
        </a>

        <nav className="nav-links">
          {LINKS.map((l) => (
            <a
              key={l}
              href={slug(l)}
              onClick={() => setActiveLink(l)}
              className={`nav-link ${activeLink === l ? 'active' : ''}`}
            >
              {l}
            </a>
          ))}
        </nav>

        <button
          className="nav-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Asterisk className="nav-toggle-icon" />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {LINKS.map((l) => (
            <a
              key={l}
              href={slug(l)}
              onClick={() => {
                setActiveLink(l)
                setOpen(false)
              }}
              className={`nav-mobile-link ${activeLink === l ? 'active' : ''}`}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}