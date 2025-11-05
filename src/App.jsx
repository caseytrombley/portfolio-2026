import React from 'react'
import Navbar from 'src/sections/Navbar.jsx'
import Hero from 'src/sections/Hero.jsx'

const App = () => {
  return (
    <div className={'container mx-auto max-w-7xl'}>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
