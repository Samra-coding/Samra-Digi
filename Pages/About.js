import React from 'react';
import './style.css';
import img2 from '../image/Frame1.png';
import img3 from '../image/Frame 64.png';
import img4 from '../image/Frame 63.png';
import img9 from '../image/Logo1.png';
import img10 from '../image/Logo 2.png';
import img11 from '../image/Logo 3.png';
import img5 from '../image/Logo 4.png';
import img6 from '../image/Logo 5.png';
import img7 from '../image/Logo 6.png';
import img8 from '../image/Logo 7.png';
import img12 from '../image/Logo 8.png';
import img13 from '../image/Logo 9.png';
import img14 from '../image/Logo 10.png';


const About = () => {

  return (
    <div id='about-section'>
<div className=" border hidden xl:block lg:block 2xl:block 3xl:block  bg-[#FFBE2A] lg:mx-8 lgl:mx-10 xl:py-7 mt-8 4xl:py-16  py-2 rounded-xl"
        style={{
          boxShadow: " 4px 4px 10.4px 1px rgba(0, 0, 0, 0.10)",
        }}
      >
        <h1
          className="font-bold md:text-3xl  2xl:text-4xl 3xl:text-5xl 3xl:py-3 4xl:text-6xl  4xl:py-3  text-center text-[#2C041C]"
        >
          About us
        </h1>
        <h2
          className="font-bold md:text-2xl 2xl:text-3xl text-xl 3xl:text-3xl 3xl:py-3 4xl:text-4xl 4xl:py-4 py-2 text-center"
          style={{ color: "#2C041C" }}
        >
          We Expertise Your Expectations
        </h2>
        <p className="md:px-20 px-10 2xl:text-2xl 3xl:text-2xl 3xl:py-3 4xl:text-3xl 4xl:py-5 text-black text-center">
          Digital marketing is an essential part of modern business and helps
          companies of all sizes to connect with customers, build brand
          awareness, and increase sales. Our experienced staff of professionals
          consists of skilled technicians, marketers, managers, designers,
          developers, and social media experts who create innovative and
          creative digital strategies and ideas. We will be best in providing
          consistently successful, unique, and forward-thinking digital
          marketing solutions that take into the individual requirements and
          unique demands of each customer.
        </p>
        <div className="lg:flex py-5">
          <div className="lg:ml-16">
            <div className="lg:flex lg:ml-[-8px] lgl:ml-[5px] xl:ml-[20px] xxl:ml-[40px] 2xl:ml-[60px] 4xl:ml-[100px] ">
              <img className="w-12 h-12 2xl:w-16 2xl:h-16 4xl:w-20 4xl:h-20" src={img2} alt="frame" />
              <p className="font-bold text-xl 2xl:text-2xl 3xl:text-2xl 4xl:text-4xl lg:ml-[4px] lg:mt-3 text-center">
                Our Mission
              </p>
            </div>
            <p className="  text-center font-semibold 2xl:text-[20px] 3xl:text-xl 4xl:text-3xl mt-2">
              To Promote Products and deliver exceptional Services.
            </p>
          </div>
          <hr
            className="w-0.5 h-40 lg:ml-5 mx-3  py-2 md:mt-0 -mt-10 border-[#2C041C] border-[1px]"/>
          <div className="lg:ml-10">
            <div className="md:flex lg:ml-16 lgl:ml-28 xl:ml-[130px] xxl:ml-[160px] 2xl:ml-[180px] 4xl:ml-[350px]">
              <img className="w-12 h-12 2xl:w-16 2xl:h-16 4xl:w-20 4xl:h-20 " src={img3} alt="frame" />
              <p className="font-bold text-xl lg:mt-3 2xl:text-2xl 3xl:text-2xl 4xl:text-4xl text-center  lg:ml-2">
                Our Vision
              </p>
            </div>
            <p className=" text-center font-semibold 2xl:text-[20px] 3xl:text-xl 4xl:text-3xl lg:px-20 lg:ml-[-100px] xl:px-36 mt-2">
              To be a top achiever in online strategies, digital sales, and
              e-mail marketing in the global business world.
            </p>
          </div>
          <hr
            className="w-0.5 h-40 mx-3  py-2 lg:ml-[-50px] xl:ml-[-55px] border-[#2C041C] border-[1px]"/>
          <div className="xl:ml-5">
            <div className="flex lg:ml-10 lgl:ml-20 xl:ml-24 xxl:ml-28 2xl:ml-28 4xl:ml-[280px]">
              <img className="w-12 h-12 lg:ml-0 2xl:w-16 2xl:h-16 4xl:w-20 4xl:h-20 " src={img4} alt="frame" />
              <p className="font-bold text-xl lg:mt-3 2xl:text-2xl 3xl:text-2xl 4xl:text-4xl text-center lg:ml-2">
                Our Goal
              </p>
            </div>
            <p className=" text-center font-semibold 2xl:text-[20px] 3xl:text-xl 4xl:text-3xl lg:px-4 lgl:px-8 -ml-7 mt-2 ">
              Grass roots exposure for trending technology to groom you with
              inspirations.
            </p>
          </div>
        </div>
      </div>



      <div className=' bg-[#FFBE2A] xs:mx-5 xss:mx-6 md:mx-12  xl:hidden lg:hidden  py-2 rounded-xl'>
        <h1 className='font-bold lg:text-4xl text-2xl md:text-3xl   md:mt-0 mt-4 text-center text-[#2C041C]'>About us</h1>
        <h2 className='font-bold sm:text-2xl text-xl landscape:text-xl py-2 text-center text-[#2C041C]'>We Expertise Your Expectations</h2>
        <p className=' text-black text-center landscape:text-xl sm:text-2xl px-4'>
          Digital marketing is an essential part of modern business and helps companies of all sizes to connect with customers, build brand awareness, and increase sales. Our experienced staff of professionals consists of skilled technicians, marketers, managers, designers, developers, and social media experts who create innovative and creative digital strategies and ideas. We will be best in providing consistently successful, unique, and forward-thinking digital marketing solutions that take into the individual requirements and unique demands of each customer.
        </p>
        <div className='lg:grid lg:grid-rows-3   py-5'>
        <center>
          <div className=''>
            <div className=''>
              <img className='w-12 h-12 sm:w-16 sm:h-16  ' src={img2} alt='frame' />
              <p className='font-bold text-xl mt-1 sm:text-2xl text-center'>Our Mission</p>
            </div>
            <p className=' md:px-7 text-center sm:text-2xl '>To Promote Products and deliver exceptional Services.</p>
          </div>
          </center>
          <center>
          <div className=' mt-2 '>
            <div className=' '>
              <img className='w-12 h-12 sm:w-16 sm:h-16 ' src={img3} alt='frame' />
              <p className='font-bold text-xl mt-1 sm:text-2xl  text-center'>Our Vision</p>
            </div>
            <p className=' text-center  sm:text-2xl mt-2 px-3 sm:px-3 md:px-16 '>To be a top achiever in online strategies, digital sales, and e-mail marketing in the global business world.</p>
          </div>
          </center>
          <center>
          <div className=' mt-2  '>
            <div className=''>
              <img className='w-12 h-12 sm:w-16 sm:h-16  ' src={img4} alt='frame' />
              <p className='font-bold text-xl mt-1 sm:text-2xl text-center'>Our Goal</p>
            </div>
            <p className=' text-center px-5  mt-2 sm:text-2xl sm:px-4 md:px-16 '>Grass roots exposure for trending technology to groom you with inspirations.</p>
          </div>
          </center>
        </div>
  
      </div>


      <div className='  mt-10 mb-5 sticky horizontal-scroll '>
        <div className='icon-container'>
          <img className='w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-28 lg:h-28 ' src={img11 } alt='' />
          <img className='w-20 h-20 ml-5 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-28 lg:h-28  lg:ml-16' src={img10 } alt='' />
          <img className='w-32 h-24 -mt-1  sm:w-40 sm:h-32 md:w-44 md:h-[36] lg:w-44 lg:h-36 lg:-mt-2  lg:ml-16' src={img7 } alt='' />
          <img className='w-32 h-20 -ml-3  sm:w-36 sm:h-28 md:w-40 md:h-32 lg:w-48 lg:h-32 lg:ml-16 ' src={img9 } alt='' />
          <img className='w-20 h-20 ml-3 sm:mt-8  sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-28 lg:h-28  lg:ml-16 lg:mt-4 ' src={img8 } alt='' />
          <img className='w-24 h-16 ml-3 sm:ml-8 mt-3 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-36 lg:h-24  lg:ml-16 lg:mt-5 ' src={img5 } alt='' />
          <img className='w-32 h-20  lg:w-44 lg:h-32  lg:ml-16 ' src={img6}  alt=''/>
          <img className='w-40 h-32 -ml-10 sm:ml-8 -mt-7 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-96 lg:h-44 lg:-mt-9 lg:-ml-12   ' src={img13 } alt='' />
          <img className='w-32 h-16 -ml-5 sm:ml-8 mt-4 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-36 lg:h-20 lg:mt-9  lg:-ml-7 ' src={img14} alt='' />
          <img className='w-32 h-24  sm:ml-8 -mt-2 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-36 lg:h-28 lg:mt-5  ' src={img12} alt='' />
          </div>
      </div>
    </div>
  );
};

export default About;