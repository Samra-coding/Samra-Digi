import React, { useEffect } from "react";
import img1 from "../image/Work 1.png";
import img2 from "../image/Logo 7.png";
import img3 from "../image/Poster 1.png";
import img4 from "../image/ry.png";
import videoFile from "../image/Reel 1.mp4";

const ImageCategory1 = () => {
  const content = {
    imageUrl: img1,
    title: "Offline To Online Marketing",
    description: `Transform your business from offline to online and reach a global audience with ease. Let's take your success to the next level!`,
    title1: "Our Client ",
    title3: `Ramani , (Hindi Tution , Youtube & Social media marketing, more follower, Spoken Hindi, Hindi exams)`,
    title4: "Our Client Works",
  };
 

  // Ensure that the page starts at the top when this component renders
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className="   ">
      <div className=" md:hidden" style={{ backgroundColor: "#2C041E" }}>
        <div className="flex">
          <img className=" w-44 ml-4" src={content.imageUrl} alt="Work" />
          <h1 className=" mt-10 text-white" style={{ fontSize: "1.1em" }}>
            {content.title}
          </h1>
        </div>
        <p className=" px-6 py-3 text-white">{content.description}</p>
      </div>

      <div className="md:grid hidden mt-36 sm:block md:grid-cols-2">
        <img
          className="h-72 ml-12 w-[400px]"
          src={content.imageUrl}
          alt="Work"
        />
        <div className=" md:mt-16 md:-ml-36">
          <h1 className="font-bold md:-ml-10 md:text-black text-white md:text-3xl">
            {content.title}
          </h1>
          <li className=" list-disc  md:text-black text-white md:text-xl md:px-32 md:-ml-36 md:py-1">
            {content.description}
          </li>
        </div>
      </div>

      <div className="md:-mt-4">
        <h1
          className="font-bold text-center md:ml-20 md:-mt-2 mt-2 text-2xl md:text-3xl"
          style={{ color: "#2C041E" }}
        >
          {content.title1}
        </h1>
        <img className=" md:hidden w-32 mt-4 ml-36 " src={img2} alt="" />
        <p
          className="font-bold md:hidden px-2 mt-4 text-center"
          style={{ color: "#2C041E", fontSize: "1em" }}
        >
          {content.title3}
        </p>
        <p
          className="font-bold hidden sm:block md:py-1 md:px-96 -ml-44"
          style={{ color: "#2C041E", fontSize: "1.2em" }}
        >
          {content.title3}
        </p>
        <div className="md:flex md:ml-36 px-3 md:px-16 md:py-2">
          <p className=" md:mt-0 mt-2 text-center md:text-xl">
            Passionate towards teaching, Creative thinker, students friendly,
            can guide students for their better performance. Friendly and
            approachable to the students and maintains a safe, organised and
            comfortable environment. Better learning place and carve a niche of
            a learning system, which not just imparts bookish knowledge to
            students but trains them to be successful individuals in life. I
            have developed thorough expertise in handling Hindi classes for
            Prachar Sabha exams in Offline with personal care. In Online we
            conduct spoken Hindi classes in a simple way. Through YouTube there
            are recorded classes, and social media marketing has been made to
            raise awareness of the additional language.
          </p>
          <img
            className="md:w-36 hidden sm:block -mt-7 md:h-36 md:ml-10"
            src={img2}
            alt=""
          />
        </div>
      </div>

      <h1 className="text-center py-2 text-2xl font-bold">{content.title4}</h1>

      <div className="md:grid md:grid-cols-3 md:px-48 md:mt-0 mt-3 md:ml-40 md:py-5">
        <div>
          <img className="w-56 h-60 md:ml-0 ml-20" src={img3} alt="" />
          <p className="font-semibold hidden sm:block md:ml-20">Poster</p>
          <p className="font-semibold text-center md:hidden">Poster</p>
        </div>
        <div>
          <video className="w-1/2 md:mt-0 md:ml-0 ml-24 mt-3 h-60" controls>
            <source src={videoFile} type="video/mp4" />
          </video>
          <p className="font-semibold hidden sm:block md:ml-12">Reel</p>
          <p className="font-semibold md:hidden text-center">Reel</p>
        </div>
        <div>
          <a href="https://www.youtube.com/watch?v=RzsQ10VwKE0">
            <img
              className="w-56 md:-ml-20 md:mt-0 mt-3 ml-20 h-60"
              src={img4}
              alt="YouTube"
            />
          </a>
          <p className="font-semibold hidden sm:block md:ml-0">YouTube</p>
          <p className="font-semibold text-center md:hidden">YouTube</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCategory1;
