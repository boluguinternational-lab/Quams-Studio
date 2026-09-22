import './Ctainquiry.css'

const CLOUDINARY_CLOUD_NAME = 'tubirssu'

const cld = (publicId) =>
  `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto,c_fill,g_auto,w_1600,h_1040/${publicId}`

export default function CTAInquiry() {
  return (
    <section className="cta-banner">
      <img
        src={cld('hero/Quams-16.jpg')}
        alt=""
        className="cta-banner-image"
      />

      <div className="cta-banner-content">
        <h2 className="cta-banner-title">Let's tell your story.</h2>
        <p className="cta-banner-subtitle">
          Tell us about your day and we'll reply within 48 hours, or book a
          free 15-minute call.
        </p>

        <div className="cta-banner-buttons">
          <a href="#inquire" className="cta-btn cta-btn-primary">
            Check your date →
          </a>
          <a href="#portfolio" className="cta-btn cta-btn-secondary">
            See collections
          </a>
        </div>
      </div>
    </section>
  )
}