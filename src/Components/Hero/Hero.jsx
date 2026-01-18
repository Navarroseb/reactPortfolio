import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1>Hola! Soy <span>Sebastian Navarro,</span> Desarrollador Fullstack radicado en Santiago de Chile. </h1>
            <p>Desarrollador Full Stack con base sólida en front-end y fuerte orientación al aprendizaje continuo. Soy autodidacta,
                curioso y adaptable, cualidades que me han permitido aprender desde programación hasta inglés y cocina.
                Actualmente enfocado en capacitarme en áreas como inteligencia artificial y cloud computing, buscando crecer en
                entornos donde pueda seguir desarrollándome y aportar valor real enfrentando nuevos desafíos.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>    
        </div>
    )
}

export default Hero