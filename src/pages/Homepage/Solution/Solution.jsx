import React from "react";
import { useState } from "react";
import image from "./image";

const Solution = () => {

  const [hoveredIndex,setIndex] = useState(null)


  return (
    <div className="app__container sm:py-[25px] sm:px-[50px] sm:max-w-full md:py-[50px] md:px-[100px] md:max-w-full md:m-0">
      <div>
        <h3 className="text-center uppercase text-lg font-p600 leading-[37.5px] tracking-[0.3em] text-[#080e1ecc]">Solutions</h3>
        <h1 className="text-center leading-[75px] font-p700 text-3xl">Our Travelling Solutions</h1>
        <p className="text-md leading-[32px] text-center text-[#080e1e99] mt-[10px]">
          Lorem ipsum dolor sit amet consectetur. Tellus congue et libero purus
          tincidunt. Aenean turpis vel cras elementum ante. Tristique nunc velit
          in malesuada amet eget sit Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="flex items-center justify-center gap-[40px] mt-[50px] flex-wrap">
          {image.map((item, index) => (
            <div onMouseEnter={() => setIndex(index)} onMouseLeave={() => setIndex(null)} key={item.title} className="flex flex-col justify-center items-center gap-[40px]">
              <div className={`relative rounded-full border-3 border-white w-[230px] h-[230px] ${hoveredIndex === index ? "bg-fontColor" : "bg-[#080e1ecc]"}`}  style={{
        boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.1)", // Custom box shadow
      }}>
                <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{
        color: "#efeeee", // Custom text color
      }} src={item.img} alt="item" />
              </div>
              <h4 className={`text-lg leading-[12px] text-center ${hoveredIndex === index ? "font-p600" : ""}`}>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solution;
