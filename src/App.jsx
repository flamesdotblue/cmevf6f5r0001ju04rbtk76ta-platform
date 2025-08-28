import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

const BG_URL = 'https://cdn.dribbble.com/userupload/16537236/file/original-3c9baf8044faac370974ead6e9a41217.jpg?resize=1504x1003&vertical=center'

export default function App() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_URL})` }}
      />
      {/* Gradient scrim + subtle vignette */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/50 via-indigo-900/30 to-fuchsia-900/30" />
      <div className="pointer-events-none absolute inset-0 -z-10 ring-1 ring-black/10 [box-shadow:inset_0_0_120px_40px_rgba(0,0,0,0.35)]" />

      <div className="relative">
        <NavBar />
        <Hero />
        <Showcase />
        <Footer />
      </div>
    </div>
  )
}
