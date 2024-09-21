import React from "react";
import logo2 from "../assets/logo2.svg";
import phone from "../assets/Footer/phone.svg";
import location from "../assets/Footer/location.svg";
import mail from "../assets/Footer/mail.png";
import wp from "../assets/Footer/wp.svg";
import tele from "../assets/Footer/tele.svg";
import skype from "../assets/Footer/skype.svg";
import fb from "../assets/Footer/fb.png";
import insta from "../assets/Footer/insta.png";
import linked from "../assets/Footer/linked.png";
import twitter from "../assets/Footer/twitter.png";

const Footer = () => {
  return (
    <footer className="w-full relative bg-fontColor text-white pt-[100px] pb-[30px]">
      <div
        className="w-[90%] m-auto grid border-b border-white pb-[30px]"
        style={{
          gridTemplateColumns: "3fr 0.8fr 0.8fr 0.8fr", // Custom grid template
        }}
      >
        {/* About section */}
        {/* About section */}
        {/* About section */}
        <div className="p-[15px] w-[40rem]">
          <div className="flex items-center gap-[100px]">
            <img src={logo2} className="w-full max-w-[212px] mb-[29px]" />
            <div className="w-fit flex flex-col gap-[20px]">
              <div className="flex items-center gap-[20px]">
                <img className="w-[20px]" src={phone} alt="" />
                <p className="text-[16px] font-p500 leading-[24.08px]">
                  +971562735617
                </p>
              </div>
              <div className="flex items-center gap-[20px]">
                <img src={location} alt="" />
                <p>India : 408, ABC Tower, Sector 135, Greater Noida, UP</p>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-justify text-white ml-[21px] text-[15px] font-[400] leading-[24px] text-[#FFFFFF99]">
              Lorem ipsum dolor sit amet consectetur. Tellus congue et libero
              purus tincidunt. Aenean turpis vel cras elementum ante. Tristique
              nunc velit in malesuada amet eget sit Lorem ipsum dolor sit amet
              consectetur. Tellus congue et libero purus tincidunt. Aenean
              turpis vel cras elementum ante. Tristique nunc velit in malesuada
              amet eget sit Lorem ipsum dolor sit amet consectetur. Tellus
              congue et libero purus tincidunt. Aenean turpis vel cras elementum
              ante.
            </p>
          </div>
        </div>
        {/* Get In Touch Column */}
        {/* Get In Touch Column */}
        {/* Get In Touch Column */}
        <div className="p-[15px]">
          <h3 className="w-fit mb-[37px] relative text-[18px]">Get In Touch</h3>
          <div className="flex items-start justify-start mb-[20px] gap-[20px]">
            <img src={wp} alt="" />
            <p className="text-[16px]">+971562735617</p>
          </div>
          <div className="flex items-start justify-start mb-[20px] gap-[20px]">
            <img src={skype} alt="" />
            <p className="text-[16px]">+971562735617</p>
          </div>
          <div className="flex items-start justify-start mb-[20px] gap-[20px]">
            <img src={tele} alt="" />
            <p className="text-[16px]">+971562735617</p>
          </div>
          <div className="flex items-start justify-start mb-[20px] gap-[20px]">
            <img src={mail} alt="" />
            <p className="text-[16px]">+971562735617</p>
          </div>
        </div>
        {/* Services */}
        {/* Services */}
        {/* Services */}
        <div className="p-[15px]">
          <h3 className="w-fit mb-[37px] relative text-[18px]">Services</h3>
          <ul>
            <li className="list-none mb-[20px]">
              <a href="">Rent a Locker</a>
            </li>
            <li className="list-none mb-[20px]">
              <a href="">Yatri Pack</a>
            </li>
            <li className="list-none mb-[20px]">
              <a href="">Wishlist</a>
            </li>
            <li className="list-none mb-[20px]">
              <a href="">My Plan</a>
            </li>
            <li className="list-none mb-[20px]">
              <a href="">VR Darshan</a>
            </li>
            <li className="list-none mb-[20px]">
              <a href="">Blogs</a>
            </li>
          </ul>
        </div>
        {/* Our Solution */}
        {/* Our Solution */}
        {/* Our Solution */}
        <div className="p-[15px]">
          <h3 className="w-fit mb-[37px] relative text-[18px]">Our Solutions</h3>
          <ul>
            <li className="list-none mb-[20px]">
              <a href="">Book Pandit Ji</a>
            </li>
            <li className="list-none mb-[20px]">
              <a href="">Cab Rentals</a>
            </li>
            <li className="list-none mb-[20px]">
              <a href="">Auto Ride</a>
            </li>
            <li className="list-none mb-[20px]">
              <a href="">My Plan</a>
            </li>
            <li className="list-none mb-[20px]">
              <a href="">Boat Ride</a>
            </li>
            <li className="list-none mb-[20px]">
              <a href="">Hotel Booking</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between w-[90%] mx-auto mt-[10px]">
        <div className="flex items-center justify-center w-fit">
          <p>
            <a
              className="text-white text-[16px] font-normal leading-[36px] no-underline font-poppins"
              href=""
            >
              Privacy Policy
            </a>
          </p>
          <p style={{ padding: "0px 10px" }}>|</p>
          <p>
            <a
              className="text-white text-[16px] font-normal leading-[36px] no-underline font-poppins"
              href=""
            >
              Terms & Conditions
            </a>
          </p>
        </div>
        <p>Copyright 2024 © Mandirwiki</p>
        <div>
          <ul className="flex items-center justify-center">
            <li className="list-none p-0 px-[15px] no-underline border-r-2 border-white mt-[10px]">
              <a href="">
                <img className="w-[30px] h-[30px]" src={fb} alt="" />
              </a>
            </li>
            <li className="list-none p-0 px-[15px] no-underline border-r-2 border-white mt-[10px]">
              <a href="">
                <img className="w-[30px] h-[30px]" src={linked} alt="" />
              </a>
            </li>
            <li className="list-none p-0 px-[15px] no-underline border-r-2 border-white mt-[10px]">
              <a href="">
                <img className="w-[30px] h-[30px]" src={twitter} alt="" />
              </a>
            </li>
            <li className="list-none p-0 px-[15px] no-underline border-r-2 border-white mt-[10px]">
              <a href="">
                <img className="w-[30px] h-[30px]" src={insta} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
