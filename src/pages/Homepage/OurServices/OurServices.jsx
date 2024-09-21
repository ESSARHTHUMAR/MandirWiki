import React from "react";
import {
  plans,
  find,
  locker,
  yatri,
  vr,
  wishlist,
} from "../../../assets/Homepage/OurServices";

const OurServices = () => {
  return (
    <div className="app__container_bg sm:py-[25px] sm:px-[16px] md:py-[50px] md:px-[32px] md:m-0">
      <div className="relative rounded-[30px] p-[100px_68px] shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] bg-bgSecondary">
        <h3 className="text-lg font-p600 leading-[37.5px] tracking-[0.3em] uppercase text-[#080e1ecc] text-center">
          Our Services
        </h3>
        <h1 className="text-3xl font-p700 leading-[75px] text-center">
          Services We Serve
        </h1>
        <p className="text-md leading-[32px] text-center text-[#080e1e99] mt-[10px]">
          Lorem ipsum dolor sit amet consectetur. Tellus congue et libero purus
          tincidunt. Aenean turpis vel cras elementum ante. Tristique nunc velit
          in malesuada amet eget sit Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="grid grid-cols-3 justify-center p-[50px_50px_0_50px] gap-[50px]">
          <div className="flex flex-col items-center justify-center bg-white p-[44px_68px] rounded-[20px] border-[1.5px] border-[#080e1e]">
            <div
              style={{
                background:
                  "linear-gradient(136.13deg, #f44e4e -8.16%, #610083 101.66%)",
              }}
              className="w-[247px] h-[247px] relative rounded-full shadow-custom"
            >
              <img className="absolute top-[50%] left-[50%]" style={{transform: "translate(-50%,-50%)"}} src={find} alt="find" />
            </div>
            <h2 className="text-2xl font-p600 leading-[22px] text-center mt-[40px]">Find My</h2>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-[44px_68px] rounded-[20px] border-[1.5px] border-[#080e1e]">
            <div
              style={{
                background:
                  "linear-gradient(136.13deg, #82005a -8.16%, #30ffda 101.66%)",
              }} className="w-[247px] h-[247px] relative rounded-full shadow-custom"
            >
              <img className="absolute top-[50%] left-[50%]" style={{transform: "translate(-50%,-50%)"}} src={locker} alt="Rent a Locker" />
            </div>
            <h2 className="text-lg font-p600 leading-[22px] text-center mt-[40px]">Rent a Locker</h2>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-[44px_68px] rounded-[20px] border-[1.5px] border-[#080e1e]">
            <div
              style={{
                background:
                  "linear-gradient(136.13deg, #4e9bf4 -8.16%, #610083 101.66%)",
              }} className="w-[247px] h-[247px] relative rounded-full shadow-custom"
            >
              <img className="absolute top-[50%] left-[50%]" style={{transform: "translate(-50%,-50%)"}} src={yatri} alt="Yatri Pack" />
            </div>
            <h2 className="text-lg font-p600 leading-[22px] text-center mt-[40px]">Yatri Pack</h2>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-[44px_68px] rounded-[20px] border-[1.5px] border-[#080e1e]">
            <div
              style={{
                background:
                  "linear-gradient(136.13deg, #a80000 11.32%, #00a911 101.66%)",
              }} className="w-[247px] h-[247px] relative rounded-full shadow-custom"
            >
              <img className="absolute top-[50%] left-[50%]" style={{transform: "translate(-50%,-50%)"}} src={wishlist} alt="Wishlist" />
            </div>
            <h2 className="text-lg font-p600 leading-[22px] text-center mt-[40px]">Wishlist</h2>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-[44px_68px] rounded-[20px] border-[1.5px] border-[#080e1e]">
            <div
              style={{
                background:
                  "linear-gradient(136.13deg, #ff4a4a -8.16%, #ffea30 101.66%)",
              }} className="w-[247px] h-[247px] relative rounded-full shadow-custom"
            >
              <img className="absolute top-[50%] left-[50%]" style={{transform: "translate(-50%,-50%)"}} src={plans} alt="My Plans" />
            </div>
            <h2 className="text-lg font-p600 leading-[22px] text-center mt-[40px]">My Plans</h2>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-[44px_68px] rounded-[20px] border-[1.5px] border-[#080e1e]">
            <div
              style={{
                background:
                  "linear-gradient(136.13deg, #ffd600 -8.16%, #4ab19f 101.66%)",
              }} className="w-[247px] h-[247px] relative rounded-full shadow-custom"
            >
              <img className="absolute top-[50%] left-[50%]" style={{transform: "translate(-50%,-50%)"}} src={vr} alt="VR Darshan" />
            </div>
            <h2 className="text-lg font-p600 leading-[22px] text-center mt-[40px]">VR Darshan</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
