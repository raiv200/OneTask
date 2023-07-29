import React, { useState } from "react";
import { XIcon, PlusSmIcon } from "@heroicons/react/solid";

 const EditableCard = ({boardId,onClose, handleAddTaskCard}) => {
 
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  return (
    <div className="">
      <div className="relative flex flex-col space-y-3 mx-auto w-[250px] bg-gray-50 dark:bg-gray-700/70  rounded-lg px-3 py-4">
        <div className="flex flex-col mt-4 ">
          

          <input
            type="text"
            id="tasktitle"
            value={taskTitle}
            onChange={ (e) => setTaskTitle(e.target.value)}
            placeholder="Enter Task Title"
            className="pl-2 py-1 rounded-md bg-gray-100 dark:bg-gray-900/70 text-sm font-normal group-hover:cursor-not-allowed text-gray-900 dark:text-gray-200 font-inter outline-none  w-full  transition duration-300 ease-in placeholder:text-gray-900 dark:placeholder:text-gray-300"
          />
        </div>
        <div className="flex flex-col ">
          

          <textarea
            type="text"
            id="taskdesc"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Enter Task Description"
            className="pl-2 py-1 rounded-md bg-gray-100 dark:bg-gray-900/70 text-sm font-normal group-hover:cursor-not-allowed text-gray-900 dark:text-gray-200 font-inter outline-none  w-full  transition duration-300 ease-in placeholder:text-gray-900 dark:placeholder:text-gray-300"
          />
        </div>
        <div  className="flex items-center space-x-8">
          <div onClick={ () =>  handleAddTaskCard (taskTitle,taskDescription ,boardId,setTaskTitle,onClose)} className="flex items-center space-x-4  bg-gray-200 dark:bg-gray-800 rounded-lg py-2 px-3 cursor-pointer hover:ring-2 ring-gray-500  dark:ring-gray-300 transition duration-300 ease-in">
            <p className="text-xs text-gray-800 font-inter font-semibold dark:text-gray-100">
              Add Task
            </p>
            <div className="  bg-gray-900 rounded-md dark:bg-gray-100 flex items-center justify-center ">
              <PlusSmIcon className=" w-4 h-4  text-gray-100 dark:text-gray-900 " />
            </div>
          </div>
          <button  className="absolute top-1 right-1 w-6 h-6  bg-gray-200 rounded-md dark:bg-gray-800 flex items-center justify-center hover:ring-2 ring-gray-500 transition-all ">
            <XIcon onClick={onClose} className="w-4 h-4 text-gray-800 dark:text-gray-100" />
          </button>
        </div>
      </div>
    </div>
  );
};


export default EditableCard