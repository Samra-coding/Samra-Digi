
import React, { useState, useEffect } from 'react';

const Review = () => {
  const [completedCount, setCompletedCount] = useState(0);
  const [ongoingCount, setOngoingCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  const targets = Object.freeze({
    completed: 30,
    ongoing: 50,
    clients: 150,
  });

  useEffect(() => {
    let intervals = [];

    const countUp = (target, setter) => {
      const interval = setInterval(() => {
        setter((currentCount) => {
          const nextCount = currentCount + 1;
          if (nextCount >= target) {
            clearInterval(interval);
          }
          return nextCount;
        });
      }, 50); // Adjust speed here
      intervals.push(interval);
    };

    countUp(targets.completed, setCompletedCount);
    countUp(targets.ongoing, setOngoingCount);
    countUp(targets.clients, setClientsCount);

    return () => {
      intervals.forEach(clearInterval);
    };
  }, []); // Empty dependency array is fine since targets is frozen

  return (
    <div className="lg:grid  mt-6 lg:mt-3 md:py-3 lg:py-3 xl:py-3 2xl:py-3  lg:grid-cols-3">
    <div className="font-bold text-center text-xl 2xl:text-4xl 3xl:text-5xl lg:mt-0 sm:text-2xl 4xl:text-6xl xl:ml-[-60px] md:text-4xl lg:text-3xl text-[#2C041C]" >
      <p>{completedCount}+</p>
      <p>Completed</p>
    </div>
    <div className="font-bold md:mt-3 mt-4 lg:mt-0 text-center text-xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl xl:ml-[40px] sm:text-2xl lg:text-3xl md:text-4xl text-[#2C041C]" >
      <p>{ongoingCount}+</p>
      <p>On-Going</p>
    </div>
    <div className="font-bold lg:mt-0 mb-4 mt-4 text-center text-xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl xl:ml-[30px]  sm:text-2xl lg:text-3xl md:text-4xl text-[#2C041C]" >
      <p>{clientsCount}+</p>
      <p>Satisfied Clients</p>
    </div>
  </div>
  );
};

export default Review;




