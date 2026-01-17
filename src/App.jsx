import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import About from './Components/About/About.jsx';
import Services from './Components/Services/Services.jsx'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </>
  )
}

export default App;
