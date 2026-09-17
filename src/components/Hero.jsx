import './Hero.css'


export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/tubirssu/image/upload/v1789446616/copy_of_tradi-21.jpg')", 
      }}
    >
      <div className="hero__scrim" />

      <div className="hero__content">
        <h1 className="hero__title">Love Stories, Beautifully Told</h1>
        <p className="hero__subtitle">
          Documentary wedding photography for couples who'd rather remember
          the day as it felt than as it was staged.
        </p>

        <div className="hero__actions">
          <a href="#work" className="btn btn--primary">
            Book Us Now 
          </a>
          <a href="#about" className="btn btn--secondary">
            View Our Stories 
          </a>
        </div>
      </div>
    </section>
  )
}