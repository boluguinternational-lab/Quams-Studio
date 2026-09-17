import './Portfolio.css'
import GalleryCard from './GalleryCard.jsx'
import { weddings } from '../data/weddings.js'

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__intro">
        <h2 className="portfolio__title">Some Recent Stories</h2>  
        <p className="portfolio__subtitle">
          A handful of weddings from the last few seasons, organized by the
          couples who let us in on them.
        </p>
      </div>

      <div className="portfolio__grid">
        {weddings.map((w) => (
          <GalleryCard key={w.seed} {...w} />
        ))}
      </div>
    </section>
  )
}