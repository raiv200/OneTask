import React, { useEffect } from "react";
import {
  BookmarkIcon,
  PencilAltIcon,
  CalendarIcon,
  TagIcon,
  TrashIcon,
  ClipboardListIcon,
  MenuAlt1Icon,
} from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import Modal from "./Modal";
import Label from "./Label";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const colors = [
  "#d42c2e",
  "#ef751f",
  "#ed9e14",
  "#b82ed6",
  "#22c362",
  "#11b883",
  "#2dd2c1",
  "#23d2ee",
  "#2565ec",
  "#8a5cf5",
];

const TaskCardInfo = ({
  showModal,
  handleShowModal,
  cardId,
  card,
  boardId,
  calculatePercentage,
  handleUpdateTaskCard,
}) => {
  const [editField, setEditField] = useState({
    title: false,
    description: false,
    labels: false,
    date: false,
    tasks: false,
  });

  const [tempCard, setTempCard] = useState({ ...card });
  const [activeColor, setActiveColor] = useState("");
  const [newLabel, setNewLabel] = useState("");
  const [newTask, setNewTask] = useState("");
  const [checked,setChecked] = useState(false);

  const handleEditField = (field) => {
    setEditField((prevValue) => {
      if (field === "title") {
        return {
          title: true,
          description: prevValue.description,
          labels: prevValue.labels,
          date: prevValue.date,
          tasks: prevValue.tasks,
        };
      }

      if (field === "description") {
        return {
          title: prevValue.title,
          description: true,
          labels: prevValue.labels,
          date: prevValue.date,
          tasks: prevValue.tasks,
        };
      }

      if (field === "labels") {
        return {
          title: prevValue.title,
          description: prevValue.description,
          labels: true,
          date: prevValue.date,
          tasks: prevValue.tasks,
        };
      }

      if (field === "date") {
        return {
          title: prevValue.title,
          description: prevValue.description,
          labels: prevValue.labels,
          date: true,
          tasks: prevValue.tasks,
        };
      }

      if (field === "tasks") {
        return {
          title: prevValue.title,
          description: prevValue.description,
          labels: prevValue.labels,
          date: prevValue.date,
          tasks: true,
        };
      }
    });
  };

  const handleUpdatedTitle = (e) => {
    const newTitle = e.target.value;
    setTempCard({ ...tempCard, title: newTitle });
  };

  const handleUpdatedDescription = (e) => {
    const newDescription = e.target.value;
    setTempCard({ ...tempCard, description: newDescription });
  };

  const handleUpdatedDate = (e) => {
    const date = e.target.value;
    setTempCard({ ...tempCard, date: date });
  };

  const handleAddUpdatedLabels = (newLabel, color) => {
    const index = tempCard?.labels?.findIndex((item) => item.text === newLabel);

    if (index > -1 || newLabel === "" || newLabel === null) {
      alert("Label field is Empty !!");
      return;
    }
    const label = {
      id: uuid(),
      text: newLabel,
      color: color ? color : "#8a5cf5",
    };
 
    setTempCard({ ...tempCard, labels: [...tempCard?.labels, label] });
    setNewLabel("");
    setActiveColor("");
  };

  const handleRemoveLabel = (id) => {
    const index = tempCard?.labels?.findIndex((item) => item.id === id);

    if (index < 0) {
      return;
    }

    const label = tempCard?.labels.filter((item) => item.id !== id);

    setTempCard({ ...tempCard, labels: label });

  };

  const handleTaskComplete = async (taskId) => {
    const index = tempCard?.tasks?.findIndex((item) => item.id === taskId);

    if (index < 0) {
      return;
    }
    
    const tempTasks= [...tempCard?.tasks];

    const tempTask = {
      id: taskId,
      title: tempTasks[index].title,
      completed: !tempTasks[index].completed,
    };

    tempTasks.splice(index,1);

    setTempCard({ ...tempCard,tasks:[...tempTasks,tempTask ]});
    setChecked(!checked);
  };

  const handleAddTasks = (task) => {
 
    if (task === "" || task.length === 0) {
      return;
    }

    const tempTask = {
      id: uuid(),
      title: task,
      completed: false,
    };

    setTempCard({ ...tempCard, tasks: [...tempCard?.tasks, tempTask] });
    setNewTask("");

  
  };

  const handleRemoveTasks = (taskId) => {
    const index = tempCard?.tasks?.findIndex((item) => item.id === taskId);
    if (index < 0) {
      return;
    }

    const tempTasks = tempCard?.tasks.filter((item) => item.id !== taskId);

    setTempCard({ ...tempCard, tasks: tempTasks });
  };

  return (
    <>
      <Modal showModal={showModal}>
        <div className="relative bg-gray-100 z-50 dark:bg-gray-800 max-h-[650px] w-[510px] rounded-xl shadow-2xl mx-auto py-4 mt-6 ">
          <div className=" space-y-4 max-h-[570px] w-[510px] overflow-y-scroll custom-scroll">
            {/* Title */}
            <div className="flex flex-col space-y-2 px-6">
              <div className="flex  justify-between items-center ">
                <span className="  flex items-center space-x-2 decoration-none font-inter px-2 py-2 text-gray-800 font-semibold ">
                  <BookmarkIcon className=" w-5 h-5 text-gray-900 dark:text-gray-100 " />
                  <p className="  text-md font-inter font-bold text-gray-800  dark:text-gray-100">
                    Title
                  </p>
                </span>
                <div className="  flex  ">
                  <button
                    onClick={() => handleEditField("title")}
                    className=" label bg-gray-900 dark:bg-gray-100 text-xs px-3 uppercase py-1 font-inter font-bold text-gray-100 dark:text-gray-900 shadow-md hover:shadow-2xl hover:opacity-80"
                  >
                    Edit
                  </button>
                </div>
              </div>

              <div className="inline-block px-2">
                {!editField.title ? (
                  <div className="flex justify-between space-x-6">
                    <span className="bg-gray-300 dark:bg-gray-700 w-4/5 px-4 py-2 rounded-md text-[14px] font-inter font-normal text-gray-800 dark:text-gray-100 cursor-pointer">
                      {tempCard?.title}
                    </span>
                  </div>
                ) : (
                  <div className="flex w-full justify-between ">
                    <input
                      autoFocus
                      type="text"
                      id="title"
                      value={tempCard?.title}
                      onChange={handleUpdatedTitle}
                      placeholder="Enter Task Title"
                      className="px-4 py-3 w-[300px] rounded-md bg-gray-300 dark:bg-gray-700 text-sm font-normal group-hover:cursor-not-allowed text-gray-900 dark:text-gray-200 font-inter outline-none  transition duration-300 ease-in placeholder:text-gray-900 dark:placeholder:text-gray-300"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Description */}

            <div className="flex item-center flex-col space-y-2 px-6">
              <div className="flex  justify-between items-center ">
                <span className="  flex items-center space-x-2 decoration-none font-inter px-2 py-2 text-gray-800 font-semibold ">
                  <MenuAlt1Icon className=" w-5 h-5 text-gray-900 dark:text-gray-100 " />
                  <p className="  text-md  font-inter font-bold text-gray-800  dark:text-gray-100">
                    Description
                  </p>
                </span>
                <div className="  flex  ">
                  <button
                    onClick={() => handleEditField("description")}
                    className=" label bg-gray-900 dark:bg-gray-100 text-xs px-3 uppercase py-1 font-inter font-bold text-gray-100 dark:text-gray-900 shadow-md hover:shadow-2xl hover:opacity-80"
                  >
                    Edit
                  </button>
                </div>
              </div>

              <div className="inline-block  px-2 ">
                {!editField.description ? (
                  <div className="flex justify-between space-x-6 ">
                    <span className="bg-gray-300 dark:bg-gray-700 w-4/5 px-4 py-2 rounded-md text-[14px] font-inter font-normal text-gray-800 dark:text-gray-100 cursor-pointer">
                      {tempCard?.description}
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col  ">
                    <input
                      autoFocus
                      type="text"
                      id="description"
                      value={tempCard?.description}
                      onChange={handleUpdatedDescription}
                      placeholder="Enter Task Description"
                      className="px-4 py-3 w-[300px] rounded-md bg-gray-300 dark:bg-gray-700 text-sm font-normal group-hover:cursor-not-allowed text-gray-900 dark:text-gray-200 font-inter outline-none  transition duration-300 ease-in placeholder:text-gray-900 dark:placeholder:text-gray-300"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Date */}

            <div className="flex item-center flex-col space-y-2 px-6">
              <div className="flex  justify-between items-center ">
                <span className="  flex items-center space-x-2 decoration-none font-inter px-2 py-2 text-gray-800 font-semibold ">
                  <CalendarIcon className=" w-5 h-5 text-gray-900 dark:text-gray-100 " />
                  <p className="  text-md font-inter font-bold text-gray-800  dark:text-gray-100">
                    Date
                  </p>
                </span>
                <div className="  flex  ">
                  <button
                    onClick={() => handleEditField("date")}
                    className=" label bg-gray-900 dark:bg-gray-100 text-xs px-3 uppercase py-1 font-inter font-bold text-gray-100 dark:text-gray-900 shadow-md hover:shadow-2xl hover:opacity-80"
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div className="inline-block  px-2 ">
                {!editField.date ? (
                  <div className="flex justify-between space-x-6  ">
                    <span className="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-md text-[14px] font-inter font-bold text-gray-800 dark:text-gray-100 cursor-pointer">
                      {tempCard?.date}
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col ">
                    <input
                      autoFocus
                      type="date"
                      id="date"
                      value={tempCard?.date}
                      onChange={handleUpdatedDate}
                      placeholder="Select Date"
                      className="px-4 pr-2 py-3 w-[300px] rounded-md bg-gray-300 dark:bg-gray-700 text-sm font-normal group-hover:cursor-not-allowed text-gray-900 dark:text-gray-200 font-inter outline-none  transition duration-300 ease-in placeholder:text-gray-900 dark:placeholder:text-gray-300"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Labels */}
            <div className="flex item-center flex-col space-y-2 px-6">
              <div className="flex  justify-between items-center ">
                <span className="  flex items-center space-x-2 decoration-none font-inter px-2 py-2 text-gray-800 font-semibold ">
                  <TagIcon className=" w-5 h-5 text-gray-900 dark:text-gray-100 " />
                  <p className="  text-md font-inter font-bold text-gray-800  dark:text-gray-100">
                    Labels
                  </p>
                </span>
                <div className="  flex  ">
                  <button
                    onClick={() => handleEditField("labels")}
                    className=" label bg-gray-900 dark:bg-gray-100 text-xs px-3 uppercase py-1 font-inter font-bold text-gray-100 dark:text-gray-900 shadow-md hover:shadow-2xl hover:opacity-80"
                  >
                    Edit
                  </button>
                </div>
              </div>

              <div className="inline-block  px-2 ">
                {!editField.labels ? (
                  <div className="flex justify-between space-x-6 ">
                    <div className="flex space-x-1">
                      {tempCard?.labels?.map((label, index) => (
                        <Label
                          key={index}
                          id={label.id}
                          text={label.text}
                          close={false}
                          color={label.color}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-4">
                    <div className="flex space-x-1">
                      {tempCard?.labels?.map((label, index) => (
                        <Label
                          key={index}
                          id={label.id}
                          text={label.text}
                          close={true}
                          color={label.color}
                          handleRemoveLabel={handleRemoveLabel}
                        />
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {colors.map((item, index) => (
                        <li
                          key={item}
                          className={`w-4 h-4 rounded-full  list-none hover:ring-[3px] hover:ring-gray-800 dark:hover:ring-gray-100 cursor-pointer ${
                            item === activeColor
                              ? "ring-[3px] ring-gray-800 dark:ring-gray-100 scale-105"
                              : ""
                          }`}
                          onClick={() => setActiveColor(item)}
                          style={{ backgroundColor: item }}
                        />
                      ))}
                    </div>
                    <div className="flex  space-x-4 ">
                      <input
                        autoFocus
                        type="text"
                        id="labels"
                        value={newLabel}
                        onChange={(e) => setNewLabel(e.target.value)}
                        placeholder="Enter New Label"
                        className="px-4 pr-2 py-3 w-[200px] rounded-md bg-gray-300 dark:bg-gray-700 text-sm font-normal group-hover:cursor-not-allowed text-gray-900 dark:text-gray-200 font-inter outline-none  transition duration-300 ease-in placeholder:text-gray-900 dark:placeholder:text-gray-300"
                      />
                      <div className="  flex justify-between items-center">
                        <button
                          onClick={() =>
                            handleAddUpdatedLabels(newLabel, activeColor)
                          }
                          className=" label bg-gray-900 dark:bg-gray-100 text-sm px-2  py-2 font-inter font-bold text-gray-100 dark:text-gray-900 shadow-md hover:shadow-2xl hover:opacity-80"
                        >
                          Add Label
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Task List */}

            <div className="flex item-center flex-col space-y-2 px-6 ">
              <div className="flex  justify-between items-center ">
                <span className="  flex items-center space-x-2 decoration-none font-inter px-2 py-2 text-gray-800 font-semibold ">
                  <ClipboardListIcon className=" w-5 h-5 text-gray-900 dark:text-gray-100 " />
                  <p className="  text-md font-inter font-bold text-gray-800  dark:text-gray-100">
                    Tasks
                  </p>
                </span>

                <div className=" flex mt-2 ">
                  <button
                    onClick={() => handleEditField("tasks")}
                    className=" label bg-gray-900 dark:bg-gray-100 text-xs px-3 uppercase py-1 font-inter font-bold text-gray-100 dark:text-gray-900 shadow-md hover:shadow-2xl hover:opacity-80"
                  >
                    Add Task
                  </button>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-[8px] border-1 border-gray-800 dark:border-gray-100 bg-gray-700/30 dark:bg-gray-50/20 rounded-[3px] mx-2">
                <div
                  style={{ width: calculatePercentage() + "%" }}
                  className=" rounded-[3px] h-[8px] bg-gray-900 dark:bg-gray-100"
                />
              </div>
              {/* Progress Bar */}
              <div className="inline-block  px-2 py-1">
                {!editField.tasks ? (
                  <div className="flex flex-col  space-y-[10px] ">
                    {tempCard?.tasks.map((item) => (
                      <div
                        key={item.id}
                        className="accent-gray-500 flex justify-between "
                      >
                        <div className="flex space-x-3">
                          <input
                            className={`focus:outline-gray-500 cursor-pointer ${item.completed ? 'fill-gray-900 dark:fill-gray-500': ''}`}
                            type="checkbox"
                            defaultChecked={item.completed}
                            onClick={async () => handleTaskComplete(item.id)}                           
                          />
                          <p
                            className={`font-medium  w-[350px] font-inter text-xs text-gray-900 dark:text-gray-100   ${
                              item.completed 
                                ? "line-through decoration-green-400 decoration-[2px]"
                                : ""
                            } `}
                          >
                            {item.title}
                          </p>
                        </div>
                        {!item.completed && (
                          <TrashIcon onClick={() => handleRemoveTasks(item.id)} className=" w-4 h-4 text-gray-900 dark:text-gray-100 cursor-pointer " />
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col mt-4 space-y-4">
                    <div className="flex flex-col  space-y-[10px] ">
                    {tempCard?.tasks.map((item) => (
                      <div
                        key={item.id}
                        className="accent-gray-500 flex justify-between "
                      >
                        <div className="flex space-x-3">
                          <input
                            className={`focus:outline-gray-500 cursor-pointer ${item.completed ? 'fill-gray-900 dark:fill-gray-500': ''} `}
                            type="checkbox"
                            defaultChecked={item.completed}
                            onClick={() => handleTaskComplete(item.id)}
                          />
                          <p
                            className={`font-medium w-4/5 min-w-full font-inter text-xs text-gray-800 dark:text-gray-100 ${
                              item.completed
                                ? "line-through decoration-green-400 decoration-[2px] "
                                : ""
                            }`}
                          >
                            {item.title}
                          </p>
                        </div>
                      
                      </div>
                    ))}
                  </div>

                    <div className="flex space-x-6">
                    <input
                      autoFocus
                      type="text"
                      id="tasks"
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                      placeholder="Enter New Task"
                      className="px-4 pr-2 py-3 w-[200px] rounded-md bg-gray-300 dark:bg-gray-700 text-sm font-normal group-hover:cursor-not-allowed text-gray-900 dark:text-gray-200 font-inter outline-none  transition duration-300 ease-in placeholder:text-gray-900 dark:placeholder:text-gray-300"
                    />

                    <div className=" flex  p-2 ">
                      <button
                        onClick={() => handleAddTasks(newTask)}
                        className=" label bg-gray-900 dark:bg-gray-100 text-xs px-3 uppercase py-1 font-inter font-bold text-gray-100 dark:text-gray-900 shadow-md hover:shadow-2xl hover:opacity-80"
                      >
                        Add
                      </button>
                    </div>
                    </div>

                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end px-4  w-full pt-2 ">
            <div className="flex justify-end space-x-4  items-center ">
              <button
                onClick={() =>
                  handleUpdateTaskCard(
                    boardId,
                    cardId,
                    tempCard,
                    handleShowModal
                  )
                }
                className=" label bg-gray-900 dark:bg-gray-100 text-sm px-3  py-2 font-inter font-bold text-gray-100 dark:text-gray-900 shadow-md hover:shadow-2xl hover:opacity-80"
              >
                Update Card
              </button>
              <button
                onClick={handleShowModal}
                className="flex label bg-gray-300 dark:bg-gray-700 text-sm px-3  py-2 font-inter font-bold text-gray-900 dark:text-gray-100 shadow-md hover:shadow-2xl hover:opacity-80"
              >
                Cancel
                <div className="flex pt-[2px]">
                  <XIcon className="ml-1 w-4 h-4 text-gray-900  dark:text-gray-100 " />
                </div>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TaskCardInfo;
