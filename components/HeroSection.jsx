import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import StarRating from "./StarRating";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col justify-between max-w-7xl w-full bg-transparent min-h-screen space-y-10 z-20 ">
      {/* NavBar */}
      <Navbar />
      {/* Main Section */}
      <div className="flex">
        {/* Left Side */}
        <div className="flex flex-col ">
          <div className="flex flex-col  space-y-8  px-6 w-[580px]">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-400 dark:bg-gradient-to-r dark:from-gray-300 dark:to-gray-700  text-5xl font-extrabold font-inter leading-snug">
            Organize, Prioritize, and Succeed with OneTask.
            </h2>
            <p className="w-[350px] text-sm font-medium text-gray-800 dark:text-gray-100 font-inter">
              All of your work in one place: Tasks, Docs, Chat, Goals, & more.
            </p>
            {/* <div className="flex flex-col space-y-4 ">
              <input
                type="text"
                className="font-inter w-96 text-lg text-violet-600 font-medium rounded-xl  px-6 py-3 border-2 border-gray-300  focus:outline-violet-600 hover:shadow-2xl "
                placeholder="Enter your email address"
              />
              <button className="w-40 btn bg-violet-600 px-5 py-3 text-white shadow-md hover:shadow-2xl hover:opacity-80">
                Get Started
              </button>
            </div> */}
          </div>

          <div className="flex flex-col items-start px-2 mt-6">
            <div className="flex items-center space-x-4  w-full">
              <StarRating />
              <p className="text-left font-inter font-semibold text-md text-gray-800 dark:text-gray-100">
                Based on 1000+ reviews on
              </p>
            </div>
            <div className="w-full h-full flex items-center px-2 space-x-4 ">
              {/* <img className="w-[150px] h-[78px]" src="/onetask-brand-1.png" alt="" /> */}
              <img className="w-[100px] h-[36px] pt-1 " src="/onetask-brand-2.png" alt="" />
              <img className="w-[120px] h-[36px] pt-1" src="/onetask-brand-3.png" alt="" />
          </div>
          </div>
          
        </div>

        {/* Right Side */}
        <div className="flex w-full relative  ">
        

          <img className=" absolute rounded-2xl w-[780px] h-[420px] -left-8 -top-2 " src="/banner-onetask.png" />
        
          <img className=" absolute rounded-2xl w-[340px] h-[420px] right-8 top-24 bounce" src="/taskinfo-onetask.png" />
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default HeroSection;
