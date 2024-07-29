import React from "react";
import "./Footer.scss";
import logo2 from "../../assets/logo2.svg";
import phone from "../../assets/Footer/phone.svg";
import location from "../../assets/Footer/location.svg";
import mail from "../../assets/Footer/mail.png";
import wp from "../../assets/Footer/wp.svg";
import tele from "../../assets/Footer/tele.svg";
import skype from "../../assets/Footer/skype.svg";
import fb from "../../assets/Footer/fb.png";
import insta from "../../assets/Footer/insta.png";
import linked from "../../assets/Footer/linked.png";
import twitter from "../../assets/Footer/twitter.png";

const Footer = () => {
  return (
    <footer className="app__container-footer">
      <div className="app__footer-row">
      {/* About section */}
      {/* About section */}
      {/* About section */}
        <div className="app__footer-col">
        <div className="app__footer-about">
          <img src={logo2} className="app__footer-logo" />
          <div className="app__footer-address">
            <div className="app__footer-phone">
              <img src={phone} alt="" />
              <p>+971562735617</p>
            </div>
            <div className="app__footer-add">
              <img src={location} alt="" />
              <p>India : 408, ABC Tower, Sector 135, Greater Noida, UP</p>
            </div>
          </div>
          </div>
          <div className="app__footer-para">
            <p>
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
        <div className="app__footer-col">
          <h3>Get In Touch</h3>
          <div className="app__footer-numbers">
            <img src={wp} alt="" />
            <p>+971562735617</p>
          </div>
          <div className="app__footer-numbers">
            <img src={skype} alt="" />
            <p>+971562735617</p>
          </div>
          <div className="app__footer-numbers">
            <img src={tele} alt="" />
            <p>+971562735617</p>
          </div>
          <div className="app__footer-numbers">
            <img src={mail} alt="" />
            <p>+971562735617</p>
          </div>
        </div>
        {/* Services */}
        {/* Services */}
        {/* Services */}
        <div className="app__footer-col">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="">Rent a Locker</a>
            </li>
            <li>
              <a href="">Yatri Pack</a>
            </li>
            <li>
              <a href="">Wishlist</a>
            </li>
            <li>
              <a href="">My Plan</a>
            </li>
            <li>
              <a href="">VR Darshan</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
          </ul>
        </div>
        {/* Our Solution */}
        {/* Our Solution */}
        {/* Our Solution */}
        <div className="app__footer-col">
          <h3>Our Solutions</h3>
          <ul>
            <li>
              <a href="">Book Pandit Ji</a>
            </li>
            <li>
              <a href="">Cab Rentals</a>
            </li>
            <li>
              <a href="">Auto Ride</a>
            </li>
            <li>
              <a href="">My Plan</a>
            </li>
            <li>
              <a href="">Boat Ride</a>
            </li>
            <li>
              <a href="">Hotel Booking</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="app__footer-bottom">
        <div className="app__footer-policy">
          <p>
            <a href="">Privacy Policy</a>
          </p>
          <p style={{ padding: "0px 10px" }}>|</p>
          <p>
            <a href="">Terms & Conditions</a>
          </p>
        </div>
        <p>Copyright 2024 © Mandirwiki</p>
        <div className="app__footer-link">
          <ul>
            <li>
              <a href="">
                <img src={fb} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={linked} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={twitter} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={insta} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
