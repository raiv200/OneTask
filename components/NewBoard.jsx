import React from "react";
import { XIcon, PlusSmIcon } from "@heroicons/react/solid";

const NewBoard = ({newBoardTitle, handleNewBoardTitle, handleAddBoard, onClose}) => {
  return (
    <div className="relative flex flex-col space-y-3 mx-auto w-[270px] bg-gray-50 dark:bg-gray-700/70  rounded-2xl px-3 py-5 mt-2">
      <div className="flex flex-col space-y-2">
        <label className=" pl-1 text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
          Enter Board Title
        </label>

        <input
          type="text"
          id="boardTitle"
          value={newBoardTitle}
          onChange={handleNewBoardTitle}
          placeholder="Enter Board Title"
          className="pl-2 py-2 rounded-md bg-gray-100 dark:bg-gray-900/70 text-sm font-normal group-hover:cursor-not-allowed text-gray-900 dark:text-gray-200 font-inter outline-none  w-full  transition duration-300 ease-in"
        />
      </div>
      <div className="flex items-center space-x-8">
        <div
          onClick={async () => handleAddBoard(newBoardTitle)}
          className="flex items-center space-x-4  bg-gray-300 dark:bg-gray-700 rounded-lg py-2 px-3 cursor-pointer hover:ring-2 ring-gray-500  dark:ring-gray-300 transition duration-300 ease-in"
        >
          <p className="text-xs text-gray-800 font-inter font-semibold dark:text-gray-100">
            Add Board
          </p>
          <div className="  bg-gray-900 rounded-md dark:bg-violet-100 flex items-center justify-center ">
            <PlusSmIcon className=" w-4 h-4  text-gray-100 dark:text-gray-900 " />
          </div>
        </div>
        <button className="absolute top-2 right-2 w-6 h-6  bg-gray-200 rounded-md dark:bg-gray-800 flex items-center justify-center hover:ring-2 ring-gray-500 transition-all ">
          <XIcon
            onClick={onClose}
            className="w-4 h-4 text-gray-800 dark:text-gray-100"
          />
        </button>
      </div>

    </div>
  );
};

export default NewBoard;
