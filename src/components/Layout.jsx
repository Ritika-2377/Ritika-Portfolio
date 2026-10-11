import { Outlet } from 'react-router-dom'
import BackToTop from './BackToTop.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--bg-surface)] focus:border focus:border-[var(--border-strong)] focus:rounded-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="site-main flex-1 mx-auto">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
