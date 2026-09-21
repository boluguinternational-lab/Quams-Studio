import './Whatwedo.css' 
// https://res.cloudinary.com/tubirssu/image/upload/v1789141309/portofolio/wedd-27.jpg
const CLOUDINARY_CLOUD_NAME = 'tubirssu'

// f_auto/q_auto let Cloudinary pick the best format/quality per browser,
// c_fill + g_auto crop intelligently to the 520px-tall card, w_800 caps
// the delivered width since cards never render wider than that.
const cld = (publicId) =>
  `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto,c_fill,g_auto,w_800,h_650/${publicId}`

const SERVICES = [
  {
    title: 'Weddings',
    caption: 'Traditional and white, told in full, the house we were built on.',
    image: cld('portofolio/wedd-27.jpg'),
  },
  {
    title: 'Films',
    caption: 'Cinematic wedding films couples replay for years.',
    image: cld('portofolio/wedd-27.jpg'),
  },
  {
    title: 'Portraits & Events',
    caption: 'Engagements, portraits and the celebrations in between.',
    image: cld('portofolio/wedd-27.jpg'),  
  },
]

function ServiceCard({ title, caption, image }) {
  return (
    <div className="wwd-card">
      <div className="wwd-image-wrap">
        <img src={image} alt={title} className="wwd-image" />
        <div className="wwd-gradient" />
        <span className="wwd-image-label">{title}</span>
      </div>
      <p className="wwd-caption">{caption}</p>
    </div>
  )
}

export default function WhatWeDo() {
  return (
    <section className="wwd-section">
      <div className="wwd-header">
        <p className="wwd-eyebrow">WHAT WE DO</p>
        <h2 className="wwd-title">One house, the whole story.</h2>
      </div>

      <div className="wwd-grid">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}