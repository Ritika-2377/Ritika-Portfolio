import { useState } from 'react'
import Button from '../components/Button.jsx'
import PageHero from '../components/PageHero.jsx'
import { getSocialLinks, profile } from '../data/profile.js'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function Contact() {
  usePageTitle('Contact')

  const social = getSocialLinks()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => {
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.message.trim()) next.message = 'Please enter a message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(false)
    if (!validate()) return

    const subject = encodeURIComponent(form.subject.trim() || `Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        title="Contact"
        description="Reach out via email or social profiles. The form below opens your email app (mailto) — nothing is sent from a server."
      />

      <section className="py-10 grid lg:grid-cols-2 gap-8">
        <div className="surface rounded-[var(--radius-card)] p-6 md:p-8">
          <h2 className="text-lg font-semibold">Direct contact</h2>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-muted">Email</dt>
              <dd>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[var(--color-accent)] font-medium hover:underline"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">Phone</dt>
              <dd className="text-secondary">
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="hover:underline">
                  {profile.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">Location</dt>
              <dd className="text-secondary">{profile.location}</dd>
            </div>
          </dl>
        </div>

        <div className="surface rounded-[var(--radius-card)] p-6 md:p-8">
          <h2 className="text-lg font-semibold">Profiles</h2>
          <ul className="mt-6 space-y-3">
            {social.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-[var(--color-accent)] hover:underline text-sm font-medium"
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-10 border-t border-[var(--border-subtle)]">
        <form onSubmit={handleSubmit} noValidate className="surface rounded-[var(--radius-card)] p-6 md:p-8 max-w-2xl space-y-4">
          <h2 className="text-lg font-semibold">Contact form (mailto)</h2>
          <p className="text-sm text-secondary">
            Validates your input, then opens your default email client addressed to {profile.email}. No
            backend or API keys are used.
          </p>

          <label className="block text-sm">
            <span className="text-muted">Name</span>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => updateField('name', e.target.value)}
              className="mt-1 w-full rounded-lg border border-[var(--border-strong)] px-3 py-2.5 min-h-[44px] bg-[var(--bg-surface)]"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
            />
            {errors.name && <span id="contact-name-error" className="text-red-600 text-xs mt-1 block" role="alert">{errors.name}</span>}
          </label>

          <label className="block text-sm">
            <span className="text-muted">Your email</span>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="mt-1 w-full rounded-lg border border-[var(--border-strong)] px-3 py-2.5 min-h-[44px] bg-[var(--bg-surface)]"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
            />
            {errors.email && <span id="contact-email-error" className="text-red-600 text-xs mt-1 block" role="alert">{errors.email}</span>}
          </label>

          <label className="block text-sm">
            <span className="text-muted">Subject (optional)</span>
            <input
              type="text"
              value={form.subject}
              onChange={(e) => updateField('subject', e.target.value)}
              className="mt-1 w-full rounded-lg border border-[var(--border-strong)] px-3 py-2.5 min-h-[44px] bg-[var(--bg-surface)]"
            />
          </label>

          <label className="block text-sm">
            <span className="text-muted">Message</span>
            <textarea
              rows={5}
              required
              value={form.message}
              onChange={(e) => updateField('message', e.target.value)}
              className="mt-1 w-full rounded-lg border border-[var(--border-strong)] px-3 py-2.5 bg-[var(--bg-surface)]"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
            />
            {errors.message && <span id="contact-message-error" className="text-red-600 text-xs mt-1 block" role="alert">{errors.message}</span>}
          </label>

          <Button type="submit">Open email app</Button>
          {submitted && (
            <p className="text-sm text-secondary" role="status">
              If your device supports mailto links, your email application should open with the draft
              message.
            </p>
          )}
        </form>
      </section>
    </>
  )
}
