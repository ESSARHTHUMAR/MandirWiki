import React from "react";
import info from "./index";

const Information = () => {
  return (
    <div className="app__container_bg sm:py-[25px] sm:px-[16px] md:py-[50px] md:px-[32px] md:m-0">
      <div
        className="bg-bgSecondary rounded-[30px] relative py-[100px] px-[68px]"
        style={{
          boxShadow: "0px 0px 20px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h4 className="text-lg font-p600 leading-[37.5px] tracking-[0.3em] text-center text-[#080e1ecc] uppercase">
          Information
        </h4>
        <h1 className="text-3xl font-p700 leading-[75px] text-center">
          We Provide Important Information
        </h1>
        <p className="text-md leading-[32px] text-center text-[#080e1e99] mt-[10px]">
          Lorem ipsum dolor sit amet consectetur. Tellus congue et libero purus
          tincidunt. Aenean turpis vel cras elementum ante. Tristique nunc velit
          in malesuada amet eget sit Lorem ipsum dolor sit amet consectetur.
          Tellus congue et libero purus tincidunt. Aenean turpis vel cras
          elementum ante. Tristique nunc velit in malesuada amet eget sit.
        </p>
        <div className="flex justify-center items-center gap-[50px] flex-wrap mt-[50px]">
          {info.map((item) => (
            <figure key={item.title} className="flex flex-col relative">
              <img
                className="block rounded-[15px] w-[370px] h-[480px]"
                src={item.image}
                alt={item.title}
              />
              <figcaption
                className="text-lg bg-[#080d1bcc] font-p600 absolute bottom-0 left-1/2 flex items-center justify-center text-white rounded-b-[15px] h-[80px] w-[370px]"
                style={{
                  transform: "translate(-50%,-50%)",
                }}
              >
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Information;
