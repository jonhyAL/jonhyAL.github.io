import { useState, useCallback } from 'react'
import Intro from './components/Intro'
import AuroraBackground from './components/AuroraBackground'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const handleIntroDone = useCallback(() => {
    setIntroDone(true)
    document.body.style.overflow = ''
  }, [])

  if (!introDone) {
    document.body.style.overflow = 'hidden'
  }

  return (
    <>
      <Intro onDone={handleIntroDone} />
      <AuroraBackground />
      <Cursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
