import React from "react";
import "./HeroSection.css"
import location from "../../../assets/Homepage/location.svg"

const HeroSection = () => {
  return (
    <div className="app__heroSection w-full h-[85vh] mb-12 relative flex flex-col items-start justify-center">
      <h1 className="lg:text-4xl text-3xl font-p700 leading-[75px] w-fit lg:w-[60vw] ml-[40px] lg:ml-[92px] mb-[24px] text-left">
        Shri Ram Mandir Janmabhumi Ayodhya
      </h1>
      <div className="flex items-center ml-[40px] lg:ml-[92px] gap-[20px]">
            <img className="w-[35px] h-[45px] lg:w-[44px] lg:h-[52px]" src={location} alt="location" />
            <h2 className="text-xl lg:text-2xl font-pRegular leading-[52px]">Ayodhya (UP)</h2>
        </div>
    </div>
  );
};

export default HeroSection;
