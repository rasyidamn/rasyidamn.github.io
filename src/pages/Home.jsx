import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ArrowDown from '../components/ArrowDown'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* theme toggle */}
        <ThemeToggle />

        {/* background effect */}
        <StarBackground />


        {/* navbar */}
        <Navbar />

        {/* arrow down */}
        <ArrowDown />

        {/* main content */}
        <main>
          <HeroSection />
          <AboutSection />
        </main>
        {/* footer */}
    </div>
  )
}

export default Home