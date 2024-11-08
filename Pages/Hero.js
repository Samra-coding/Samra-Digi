import React, { useState, useEffect } from 'react';
import img1 from '../image/Frame.png';
import img2 from '../image/Group 41 (1).png'
import img4 from '../image/Group 41 (2).png'
import img3 from '../image/Group 9.png'
import img5 from '../image/Banner.jpg'
import Popup from './Popup';
import './style.css';

const Hero = () => {
  const [index, setIndex] = useState(0);
  const letters = ['I', 'n', 'n', 'o', 'v', 'a', 't', 'i', 'o', 'n'];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex < letters.length - 1) {
          return prevIndex + 1;
        } else {
          // Reset index to 0 after displaying all letters
          return 0;
        }
      });
    }, 500); // Adjust the delay between each letter appearance

    return () => clearInterval(timer); // Cleanup on unmount
  }, [letters.length]); // Include letters.length in the dependency array


  return (
    <div className="relative">
      <Popup/>
      <img className=' w-full lg:hidden xl:hidden 2xl:hidden' src={img5} alt='hero'/>
      <img className='w-full hidden  sm:hidden lg:block px-9 3xl: lg:mt-40' src={img1} alt='hero' />
      <div className=''>
        <div className="text-center absolute top-1/2 md:mt-12 px-2 md:ml-[20px] mt-[25px]  lg:text-[30px] lg:mt-3 lg:ml-[-5px] xl:ml-[-10px] 2xl:text-[39px] sm:-mt-1 md:text-[42px] lgl:mt-[20px]  text-[22px] sm:text-3xl font-bold left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#FFBE2A]" >
          {letters.map((letter, i) => (
            <span key={i} style={{ display: i <= index ? 'inline' : 'none' }}>
              {letter}
            </span>
          ))}
        </div>
      </div>
      <img  className='absolute top-1/2 lg:hidden  xs:w-[50px] xs:mt-4 xs:-ml-28 xss:-ml-32 xsss:-ml-36  sm:-ml-52 sm:w-16 md:w-[80px] md:ml-[-240px] left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={img4} alt='' />
      <img  className='absolute  hidden  lg:block  xl:ml-[-280px] 2xl:ml-[-325px] 2xl:w-[84px] ml-[-367px] mt-[-76px] top-1/2 w-20 lg:w-[63px] lg:mt-[-3px] lg:ml-[-220px] lgl:ml-[-270px] xxl:ml-[-320px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={img4} alt='' />
     
      <div >
      <img  className='absolute xs:ml-[-146px] xs:mt-[5px] xss:mt-[3px] xss:ml-[-160px] xsss:ml-[-175px]  lg:hidden xl:hidden 2xl:hidden md:w-[65px] md:ml-[-288px] md:-mt-2  rotating-element sm:w-12 sm:ml-[-246px] w-10  sm:-mt-2 top-1/2 left-1/2 ' src={img2} alt='' />
      <img className='absolute ml-[-420px] rotating-elements hidden lg:block w-16 top-1/2 lg:w-[45px] xl:ml-[-320px] 2xl:ml-[-370px] 2xl:w-[58px] 2xl:mt-[-20px] lg:mt-[-16px] lg:ml-[-257px] lgl:ml-[-310px] xxl:ml-[-359px] -mt-24  left-1/2 ' src={img2} alt='' />
      </div>
      <img className='absolute top-1/2  md:hidden  animate-pulse   left-1/2 transform -translate-x-1/2 -translate-y-1/2 xs:w-10 xs:ml-[100px] xs:mt-[55px] xss:ml-[120px] xss:mt-[65px] xsss:ml-[140px] xsss:mt-[75px]' src={img3} alt='' />
      <img className='absolute top-1/2 animate-pulse xs:hidden md:block mt-24 md:mt-32 md:ml-52  xl:mt-[80px] xl:ml-[170px] lgl:mt-[70px] xxl:mt-[90px] 2xl:w-[70px] 2xl:mt-[93px] 2xl:ml-[195px] sm:block   lg:block lg:w-[50px] lg:ml-[140px] lg:mt-[55px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={img3} alt='' />
      <a className="absolute  top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 xs:text-[15px] xs:mt-16 xs:px-2 xs:py-1 xss:mt-[70px] md:mt-36 lgl:mt-[80px] font-bold text-black mt-[67px]  sm:mt-[110px] sm:ml-[5px] sm:py-2  sm:text-[23px] md:px-3 md:text-2xl lg:px-2 lg:py-1 lg:text-[18px] lg:mt-[65px] lg:ml-[10px] lgl:ml-[0] xl:mt-[85px] xl:ml-[5px] xxl:ml-[-5px] 2xl:text-[23px] 2xl:mt-[105px] 2xl:ml-[-2px] 2xl:px-3  bg-[#FFBE2A] rounded-full " href="https://wa.me/message/UNPOLRPXQMOGL1">Chat Now</a>
    </div>
  );
};

export default Hero;