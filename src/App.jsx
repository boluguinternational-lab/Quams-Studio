import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import Philosophy from './components/Philosophy.jsx'
import Portfolio from './components/Portfolio.jsx'
import Collections from './components/Collections.jsx'
import Testimonials from './components/Testimonials.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div id="top" className="font-sans text-ink bg-paper">
      <Nav />
      <Hero />
      <Intro />
      <Philosophy />
      <Portfolio />
      <Collections />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}
