import React from 'react'
import img1 from '../image/Ellipse 25.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Team = () => {
  return (
    <div id='team-section'>
    <div className=' md:py-1 py-4 landscape:py-0 '>
      <h1 className='font-bold md:text-3xl text-2xl sm:text-3xl   text-center text-[#2C041C]'>Meet our team</h1>
      <div className=' hidden sm:hidden xl:flex lg:flex landscape:flex xl:px-28 2xl:ml-[180px] xl:ml-[80px] xxl:ml-[110px]  py-16  text-center'>
        <div>
          <img className='w-36 h-36 ml-20' src={img1} alt='ellipse' />
          <p className='font-bold mt-2 landscape:ml-20'>John Doe</p>
          <p className='text-black landscape:ml-20'>Company Domain</p>
        </div>
        <div>
          <img className='w-36 h-36 ml-20' src={img1} alt='ellipse' />
          <p className='font-bold mt-2 landscape:ml-20'>John Doe</p>
          <p className='text-black landscape:ml-20'>Company Domain</p>
        </div>
        
        <div>
          <img className='w-36 h-36 ml-20' src={img1} alt='ellipse' />
          <p className='font-bold mt-2 landscape:ml-20'>John Doe</p>
          <p className='text-black landscape:ml-20'>Company Domain</p>
        </div>
        <div>
          <img className='w-36 h-36 ml-20' src={img1} alt='ellipse' />
          <p className='font-bold mt-2 landscape:ml-20'>John Doe</p>
          <p className='text-black landscape:ml-20'>Company Domain</p>
        </div>

      </div>
    </div>





    <div className='block sm:block  landscape:hidden md:block lg:hidden'>
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
      navigation
      mousewheel={{}} // Attempt to enable mouse wheel control
    >
      <SwiperSlide>
      <div>
          <img className='w-36 h-36 ml-28 sm:ml-56 md:ml-[300px] ' src={img1} alt='ellipse' />
          <p className='font-bold text-center mt-2 sm:text-xl sm:-ml-6'>John Doe</p>
          <p className='text-black text-center sm:text-xl sm:-ml-4'>Company Domain</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
          <img className='w-36 h-36 ml-28 sm:ml-56  md:ml-[300px] ' src={img1} alt='ellipse' />
          <p className='font-bold text-center mt-2 sm:text-xl sm:-ml-6'>John Doe</p>
          <p className='text-black text-center sm:text-xl sm:-ml-4'>Company Domain</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
          <img className='w-36 h-36 ml-28 sm:ml-56  md:ml-[300px]  ' src={img1} alt='ellipse' />
          <p className='font-bold text-center mt-2 sm:text-xl sm:-ml-6'>John Doe</p>
          <p className='text-black text-center sm:text-xl sm:-ml-4'>Company Domain</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
          <img className='w-36 h-36 ml-28 sm:ml-56  md:ml-[300px]  ' src={img1} alt='ellipse' />
          <p className='font-bold text-center mt-2 sm:text-xl sm:-ml-6'>John Doe</p>
          <p className='text-black text-center sm:text-xl sm:-ml-4'>Company Domain</p>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
    </div>
    
  )
}

export default Team