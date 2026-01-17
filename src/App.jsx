import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import About from './Components/About/About.jsx';
import Services from './Components/Services/services.jsx';
import MyWork from './Components/MyWork/MyWork.jsx';
import Contact from './Components/Contact/Contact.jsx';


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
    </>
  )
}

export default App;
