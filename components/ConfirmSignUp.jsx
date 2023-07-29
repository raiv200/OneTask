import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const ConfirmSignUp = ({ authCode, handleAuthCode, handleConfirmSignUp }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-50 z-10 overflow-hidden">
      {/* SignUp Nav Section   */}
      <div className="flex justify-between mx-auto max-w-7xl w-full h-16 bg-transparent mt-4">
        <div className="flex items-center">
          {/* Logo */}
          <Logo />
        </div>
        {/* Log In Button */}
        {/* <div className="flex items-center space-x-4">
          <p className="text-md font-inter font-semibold text-gray-800">
            Already playing with TaskUpp?
          </p>
          <Link href="/login">
            <a href="/login">
              <button className="btn text-md text-gray-50 bg-violet-600 hover:bg-violet-500 shadow-md hover:shadow-2xl  hover:-translate-y-1 px-6">
                Log In
              </button>
            </a>
          </Link>
        </div> */}
      </div>

      <div className="pt-6 flex flex-col bg-gray-50 shadow-2xl w-[450px] h-[360px] rounded-2xl z-20 mx-auto mt-20">
        <div className="flex flex-col space-y-6 flex-1 px-12 py-4 pt-6">
          <div className="flex items-center justify-center text-3xl font-inter font-bold text-gray-800">
            We Emailed You
          </div>
          <p className="flex text-center items-center justify-center text-sm font-inter font-medium text-gray-800">
            Your Code is on the way. To log In enter the code we emailed you. It
            may take a minute to arrive.
          </p>

          <div className="flex flex-col space-y-2">
            <label className="text-xs font-inter font-semibold text-gray-900">
              Enter Code
            </label>
            <div className="flex border-[1px] border-gray-500 px-2 py-2 rounded-lg">
              <input
                id="code"
                value={authCode}
                onChange={handleAuthCode}
                placeholder="Enter your code"
                className="pl-2 bg-gray-50 text-sm font-normal text-gray-500 font-inter focus:outline-none ml-2 w-full"
              />
            </div>
          </div>

          <button
            onClick={handleConfirmSignUp}
            type="submit"
            className="w-full btn bg-gray-900 px-5 py-3 text-white dark:bg-gray-100 dark:text-gray-900 hover:opacity-80"
          >
            Confirm
          </button>
        </div>
      </div>
      {/* Bg Cover */}
      {/* <div className="absolute w-full bottom-0">
        <img className="w-full " src="/bg-cover.png" alt="Bg-cover" />
      </div> */}
    </div>
  );
};

export default ConfirmSignUp;
