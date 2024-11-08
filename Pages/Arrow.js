import React from 'react';
import img1 from "../image/Arrow1.png"
import img2 from "../image/Frame 82.png"

const PrevArrow = ({ onClick }) => {
  return (
    <button
      className=" text-black rounded-full absolute top-1/2 md:-mt-40 left-4 transform -translate-y-1/2 p-2"
      onClick={onClick}
      aria-label="Previous"
    >
      <img className='w-10 h-10 ml-20 lg:ml-10 landscape:ml-0' src={img1} alt='' />
    </button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button
      className=" absolute top-1/2 right-4 md:-mt-40 rounded-full transform -translate-y-1/2 p-2"
      onClick={onClick}
      aria-label="Next"
    >
      <img className='w-10 h-10 mr-20 lg:mr-10 landscape:mr-0' src={img2} alt='' />
    </button>
  );
};

export { PrevArrow, NextArrow };