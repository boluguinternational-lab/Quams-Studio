import CtaLink from './ui/CtaLink.jsx'

export default function Philosophy() {
  return (
    <section className="bg-cream py-24 text-center">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="font-display text-3xl sm:text-4xl text-burgundy mb-6">
          Capturing the Poetry of Your Day
        </h2>
        <p className="text-ink-soft mb-4">
          I started as a photojournalist long before I ever photographed a wedding, and it
          still shows — I'd rather wait in a doorway for the right moment than ask you to
          hold one. My work leans candid and unhurried, shot in soft, available light, with
          an eye for the in-between: a hand on a shoulder, a veil catching wind, the
          half-second before someone starts crying.
        </p>
        <p className="text-ink-soft mb-8">
          No shot lists. No forced smiles. Just your day, paid close attention to.
        </p>
        <CtaLink href="#portfolio" className="text-burgundy">
          Explore Portfolio
        </CtaLink>
      </div>
    </section>
  )
}
