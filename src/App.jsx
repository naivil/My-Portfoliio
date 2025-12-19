import React from 'react'
import Header from './components/Header.jsx'
import './App.css'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Resume from './components/Resume.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />    
      <Hero />  
      <About />
      <Resume />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
