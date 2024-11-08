import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What is digital marketing?",
    answer:
      "Digital Marketing encompasses all online marketing efforts, including SEO,Social medis, email, and online advertising, to promote products and engage with customers.",
  },
  {
    id: 2,
    question: "Why is digital marketing important?",
    answer:
      "It helps businesses reach a larger audience, target specific demographics, measure results accurately, and engage with customers in real-time.",
  },
  {
    id: 3,
    question: "What is SEO?",
    answer:
      "SEO (Search Engine Optimization) is optimizing your website to rank higher on search engine results pages, increasing visibility and traffic.",
  },
  {
    id: 4,
    question: "How does social media marketing benefit my business?",
    answer:
      "It builds brand awareness, engages with customers, and provides insights into consumer behavior, helping to foster loyalty and drive sales.",
  },
  {
    id: 5,
    question:
      "What's the difference between organic and paid digital marketing?",
    answer:
      "Organic marketing uses upaid strategies like SEO ad content, while paid marketing involves ads and sponsored content for immediate visibility.",
  },
];

const Faq = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  // Function to toggle expansion of FAQ item
  const toggleExpansion = (itemId) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId));
    } else {
      setExpandedItems([itemId]); // Set only the clicked item as expanded
    }
  };

  return (
    <div className="lg:py-10 md:py-4">
      <h1 className="font-bold md:text-3xl text-2xl 2xl:text-4xl  3xl:text-5xl text-center  text-[#2C041C]">
        FAQs
      </h1>
      <div className="hidden sm:hidden   xl:block lg:block ">
        <div
          className="mt-12  xl:block lg:block border w-fit mx-20 py-4 h-auto rounded-md "
          style={{
            backgroundColor: "#FFBE2A",
            boxShadow: "8px 11px 10.4px 1px #00000045",
          }}
        >
          <div className="grid grid-cols-2  py-10 px-10 ">
            <div className="-ml-12 mt-8 sm:ml-[40px]">
              <h1
                className="font-bold text-3xl 3xl:text-4xl text-center"
                style={{ color: "#2C041C" }}
              >
                Any questions?
              </h1>
              <h1
                className="font-bold text-3xl 3xl:text-4xl text-center"
                style={{ color: "#2C041C" }}
              >
                we got you
              </h1>
              <p className=" text-xl 3xl:text-2xl text-center py-7">
                Got questions about digital marketing? We've got answers! Check
                out our FAQs to clear up any confusion and get your strategy on
                the right track.
              </p>
              <p
                className=" font-bold 3xl:text-3xl text-2xl"
                style={{ color: "#2C041C" }}
              >
                More FAQs -------->
              </p>
            </div>
            <div className="-ml-10 px-5">
              {faqData.map((item) => (
                <div key={item.id} className=" ml-7  mb-4 md:mb-4">
                  <div className="p-3 border-b border-black">
                    <div className="flex justify-between items-center">
                      <h2
                        className="md:text-lg 3xl:text-2xl px-7 font-semibold text-[#2C041E] text-[19px]  md:mb-1"
                      >
                        {item.question}
                      </h2>
                      <button
                        onClick={() => toggleExpansion(item.id)}
                        className=" px-2 font-bold text-xl 3xl:text-2xl py-1 "
                        style={{ color: "#2C041E" }}
                      >
                        {expandedItems.includes(item.id) ? "-" : "+"}
                      </button>
                    </div>
                    {expandedItems.includes(item.id) && (
                      <p className="text-black 3xl:text-2xl px-7">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:hidden xl:hidden ">
        <div className="lg:hidden xl:hidden hidden ">
          <div className="mt-6 w-[697px] mx-0 ml-7  py-4  bg-[#FFBE2A] rounded-md shadow-[8px 11px 10.4px 1px #00000045]">
            <div className="lg:grid-cols-2 lg:hidden xl:hidden lg:py-10 px-10">
              <div className="lg:-ml-12 lg:mt-8">
                <h1 className="font-bold text-4xl  text-center xl:text-[#2C041C]">
                  Any questions?
                </h1>
                <h1 className="font-bold text-4xl text-center  text-[#2C041C]">
                  we got you
                </h1>
                <p className=" lg:px-28  text-xl text-center py-7 ">
                  Got questions about digital marketing? We've got answers!
                  Check out our FAQs to clear up any confusion and get your
                  strategy on the right track.
                </p>
                <p className=" font-bold ml-32 text-2xl  text-[#2C041C]">
                  More FAQs -------->
                </p>
              </div>
              <div className="-ml-10 ">
                {faqData.map((item) => (
                  <div key={item.id} className=" ml-7  mb-4 md:mb-4">
                    <div className="p-3 border-b border-black">
                      <div className="flex justify-between items-center">
                        <h2 className=" px-7 font-semibold  text-[#2C041C] text-[19px]  lg:mb-1">
                          {item.question}
                        </h2>
                        <button
                          onClick={() => toggleExpansion(item.id)}
                          className=" px-2 font-bold text-xl  text-[#2C041C] py-1 "
                        >
                          {expandedItems.includes(item.id) ? "-" : "+"}
                        </button>
                      </div>
                      {expandedItems.includes(item.id) && (
                        <p className="text-black px-7">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden md:block xs:block xs:mx-4 xss:mx-7 xsss:mx-12 md:mx-32 ">
        <div className="border rounded-2xl  xs:py-4  py-7 mt-2 bg-[#FFBE2A]">
          <h1 className="font-bold text-xl sm:text-2xl py-1 text-center text-[#2C041C]">
            Any questions? we got you
          </h1>
          <p className=" py-1 px-2 text-[18px] sm:text-[22px]">
            Got questions about digital marketing? We've got answers! Check out
            our FAQs to clear up any confusion and get your strategy on the
            right track.
          </p>
          <p className=" font-bold ml-2 py-1 text-xl sm:text-2xl text-[#2C041C]">
            More FAQs ---->
          </p>
        </div>
        <div className="hidden  lg:block">
          {faqData.map((item) => (
            <div key={item.id} className="mb-4 md:mb-4">
              <div className="p-3 border rounded-md bg-white  w-80">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-[#2C041E] text-[19px] md:mb-1">
                    {item.question}
                  </h2>
                  <button
                    onClick={() => toggleExpansion(item.id)}
                    className="font-bold md:text-xl py-1 text-[#2C041E] "
                  >
                    {expandedItems.includes(item.id) ? "-" : "+"}
                  </button>
                </div>
                {expandedItems.includes(item.id) && (
                  <p className="text-black px-7">{item.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="block md:block">
          {faqData.map((item) => (
            <div key={item.id} className="  mt-5 mb-4">
              <div className="p-3 border-white border rounded-md bg-white shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.10)]  ">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-[2C041E]  sm:text-[22px]">
                    {item.question}
                  </h2>
                  <button
                    onClick={() => toggleExpansion(item.id)}
                    className="font-bold text-2xl text-[#FFBE2A]"
                  >
                    {expandedItems.includes(item.id) ? "-" : "+"}
                  </button>
                </div>
                {expandedItems.includes(item.id) && (
                  <p className="text-black px-2 ">{item.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
