import React from 'react'
import Carousel from './Carousel'

const Testimonials = () => {
  return (
    <div id='testimonial-section'>
    <div className='py-4 sm:py-5 md:mt-0 mt-3 '>
      <h1 className='font-bold md:text-3xl text-2xl 2xl:text-4xl 3xl:text-5xl sm:text-3xl lg:text-3xl xl:text-3xl  4xl:text-6xl  text-[#2C041C]  text-center'>Testimonials</h1>
      <Carousel/>
    </div>
    </div>
  )
}

export default Testimonials