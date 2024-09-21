import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Faq.css";
import left from "../../../assets/left.png"
import right from "../../../assets/right.png"

export default function FaqSlider() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <img src={left} alt="" />,
    nextArrow: <img src={right} alt="" />,
  };
  return (
    <div className="faqs_outer">
      <div className="text-[#080E1ECC] text-lg leading-[37.5px] tracking-[0.3em] font-p600 text-center uppercase">Have aNY DOUBTS?</div>
      <div className="heading text-3xl leading-[75px] text-center font-p700">Frequently Asked Questions</div>
      <Slider {...settings}>
        <div className="slide_box">
          <h3 className="text-md font-p500 leading-[35px] text-center mb-8">What is the Mandir Wiki?</h3>
          <p className="text-md font-400 text-[#080E1E99] text-center leading-[35px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate.
          </p>
        </div>
        <div className="slide_box">
          <h3 className="text-md font-p500 leading-[35px] text-center mb-8">What is the Mandir Wiki?</h3>
          <p className="text-md font-400 text-[#080E1E99] text-center leading-[35px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate.
          </p>
        </div>
        <div className="slide_box">
          <h3 className="text-md font-p500 leading-[35px] text-center mb-8">What is the Mandir Wiki?</h3>
          <p className="text-md font-400 text-[#080E1E99] text-center leading-[35px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate.
          </p>
        </div>
        <div className="slide_box">
          <h3 className="text-md font-p500 leading-[35px] text-center mb-8">What is the Mandir Wiki?</h3>
          <p className="text-md font-400 text-[#080E1E99] text-center leading-[35px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate.
          </p>
        </div>
      </Slider>
    </div>
  );
}
