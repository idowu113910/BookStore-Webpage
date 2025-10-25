import React from "react";
import book from "../assets/book img.png";
import book2 from "../assets/book 2.png";
import logo from "../assets/desktop img.png";
import commu from "../assets/community img.png";
import adv from "../assets/Adventure img.png";
import prem from "../assets/Premium img.png";
import NavBar from "./NavBar";

const Herosection = () => {
  return (
    <div className="bg-gradient-to-r from-[#EED4CB] to-[#FFFFFF] md:h-[877px] h-[790px] -mt-2">
    
      <div className="  p-6 md:flex md:gap-25 -space-x-0.5 md:scale-95">
        <div className="flex flex-col items-center md:items-start justify-center md:justify-start md:mt-26">
          <img src={logo} alt="" className="md:hidden" />

          <p
            className="font-bold text-[36px] md:text-[64px]
        md:max-w-[574px] w-full
        text-[#1D2026] md:ml-6
        px-4 md:px-0
        leading-[44px] md:leading-[64px]
        tracking-[0.25px]
        text-center md:text-left
        mt-2"
          >
            Discover Your Next Great Read
          </p>

          <p className="font-normal text-[14px] md:text-[20px] text-[#4E5566] text-center md:text-left w-[400px] md:w-[574px] px-8 mt-2 md:mt-2.5 md:-ml-1">
            Explore a world of stories, knowledge, and inspiration at Goodness
            Bookstore. Whether you are seeking the latest bestsellers, timeless
            classics, or hidden gems, our curated selection has something for
            every reader.
          </p>

          <button className="text-[#FF6636] text-[16px] font-medium rounded-[12px] py-[16px] px-[24px] bg-[white]  w-[182px] h-[64px] mt-6 ml-6 md:block hidden">
            Shop Now
          </button>
        </div>

        <button className="text-[#FF6636] text-[16px] font-medium rounded-[12px] py-[8px] px-[24px] bg-[white] w-[330px] h-[48px] mt-4 mr-12 md:hidden block">
          Shop Now
        </button>

        <div className="mt-6 ">
          <img src={book} alt="" className="md:hidden block" />

          <img src={book2} alt="" className="md:block hidden h-[531px]" />
        </div>
      </div>

      <div
        className="md:flex md:items-center md:justify-center md:mx-auto md:border-[1px] md:border-[white] md:mt-38 mt-44 md:gap-8 md:bg-[white] md:w-[1048px] md:rounded-[12px] 
        md:p-[8px]
      md:shadow-[0_10px_2px_2px_rgba(56,119,194,0.08)]"
      >
        <div className="p-6 flex flex-col items-center justify-center mt-4">
          <img src={commu} alt="" />

          <p className="text-[16px] md:text-[20px] font-medium text-[#1D2026] text-center mt-2">
            Join Our Community
          </p>

          <p className="text-[12px] md:text-[14px] font-normal text-center w-[219px] text-[#4E5566] md:w-[274px] px-2 md:px-7.5 mt-2">
            Connect with fellow book lovers, attend exclusive events, and enjoy
            personalized recommendations
          </p>
        </div>

        <div className="p-6 flex flex-col items-center justify-center mt-4">
          <img src={adv} alt="" />

          <p className="text-[16px]  md:text-[20px] font-medium text-[#1D2026] text-center mt-2">
            Adventure and Discovery
          </p>

          <p className="text-[12px] md:text-[14px] font-normal text-center w-[219px] md:w-[222px] px-8 md:px-4 mt-2 text-[#4E5566]">
            Embark on an Adventure at our Goodness Bookstore. Every Book is a
            New Journey
          </p>
        </div>

        <div className="p-6 flex flex-col items-center justify-center mt-4">
          <img src={prem} alt="" />

          <p className="text-[16px]  md:text-[20px] font-medium text-[#1D2026] text-center mt-2">
            Exclusive and Premium
          </p>

          <p className="text-[12px] md:text-[14px] font-normal text-center w-[219px] md:w-[263px] px-2 mt-2 text-[#4E5566]">
            Experience literary luxury at Goodness Bookstore. Curated
            collections for discerning readers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
