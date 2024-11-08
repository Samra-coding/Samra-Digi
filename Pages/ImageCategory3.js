import React, { useEffect } from 'react'
import img1 from '../image/Work 7.png';
import videoFile from '../image/Marriage.mp4'

const ImageCategory3 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='md:px-20 lg:mt-24 '>
      <div className='md:hidden' style={{ backgroundColor: '#2C041E' }}>
        <div className='flex'>
          <img className='w-44 md:ml-4' src={img1} alt="Work" />
          <h1 className=' text-white mt-20  ml-8' style={{fontSize:'1.1em'}}>Interface Design</h1>
        </div>
        <p className=' text-white px-6 py-3'>Enhance user experience with exceptional interface design—where functionality meets aesthetics to create seamless interactions.</p>
      </div>


      <div className='md:grid hidden mt-32 sm:block grid-cols-2'>
        <img className='w-3/5 h-72 ml-10' src={img1} alt="Work" />
        <div className=' mt-16 -ml-28'>
          <h1 className='font-bold -ml-10 text-3xl' style={{ color: '#2C041E' }}>Interface Design</h1>
          <li className=' px-44 text-xl list-disc -ml-40 py-1'>Enhance user experience with exceptional interface design—where functionality meets aesthetics to create seamless interactions.</li>
        </div>
      </div>


      <h1 className='font-bold text-center md:-mt-4 mt-4 md:ml-20 text-2xl md:text-3xl' style={{ color: '#2C041E' }}>Our client </h1>
      <p className='font-bold hidden sm:block md:py-1 px-4 py-2 md:px-52' style={{ color: '#2C041E', fontSize: '1.2em' }}>Invitation ,  (wedding invitation designs , customisable, complete offline experience)
      </p>
      <p className='font-bold md:hidden md:py-1 px-4 py-2 md:px-80' style={{ color: '#2C041E', fontSize: '1em' }}>Invitation ,  (wedding invitation designs , customisable, complete offline experience)
      </p>
      <div className='md:flex md:ml-32 md:px-20 px-4 md:py-2 '>
        <p className='md:text-xl'>An invitation system is a method of encouraging people to join an Organization, such as club or a website. An invitation card should include text that describes the basic event details, an eye-catching color scheme and typography, images or illustrations to make the card stand out and white space to balance it all out. If your event has a theme, choose elements and graphics that reflect it. E invitation or electronic invitation is sent online via email or any other electronic mode. This is a non-traditional way to invite your guest for the event/wedding, but many brides and grooms are leaning towards this and even their families too.</p>
      </div>
      <h1 className='text-center py-2 text-2xl font-bold'>Our Client Works</h1>
      <div className='md:ml-80 md:mt-7'>
       
        <div>
          <video className='w-1/2 md:mt-0 md:ml-12 ml-24 mt-3 h-60' controls >
            <source src={videoFile} type="video/mp4" />
          </video>
          <p className='font-bold hidden sm:block md:ml-64 mb-8'>Reel</p>
          <p className='font-bold text-center md:hidden'>Reel</p>
        </div>
       
      </div>
    </div>
  )
}

export default ImageCategory3