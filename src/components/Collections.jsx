import { collections } from '../data/collections.js'

export default function Collections() {
  return (
    <section id="collections" className="bg-olive-deep text-paper py-24">
      <div className="max-w-xl mx-auto text-center px-6 mb-12">
        <h2 className="font-display text-3xl sm:text-4xl mb-4">Collections</h2>
        <p className="text-paper/80">
          Every wedding is different, so coverage is built around your day rather than a
          fixed package.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/20 border border-paper/20">
        {collections.map((c) => (
          <div key={c.title} className="bg-olive-deep p-10 text-center">
            <h3 className="font-display text-2xl mb-4">{c.title}</h3>
            <p className="text-paper/80 mb-6 min-h-[72px]">{c.copy}</p>
            <a
              href="#contact"
              className="inline-block px-7 py-3 border border-paper text-paper hover:bg-paper hover:text-olive-deep transition-colors"
            >
              Inquire
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
