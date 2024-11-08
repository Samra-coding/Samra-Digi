import React, { useEffect } from 'react'
import img1 from '../image/Work 4.png';
import img2 from "../image/Logo1.png"
import img3 from '../image/Poster 4.jpg'
import videoFile from '../image/KR.mp4'
import img4 from '../image/BD.jpg'


const ImageCategory4 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='md:px-20 lg:mt-24 '>

      <div className='md:hidden' style={{ backgroundColor: '#2C041E' }}>
        <div className='flex'>
          <img className='w-48 ml-4' src={img1} alt="Work" />
          <h1 className=' text-white text-xl ml-3 mt-20' style={{fontSize:'1.1em'}}>Brand building</h1>
        </div>
        <p className=' text-white px-6 -mt-4 py-3'>Elevate your business by focusing on brand building—create a memorable identity that resonates with your audience and stands the test of time.</p>
      </div>


      <div className='md:grid hidden mt-32 sm:block grid-cols-2'>
        <img className='w-3/5 h-96 ml-10' src={img1} alt="Work" />
        <div className=' mt-16 -ml-36'>
          <h1 className='font-bold -ml-10 text-3xl' style={{ color: '#2C041E' }}> Brand building</h1>
          <li className=' list-disc text-xl px-32 -ml-36 py-1'>Elevate your business by focusing on brand building—create a memorable identity that resonates with your audience and stands the test of time.</li>
        </div>
      </div>
      <h1 className='font-bold text-center md:ml-20 md:-mt-24 mt-4 text-2xl md:text-3xl' style={{ color: '#2C041E' }}>Our client </h1>
      <img className='w-40 h-24 ml-28 md:hidden ' src={img2} alt='' />
      <p className='font-bold px-5 md:hidden' style={{ color: '#2C041E', fontSize: '1em' }}>Karunya, (catering & tiffin box services, building the brand name with services to desired location among specific targeted audience)
      </p>
      <p className='font-bold md:py-1 hidden sm:block md:px-52' style={{ color: '#2C041E', fontSize: '1.2em' }}>Karunya, (catering & tiffin box services, building the brand name with services to desired location among specific targeted audience)
      </p>
      <div className='flex md:ml-32 py-2 md:px-20 px-5 '>
        <p className=' md:text-xl'>Social media is a great instrument for brand building. It allows businesses to define their brand identity, raise brand awareness, communicate with desired location among specific customers, market their products and services and build a community around their brand.  Instagram the perfect platform for promoting catering business. People buy from people they know, like, and trust. So sharing inviting pictures and videos of the brand on social media helps to build lasting relationships with the followers.</p>
        <img className='w-44 hidden sm:block h-32 ml-10 -mt-5  ' src={img2} alt='' />
      </div>
      <h1 className='text-center py-2 text-2xl font-bold'>Our Client Works</h1>
      <div className='md:grid md:grid-cols-3 md:ml-40   py-5'>
        <div>
          <img className='w-56 h-60 md:ml-0 ml-20' src={img3} alt='' />
          <p className='font-semibold hidden sm:block md:ml-20'>Poster</p>
          <p className='font-semibold text-center md:hidden'>Poster</p>
        </div>
        <div className=''>
          <video className='w-1/2 h-60 md:ml-0 ml-24' controls >
            <source src={videoFile} type="video/mp4" />
          </video>
          <p className='font-semibold hidden sm:block md:ml-16'>Reel</p>
          <p className='font-semibold text-center md:hidden'>Reel</p>
        </div>
        <div className=''>
        <a href="https://youtu.be/oGNpWUuQEC4">
            <img className='w-56 md:-ml-20 ml-20 h-60' src={img4} alt='' />
            </a>
          <p className='font-semibold hidden sm:block'>Youtube</p>
          <p className='font-semibold text-center md:hidden'>Youtube</p>
        </div>
      </div>
    </div>
  )
}

export default ImageCategory4