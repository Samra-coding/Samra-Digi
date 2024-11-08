import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../image/Frame 72.png";
import img2 from "../image/Frame 73.png";
import img3 from "../image/Frame 74.png";
import img4 from "../image/Frame 3.png";
import img5 from "../image/Frame 4.png";
import img6 from "../image/Frame 5.png";
import img7 from '../image/Frame 78.png'

const Carousels = () => {
  const swiperRef = useRef(null); // Create a ref for the Swiper instance

  const [isSlide1Expanded, setIsSlide1Expanded] = useState(false);
  const [isSlide2Expanded, setIsSlide2Expanded] = useState(false);
  const [isSlide3Expanded, setIsSlide3Expanded] = useState(false);
  const [isSlide4Expanded, setIsSlide4Expanded] = useState(false);
  const [isSlide5Expanded, setIsSlide5Expanded] = useState(false);
  const [isSlide6Expanded, setIsSlide6Expanded] = useState(false);
  const [isSlide7Expanded, setIsSlide7Expanded] = useState(false);

  const toggleSlide1 = () => setIsSlide1Expanded(!isSlide1Expanded);
  const toggleSlide2 = () => setIsSlide2Expanded(!isSlide2Expanded);
  const toggleSlide3 = () => setIsSlide3Expanded(!isSlide3Expanded);
  const toggleSlide4 = () => setIsSlide4Expanded(!isSlide4Expanded);
  const toggleSlide5 = () => setIsSlide5Expanded(!isSlide5Expanded);
  const toggleSlide6 = () => setIsSlide6Expanded(!isSlide6Expanded);
  const toggleSlide7 = () => setIsSlide7Expanded(!isSlide7Expanded);

  const fullContent1 =
    "Digital marketing is more than just a career; it's a journey of constant learning and adaptation. The digital landscape is ever-evolving, with new tools, platforms, and strategies emerging regularly. Embrace this change and see it as an opportunity to grow and innovate. Remember, every challenge you face is a stepping stone to success. By staying curious and committed, you can turn data into insights, and insights into impactful campaigns. Celebrate small victories and learn from setbacks. Your creativity and resilience are your greatest assets. In the vast world of digital marketing, the only limit is your imagination. Stay motivated, keep pushing boundaries, and watch your efforts transform into tangible results. ";
  const truncatedContent1 =
    fullContent1.length > 150
      ? fullContent1.substring(0, 150) + "..."
      : fullContent1;

  const fullContent2 = `In recent news, Augmented Reality (AR) has taken a significant leap forward with advancements that promise to revolutionize various industries. One notable development is the integration of AR technology into wearable devices, such as smart glasses and headsets, making immersive experiences more accessible than ever before 👨‍🔬 . Companies like Meta, Microsoft, and Google are leading the charge with innovative AR hardware and software solutions.Moreover, AR is making waves in fields like healthcare 💊 , where it is being used for surgical planning, medical training, and patient education. In education, AR-enhanced learning experiences are transforming classrooms by providing interactive and engaging content 📲 . Additionally, AR is reshaping retail, allowing customers to virtually try on products and visualize them in real-world environments.These recent developments underscore the immense potential of AR to redefine how we interact with technology and the world around us 🌎 . As AR continues to evolve, businesses and industries must stay abreast of these advancements to leverage the full potential of this transformative technology 🕹 .like 2`;
  const truncatedContent2 =
    fullContent2.length > 150
      ? fullContent2.substring(0, 150) + "..."
      : fullContent2;

  const fullContent3 = `In today's digital landscape, businesses have a plethora of marketing strategies at their disposal. Two primary methods, paid 💵 and organic marketing 🌱 , stand out for their unique approaches and benefits.Paid marketing involves investing resources into targeted advertising, sponsored content, and promotions to reach specific audiences quickly 🎯 . It provides instant visibility and can generate immediate results, making it ideal for short-term campaigns 💻 or promotions.On the other hand, organic marketing focuses on building genuine connections 🤗 and fostering engagement through high-quality content, community-building, and search engine optimization (SEO) 📈 . While it may take time to see significant results, organic marketing cultivates long-term brand loyalty and trust among audiences 👨‍👩‍👧‍👧 .To maximize marketing efforts, businesses should integrate both paid and organic strategies. By combining the immediate impact of paid advertising with the sustainable growth of organic tactics, brands can achieve a balanced and effective digital marketing 📱 approach tailored to their goals and objectives.hashtag`;
  const truncatedContent3 =
    fullContent3.length > 150
      ? fullContent3.substring(0, 150) + "..."
      : fullContent3;

  const fullContent4 = `Engagement on social media is crucial for businesses looking to build a strong online presence 📲 . It goes beyond just accumulating followers; it’s about fostering meaningful interactions 🗣 with your audience. High engagement rates—likes, comments, 💬 shares, and direct messages—indicate that your content resonates with your audience, helping to build trust 🤝 and loyalty.Engaging content encourages user participation, which can amplify your reach as engaged users share your content with their networks. This organic ☘ spread enhances brand visibility and can attract new followers 👱‍♂️ . Moreover, social media platforms’ algorithms favour content with high engagement, boosting 📈 your content’s visibility. By prioritising engagement, businesses can create a dynamic community, increase brand awareness, and drive more conversions 📊 . `;
  const truncatedContent4 =
    fullContent4.length > 150
      ? fullContent4.substring(0, 150) + "..."
      : fullContent4;

  const fullContent5 = `Marketing vs. Advertising: It's more than a battle of words; it's a strategic dance of engagement and visibility. Let Samra Digimech guide you through the nuances of both to elevate your brand's presence and drive real results. `;
  const truncatedContent5 =
    fullContent5.length > 150
      ? fullContent5.substring(0, 150) + "..."
      : fullContent5;

  const fullContent6 = `In the fast-paced world of social media, consistently generating fresh and engaging content is key to capturing audience attention 👭 and driving engagement. Here are some tips to help you spark 💥 creativity and generate content ideas for your social media channels 📌 :

1. Know Your Audience: Understand your target audience's interests, preferences, and pain points 🎯 to create content that resonates with them.

2. Stay Trendy: Keep an eye on industry trends, current events, and popular topics to capitalize 💰 on relevant content opportunities.

3. Repurpose Content: Repurpose existing content into different formats such as videos 🎬 , infographics, or blog posts to maximize reach 📈 and engagement.

4. User-Generated Content: Encourage your audience to create and share content 📥 related to your brand or products, showcasing authentic user experiences.

5. Behind-the-Scenes: Give your audience a glimpse behind the scenes of your business or organization to humanize your brand 🤝 and build trust.

6. Interactive Content: Create polls, quizzes, or interactive posts 🤔 to encourage audience participation and feedback.

By incorporating these strategies into your content planning process, you can keep your social media channels fresh, engaging, and relevant, driving audience engagement and building brand loyalty in the process 💯 .
`;
  const truncatedContent6 =
    fullContent6.length > 150
      ? fullContent6.substring(0, 150) + "..."
      : fullContent6;

      const fullContent7 = `In today’s digital age, there are countless ways to make money online, with five methods particularly popular right now. First, freelancing offers individuals a flexible income stream, allowing people to leverage their skills in writing, graphic design, programming, and more on platforms like Upwork and Fiverr. Second, creating online courses has become a lucrative choice, enabling experts to package knowledge in areas from coding to cooking on sites like Udemy, generating passive income. Third, e-commerce offers an accessible path to selling products through platforms like Shopify and Amazon, requiring minimal investment in many cases. Fourth, investing in the stock market is now widely accessible, with apps allowing people to trade stocks and build wealth over time. Finally, social media influencing allows content creators to partner with brands and earn income through endorsements on platforms like Instagram and YouTube. These strategies reflect the broad range of opportunities available for earning in a digital-first economy.`;
      const truncatedContent7 =
        fullContent7.length > 150
          ? fullContent7.substring(0, 150) + "..."
          : fullContent7;


  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideNext(); // Automatically slide to the next slide
      }
    }, 3000); // Set interval for every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="w-full mx-auto py-8 relative hidden md:block lg:block xl:block 2xl:block ">
      <Swiper
        ref={swiperRef} // Attach the ref to Swiper
        spaceBetween={5}
        slidesPerView={1}
        navigation
        loop={true}
        mousewheel={{}} // Enable mouse wheel control
        className="mt-6"
      >
        <SwiperSlide>
          <div className="text-center">
            <div className="grid grid-cols-2 md:mx-7 xl:mx-48 xxl:mx-28 3xl:mx-36">
              {/* First Column */}
              <div className="rounded-md bg-white md:mx-3 xl:mx-10 xxl:mx-20 2xl:mx-24">
                <img
                  className="w-56 mt-7  h-40 md:mx-24 lg:mx-28 xl:mx-20 2xl:mx-28 3xl:mx-52"
                  src={img3}
                  alt=""
                />
                <h1 className="font-bold" style={{ fontSize: "20px" }}>
                  Marketing vs. Advertising
                </h1>
                <p className="px-12 py-2 3xl:px-20">
                  {isSlide5Expanded ? fullContent5 : truncatedContent5}
                </p>
                {isSlide5Expanded && (
                  <img className="w-96" src={img5} alt="frame" />
                )}
                <button
                  className="underline text-blue-400 py-3 md:-ml-64 xl:-ml-64 lg:-ml-64 3xl:-ml-96"
                  onClick={toggleSlide5}
                >
                  {isSlide5Expanded ? "Read Less" : "Read More"}
                </button>
              </div>

              {/* Second Column */}
              <div className="rounded-md bg-white md:mx-3 xl:mx-10 xxl:mx-20 2xl:mx-24 3xl:mx-20">
                <img
                  className="w-56 mt-7 h-40 md:mx-24 xl:mx-20 lg:mx-28 2xl:mx-32 3xl:mx-52"
                  src={img2}
                  alt=""
                />
                <h1 className="font-bold" style={{ fontSize: "20px" }}>
                  Unlocking Creativity
                </h1>
                <p className="px-12 py-2 3xl:px-20">
                  {isSlide6Expanded ? fullContent6 : truncatedContent6}
                </p>
                {isSlide6Expanded && (
                  <img className="w-96" src={img6} alt="frame" />
                )}
                <button
                  className="underline text-blue-400 py-3 md:-ml-64 xl:-ml-64 lg:-ml-64 3xl:-ml-96"
                  onClick={toggleSlide6}
                >
                  {isSlide6Expanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <div className="grid grid-cols-2 md:mx-7 xl:mx-48 xxl:mx-28 3xl:mx-36">
              <div className="rounded-md bg-white md:mx-3 xl:mx-10 xxl:mx-20 2xl:mx-24 3xl:mx-20">
                <img
                  className="w-56 mt-7 h-40 md:mx-24 lg:mx-28 xl:mx-20 2xl:mx-28 3xl:mx-52"
                  src={img2}
                  alt=""
                />
                <h1 className="font-bold" style={{ fontSize: "20px" }}>
                  Engagement on social media
                </h1>
                <p className="px-12 py-2 3xl:px-20">
                  {isSlide4Expanded ? fullContent4 : truncatedContent4}
                </p>
                {isSlide4Expanded && (
                  <img className="w-96" src={img4} alt="frame" />
                )}
                <button
                  className=" underline text-blue-400 xl:-ml-64 md:-ml-64  lg:-ml-64 3xl:-ml-96 py-3"
                  onClick={toggleSlide4}
                >
                  {isSlide4Expanded ? "Read Less" : "Read More"}
                </button>
              </div>
              <div className="rounded-md  bg-white md:mx-3 xl:mx-10 xxl:mx-20 2xl:mx-24 3xl:mx-20">
                <img
                  className="w-56 mt-7 h-40 md:mx-24 lg:mx-28 xl:mx-20 2xl:mx-28 3xl:mx-52 "
                  src={img3}
                  alt=""
                />
                <h1 className="font-bold" style={{ fontSize: "20px" }}>
                  Organic Marketing
                </h1>
                <p className="px-12 py-2 3xl:px-20">
                  {isSlide3Expanded ? fullContent3 : truncatedContent3}
                </p>
                <button
                  className=" underline text-blue-400  py-3 md:-ml-64 xl:-ml-64  lg:-ml-64 3xl:-ml-96 "
                  onClick={toggleSlide3}
                >
                  {isSlide3Expanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-center">
            <div className="grid grid-cols-2 md:mx-7 xl:mx-48 xxl:mx-28 3xl:mx-36">
              <div className=" rounded-md bg-white  md:mx-3 xl:mx-10 py-5 xxl:mx-20 2xl:mx-24 3xl:mx-20">
                <img
                  className="w-56 mt-7 h-40 md:mx-24 lg:mx-28 xl:mx-20 2xl:mx-28 3xl:mx-52 "
                  src={img1}
                  alt=""
                />
                <h1 className="font-bold" style={{ fontSize: "20px" }}>
                  Digital Marketing
                </h1>
                <p className="px-12 py-2 3xl:px-20">
                  {isSlide1Expanded ? fullContent1 : truncatedContent1}
                </p>
                <button
                  className="underline text-blue-400 xl:-ml-64 md:-ml-64  lg:-ml-64  3xl:-ml-96 py-3"
                  onClick={toggleSlide1}
                >
                  {isSlide1Expanded ? "Read Less" : "Read More"}
                </button>
              </div>
              <div className="rounded-md bg-white md:mx-3 xl:mx-10 py-5 xxl:mx-20 2xl:mx-24 3xl:mx-20">
                <img
                  className="w-56 mt-7 h-40 md:mx-24 xl:mx-20 lg:mx-28 2xl:mx-28 3xl:mx-52 "
                  src={img2}
                  alt=""
                />
                <h1 className="font-bold" style={{ fontSize: "20px" }}>
                  Augmented Reality
                </h1>
                <p className="px-12 py-2 3xl:px-20">
                  {isSlide2Expanded ? fullContent2 : truncatedContent2}
                </p>
                <button
                  className=" underline text-blue-400  xl:-ml-64 md:-ml-64 py-3 lg:-ml-64 3xl:-ml-96 "
                  onClick={toggleSlide2}
                >
                  {isSlide2Expanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-center">
            <div className="grid grid-cols-2 md:mx-7 xl:mx-48 xxl:mx-28 3xl:mx-36">
              <div className="rounded-md bg-white md:mx-3 xl:mx-10 py-5 xxl:mx-20 2xl:mx-24 3xl:mx-20">
                <img
                  className="w-56 mt-7 h-40 md:mx-24 xl:mx-20 lg:mx-28 2xl:mx-28 3xl:mx-52 "
                  src={img7}
                  alt=""
                />
                <h1 className="font-bold" style={{ fontSize: "20px" }}>
                5 Trending ways on which people make money
                </h1>
                <p className="px-12 py-2 3xl:px-20">
                  {isSlide7Expanded ? fullContent7 : truncatedContent7}
                </p>
                <button
                  className=" underline text-blue-400  xl:-ml-64 md:-ml-64 py-3 lg:-ml-64 3xl:-ml-96 "
                  onClick={toggleSlide7}
                >
                  {isSlide7Expanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousels;
