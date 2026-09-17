import './Intro.css'

export default function Intro() {
  return (
    <section id="about" className="intro">
      <div className="intro__text-col">
        <div className="intro__text">
          <h2 className="intro__title">The Moments You'll Want to Remember</h2>
          <p className="intro__paragraph">
            From the nervous excitement before the ceremony to the laughter
            that fills the dance floor, your wedding day is made of moments
            both grand and wonderfully small. We're there to preserve the
            glances, the embraces, the happy tears, and everything in
            between.
          </p>
          <p className="intro__paragraph">
            Documentary-inspired photography - honest moments, beautifully
            remembered.
          </p>

          <div className="intro__actions">
            <a href="#work" className="btn btn--primary">
              See Our Work
            </a>
            <a href="#contact" className="btn btn--secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
          
      <div className="intro__image-col">
        <img
          src="https://res.cloudinary.com/tubirssu/image/upload/f_auto,q_auto,c_fill,g_auto,w_900/v1789400592/portofolio/prewedd-16.jpg"
          srcSet="
            https://res.cloudinary.com/tubirssu/image/upload/f_auto,q_auto,c_fill,g_auto,w_600/v1789400592/packages/IMG_4328.jpg 600w,
            https://res.cloudinary.com/tubirssu/image/upload/f_auto,q_auto,c_fill,g_auto,w_900/v1789400592/packages/IMG_4328.jpg 900w,
            https://res.cloudinary.com/tubirssu/image/upload/f_auto,q_auto,c_fill,g_auto,w_1200/v1789400592/packages/IMG_4328.jpg 1200w,
            https://res.cloudinary.com/tubirssu/image/upload/f_auto,q_auto,c_fill,g_auto,w_1600/v1789400592/packages/IMG_4328.jpg 1600w
          "
          sizes="(min-width: 768px) 50vw, 100vw"
          loading="lazy"
          decoding="async"
          alt="Couple laughing together during their wedding reception"
          className="intro__image"
        />
      </div>
    </section>
  )
}