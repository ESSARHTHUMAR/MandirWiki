import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import {motion} from "framer-motion"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about us", "our services", "other services"].map((item) => (
          <li key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <button className="app__navbar-button">
        Sign Up <img src={arrow} alt="arrow" />
      </button>
      <div className="app__navbar-menu">
        <GiHamburgerMenu onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <IoClose onClick={() => setToggle(false)} />
            <ul>
              {["home", "about us", "our services", "other services"].map(
                (item) => (
                  <li key={item}>
                    <a onClick={() => setToggle(false)} href={`#${item}`}>{item}</a>
                  </li>
                )
              )}
            <button>
        Sign Up <img src={arrow} alt="arrow" />
      </button>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
