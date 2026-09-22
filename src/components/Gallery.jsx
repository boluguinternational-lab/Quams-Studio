import './Gallery.css'

const CLOUDINARY_CLOUD_NAME = 'tubirssu'

// Simple, fixed 400x400 crop + auto format/quality.
const cld = (publicId) =>
  `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_400,h_400,q_auto,f_auto/${publicId}`

// NOTE: replace each publicId below with the real Cloudinary public ID
// for that photo (Media Library → click image → copy "Public ID").
// All 12 are placeholders pointing at the one real upload for now.
// https://res.cloudinary.com/tubirssu/image/upload/v1790036753/about/Quams-1.jpg
// https://res.cloudinary.com/tubirssu/image/upload/v1790036758/about/Quams-5.jpg
// https://res.cloudinary.com/tubirssu/image/upload/v1790036763/about/Quams-9.jpg

const GALLERY_IMAGES = [
  { id: 1, publicId: 'about/Quams-1.jpg', alt: 'Wedding photo 1' }, 
  { id: 2, publicId: 'about/Quams-2.jpg', alt: 'Wedding photo 2' },
  { id: 3, publicId: 'about/Quams-3.jpg', alt: 'Wedding photo 3' },
  { id: 4, publicId: 'about/Quams-4.jpg', alt: 'Wedding photo 4' },
  { id: 5, publicId: 'about/Quams-5.jpg', alt: 'Wedding photo 5' },
  { id: 6, publicId: 'about/Quams-6.jpg', alt: 'Wedding photo 6' },  
  { id: 7, publicId: 'hero/Quams-13.jpg', alt: 'Wedding photo 7' },
  { id: 8, publicId: 'hero/Quams-14.jpg', alt: 'Wedding photo 7' },
  { id: 9, publicId: 'about/Quams-8.jpg', alt: 'Wedding photo 9' }, 
  { id: 10, publicId: 'about/Quams-9.jpg', alt: 'Wedding photo 9' },  
  { id: 11, publicId: 'hero/Quams-12.jpg', alt: 'Wedding photo 11' },  
  { id: 12, publicId: 'hero/Quams-11.jpg', alt: 'Wedding photo 12' },
]

export default function Gallery() {
  return (
    <section className="gallery-section">
      <h2 className="gallery-heading">
        Every Beautiful Memory, Perfectly Captured
      </h2>

      <div className="gallery-grid">
        {GALLERY_IMAGES.map((img) => (
          <div className="gallery-item" key={img.id}>
            <img src={cld(img.publicId)} alt={img.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      <div className="gallery-cta">
        <a href="/gallery" className="gallery-btn">
          VISIT OUR GALLERY
        </a>
      </div>
    </section>
  )
}