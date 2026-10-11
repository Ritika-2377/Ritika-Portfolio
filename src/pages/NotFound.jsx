import Button from '../components/Button.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function NotFound() {
  usePageTitle('Page not found')

  return (
    <section className="py-20 text-center max-w-lg mx-auto">
      <p className="text-sm font-medium text-[var(--color-accent)]">404</p>
      <h1 className="mt-2 text-3xl font-semibold">Page not found</h1>
      <p className="mt-4 text-secondary">
        The page you requested is not part of this portfolio. Check the URL or use navigation to find a
        section.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button to="/">Welcome</Button>
        <Button to="/home" variant="secondary">
          Portfolio home
        </Button>
      </div>
    </section>
  )
}
