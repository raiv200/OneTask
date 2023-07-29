import React from "react";

const avatarClasses = {
  container:
    "flex items-center justify-center rounded-full w-[52px] h-[52px] bg-gray-400 dark:bg-gray-300",
  circleBox:
    "flex capitalize font-inter font-semibold text-gray-600 dark:text-gray-200 text-3xl w-[44px] h-[44px] justify-center items-center bg-gray-200 dark:bg-gray-800 rounded-full",
  image:
    "bg-gray-900 rounded-full w-[44px] h-[44px]'}  cursor-pointer hover:opacity-75",
  box: "flex items-center space-x-4 rounded-lg",
  box__extra:
    "flex items-center space-x-4 rounded-lg  ring-4 ring-gray-100  dark:ring-gray-500 py-[2px] px-2 bg-gray-900 dark:bg-gray-200",
  box__div__p1:
    "font-inter font-bold text-md text-gray-800 dark:text-gray-300 lowercase",
};

const Avatar = ({ username, imageUrl }) => {
  return (
    <div className={avatarClasses.box}>
      <div className={avatarClasses.container}>
        <div className={avatarClasses.circleBox}>
          <span>
            {imageUrl ? (
              <img className={avatarClasses.image} src={imageUrl} />
            ) : (
              <p>{username?.substring(0, 1)}</p>
            )}
          </span>
        </div>
      </div>
      <div className={avatarClasses.box__div}>
        <p className={avatarClasses.box__div__p1}>@{username}</p>
      </div>
    </div>
  );
};

export default Avatar;
