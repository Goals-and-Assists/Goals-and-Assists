import React, { useState } from 'react'
import Navbar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Footer from '../components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from '../components/SideBar'
// import Mission from '../components/Mission'
import InfoSection from '../components/InfoSection'
import Support from '../components/Support'

const Home = () => {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
  setIsOpen(!isOpen)
}

  return (
    <Router>
        <Navbar
          toggle={toggle}
        />
        <Sidebar 
          isOpen={isOpen} 
          toggle={toggle} 
        />
        <HeroSection />
        {/* <Mission /> */}
        <InfoSection />
        <Services />
        <Support />
        <Footer />
    </Router>
  )
}

export default Home