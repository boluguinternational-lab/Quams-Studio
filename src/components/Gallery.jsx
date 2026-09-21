import './Gallery.css'

const CLOUDINARY_CLOUD_NAME = 'tubirssu'

// Simple, fixed 400x400 crop + auto format/quality.
const cld = (publicId) =>
  `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_400,h_400,q_auto,f_auto/${publicId}`

// NOTE: replace each publicId below with the real Cloudinary public ID
// for that photo (Media Library → click image → copy "Public ID").
// All 12 are placeholders pointing at the one real upload for now.
const GALLERY_IMAGES = [
  { id: 1, publicId: 'portofolio/IMG_4389', alt: 'Wedding photo 1' }, 
  { id: 2, publicId: 'portofolio/IMG_4389', alt: 'Wedding photo 2' },
  { id: 3, publicId: 'portofolio/IMG_4389', alt: 'Wedding photo 3' },
  { id: 4, publicId: 'portofolio/IMG_4389', alt: 'Wedding photo 4' },
  { id: 5, publicId: 'portofolio/IMG_4389', alt: 'Wedding photo 5' },
  { id: 6, publicId: 'portofolio/IMG_4389', alt: 'Wedding photo 6' },
  { id: 7, publicId: 'portofolio/IMG_4389', alt: 'Wedding photo 7' },
  { id: 8, publicId: 'portofolio/IMG_4389', alt: 'Wedding photo 8' },
  { id: 9, publicId: 'portofolio/IMG_4389', alt: 'Wedding photo 9' },
  { id: 10, publicId: 'portofolio/IMG_4389', alt: 'Wedding photo 10' },
  { id: 11, publicId: 'portofolio/IMG_4389', alt: 'Wedding photo 11' },
  { id: 12, publicId: 'portofolio/IMG_4389', alt: 'Wedding photo 12' },
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