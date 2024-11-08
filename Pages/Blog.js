import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from '../image/Frame 72.png';
import img2 from '../image/Frame 73.png';
import img3 from '../image/Frame 74.png';
import img7 from '../image/Frame 78.png'

const Blog = () => {
    const swiperRef = useRef(null); // Create a ref for the Swiper instance
    const [isSlide1Expanded, setIsSlide1Expanded] = useState(false);
    const [isSlide2Expanded, setIsSlide2Expanded] = useState(false);
    const [isSlide3Expanded, setIsSlide3Expanded] = useState(false);
    const [isSlide4Expanded, setIsSlide4Expanded] = useState(false);
    const [isSlide5Expanded, setIsSlide5Expanded] = useState(false);
    const [isSlide6Expanded, setIsSlide6Expanded] = useState(false);

    const toggleSlide1 = () => setIsSlide1Expanded(!isSlide1Expanded);
    const toggleSlide2 = () => setIsSlide2Expanded(!isSlide2Expanded);
    const toggleSlide3 = () => setIsSlide3Expanded(!isSlide3Expanded);
    const toggleSlide4 = () => setIsSlide4Expanded(!isSlide4Expanded);
    const toggleSlide5 = () => setIsSlide5Expanded(!isSlide5Expanded);
    const toggleSlide6 = () => setIsSlide6Expanded(!isSlide6Expanded);

    const fullContent1 = "Digital marketing is more than just a career; it's a journey of constant learning and adaptation...";
    const truncatedContent1 = fullContent1.length > 150 ? fullContent1.substring(0, 150) + '...' : fullContent1;

    const fullContent2 = "In recent news, Augmented Reality (AR) has taken a significant leap forward...";
    const truncatedContent2 = fullContent2.length > 150 ? fullContent2.substring(0, 150) + '...' : fullContent2;

    const fullContent3 = "In today's digital landscape, businesses have a plethora of marketing strategies at their disposal...";
    const truncatedContent3 = fullContent3.length > 150 ? fullContent3.substring(0, 150) + '...' : fullContent3;

    const fullContent4 = "Engagement on social media is crucial for businesses looking to build a strong online presence...";
    const truncatedContent4 = fullContent4.length > 150 ? fullContent4.substring(0, 150) + '...' : fullContent4;

    const fullContent5 = "Marketing vs. Advertising: It's more than a battle of words; it's a strategic dance...";
    const truncatedContent5 = fullContent5.length > 150 ? fullContent5.substring(0, 150) + '...' : fullContent5;

    const fullContent6 = "In today’s digital age, there are countless ways to make money online, with five methods particularly popular right now. First, freelancing offers individuals a flexible income stream, allowing people to leverage their skills in writing, graphic design, programming, and more on platforms like Upwork and Fiverr. Second, creating online courses has become a lucrative choice, enabling experts to package knowledge in areas from coding to cooking on sites like Udemy, generating passive income. Third, e-commerce offers an accessible path to selling products through platforms like Shopify and Amazon, requiring minimal investment in many cases. Fourth, investing in the stock market is now widely accessible, with apps allowing people to trade stocks and build wealth over time. Finally, social media influencing allows content creators to partner with brands and earn income through endorsements on platforms like Instagram and YouTube. These strategies reflect the broad range of opportunities available for earning in a digital-first economy.";
    const truncatedContent6 = fullContent6.length > 150 ? fullContent6.substring(0, 150) + '...' : fullContent6;

    useEffect(() => {
        const interval = setInterval(() => {
            if (swiperRef.current) {
                swiperRef.current.swiper.slideNext(); // Automatically slide to the next slide
            }
        }, 3000); // Set interval for every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <div className='md:hidden sm:block lg:hidden xl:hidden 2xl:hidden'>
            <Swiper
                ref={swiperRef} // Attach the ref to Swiper
                spaceBetween={5}
                slidesPerView={1}
                navigation
                loop={true}
                mousewheel={{}} // Enable mouse wheel control
                className='mt-6'
            >
                <SwiperSlide>
                    <div className='border rounded-lg bg-white shadow-[0px_2.259px_2.259px_0px_rgba(0,0,0,0.25)] xs:mx-5 xs:py-3 xss:mx-7 xsss:mx-10 '>
                        <img className='w-52 h-40 xs:mx-8 xss:mx-12 xsss:mx-16 ' src={img3} alt='' />
                        <h1 className='font-bold text-center sm:text-[20px] text-[20px]'>Organic Marketing</h1>
                        <p className='px-12 py-2 sm:text-[20px]'>{isSlide3Expanded ? fullContent3 : truncatedContent3}</p>
                        <button className='underline text-blue-500 sm:text-[20px] ml-12 py-3' onClick={toggleSlide3}>{isSlide3Expanded ? "Read Less" : "Read More"}</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border rounded-lg bg-white  shadow-[0px_2.259px_2.259px_0px_rgba(0,0,0,0.25)] xs:mx-5 xss:mx-7 xs:py-3 xsss:mx-10 '>
                        <img className='w-52 h-40 xs:mx-8 xss:mx-12 xsss:mx-16' src={img1} alt='' />
                        <h1 className='font-bold text-center sm:text-[20px] text-[20px]'>Digital Marketing</h1>
                        <p className='px-12 sm:text-[20px] py-2'>{isSlide1Expanded ? fullContent1 : truncatedContent1}</p>
                        <button className='underline text-blue-500 sm:text-[20px] ml-12 py-3' onClick={toggleSlide1}>{isSlide1Expanded ? "Read Less" : "Read More"}</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border rounded-lg bg-white  shadow-[0px_2.259px_2.259px_0px_rgba(0,0,0,0.25)] xs:mx-5 xss:mx-7 xs:py-3 xsss:mx-10'>
                        <img className='w-52 h-40 xs:mx-8 xss:mx-12 xsss:mx-16' src={img2} alt='' />
                        <h1 className='font-bold text-center sm:text-[20px] text-[20px]'>Augmented Reality</h1>
                        <p className='px-12 sm:text-[20px] py-2'>{isSlide2Expanded ? fullContent2 : truncatedContent2}</p>
                        <button className='underline text-blue-500 sm:text-[20px] ml-12 py-3' onClick={toggleSlide2}>{isSlide2Expanded ? "Read Less" : "Read More"}</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border rounded-lg bg-white  shadow-[0px_2.259px_2.259px_0px_rgba(0,0,0,0.25)] xs:mx-5 xss:mx-7 xs:py-3 xsss:mx-10'>
                        <img className='w-52 h-40 xs:mx-8 xss:mx-12 xsss:mx-16' src={img3} alt='' />
                        <h1 className='font-bold text-center sm:text-[20px] text-[20px]'>Marketing vs. Advertising</h1>
                        <p className='px-12 sm:text-[20px] py-2'>{isSlide5Expanded ? fullContent5 : truncatedContent5}</p>
                        <button className='underline text-blue-500 sm:text-[20px] ml-12 py-3' onClick={toggleSlide5}>{isSlide5Expanded ? "Read Less" : "Read More"}</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border rounded-lg bg-white  shadow-[0px_2.259px_2.259px_0px_rgba(0,0,0,0.25)] xs:mx-5 xss:mx-7 xs:py-3 xsss:mx-10'>
                        <img className='w-52 h-40 xs:mx-8 xss:mx-12 xsss:mx-16' src={img2} alt='' />
                        <h1 className='font-bold text-center ms:px-7 sm:text-[20px] text-[20px]'>Engagement on social media</h1>
                        <p className='px-12 sm:text-[20px] py-2'>{isSlide4Expanded ? fullContent4 : truncatedContent4}</p>
                        <button className='underline text-blue-500 sm:text-[20px] ml-12 py-3' onClick={toggleSlide4}>{isSlide4Expanded ? "Read Less" : "Read More"}</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border rounded-lg bg-white  shadow-[0px_2.259px_2.259px_0px_rgba(0,0,0,0.25)] xs:mx-5 xss:mx-7 xs:py-3 xsss:mx-10'>
                        <img className='w-52 h-40 xs:mx-8 xss:mx-12 xsss:mx-16' src={img7} alt='' />
                        <h1 className='font-bold text-center ms:px-7 sm:text-[20px] text-[20px]'>5 Trending ways on which people make money</h1>
                        <p className='px-12 sm:text-[20px] py-2'>{isSlide6Expanded ? fullContent6 : truncatedContent6}</p>
                        <button className='underline text-blue-500 sm:text-[20px] ml-12 py-3' onClick={toggleSlide6}>{isSlide6Expanded ? "Read Less" : "Read More"}</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Blog;
