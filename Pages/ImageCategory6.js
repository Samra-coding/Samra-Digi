import React, { useEffect } from 'react'
import img1 from '../image/Work 6.png';
import img2 from "../image/Logo 4.png"
import img3 from '../image/Rectangle 198.png'



const ImageCategory6 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='md:px-20 lg:mt-24'>

<div className='md:hidden' style={{ backgroundColor: '#2C041E' }}>
        <div className='flex'>
          <img className='w-48 ml-4' src={img1} alt="Work" />
          <h1 className=' text-white text-xl ml-3 mt-12'style={{fontSize:'1.1em'}}>Website Creation</h1>
        </div>
        <p className=' text-white px-6  py-3'>Bring your vision to life with professional website creation—crafting a digital presence that captivates and converts.</p>
      </div>


      <div className='md:grid hidden mt-32 sm:block grid-cols-2'>
        <img className='w-3/5 h-72 ml-10' src={img1} alt="Work" />
        <div className=' mt-16 -ml-28'>
          <h1 className='font-bold -ml-10 text-3xl' style={{ color: '#2C041E' }}>Website Creation</h1>
          <li className=' px-44 text-xl list-disc -ml-40 py-1'>Bring your vision to life with professional website creation—crafting a digital presence that captivates and converts.</li>
        </div>
      </div>

      <h1 className='font-bold text-center md:-mt-4 md:ml-20 text-2xl md:text-3xl' style={{ color: '#2C041E' }}>Our Client </h1>
      <img className='w-40 ml-28 md:hidden  ' src={img2} alt='' />
      <p className='font-bold py-1 md:hidden px-3 md:px-80' style={{ color: '#2C041E', fontSize: '1em' }}>Visttas , property management services, social media marketing. real estate app & website , like 99acres, quickr,
      </p>
      <p className='font-bold hidden sm:block py-1 md:px-52' style={{ color: '#2C041E', fontSize: '1.2em' }}>Visttas , property management services, social media marketing. real estate app & website , like 99acres, quickr,
      </p>
      <div className='flex md:ml-32 md:px-20 px-4 py-2'>
        <p className=' md:text-xl'>A website is a collection of web pages and related content that is identified by a common domain name and published on at least one web server. Websites are typically dedicated to a particular topic or purpose, such as news, education, commerce, entertainment or social networking. Social media marketing is also called digital marketing and e-marketing , which is the use of social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic. Property management is the day-to-day care and maintenance of residential, commercial, or industrial real estate. Real estate management is the management which helps to manage the daily operations of the rental property or portfolio of properties on behalf of the landlord.</p>
        <img className='w-36 ml-5 hidden sm:block h-24 md:mt-12 md:ml-9  ' src={img2} alt='' />
      </div>
      <h1 className='text-center py-2 text-2xl font-bold'>Our Client Works</h1>
      <div className=' md:px-48 md:ml-52 ml-12 py-5'>
        <div>
          <img className='md:w-96 w-72 md:h-72' src={img3} alt='' />
        </div>
      </div>
    </div>
  )
}

export default ImageCategory6