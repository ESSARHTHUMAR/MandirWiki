import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import arrow from "../assets/arrow.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const items = [
    { item: "home", path: "/" },
    { item: "about us", path: "/about-us" },
    { item: "our services", path: "/our-services" },
    { item: "other services", path: "/other-services" },
  ];

  return (
    <nav className="w-full flex justify-between items-center py-5 px-10 lg:py-[1.25rem] lg:px-[6.25rem] mx-auto flex-wrap">
      <div className="flex justify-start items-center cursor-pointer">
        <Link to="/">
          <img className="w-28 lg:w-full" src={logo} alt="Mandir Wiki" />
        </Link>
      </div>
      <ul className="hidden lg:flex items-center flex-wrap">
        {items.map((item) => (
          <li className="my-0 mx-8 cursor-pointer" key={item.item}>
            <Link
              className="text-sm font-p600 capitalize text-center"
              to={item.path}
            >
              {item.item}
            </Link>
          </li>
        ))}
      </ul>
      <button className="hidden rounded-3xl bg-fontColor py-2 px-4 text-bgColor w-[169px] h-[47px] lg:flex items-center justify-center gap-[10px] text-md font-p700">
        Sign Up <img src={arrow} alt="arrow" />
      </button>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {/* Mobile Menu */}

      <div className="w-[35px] h-[35px] rounded-full relative flex items-center justify-center bg-fontColor lg:hidden cursor-pointer">
        <GiHamburgerMenu
          className="w-[70%] h-[70%] text-bgColor p-1"
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <AnimatePresence mode="wait">
            <motion.div
              // whileInView={{ x: [300, 0] }}
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              exit={{ x: 500 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 bottom-0 right-0 z-5 p-4 w-[80%] flex flex-col items-end justify-end bg-fontColor z-50"
            >
              <IoClose
                className="w-[35px] h-[35px] my-2 mx-4 bg-white text-fontColor rounded-full"
                onClick={() => setToggle(false)}
              />
              <ul className="m-0 p-0 w-full h-full flex flex-col items-start justify-start">
                {items.map(
                  (item) => (
                    <li className="m-6" key={item.item}>
                      <Link
                        className="text-white uppercase text-sm font-p600"
                        onClick={() => setToggle(false)}
                        to={item.path}
                      >
                        {item.item}
                      </Link>
                    </li>
                  )
                )}
                <button className="mt-5 rounded-3xl py-[10px] px-[15px] border-none bg-fontSecondary text-bgColor w-full flex items-center justify-center gap-[10px] text-md font-p700 text-center uppercase">
                  Sign Up <img src={arrow} alt="arrow" />
                </button>
              </ul>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
