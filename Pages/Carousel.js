import React from "react";
import Slider from "react-slick";
import img1 from "../image/Logo 8.png";
import img2 from "../image/Logo 6.png";
import img3 from "../image/Men.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // CSS for custom styling

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "350px",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "80px",
        },
      },
    ],
  };

  return (
    <div className="  py-10">
      <Slider {...settings}>
        {/* Card 1 */}
        <div className="carousel-card ">
          <div className="xss:flex xsss:mx-4 md:mx-6 lgl:mx-32 xl:mt-2 xl:mx-48 xxl:mx-56 2xl:mx-[280px]">
            <div className="ml-2">
              <img className="xs:w-16 xs:h-12 xs:mt-2 xss:mt-0 xs:mx-12 xss:mx-0 xss:w-12 xss:h-10 md:w-12 md:h-12 lg:w-20 lg:h-16" src={img1} alt="hero" />
            </div>
            <div>
              <div className="flex xss:gap-3">
                <h3 className="font-bold 2xl:text-xl">Harini</h3>
                <div className="flex mt-1 lg:gap-1">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FBB14B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FBB14B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FBB14B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FBB14B" }} />
                  <FontAwesomeIcon className="text-gray-400" icon={faStar} />
                </div>
              </div>
              <p className="xsss:text-[12px] 2xl:text-[15px]">Harini's dental care</p>
            </div>
          </div>
          <p className="py-4 2xl:text-xl">
            They are clear in what they are doing. Timely, Friendly and focused team.
          </p>
        </div>

        {/* Center Card */}
        <div className="carousel-card  ">
          <div className="xss:flex xsss:mx-4 md:mx-6 lgl:mx-32 xl:mt-2 xl:mx-48 xxl:mx-56 2xl:mx-[280px]">
            <div className="ml-2">
              <img className=" xs:w-16 xs:h-12 xs:mt-2 xss:mt-0 xs:mx-12 xss:w-12 xss:h-10 xss:mx-0 md:w-12 md:h-12 lg:w-20 lg:h-16" src={img2} alt="hero" />
            </div>
            <div>
              <div className="flex xss:gap-3 xl:mt-2 ">
                <h3 className="font-bold 2xl:text-xl">Jagan</h3>
                <div className="flex lg:gap-1 mt-1">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FBB14B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FBB14B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FBB14B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FBB14B" }} />
                  <FontAwesomeIcon className="text-gray-400" icon={faStar} />
                </div>
              </div>
              <p className="-ml-12 xsss:text-[12px] 2xl:text-[15px]">Maha Motors</p>
            </div>
          </div>
          <p className="py-4 2xl:text-xl">
            Patience is vera level 👏👏. Gave time to take decisions, didn’t rush.
          </p>
        </div>

        {/* Card 3 */}
        <div className="carousel-card ">
          <div className="xss:flex xsss:mx-4 md:mx-6 lgl:mx-32 xl:mt-2 xl:mx-48 xxl:mx-56 2xl:mx-[280px]">
            <div className="ml-2">
              <img className="xs:w-12 xs:h-12 xs:mt-2 xss:mt-0 xs:mx-12 xss:w-10 xss:h-10 xss:mx-0 md:w-12 md:h-12" src={img3} alt="hero" />
            </div> 
            <div>
              <div className="flex xss:gap-3">
                <h3 className="font-bold 2xl:text-xl">Subash</h3>
                <div className="flex lg:gap-1 mt-1">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FBB14B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FBB14B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FBB14B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FBB14B" }} />
                  <FontAwesomeIcon className="text-gray-400" icon={faStar} />
                </div>
              </div>
              <p className="xsss:text-[12px] 2xl:text-[15px]">Raja Food Processing</p>
            </div>
          </div>
          <p className="py-4 2xl:text-xl">Clear vision of the goal.</p>
        </div>

 {/* Card 4 */}
        <div className="carousel-card  ">
          <div className="xss:flex xsss:mx-4 md:mx-6 lgl:mx-32 xl:mt-2 xl:mx-48 xxl:mx-56 2xl:mx-[280px]">
            <div className="ml-2">
            <img className="xs:w-12 xs:h-12 xs:mt-2 xss:mt-0 xs:mx-12 xss:w-10 xss:h-10 xss:mx-0 md:w-12 md:h-12" src={img3} alt="hero" />
            </div>
            <div>
              <div className="flex xss:gap-3 xl:mt-2 ">
                <h3 className="font-bold 2xl:text-xl">Siva</h3>
                <div className="flex lg:gap-1 mt-1">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FBB14B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FBB14B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FBB14B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FBB14B" }} />
                  <FontAwesomeIcon className="text-gray-400" icon={faStar} />
                </div>
              </div>
              <p className=" ml-5 xsss:text-[12px] 2xl:text-[15px]">Eshvar bakery and sweets</p>
            </div>
          </div>
          <p className="py-4 px-4 2xl:text-xl">
          Samra digimech not only delivered results but also made the process easy and enjoyable. 
          </p>
        </div>

      </Slider>
    </div>
  );
};

export default Carousel;
