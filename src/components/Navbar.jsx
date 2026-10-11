import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { profile } from '../data/profile.js'
import ThemeToggle from './ThemeToggle.jsx'

const navGroups = [
  {
    id: 'portfolio', label: '01 / PORTFOLIO',
    items: [
      { to: '/', label: 'Welcome', end: true }, { to: '/home', label: 'Home' },
      { to: '/about', label: 'About' }, { to: '/projects', label: 'Projects' },
      { to: '/skills', label: 'Skills' },
    ],
  },
  {
    id: 'academic', label: '02 / ACADEMIC',
    items: [
      { to: '/education', label: 'Education' }, { to: '/experience', label: 'Experience & Journey' },
      { to: '/certifications', label: 'Certifications' }, { to: '/achievements', label: 'Achievements' },
    ],
  },
  {
    id: 'journal', label: '03 / JOURNAL',
    items: [
      { to: '/gallery', label: 'Gallery' }, { to: '/resume', label: 'Resume' },
      { to: '/assignments', label: 'Assignments' }, { to: '/contact', label: 'Contact' },
    ],
  },
  { id: 'lab', label: '04 / LAB', items: [{ to: '/coa', label: 'COA Learning Lab' }] },
]

const initials = profile.displayName.split(' ').map((part) => part[0]).join('')

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const firstLinkRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    firstLinkRef.current?.focus()
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return (
    <header className="site-header">
      <div className="site-nav-shell">
        <div className="site-nav">
          <Link to="/" className="site-brand" aria-label={`${profile.displayName}, welcome page`} onClick={() => setOpen(false)}>
            <span className="site-brand-mark" aria-hidden="true">{initials}</span>
            <span className="site-brand-copy">
              <strong>{profile.displayName.toUpperCase()}</strong>
              <small>AI · SOFTWARE · SYSTEMS</small>
            </span>
          </Link>
          <div className="site-nav-controls">
            <ThemeToggle />
            <button
              ref={toggleRef}
              type="button"
              className="nav-menu-toggle"
              aria-expanded={open}
              aria-controls="portfolio-navigation"
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="nav-menu-icon" aria-hidden="true"><i /><i /></span>
              <span>Menu</span>
            </button>
          </div>
        </div>
        {open && (
          <button className="nav-scrim" type="button" aria-label="Close navigation menu" onClick={() => setOpen(false)} />
        )}
        {open && (
          <nav id="portfolio-navigation" className="nav-panel" aria-label="Main navigation">
            <div className="nav-groups">
              {navGroups.map((group) => (
                <section key={group.id} aria-labelledby={`nav-${group.id}`}>
                  <h2 id={`nav-${group.id}`} className="nav-group-label">{group.label}</h2>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.to}>
                        <NavLink
                          ref={group.id === 'portfolio' && item.to === '/' ? firstLinkRef : undefined}
                          to={item.to}
                          end={item.end}
                          className={({ isActive }) => `nav-item${isActive ? ' is-current' : ''}`}
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
