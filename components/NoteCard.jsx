import { CalendarIcon } from "@heroicons/react/outline";
import { TrashIcon } from "@heroicons/react/solid";
import React from "react";

const NoteCard = ({
  noteId,
  title,
  description,
  priority,
  date,
  handleDeleteNote,
}) => {
  let bgColor;

  if (priority === "High") {
    bgColor = "bg-rose-500";
  } else if (priority === "Medium") {
    bgColor = "bg-amber-500";
  } else {
    bgColor = "bg-green-500";
  }

  return (
    <div className="relative flex w-[280px]   rounded-xl border-2 border-gray-700 dark:border-gray-200 hover:shadow-2xl cursor-pointer transition duration-300 ease-in">
      <div className="flex flex-col space-y-4 px-4 py-4  transition duration-300 ease-in">
        <button
          className={`label flex items-center max-w-fit py-1 px-2 shadow-md hover:shadow-2xl hover:opacity-80 ${bgColor}`}
        >
          <p className="text-[9px]  uppercase  font-inter font-bold text-gray-100 dark:text-gray-50">
            {priority}
          </p>
        </button>
        <div className="flex flex-col space-y-1">
        <p className="text-lg  font-inter font-semibold text-gray-800 dark:text-gray-200 ">
          {title}
        </p>
        <p className="mb-3 text-sm font-inter text-gray-800 dark:text-violet-100 font-normal tracking-wide ">
          {description}
        </p>

        </div>
        <button className="flex w-[131px] space-x-2  px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-80 bg-gray-200 dark:bg-gray-600 transition duration-300 ease-in">
          <CalendarIcon className=" w-5 h-5 text-gray-900 dark:text-gray-100 " />
          <p className="text-sm font-manrope font-medium text-gray-800 dark:text-gray-100">
            {date}
          </p>
        </button>
      </div>
      <div className="absolute bottom-[15px] right-2 p-1 ">
        <TrashIcon
          onClick={() => handleDeleteNote(noteId)}
          className=" w-6 h-6 text-gray-900 dark:text-gray-100 cursor-pointer "
        />
      </div>
    </div>
  );
};

export default NoteCard;
