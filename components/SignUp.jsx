import React  from "react";

import { MailIcon, LockClosedIcon, UserIcon } from "@heroicons/react/outline";

import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineGooglePlus,
} from "react-icons/ai";

import Logo from "./Logo";
import Link from "next/link";

const SignUp = ({
  username,
  email,
  password,
  handleUsername,
  handleEmail,
  handlePassword,
  handleSignUp,
}) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100  dark:bg-gray-900 z-10 overflow-hidden">
      {/* SignUp Nav Section   */}
      <div className="flex justify-between mx-auto max-w-7xl w-full h-16 bg-transparent mt-4">
        <div className="flex items-center">
          {/* Logo */}
          <Logo />
        </div>
        {/* Log In Button */}
        <div className="flex items-center space-x-4">
          <p className="text-md font-inter font-semibold text-gray-800 dark:text-gray-100">
            Already playing with TaskUpp?
          </p>
          <Link href="/login">
            <a href="/login">
              <button className="btn text-md text-gray-50 bg-gray-600 hover:bg-gray-500 shadow-md hover:shadow-2xl  hover:-translate-y-1 px-6">
                Log In
              </button>
            </a>
          </Link>
        </div>
      </div>

      <div className="pt-4 flex flex-col  w-[450px] h-[520px] rounded-2xl z-20 mx-auto mt-2">
        <div className="flex justify-center ">
          <Logo />
        </div>
        <div className="flex flex-col space-y-6 flex-1 px-12 py-4 pt-6">
          <div className="flex items-center justify-center text-3xl font-inter font-bold text-gray-900 dark:text-gray-100">
            Sign Up
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-xs font-inter font-semibold text-gray-900">
              Username
            </label>
            <div className="flex border-[1px] border-gray-500 px-2 py-2 rounded-lg hover:ring-1 hover:ring-gray-600 ">
              <UserIcon className="h-6 w-6 text-gray-500" />
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsername}
                placeholder="John Doe"
                className="pl-2 bg-gray-100 dark:bg-gray-900 text-sm font-semibold  text-gray-700 dark:text-gray-100 font-inter outline-none ml-2 w-full"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs font-inter font-semibold text-gray-900 ">
              Email
            </label>
            <div className="flex border-[1px] border-gray-500 px-2 py-2 rounded-lg  hover:ring-1 hover:ring-gray-600">
              <MailIcon className="h-6 w-6 text-gray-500" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmail}
                placeholder="example@gmail.com"
                className="pl-2 bg-gray-100 dark:bg-gray-900 text-sm font-semibold  text-gray-700 dark:text-gray-100 font-inter focus:outline-none ml-2 w-full"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2 ">
            <label className="text-xs font-inter font-semibold text-gray-900">
              Choose Password
            </label>
            <div className="flex border-[1px] border-gray-500 px-2 py-2 rounded-lg hover:ring-1 hover:ring-gray-600">
              <LockClosedIcon className="h-6 w-6 text-gray-500" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePassword}
                placeholder="Minimun 8 Characters"
                className="pl-2 bg-gray-100 dark:bg-gray-900 text-sm font-semibold text-gray-700 dark:text-gray-100 font-inter focus:outline-none ml-2 w-full"
              />
            </div>
          </div>

          <button
            onClick={handleSignUp}
            type="submit"
            className="w-full btn bg-gray-600 px-5 py-3 text-white shadow-md shadow-gray-800 hover:shadow-2xl hover:opacity-80 "
          >
            Play with TaskUpp
          </button>

          
        </div>

        <div className="w-full text-center ">
          <p className="font-inter font-normal text-[10px]  text-gray-700 dark:text-gray-100  py-[6px]">
            By clicking the button above, you agree to our
            <span className="inline-block items-center justify-center">
              <a className=" px-1 underline text-[11px] font-medium font-inter  text-gray-900 dark:text-gray-200">
                Terms of Service
              </a>
            </span>
            and
            <span className="pl-1 inline-block items-center justify-center">
              <a className="underline text-[11px] font-medium font-inter text-gray-900 dark:text-gray-100">
                Privacy Policy.
              </a>
            </span>
          </p>
        </div>
      </div>
      {/* Bg Cover */}
      {/* <div className="absolute w-full bottom-0">
        <img className="w-full " src="/bg-cover.png" alt="Bg-cover" />
      </div> */}
    </div>
  );
};

export default SignUp;
