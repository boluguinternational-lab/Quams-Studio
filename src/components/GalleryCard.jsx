import './GalleryCard.css'

const CLOUD_NAME = 'tubirssu'
const VERSION = 'v1789442128'
const FOLDER = 'portofolio'
const WIDTHS = [400, 600, 800, 1000, 1200]

function cloudinaryUrl(image, width) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,c_fill,g_auto,ar_4:5,w_${width}/${VERSION}/${FOLDER}/${image}`
}

export default function GalleryCard({ image, place, title, description }) {
  const src = cloudinaryUrl(image, 800)
  const srcSet = WIDTHS.map((w) => `${cloudinaryUrl(image, w)} ${w}w`).join(', ')

  return (
    <article className="gallery-card">
      <div className="gallery-card__image-wrap">
        <img
          src={src}
          srcSet={srcSet}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          alt={`${title} — ${place}`}
          className="gallery-card__image"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="gallery-card__text">
        <h3 className="gallery-card__title">{title}</h3>
        <p className="gallery-card__description">{description}</p>
      </div>
    </article>
  )
}