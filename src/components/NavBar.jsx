import React, { useState } from "react";
import ham from "../assets/hamburger 2.png";
import love from "../assets/love img.png";
import cart from "../assets/cart img.png";
import logo from "../assets/desktop img.png";
import icon from "../assets/searh icon desk.png";
import icon2 from "../assets/icon3.png";
import face from "../assets/face img desk.png";
import { useNavigate } from "react-router-dom";
import droparr from "../assets/drop down arrow.png";
import book from "../assets/book img.png";
import book2 from "../assets/book 2.png";
import commu from "../assets/community img.png";
import adv from "../assets/Adventure img.png";
import prem from "../assets/Premium img.png";
import { useSearch } from "../SearchContext";

const NavBar = ({ whiteBg, hideAuthButtons }) => {
  const [open, setOpen] = useState();
  const [isOpen, setIsOpen] = useState();
  const navigate = useNavigate();

   const { query, setQuery } = useSearch();

  const [rotated, setRotated] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <nav
        className={`md:hidden block flex justify-between p-6  ${
          whiteBg ? "bg-white" : "bg-gradient-to-r from-[#EED4CB] to-[#FFFFFF]"
        }`}
      >
        <div className="relative">
          {/* Hamburger Icon */}
          <img
            src={ham}
            alt="menu"
            onClick={() => setOpen(true)}
            className=" cursor-pointer"
          />

          {/* Overlay */}
          {open && (
            <div
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 z-40"
            ></div>
          )}

          {/* Slide Menu */}
          <div
            className={`fixed top-0 left-0 h-full w-[287px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-xl font-bold"
            >
              ×
            </button>

            <div>
              <div className="flex mt-14 ml-6 border-b-[1px] w-[247px] border-[#EAEAEA] pb-3">
                <div className="flex items-center rounded-tl-[12px] rounded-bl-[12px] w-[198px] h-[40px] border-[0.5px] border-[#FF6636]">
                  <input
                    type="text"
                    placeholder="Enter book title or Author"
                    className="placeholder:text-[14px] font-normal text-[#6E7485CC] ml-4 border-none outline-none w-full bg-transparent"
                  />
                </div>

                <div className="bg-[#FF6636] w-[49px] h-[40px] rounded-tr-[12px] rounded-br-[12px] flex items-center justify-center ">
                  <img
                    src={icon2}
                    alt=""
                    className="w-[20px] h-[20px] object-contain"
                  />
                </div>
              </div>

              <ul className="text-[#FF6636] font-medium text-[14px] p-6 flex flex-col gap-y-4">
                <div
                  aria-expanded={isOpen}
                  aria-haspopup="menu"
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex border-b-[1px] w-[247px] border-[#EAEAEA] pb-5 justify-between"
                >
                  <span className="font-medium">SHOP</span>

                  <img
                    src={droparr}
                    alt="dropdown arrow"
                    className={`w-[24px] h-[24px] ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>

                {isOpen && (
                  <ul className="bg-[#FFDDD1] text-[#1C1C1C] h-[300px] text-[14px] font-normal flex flex-col p-2 gap-y-3">
                    <li>Philosophy</li>
                    <li>Religion</li>
                    <li>Fiction</li>
                    <li>Children's Book</li>
                    <li>Business</li>
                    <li>Self Help/Motivation</li>
                    <li>History/Politics</li>
                    <li>Biography</li>
                    <li>Memoir</li>
                  </ul>
                )}

                <li className="border-b-[1px] w-[247px] border-[#EAEAEA] pb-6">
                  BOOK SUBSCRIPTION
                </li>
                <li className="border-b-[1px] w-[247px] border-[#EAEAEA] pb-6">
                  JOUR OUR BOOK CLUB
                </li>
                <li className="border-b-[1px] w-[247px] border-[#EAEAEA] pb-6">
                  SIGN UP FOR OUR NEWSLETTER
                </li>
                <li className="border-b-[1px] w-[247px] border-[#EAEAEA] pb-6 ">
                  REQUEST FOR A BOOK
                </li>
                <li className="border-b-[1px] w-[247px] border-[#EAEAEA] pb-6">
                  BE OUR VENDOR
                </li>
                <li className="border-b-[1px] w-[247px] border-[#EAEAEA] pb-6">
                  SIGN UP / LOGIN
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <img src={love} alt="" />

          <img
            onClick={() => {
              navigate("/cart");
            }}
            src={cart}
            alt=""
          />
        </div>
      </nav>

      <div
        className={`md:mx-auto border border-[#FFFFFF] w-[1440px] justify-between ${
          whiteBg
            ? "bg-[#F9F9FB]"
            : "bg-gradient-to-r from-[#EED4CB] to-[#FFFFFF] w-[1230px] -ml-80"
        } ${hideAuthButtons ? "flex justify-center" : ""}`}
      >
        {/* inner nav */}
        <nav
          className={`md:block hidden p-12 flex flex-row rounded-[12px] transition-all duration-300 ${
            hideAuthButtons ? "justify-center ml-0" : "ml-6 justify-between"
          } ${
            whiteBg
              ? "bg-white border-[1px] border-white"
              : "bg-transparent border-none"
          }`}
        >
          {/* Left: logo + search */}
          <div className="w-[886px] h-[88px] py-[20px] flex items-center gap-8 px-[40px] rounded-[12px] bg-white border border-white">
            <div className="flex gap-10">
              <img src={logo} alt="Logo" className="w-[57px] h-[34px] mt-3" />

              <div className="flex items-center h-[48px] px-2 gap-2 w-[505px] rounded-[12px] border border-[#C4C6D3] bg-[#F5F7FA]">
                <img src={icon} alt="Search" className="ml-2 mt-1" />
                <input
                  type="text"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent border-none outline-none placeholder:text-[16px] font-normal text-[#8C94A3] focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            {/* Right: icons */}
            <div className="flex gap-6">
              <img src={face} alt="User" />
              <img src={love} alt="Favorites" />
              <img
                src={cart}
                alt="Cart"
                onClick={() => navigate("/cart")}
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Right: Auth buttons (only visible on home page) */}
          {!hideAuthButtons && (
            <div className="flex justify-end -mt-16 mr-28 gap-4">
              <button className="text-[16px] font-medium text-white rounded-[8px] w-[132px] text-center bg-[#FF6636] py-[10px] px-[16px] hover:opacity-90 transition">
                Sign Up
              </button>
              <button className="text-[16px] font-medium text-[#FF6636] border border-[#FF6636] w-[132px] rounded-[8px] bg-[#FFEEE8] py-[10px] px-[16px] hover:bg-[#FFD6C4] transition">
                Login
              </button>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
