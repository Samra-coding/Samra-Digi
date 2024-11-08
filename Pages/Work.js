import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../image/offline to online.png";
import img2 from "../image/Frame 66.jpg";
import img3 from "../image/Frame 67.jpg";
import img4 from "../image/Frame 68.jpg";
import img5 from "../image/Frame 69.jpg";
import img6 from "../image/Frame 70.jpg";
import img7 from "../image/Frame 71.jpg";
import img11 from "../image/Work-01.png";
import img12 from "../image/Work-02.png";
import img14 from "../image/Work-03.png";
import img8 from "../image/Work-04.png";
import img9 from "../image/Work-05.png";
import img10 from "../image/Work-06.png";
import img13 from "../image/Work-07.png";
import Faq from "./Faq";

const Work = () => {
  const navigate = useNavigate();


  const handleImageClick = (imageName) => {
    const categoryNumber = parseInt(imageName.slice(-1), 10); // Extract the last number from the imageName
    navigate(`/imagecategory${categoryNumber}/${imageName}`); // Use backticks to interpolate the path
  };
  
  return (
    <div id="work-section">
      <div className="  py-4">
        <h1 className="font-bold mb-6 lg:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl md:mt-0 -mt-12 text-2xl text-[#2C041C] text-center">
          Work We Do
        </h1>
          <div className="landscape:grid landscape:grid-rows-4">
            <div className="md:hidden lg:hidden xl:hidden 2xl:hidden ">
              <img
                className="cursor-pointer py-3  xs:px-3 xss:px-5 xsss:px-8  xss:h-[230px] md:px-4 md:w-[360px] md:h-[220px] sm:h-[260px] "
                src={img8}
                alt="frame"
                onClick={() => handleImageClick("img1")}
              />
              <img
                className=" py-3 cursor-pointer   xs:px-3 xss:px-5  xss:h-[230px] xsss:px-8 md:px-4  md:w-[360px] md:h-[220px]  sm:h-[260px]"
                src={img9}
                alt="frame"
                onClick={() => handleImageClick("img2")}
              />
            </div>
            <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
              <img
                className=" py-3 cursor-pointer xs:px-3 xss:px-5 xss:h-[230px] xsss:px-8 md:px-4 md:w-[360px] sm:w-[450px] sm:h-[260px]  md:h-[220px] "
                src={img11}
                alt="frame"
                onClick={() => handleImageClick("img4")}
              />
              <img
                className=" py-3 cursor-pointer xs:px-3 xss:px-5  xss:h-[230px] xsss:px-8 md:px-4 md:w-[360px] sm:w-[450px] sm:h-[260px]  md:h-[220px]  "
                src={img10}
                alt="frame"
                onClick={() => handleImageClick("img3")}
              />
            </div>
            <div className="md:hidden lg:hidden xl:hidden 2xl:hidden ">
              <img
                className="cursor-pointer py-3 xs:px-3 xss:px-5 xss:h-[230px] xsss:px-8 md:px-4 md:w-[360px]  sm:w-[450px] sm:h-[260px]  md:h-[220px] "
                src={img14}
                alt="frame"
                onClick={() => handleImageClick("img7")}
              />
              <img
                className="cursor-pointer py-3  xs:px-3 xss:px-5 xss:h-[230px] xsss:px-8 md:px-4 md:w-[360px]  sm:w-[450px] sm:h-[260px]  md:h-[220px]  "
                src={img13}
                alt="frame"
                onClick={() => handleImageClick("img6")}
              />
            </div>
            <img
              className="cursor-pointer py-3 md:hidden lg:hidden  xs:px-3 xss:px-5 xss:h-[230px] xsss:px-8 md:px-4 md:w-[360px]  sm:w-[450px] sm:h-[260px]  md:h-[220px] md:mx-44 "
              src={img12}
              alt="frame"
              onClick={() => handleImageClick("img5")}
            />
          </div>




        <div className="3xl:mx-[180px] 4xl:mx-[190px]">
          <div className="flex gap-3 md:gap-2 md:px-36 lgl:px-36 mb-2 xl:px-28 2xl:px-20 ">
          
            <img
              className=" cursor-pointer hidden md:block lg:block xl:block 2xl:block md:w-[230px] md:h-[150px]  lg:w-[330px] lg:h-[200px] xl:w-[390px] xl:h-[270px] xxl:w-[460px] xxl:h-[300px] 2xl:w-[510px]  2xl:h-[350px] "
              src={img1}
              alt="frame"
              onClick={() => handleImageClick("img1")}
            />
          
            <img
              className=" cursor-pointer hidden md:block lg:block xl:block 2xl:block md:w-[220px] md:h-[130px]  lg:w-[300px] lg:h-[170px] xl:w-[400px] xl:h-[220px] xxl:w-[450px] xxl:h-[250px] 2xl:w-[490px] 2xl:h-[300px]"
              src={img2}
              alt="frame"
              onClick={() => handleImageClick("img2")}
            />
            <img
              className=" cursor-pointer hidden md:block lg:block xl:block 2xl:block md:w-[180px] md:h-[290px]  lg:w-[240px]  lg:h-[408px] xl:w-[335px] xl:h-[510px] xxl:w-[370px] xxl:h-[570px] 2xl:w-[390px] 2xl:h-[695px] "
              src={img4}
              alt="frame"
              onClick={() => handleImageClick("img4")}
            />
          </div>

          
          <div dir="ltr" className="  flex md:gap-2 md:px-4 md:ms-32 lg:ms-0 lg:px-36  xl:px-28 lgl:px-36 md:mt-[-140px] lg:mt-[-210px]  xl:mt-[-50px]  xxl:mt-[-80px] 2xl:mt-[-115px] 2xl:px-20  ">
          <img
            className="  cursor-pointer hidden md:block lg:block xl:block 2xl:block md:w-[240px] md:h-[133px]  lg:w-[320px] lg:h-[200px] lgl:w-[340px] xl:w-[400px] xl:h-[230px] xl:mt-[-187px] xxl:w-[475px] xxl:h-[260px] 2xl:w-[530px] 2xl:h-[325px] 2xl:mt-[-220px]"
            src={img3}
            alt="frame"
            onClick={() => handleImageClick("img3")}
          />
          <img
            className="   cursor-pointer hidden md:block lg:block xl:block 2xl:block md:w-[207px] md:h-[153px]  lg:w-[265px] lg:h-[233px] lgl:w-[290px] md:mt-[-20px] lg:mt-[-30px]  xl:mt-[-235px]  xl:w-[378px] xl:h-[277px] xxl:w-[432px] xxl:h-[308px]  2xl:h-[375px] 2xl:mt-[-270px] 2xl:w-[462px]"
            src={img5}
            alt="frame"
            onClick={() => handleImageClick("img5")}
          />
        </div>


        <div className=" py-2 flex md:gap-2 md:px-36 lgl:px-36 lg:gap-1 xl:px-28 2xl:ml-0 2xl:px-20 ">
          <img
            className=" cursor-pointer hidden md:block lg:block xl:block 2xl:block md:w-[318px] md:h-[160px]  lg:w-[435px] lg:h-[225px]  xl:w-[563px] xl:h-[280px] xxl:w-[645px] xxl:h-[320px] 2xl:w-[702px] 2xl:h-[354px]"
            src={img7}
            alt="frame"
            onClick={() => handleImageClick("img7")}
          />
          <img
            className="  cursor-pointer hidden md:block lg:block xl:block 2xl:block md:w-[318px] md:h-[160px]  lg:w-[435px] lg:h-[225px] lg:ml-[12px]  xl:w-[563px] xl:h-[280px] xxl:w-[645px] xxl:h-[320px] 2xl:w-[702px] 2xl:h-[354px] "
            src={img6}
            alt="frame"
            onClick={() => handleImageClick("img6")}
          />
        </div>
        </div>
        </div>
       
        <Faq />
      </div>
  );
};

export default Work;

