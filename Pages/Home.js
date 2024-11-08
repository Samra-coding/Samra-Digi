import React, { useEffect } from 'react'
import Hero from './Hero'
import About from './About'
import Work from './Work'
import Team from './Team'
import Services from './Services'
import Talk from './Talk'
import Testimonials from './Testimonials'
import News from './News'
import Review from './Review'

const Home = () => {
  useEffect(() => {
    const sectionId = window.location.pathname.slice(1); // Remove the leading slash
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className='bg-[#F9F0F0]'>
      <section className='mt-10 ' id='home' >
        <Hero />
        <Review/>
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='work'>
        <Work />
      </section>
      <section id='testimonials'>
        <Testimonials />
      </section>
      <section id='team' className="hidden" >
        <Team />
      </section>
      <section id='services'>
        <Services />
      </section>
      <section id='talk'>
        <Talk />
      </section>
      <section id='news' >
        <News />
      </section>
    </div>
  )
}

export default Home
