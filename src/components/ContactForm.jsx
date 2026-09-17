import { useState } from 'react'

function Field({ id, label, type = 'text', placeholder, required = false }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-ink-soft">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="border-0 border-b border-ink/20 bg-transparent py-2 focus:outline-none focus:border-olive-deep"
      />
    </div>
  )
}

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-paper py-24">
      <div className="max-w-xl mx-auto text-center px-6 mb-12">
        <h2 className="font-display text-3xl sm:text-4xl mb-4 text-ink">Say Hello</h2>
        <p className="text-ink-soft">
          Tell us a little about your day and we'll get back to you within two days.
        </p>
      </div>

      {sent ? (
        <p className="text-center font-display italic text-lg text-olive-deep">
          Thank you — your inquiry is on its way to us.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-6 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field id="name" label="Your names" placeholder="Mara & Theo" required />
            <Field id="email" label="Email" type="email" placeholder="you@email.com" required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field id="date" label="Wedding date" type="date" />
            <Field id="venue" label="Venue or location" placeholder="City, venue, or still deciding" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-ink-soft">
              Tell us about your day
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="How you met, what the day will look like, what matters most to you..."
              className="border-0 border-b border-ink/20 bg-transparent py-2 resize-y focus:outline-none focus:border-olive-deep"
            />
          </div>
          <button
            type="submit"
            className="self-start px-8 py-3 border border-ink text-ink hover:bg-ink hover:text-paper transition-colors mt-2"
          >
            Send Inquiry
          </button>
        </form>
      )}
    </section>
  )
}
