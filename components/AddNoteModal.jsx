import React, { useState } from "react";
import { XIcon, PlusSmIcon } from "@heroicons/react/solid";
import Modal from "./Modal";

const AddNoteModal = ({ onClose, handleAddNewNote }) => {
  const [note, setNote] = useState({
    id: "",
    title: "",
    description: "",
    priority: "Low",
    date: "",
  });

  const handleNoteTitle = (e) => {
    setNote({ ...note, title: e.target.value });
  };

  const handleNoteDescription = (e) => {
    setNote({ ...note, description: e.target.value });
  };
  const handleNoteDate = (e) => {
    setNote({ ...note, date: e.target.value });
  };
  const handleNotePriority = (e) => {
    setNote({ ...note, priority: e.target.value });
  };

  return (
    <Modal>
      <div className="mt-10 ">
        <div className="relative flex flex-col space-y-8 mx-auto w-[400px] bg-gray-50 dark:bg-gray-900  rounded-lg px-8 py-8">
          <div className="flex flex-col mt-4 ">
            <input
              type="text"
              id="tasktitle"
              value={note.title}
              onChange={handleNoteTitle}
              placeholder="Enter Note Title"
              className="pl-2 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-sm font-normal group-hover:cursor-not-allowed text-gray-900 dark:text-gray-200 font-inter outline-none  w-full  transition duration-300 ease-in placeholder:text-gray-900 dark:placeholder:text-gray-300"
            />
          </div>
          <div className="flex flex-col ">
            <textarea
              type="text"
              id="taskdesc"
              value={note.description}
              onChange={handleNoteDescription}
              placeholder="Enter Note Description"
              className="pl-2 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-sm font-normal group-hover:cursor-not-allowed text-gray-900 dark:text-gray-200 font-inter outline-none  w-full  transition duration-300 ease-in placeholder:text-gray-900 dark:placeholder:text-gray-300"
            />
          </div>
          <div className="flex flex-col ">
            <input
              type="date"
              id="date"
              value={note.date}
              onChange={handleNoteDate}
              placeholder="Select Date"
              className="px-4 pr-2 py-3  rounded-md bg-gray-300 dark:bg-gray-800 text-sm font-normal group-hover:cursor-not-allowed text-gray-900 dark:text-gray-200 font-inter outline-none  transition duration-300 ease-in placeholder:text-gray-900 dark:placeholder:text-gray-300"
            />
          </div>
          <div className="flex flex-col mt-4 ">
            <select
              className="px-4 pr-2 py-3  rounded-md bg-gray-300 dark:bg-gray-800 text-sm font-normal group-hover:cursor-not-allowed text-gray-900 dark:text-gray-200 font-inter outline-none  transition duration-300 ease-in placeholder:text-gray-900 dark:placeholder:text-gray-300"
              id="priority"
              value={note.priority}
              onChange={handleNotePriority}
              name="priority"
            >
              <option  value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="flex items-center space-x-8">
            <div
              onClick={() => handleAddNewNote(note.title,note.description,note.priority,note.date)}
              className="flex items-center justify-center w-full space-x-4  bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-3 cursor-pointer hover:ring-2 ring-gray-500  dark:ring-gray-300 transition duration-300 ease-in"
            >
              <p className="text-lg  text-gray-800 font-inter font-semibold dark:text-gray-100">
                Add Task
              </p>
              <div className="  bg-gray-900 rounded-md dark:bg-gray-100 flex items-center justify-center ">
                <PlusSmIcon className=" w-5 h-5  text-gray-200 dark:text-gray-900 " />
              </div>
            </div>
            <button className="absolute top-1 right-1 w-6 h-6  bg-gray-200 rounded-md dark:bg-gray-700 flex items-center justify-center hover:ring-2 ring-gray-500 transition-all ">
              <XIcon
                onClick={onClose}
                className="w-4 h-4 text-gray-800 dark:text-gray-100"
              />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddNoteModal;
