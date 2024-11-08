import React, { useEffect } from 'react'
import img1 from '../image/Work 2.png';
import img2 from "../image/Logo 3.png"
import img3 from '../image/Poster 3.png'
import videoFile from "../image/SR.mp4";


const ImageCategory2 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='md:px-20 lg:mt-24 '>

      <div className='md:hidden' style={{backgroundColor:'#2C041E'}}>
        <div className='flex'>
        <img className='w-44 ml-4' src={img1} alt="Work" />
          <h1 className=' text-white mt-10'style={{fontSize:'1.1em'}}>Sales conversion as offline</h1>
        </div>
        <p className=' text-white px-6 py-3'>Boost your sales conversion by leveraging offline strategies that connect directly with your customers and drive results.</p>
      </div>


      <div className='md:grid hidden mt-32 sm:block  md:grid-cols-2'>
        <img className='md:w-3/5 md:h-72 md:ml-10' src={img1} alt="Work" />
        <div className=' md:mt-16 md:-ml-44'>
          <h1 className='font-bold md:-ml-10 md:text-3xl' style={{ color: '#2C041E' }}>Sales conversion as offline</h1>
          <li className=' list-disc hidden sm:block px-44 text-xl -ml-40 py-1'>Boost your sales conversion by leveraging offline strategies that connect directly with your customers and drive results.</li>
        </div>
        <p className='font-semibold md:hidden text-xl'>Boost your sales conversion by leveraging offline strategies that connect directly with your customers and drive results.</p>
      </div>


      <h1 className='font-bold text-center md:-mt-7 md:ml-20 mt-2 text-2xl md:text-3xl' style={{ color: '#2C041E' }}>Our client </h1>
      <p className='font-bold hidden sm:block py-1 px-52' style={{ color: '#2C041E', fontSize: '1.2em' }}>Shree Gugan Associates, (insurance/ chit funds/ mutual funds/ loans , increase conversion(customers), awareness about services, video & social media marketing)
      </p>
      <img className='w-36 h-36 md:hidden ml-28 mt-3 ' src={img2} alt='' />
      <p className='font-bold md:hidden px-9 mt-3' style={{ color: '#2C041E', fontSize: '1 em' }}>Shree Gugan Associates, (insurance/ chit funds/ mutual funds/ loans , increase conversion(customers), awareness about services, video & social media marketing)
      </p>


      <div className='md:flex md:ml-32 md:px-20 px-9 md:py-2'>
        <p className=' md:text-xl md:mt-0 mt-2'>Mutual funds and insurance companies have found a new ally in chit funds, a traditional savings scheme, for reaching out to small-town investors he purpose of a mutual fund is to assist in investment as well as savings. The purpose of a mutual fund is to assist in investment as well as savings. Loan conversion is nothing but lower interest rates without changing lenders. Awareness of services refers to the familiarity of consumers with a particular product or service. A well-executed video can capture your attention, and educate them about our products or services and inspire them to take action.</p>
        <img className='w-44 h-40 hidden sm:block ml-16 mt-6' src={img2} alt='' />
      </div>

      <h1 className='text-center py-2 text-2xl font-bold'>Our client Works</h1>
      
      
      <div className='md:grid md:grid-cols-2 md:px-48 md:ml-44 py-5'>
        <div>
          <img className='w-56 h-60 md:ml-0 ml-20' src={img3} alt='' />
          <p className='font-semibold hidden sm:block  md:ml-20'>Poster</p>
          <p className='font-semibold md:hidden text-center'>Poster</p>
        </div>
        <div className=''>
        <video className="w-1/2 md:mt-0 md:ml-0 ml-24 mt-3 h-60" controls>
            <source src={videoFile} type="video/mp4" />
          </video>
          <p className='font-semibold md:ml-14 hidden sm:block'>Reel</p>
          <p className='font-semibold md:hidden text-center'>Reel</p>
        </div>
      </div>
    </div>
  )
}

export default ImageCategory2