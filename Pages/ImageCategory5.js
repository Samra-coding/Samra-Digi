import React, { useEffect } from 'react'
import img1 from '../image/Work 3.png';
import img2 from "../image/Logo 6.png"
import img3 from '../image/Poster 2.png'
import videoFile from '../image/HR.mp4'

const ImageCategory5 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='md:px-20 lg:mt-24'>

      <div className='md:hidden' style={{ backgroundColor: '#2C041E' }}>
        <div className='flex'>
          <img className='w-48 ml-4' src={img1} alt="Work" />
          <h1 className=' text-white text-xl mt-20' style={{ fontSize: '1.1em' }}>Business & strategy planning</h1>
        </div>
        <p className=' text-white px-6 -mt-4 py-3'>Unlock your potential with expert business and strategy planning—laying the foundation for sustainable growth and success.</p>
      </div>


      <div className='md:grid hidden mt-32 sm:block grid-cols-2'>
        <img className='w-3/5 h-80' src={img1} alt="Work" />
        <div className=' mt-16 -ml-36'>
          <h1 className='font-bold -ml-16 text-3xl' style={{ color: '#2C041E' }}>Business & strategy planning</h1>
          <li className=' list-disc px-32 text-xl -ml-36 py-1'>Unlock your potential with expert business and strategy planning—laying the foundation for sustainable growth and success.</li>
        </div>
      </div>


      <h1 className='font-bold text-center md:ml-20 text-2xl md:text-3xl md:-mt-16' style={{ color: '#2C041E' }}>Our Client </h1>
      <img className='w-44 md:hidden  h-36 ml-28 ' src={img2} alt='' />
      <p className='font-bold py-1 md:hidden px-3' style={{ color: '#2C041E', fontSize: '1em' }}>Hero maha motors, vehicle and automotive services, social media marketing, business planning
      </p>
      <p className='font-bold py-1 hidden sm:block px-52' style={{ color: '#2C041E', fontSize: '1.2em' }}>Hero maha motors, vehicle and automotive services, social media marketing, business planning
      </p>
      <div className='flex md:ml-32 md:px-20 px-4 py-2'>
        <p className=' md:text-xl '>A social media strategy is an outline of the content that our business will post, the responsibilities of social media team, and the social media channels will use to promote the business. A social media strategy includes social media goals that complement your business' overall digital marketing strategy. A plan than outlines the social media goals, the tactics used to achieve them and metrics tracked to measure performance. Strategic planning is a systematic process for developing an organization's direction. While the business plan lays out how the business is run from day to day, the strategic plan focuses on how you will achieve specific initiatives to develop your business.</p>
        <img className='w-44 hidden sm:block h-36 ml-6 ' src={img2} alt='' />
      </div>
      <h1 className='text-center py-2 text-2xl font-bold'>Our Client Works</h1>
      <div className='md:grid md:grid-cols-2 md:px-32 md:ml-32 md:py-5'>
        <div className='md:ml-28'>
          <img className='w-56 h-60 md:ml-0 ml-20' src={img3} alt='' />
          <p className='font-semibold  hidden sm:block md:ml-20'>Poster</p>
          <p className='font-semibold text-center md:hidden'>Poster</p>
        </div>
        <div>
          <video className='w-1/2 h-60 md:ml-0 ml-24' controls >
            <source src={videoFile} type="video/mp4" />
          </video>
          <p className='font-semibold hidden sm:block md:ml-24'>Reel</p>
          <p className='font-semibold md:hidden text-center'>Reel</p>
        </div>
        
      </div>
    </div>
  )
}

export default ImageCategory5