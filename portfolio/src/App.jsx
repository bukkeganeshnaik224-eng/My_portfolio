import { useState } from 'react'
import Loader from './components/Loader.jsx'
import BackgroundCanvas from './components/BackgroundCanvas.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Certifications from './components/Certifications.jsx'
import Strengths from './components/Strengths.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <BackgroundCanvas />
      <CursorGlow />
      <Navbar />
      <main className="relative z-[2]">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
