import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

const Onboarding = ({
  username,
  displayName,
  imageUrl,
  handleDisplayName,
  handleImageUrl,
  handleOnBoard,
}) => {
  return (
    <div className="flex h-full flex-col lg:grid lg:grid-cols-10  bg-gray-100">
      <div className="flex flex-col  bg-gray-100 lg:col-span-6 pt-6">
        {/* Field1  */}
        <div className="flex items-center space-x-16 w-[900px] h-[220px]  px-8 ">
          <div className="flex bg-gray-900 items-center -mt-12 justify-center rounded-full shadow-2xl w-[70px] h-[70px]">
            <img className="w-[50px]" src="/onetask-logo-light.png" />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-4xl font-semibold font-inter text-gray-800">
              Welcome @{username} 👋.
            </p>
            <p className="text-3xl pt-2 font-normal font-inter text-gray-800">
              Our Mission is to make you more productive.
            </p>
            <p className="text-3xl font-normal font-inter text-gray-800">
              This will only take a minute.
            </p>
          </div>
        </div>

        {/* Field2  */}
        <div className="flex items-center h-[220px] space-x-16 w-[900px]  px-8 ">
          <div className="flex bg-gray-900 items-center -mt-12 justify-center rounded-full shadow-2xl w-[70px] h-[70px]">
            <img className="w-[50px]" src="/onetask-logo-light.png" />
          </div>
          <div className="flex flex-col space-y-4">
            <label className="text-3xl font-inter font-normal text-gray-900">
              Display Name:
            </label>
            <div className="flex border-b-[1px] border-gray-500 px-2 py-3">
              <input
                id="workspace"
                value={displayName}
                onChange={handleDisplayName}
                placeholder="Your Name"
                className=" text-2xl font-normal bg-gray-100 text-gray-500 font-inter focus:outline-none ml-2 w-full"
              />
            </div>
          </div>
        </div>

        {/*Field3  */}

        <div className="flex items-center h-[220px] space-x-16 w-[900px]  px-8 ">
          <div className="flex bg-gray-900 items-center -mt-12 justify-center rounded-full shadow-2xl w-[70px] h-[70px]">
            <img className="w-[50px]" src="/onetask-logo-light.png" />
          </div>
          <div className="flex flex-col space-y-4">
            <label className="text-3xl font-inter font-normal text-gray-900">
              Customize Your  Avatar:
            </label>
            <div className="flex space-x-6 items-center">

            <div
              className={`w-20 ml-4 h-20 text-gray-50 text-4xl font-semibold flex items-center justify-center  rounded-full focus:ring-4 transition duartion-300 ease-in focus:ring-gray-900 bg-violet-600 `}
              >
              {username.substring(0, 1).toUpperCase()}
            </div>
            <div className="flex border-b-[1px] border-gray-500 px-2 py-3">
              <input
                id="workspace"
                value={imageUrl}
                onChange={handleImageUrl}
                placeholder="Profile Picture URL"
                className=" text-2xl font-normal bg-gray-100 text-gray-500 font-inter focus:outline-none ml-2 w-full"
                />
            </div>
                </div>
          </div>
        </div>

        {/* Field 4  */}
        <div className="flex items-center h-[220px] space-x-16 w-[900px]  px-8 ">
          <div className="flex bg-gray-900 items-center -mt-12 justify-center rounded-full shadow-2xl w-[70px] h-[70px]">
            <img className="w-[50px]" src="/onetask-logo-light.png" />
          </div>
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-2 ">
              <p className="text-3xl font-normal font-inter text-gray-800">
                That's it.Now go and change the world.
              </p>
              <p className="text-3xl font-normal font-inter text-gray-800">
                And don't forget to have fun 🙌.
              </p>
            </div>
            <button
              onClick={handleOnBoard}
              className=" text-lg bg-gray-900 text-gray-100 dark:bg-gray-300 dark:text-gray-900 font-medium rounded-md p-2 w-[200px] "
            >
              Play with Taskupp
            </button>
          </div>
        </div>
      </div>
      <div
        className={`lg:col-span-4 flex flex-1 flex-col p-12 transition duartion-300 ease-in  bg-gray-900 `}
      ></div>
    </div>
  );
};

export default Onboarding;
