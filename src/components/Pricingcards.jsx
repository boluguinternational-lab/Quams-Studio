import './Pricingcards.css' 
// https://res.cloudinary.com/tubirssu/image/upload/v1789690904/portofolio/IMG_4378.jpg
// https://res.cloudinary.com/tubirssu/image/upload/v1790036753/about/Quams-1.jpg
// https://res.cloudinary.com/tubirssu/image/upload/v1790036969/hero/Quams-11.jpg
// https://res.cloudinary.com/tubirssu/image/upload/v1790036755/about/Quams-2.jpg




const CLOUDINARY_CLOUD_NAME = 'tubirssu'

const cld = (publicId) =>
  `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_760,h_680,q_auto,f_auto/${publicId}`

const COLLECTIONS = [
  {
    id: 1,
    badge: 'PHOTO + FILM',
    image: cld('about/Quams-1.jpg'),
    title: 'Wedding-Board',
    description: 'Unlimited photo + film, the complete story.',
    price: '₵10,000', 
  },

   {
    id: 2,
    badge: 'PHOTO + FILM',
    image: cld('hero/Quams-11.jpg'), 
    title: 'Event-Board',  
    description: 'Unlimited photo + film, the complete story.',
    price: '₵8,000',
  },

   {
    id: 3,
    badge: 'PHOTO + FILM',
    image: cld('about/Quams-2.jpg'),  
    title: 'Graduation-Board',  
    description: 'Unlimited photo + film, the complete story.',
    price: '₵2,000',    
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