import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Masonary from './components/Masonary/Masonary'
import LandingPage from './components/LandingPage/LandingPage'
import Projects from './components/Projects/Projects'
import Partners from './components/Partners/Partners'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Services />
      <Masonary />
      <Projects />
      <Team />
      <Partners />
      <Contact />
      <Footer />
    </>
  )
}
