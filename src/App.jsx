import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import Whatwedo from './components/Whatwedo.jsx'  
import Ctainquiry from './components/Ctainquiry.jsx' 
import RecentStories from './components/RecentStories.jsx'  
import Gallery from './components/Gallery.jsx'  
import StatsCard from './components/StatsCard.jsx'  
import Pricingcards from './components/Pricingcards.jsx'
import Footer from './components/Footer.jsx'  

export default function App() {
  return (
    <div id="top" className="font-sans text-ink bg-paper">
      <Nav />
      <Hero />
      <Intro />
      <StatsCard />     
      <Whatwedo />   
      <Gallery /> 
      <Pricingcards />  
      <RecentStories />  
      <Ctainquiry />        
      <Footer />
    </div>
  )
}
