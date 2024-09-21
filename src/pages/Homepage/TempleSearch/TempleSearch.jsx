import React from "react";
import searchIcon from "../../../assets/Homepage/search.png";
import templeList from "./index";
import VaishnoDevi1 from "../../../assets/Homepage/TempleSearch/VaishnoDevi1.png";
import {
  watch,
  pin,
  flight,
  train,
  temple,
} from "../../../assets/Homepage/TempleSearch/index";


const TempleSearch = () => {
  return (
    <div className="app__container sm:py-[25px] sm:px-[50px] sm:max-w-full md:py-[50px] md:px-[100px] md:max-w-full md:m-0">
      <h1 className="text-center text-2xl lg:text-3xl font-p700 leading-[65px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </h1>
      <div className="flex items-center justify-center relative w-[57vw] my-[50px] mx-auto">
        <input
          className="w-full rounded-[20px] shadow-custom border-none text-[2rem] font-p600 leading-[20px] py-[33px] px-[66px]"
          type="text"
          name="input"
          placeholder="Discover a Temple or City"
        />
        <img
          className="w-[40px] h-[40px] absolute right-[50px] top-[50%] translate-x-[-1/2] translate-y-[-1/2]"
          style={{transform: "translate(-50%, -50%)"}}
          src={searchIcon}
          alt="searchIcon"
        />
      </div>
      <div className="grid grid-cols-5 gap-[50px] w-[80vw] justify-center my-0 mx-auto">
        {templeList.map((item) => (
          <div className="flex flex-col justify-start gap-[30px]" key={item.title}>
            <img className="rounded-full w-[205px] h-[205px] border-2 border-solid border-[#ffffff] shadow-custom" src={item.img} alt={item.title} />
            <h3 className="text-lg font-p600 leading-[32px] text-center block">{item.title}</h3>
          </div>
        ))}
      </div>
      <div className="mt-[100px] flex gap-[50px] ">
      <img className="hidden lg:block lg:w-[400px] lg:h-[500px] shadow-custom rounded-[20px]" src={VaishnoDevi1} alt="VaishnoDevi" />
        <div className="flex flex-col items-start justify-start">
          <h4 className="text-md font-p600 leading-[37.5px] tracking-[0.3em] uppercase">Temple Details</h4>
          <h1 className="text-2xl font-p700 leading-[75px] text-left mb-[10px]">Shree Mata Vaishno Devi Temple</h1>
          <img className="mx-auto my-6 max-w-[800px] max-h-[500px] block w-auto h-auto rounded-[20px] shadow-custom lg:hidden" src={VaishnoDevi1} alt="VaishnoDevi" />
          <p className="text-sm leading-[30px] text-justify text-fontThird">
            <span className="text-sm font-p600 leading-[30px] ">Vaishno Devi Temple,</span> also known as the Shri Mata
            Vaishno Devi Temple and Vaishno Devi Bhavan, is a Hindu mandir
            (temple) located in Katra, Jammu and Kashmir, dedicated to Vaishno
            Devi, a manifestation of Durga.
          </p>
          <div className="mt-[25px]">
            <div className="grid grid-cols-3 relative gap-[50px]">
              <div className="flex flex-col gap-[15px]">
                <div className="flex items-center justify-start gap-[20px]">
                  <h5 className="text-md font-p600 leading-[30px] text-fontSecondary">Temple Timings</h5>
                  <img className="h-[25px] w-[25px] shadow-none rounded-none" src={watch} alt="watch" />
                </div>
                <div className="">
                  <p className="text-md leading-[30px] text-left">
                    <span className="font-p600">06:00</span> <span style={{fontWeight: "400"}}>AM</span> <span style={{fontWeight: "275"}}>to</span> <span className="font-p600">01:00</span> <span className="font-[400]">PM</span>
                  </p>
                  <p className="text-md leading-[30px] text-left">
                  <span className="font-p600">04:00</span> <span style={{fontWeight: "400"}}>PM</span> <span style={{fontWeight: "275"}}>to</span> <span className="font-p600">08:00</span> <span className="font-[400]">AM</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[15px]">
                <div className="flex items-center justify-start gap-[20px]">
                  <h5 className="text-md font-p600 leading-[30px] text-fontSecondary">Diety</h5>
                  <img className="h-[25px] w-[25px] shadow-none rounded-none" src={temple} alt="temple" />
                </div>
                <div>
                  <p className="text-md font-p600">Vaishno Devi</p>
                </div>
              </div>
              <div className="flex flex-col gap-[15px]">
                <div className="flex items-center justify-start gap-[20px]">
                  <h5 className="text-md font-p600 leading-[30px] text-fontSecondary">Location</h5>
                  <img className="h-[25px] w-[25px] shadow-none rounded-none" src={pin} alt="pin" />
                </div>
                <div>
                  <p className="text-md font-p600">Jammu & Kashmir</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 relative mt-[50px] gap-[70px]">
              <div className="flex flex-col gap-[15px]">
                <div className="flex items-center justify-start gap-[20px]">
                  <h5 className="text-md font-p600 leading-[30px] text-fontSecondary">Nearest Airport</h5>
                  <img className="h-[25px] w-[25px] shadow-none rounded-none" src={flight} alt="flight" />
                </div>
                <div>
                  <p className="text-md font-p600">Jammu Airport (IXJ)</p>
                </div>
              </div>
              <div className="flex flex-col gap-[15px]">
                <div className="flex items-center justify-start gap-[20px]">
                  <h5 className="text-md font-p600 leading-[30px] text-fontSecondary">Nearest Railway Station</h5>
                  <img className="h-[25px] w-[25px] shadow-none rounded-none" src={train} alt="train" />
                </div>
                <div>
                  <p className="text-md font-p600">Shree Mata Vaishno Devi Katra (SVDK)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleSearch;
