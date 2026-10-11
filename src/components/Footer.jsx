import { Link } from 'react-router-dom'
import { getSocialLinks, profile } from '../data/profile.js'

const currentYear = new Date().getFullYear()

export default function Footer() {
  const social = getSocialLinks()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <p className="font-semibold text-[var(--text-primary)]">{profile.displayName}</p>
            <p className="footer-tagline mt-2">{profile.headline}</p>
            <p className="text-sm text-muted mt-2">{profile.location}</p>
          </div>
          <div>
            <p className="footer-label">Connect</p>
            <ul className="space-y-2">
              {social.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="footer-link text-sm hover:underline"
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-label">Explore</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/projects" className="footer-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" className="footer-link">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-bottom">
          © {currentYear} {profile.fullName}. Built for local development — source can live on GitHub without
          public hosting.
        </p>
      </div>
    </footer>
  )
}
