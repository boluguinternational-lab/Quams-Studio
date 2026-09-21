import './Pricingcards.css' 
// https://res.cloudinary.com/tubirssu/image/upload/v1789690904/portofolio/IMG_4378.jpg
const CLOUDINARY_CLOUD_NAME = 'tubirssu'

const cld = (publicId) =>
  `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_760,h_680,q_auto,f_auto/${publicId}`

const COLLECTIONS = [
  {
    id: 1,
    badge: 'PHOTO + FILM',
    image: cld('portofolio/IMG_4378'),
    title: 'Full-Board',
    description: 'Unlimited photo + film, the complete story.',
    price: '₵60,000',
  },
  {
    id: 2,
    badge: 'PHOTO',
    image: cld('portofolio/IMG_4378'),
    title: 'Essential Love',
    description: 'Everything you need, none of the extras.',
    price: '₵15,000',
  },
  {
    id: 3,
    badge: 'PHOTO',
    image: cld('portofolio/IMG_4378'),
    title: 'Post / Pre-Wedding',
    description: 'A standalone shoot, before or after the day.',
    price: '₵4,000',
  },
]

function PricingCard({ collection }) {
  return (
    <div className="pc-card">
      <div className="pc-image-wrap">
        <img src={collection.image} alt={collection.title} className="pc-image" />
        <div className="pc-gradient" />
        <span className="pc-badge">{collection.badge}</span>
      </div>

      <div className="pc-content">
        <h3 className="pc-title">{collection.title}</h3>
        <p className="pc-description">{collection.description}</p>
        <p className="pc-price">{collection.price}</p>

        <a href="#included" className="pc-link">
          What's included &gt;
        </a>
        <div className="pc-divider" />
        <a href="#full-details" className="pc-link">
          Read in full, to see if it fits →
        </a>

        <button type="button" className="pc-select-btn"> 
          Select this
        </button>
      </div>
    </div>
  )
}

export default function PricingCards() {
  return (
    <section className="pc-section">
      <div className="pc-header">
        <h2 className="pc-header-title">Choose your collection</h2>
        <span className="pc-header-count">{COLLECTIONS.length} options</span>
      </div>

      <div className="pc-grid">
        {COLLECTIONS.map((collection) => (
          <PricingCard key={collection.id} collection={collection} />
        ))}
      </div>
    </section>
  )
}