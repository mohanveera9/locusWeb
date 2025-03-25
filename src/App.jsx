import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import DownloadAPK from './Components/DownloadAPK'
import Features from './Components/Features'
import Footer from './Components/Footer'
import AppImageShowcase from './Components/Appimages'


const App = () => {
  return (
    <>
      <Navbar />
    <Hero />
    <About />
    <DownloadAPK />
    <Features />
    <AppImageShowcase />
    <Footer />
    </>
  )
}

export default App
