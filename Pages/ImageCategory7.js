import React, { useEffect } from 'react'
import img1 from '../image/Work 5.png';
import img2 from "../image/Logo 4.png"
import img3 from '../image/Rectangle 198.png'



const ImageCategory7 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='md:px-20 lg:mt-24'>

<div className='md:hidden' style={{ backgroundColor: '#2C041E' }}>
        <div className='flex'>
          <img className='w-48 ml-4' src={img1} alt="Work" />
          <h1 className=' text-white text-xl mt-20' style={{fontSize:'1.1em'}}>E-Commerce</h1>
        </div>
        <p className='text-white px-6 -mt-4 py-3'>Revolutionize your retail experience with e-commerce—bringing your products to customers' fingertips, anytime, anywhere.</p>
      </div>


      <div className='md:grid hidden sm:block grid-cols-2'>
        <img className='md:w-[390px] md:h-72 md:ml-10' src={img1} alt="Work" />
        <div className=' mt-16 -ml-32'>
          <h1 className='font-bold -ml-10 text-3xl' style={{ color: '#2C041E' }}>E-Commerce</h1>
          <li className=' px-44 text-xl list-disc -ml-40 py-1'>Revolutionize your retail experience with e-commerce—bringing your products to customers' fingertips, anytime, anywhere.</li>
        </div>
      </div>

      <h1 className='font-bold text-center md:-mt-12 mt-3 md:ml-20 text-2xl md:text-3xl' style={{ color: '#2C041E' }}>Our client </h1>
      <img className='w-44 md:hidden ml-28 ' src={img2} alt='' />
      <p className='font-bold py-1 px-4 md:hidden' style={{ color: '#2C041E', fontSize: '1em' }}>E-commerce - Layers , ceramic coating sprays for cars & bikes , listing in AZ and FK
      </p>
      <p className='font-bold py-1 hidden sm:block md:px-52' style={{ color: '#2C041E', fontSize: '1.2em' }}>E-commerce - Layers , ceramic coating sprays for cars & bikes , listing in AZ and FK
      </p>
      <div className='flex md:ml-32 px-4 md:px-20 py-2'>
        <p className=' md:text-xl'>The term ceramic coatings have been gaining a lot of popularity in the auto detailing scene. Vehicle owners are now constantly searching for the best options available in ceramic coatings for their vehicles A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick and mortar location.Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service. Benefits of applying multiple layers of ceramic coating on automobiles,Increased durability: Multiple layers of ceramic coating can help extends thesurface's lifespan, as the additional layers can help strengthen the overall protective barrier.</p>
        <img className='w-36 hidden md:mt-10 sm:block ml-5 md:ml-9 h-24 ' src={img2} alt='' />
      </div>
      <h1 className='text-center py-2 text-2xl font-bold'>Our Client Works</h1>
      <div className=' md:px-48 md:ml-52 ml-12 py-5'>
        <div>
          <img className='md:w-96 md:h-72 w-72' src={img3} alt='' />
        </div>
      </div>
    </div>
  )
}

export default ImageCategory7