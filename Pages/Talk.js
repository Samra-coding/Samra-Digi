import React from 'react';
import { useState } from 'react';
import img1 from '../image/Vector (8).png';
import img2 from '../image/Vector (9).png';
import img3 from '../image/Vector-10.png'
import img4 from '../image/OBJECTS.png'

const Talk = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    product: '',
    msg: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div id='talk-section'>
      <div className='py-3 lg:block hidden '>
        <h1 className='font-bold md:text-3xl text-2xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl text-center text-[#2C041C]'>Get In Touch</h1>
        <p className=' text-center py-7 lg:px-64 lgl:px-32 landscape:px-4 3xl:text-2xl text-[1.2em]'>
          Get in touch with us today to discover how we can transform your digital marketing efforts and help your business reach new heights.
        </p>
        <div className='mt-6 lg:mx-8 lgl:mx-16 xl:mx-20 xxl:mx-40 2xl:mx-44 3xl:mx-40 4xl:mx-96  lg:h-[440px] lgl:h-[480px] xl:h-[550px] 3xl:h-[680px]  h-auto rounded-md bg-[#F9F0F0]   lg:border-[#2C041C]  lg:border-[3px] lg:shadow-[8px 11px 10.4px 1px #00000045] '>
          <div className='lg:grid lg:grid-cols-2'>
            <div className='border -ml-2 -mt-1 -mb-1  lg:h-[440px] xl:h-[550px] 3xl:h-[680px] lgl:h-[480px]   bg-[#FFBE2A] ' style={{  borderRadius: '20px' }}>
              <h1 className=' font-bold px-9 mt-4 py-3 text-[1.30rem] xl:text-[18px] 3xl:text-3xl text-[#2C041C]'>Contact Information</h1>
              <p className=' hidden sm:block px-9 xl:px-20 text-[1.10rem] xl:text-[17px] 3xl:text-2xl  text-[#2C041C]'>
                Get in touch with us today to discover how we can transform your digital marketing efforts and help your business reach new heights.
              </p>
              <div className='flex px-16 xl:py-5 py-2'>
                <img className='w-10 h-10 ' src={img1} alt='vector' />
                <div className='grid -mt-3 grid-rows-2 '>
                  <a className='mt-2 ml-3 text-[#2C041C] xl:text-[17px] 3xl:text-2xl ' href='tel:+916383710401'>+916383710401</a>
                  <a className=' ml-3 text-[#2C041C] xl:text-[17px] 3xl:text-2xl'href='tel:+917395979948'>+917395979948</a>
                </div>
              </div>
              <div className='flex px-16 py-2 xl:-mt-4'>
                <img className='w-10 h-10' src={img2} alt='vector' />
                <a className='mt-2 ml-3 text-[#2C041C] xl:text-[17px] 3xl:text-2xl' href='mailto:samradigimech@gmail.com'>samradigimech@gmail.com</a>
              </div>
              <div className='flex px-16 py-2'>
                <img className='w-10 h-10' src={img3} alt='vector' />
                <p className='mt-2 -ml-24 px-28 text-[#2C041C] xl:text-[17px] 3xl:text-2xl' >No 77, Gajalakshmi nagar, 3rd Street, Nolambur, Chennai 95.</p>
              </div>
              <img className='w-82 h-40  lg:hidden xl:block xl:ml-[280px] xl:mt-[18px] 2xl:mt-[14px] 3xl:ml-[330px] 3xl:mt-[40px] xl:w-[270px] xl:h-[180px] 2xl:h-[180px] 2xl:w-[300px]' src={img4} alt='' />
            </div>
            <div>
              <form className='lg:mt-4 xl:mt-20 3xl:mt-28 lgl:mx-3 xl:mx-8 xxl:mx-9 2xl:mx-12 3xl:mx-24'>
                <div className='lg:grid grid-cols-2 lg:ml-[30px] py-1'>
                  <div className='mb-8 '>
                    <label className='block font-bold mb-1 3xl:text-xl text-[#2C041C]' htmlFor='name'>Name</label>
                    <input className='appearance-none box-border border-b py-2 px-4 lg:w-[200px] 3xl:text-xl border-[#2C041C] bg-[#F9F0F0] outline-none' id='name' name='name' type='text' placeholder='' value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div className='mb-4 '>
                    <label className='block font-bold mb-1 3xl:text-xl text-[#2C041C]' htmlFor='email'>Email</label>
                    <input className='appearance-none box-border border-b py-2 px-4 lg:w-[200px] 3xl:text-xl border-[#2C041C] bg-[#F9F0F0] outline-none ' id='email' name='email' type='email' placeholder='' value={formData.email} onChange={handleInputChange} required />
                  </div>
                </div>
                <div className='md:grid grid-cols-2 lg:ml-[30px]  mt-5'>
                  <div className='mb-4 '>
                    <label className='block  text-[#2C041C] 3xl:text-xl font-bold mb-1' htmlFor='phoneNumber'>Phone Number</label>
                    <input className='appearance-none box-border border-b py-2 px-4 lg:w-[200px] 3xl:text-xl border-[#2C041C] bg-[#F9F0F0] outline-none ' id='phoneNumber' name='phoneNumber' type='tel' placeholder='' value={formData.phoneNumber} onChange={handleInputChange} required />
                  </div>
                  <div className='mb-4'>
                    <label className='block font-bold mb-1 3xl:text-xl  text-[#2C041C]' htmlFor='product'>Product (optional)</label>
                    <input className='appearance-none box-border border-b py-2 px-4 lg:w-[200px] 3xl:text-xl border-[#2C041C] bg-[#F9F0F0] outline-none ' id='product' name='product' type='text' placeholder='' value={formData.product} onChange={handleInputChange} />
                  </div>
                  <div className='mb-8 mt-5'>
                    <label className='block font-bold mb-1 3xl:text-xl text-[#2C041C] ' htmlFor='msg'>Your Message</label>
                    <input className='appearance-none box-border border-b py-2 px-4 lg:w-[200px] 3xl:text-xl w-full bg-[#F9F0F0] border-[#2C041C] outline-none' id='msg' name='msg' type='text' placeholder='' value={formData.msg} onChange={handleInputChange} required />
                  </div>
                </div>
                <center>
                <button className='text-center text-white font-bold 3xl:text-xl mt-4 mb-4 py-2 px-7  rounded-md' type='submit' style={{ backgroundColor: '#2C041C' }}>
                  Send Message
                </button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>



{/*mobile view*/}

      <div className=' py-5 '>
        <h1 className='font-bold  text-2xl text-center sm:text-3xl md:hidden lg:hidden xl:hidden 2xl:hidden  text-[#2C041C]'>Get In Touch</h1>
        <div className='' >
          <div className=' lg:hidden xl:hidden 2xl:hidden xs:px-5 xsss:px-8 md:px-[150px]  '>
            <div className=' bg-[#FFBE2A] xs:px-6' style={{  borderRadius: '20px'}}>
              <h1 className=' font-bold  mt-10 py-3 text-[1.30em] sm:text-[25px] text-[#2C041C]' >Contact Us</h1>
              <p className='  text-[#2C041C] text-[1.12em] sm:text-[22px] '>We would love to hear from you.</p>
              <div className='flex '>
                <img className='w-10 h-10 mt-3 sm:w-12 sm:h-12' src={img1} alt='vector' />
                <div className='grid grid-rows-2'>
                  <a className='mt-2 ml-3 text-[#2C041C] sm:text-[20px]' href='tel:+916383710401'>+916383710401</a>
                  <a className=' ml-3 text-[#2C041C] sm:text-[20px]' href='tel:+917395979948'>+917395979948</a>
                </div>
              </div>
              <div className='flex  '>
                <img className='w-10 h-10 sm:w-12 sm:h-12' src={img2} alt='vector' />
                <a className='mt-2 ml-3 text-[#2C041C] sm:text-[20px]'  href='mailto:samradigimech@gmail.com'>samradigimech@gmail.com</a>
              </div>
              <div className='flex py-3 '>
                <img className='w-10 h-10 sm:w-12 sm:h-12' src={img3} alt='vector' />
                <p className='mt-2 ml-3 text-[#2C041C] sm:text-[20px]' >No 77, Gajalakshmi nagar, 3rd Street, Nolambur, Chennai 95, Tamilnadu.</p>
              </div>
            </div>
            <div>
              <form className='xs:px-4 xss:px-5 xsss:px-8'>
                <div className='mt-7 py-1'>
                  <div className=''>
                    <label className='block font-bold mb-1 text-[#2C041C] text-[15px] sm:text-[20px]' htmlFor='name'>Name</label>
                    <input className='appearance-none rounded-md px-2 mt-2  h-[51.251px] xs:w-[260px] xss:w-[300px] xsss:w-[320px]   outline-none' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}  id='name' name='name' type='text' placeholder='' value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div className=''>
                    <label className='block font-bold mt-3 text-[#2C041C] text-[16px] sm:text-[20px]' htmlFor='email' >Email</label>
                    <input className='appearance-none rounded-md px-2 mt-2  h-[51.251px] xs:w-[260px] xss:w-[300px] xsss:w-[320px]  outline-none' style={{  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }} id='email' name='email' type='email' placeholder='' value={formData.email} onChange={handleInputChange} required />
                  </div>
                </div>
                <div className=''>
                  <label className='block text-[#2C041C] font-bold mt-3 sm:text-[20px]' htmlFor='phoneNumber' >Phone Number</label>
                  <input className='appearance-none rounded-md px-2 mt-2  h-[51.251px] xs:w-[260px] xss:w-[300px] xsss:w-[330px]  outline-none ' style={{  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }} id='phoneNumber' name='phoneNumber' type='tel' placeholder='' value={formData.phoneNumber} onChange={handleInputChange} required />
                </div>
                <div className=''>
                  <label className='block  font-bold mt-3 text-[#2C041C] sm:text-[20px]' htmlFor='product' >Product (optional)</label>
                  <input className='appearance-none rounded-md px-2 mt-2  h-[51.251px] xs:w-[260px] xss:w-[300px] xsss:w-[320px]  outline-none '  style={{  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}  id='product' name='product' type='text' placeholder='' value={formData.product} onChange={handleInputChange} />
                </div>
                <div className=''>
                  <label className='block font-bold mt-3 sm:text-[20px] text-[#2C041C]' htmlFor='msg' >Your Message</label>
                  <input className='appearance-none px-2 rounded-md mt-2  h-[51.251px] xs:w-[260px] xss:w-[300px] xsss:w-[320px]   outline-none'  style={{  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}  id='msg' name='msg' type='text' placeholder='' value={formData.msg} onChange={handleInputChange} required />
                </div>
<center>
                <button className=' font-bold my-5 py-2 px-7  rounded-full sm:text-[20px] bg-[#2C041C] text-[#FFBE2A]' type='submit'>
                  Submit
                </button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talk;