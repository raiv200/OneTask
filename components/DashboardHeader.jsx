import React from "react";
import ThemeChanger from "./ThemeChanger";
import Avatar from "./Avatar"

const DashboardHeader = ({username , imageUrl}) => {
  return (
    <div className="flex justify-between w-full h-20 bg-gray-200 dark:bg-gray-800/50  px-8  rounded-lg transition duration-300 ease-in border-gray-700 dark:border-gray-200 ">
      
       {/* Username  */}
      <div className="flex items-center jsutify-center">
        <p className="flex items-center justify-center text-2xl font-semibold font-inter text-gray-900 dark:text-gray-100 ">
          Welcome Back,
          <span className=" ml-3 text-2xl font-inter font-bold text-gray-800  dark:text-gray-400 ">
            @{username}
          </span>
        </p>
      </div>
      {/* User Profile & ThemeChanger  */}
      <div className="flex items-center space-x-10">
         <ThemeChanger />
         <Avatar username={username} imageUrl={imageUrl}  />
      </div>
    </div>
  );
};

export default DashboardHeader;
