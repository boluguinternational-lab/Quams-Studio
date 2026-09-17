import { testimonials } from '../data/testimonials.js'

export default function Testimonials() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-xl mx-auto text-center px-6 mb-14">
        <h2 className="font-display text-3xl sm:text-4xl text-ink">From the Couples</h2>
      </div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {testimonials.map((t) => (
          <div key={t.name} className="max-w-sm mx-auto text-center">
            <p className="font-display italic text-xl leading-relaxed text-ink mb-4">
              {t.quote}
            </p>
            <p className="text-sm text-ink-soft">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
