import React, { useState } from "react";
import { ClipboardCheckIcon, ClockIcon } from "@heroicons/react/outline";
import Label from "./Label";
import Dropdown from "./Dropdown";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { Draggable } from "react-beautiful-dnd";
import TaskCardInfo from "./TaskCardInfo";


const Card = ({
  index,
  cardId,
  card,
  boardId,
  handleRemoveTaskCard,
  handleUpdateTaskCard,
}) => {


  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };


  const calculatePercentage = () => {
    if (card?.tasks?.length === 0) {
      return "0";
    }

    const completedTask = card?.tasks?.filter((item) => item.completed)?.length;

    return (completedTask / card?.tasks?.length) * 100 + "";
  };

  const truncateString = (str, num) => {
    if (str?.length <= num) {
      return str;
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str?.slice(0, num) + " ...";
  };

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="">
      <Draggable draggableId={cardId} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`${
              snapshot.isDragging
                ? "border-4 border-dashed bg-gray-200 dark:bg-gray-900"
                : "bg-gray-50 dark:bg-gray-700/70 bg-opacity-100"
            } relative flex flex-col backdrop space-y-4 mx-auto w-[257px]   rounded-2xl px-3 py-4 text-white border border-gray-300  cursor-pointer shadow-sm hover:shadow-xl dark:hover:shadow-2xl shadow-gray-400 dark:shadow-gray-900 dark:hover:shadow-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700/100 transition duration-300 ease-in`}
          >
           

            <div
              onClick={handleShowModal}
              className="flex flex-wrap gap-2 w-[205px]"
            >
              {card?.labels?.map((label, index) => (
                <Label
                  key={index}
                  id={label.id}
                  cardId={cardId}
                  boardId={boardId}
                  text={label.text}
                  close={false}
                  color={label.color}
                />
              ))}
            </div>

            <div className="absolute top-0 right-2">
              <DotsHorizontalIcon
                onClick={handleShowDropdown}
                className=" w-5 h-5 md:w-6 md:h-6 text-gray-900 cursor-pointer dark:text-gray-200 transition duration-300 ease-in"
              />
              {showDropdown && (
                <Dropdown card={true} onClose={handleShowDropdown}>
                  <div
                    onClick={async () => handleRemoveTaskCard(cardId, boardId)}
                    className="w-28 h-10 cursor-pointer rounded-md flex items-center justify-center bg-gray-300/50 dark:bg-gray-800"
                  >
                    <p className="flex text-sm font-inter font-semibold text-gray-800 dark:text-gray-100">
                      Delete Card
                    </p>
                  </div>
                </Dropdown>
              )}
            </div>

            <div
              onClick={handleShowModal}
              className="flex space-y-1 justify-center flex-1 flex-col hover:cursor-pointer "
            >
              <h3 className="text-lg  font-inter font-semibold text-gray-800 dark:text-gray-200 ">
                {card?.title}
              </h3>
              <p className="mb-3 text-sm font-inter text-gray-800 dark:text-violet-100 font-normal tracking-wide ">
                {truncateString(card?.description, 28)}
              </p>
            </div>

            <div className="flex justify-between ">
              {card?.date && (
                <button className="flex space-x-2  px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-80 bg-gray-200 dark:bg-gray-600 transition duration-300 ease-in">
                  <ClockIcon className=" w-5 h-5 text-gray-900 dark:text-gray-200 " />
                  <p className="text-sm font-manrope font-medium text-gray-800 dark:text-gray-100">
                     {card?.date}
                  </p>
                </button>
              )}
              <div className="flex space-x-2 right-2 bottom-5 rounded-lg bg-gray-900 dark:bg-gray-200 px-2 py-1  transition duration-300 ease-in ">
                <ClipboardCheckIcon className=" w-5 h-5 text-gray-100 dark:text-gray-900 " />
                <p className="text-sm font-manrope font-medium text-gray-100 dark:text-gray-900">
                  {card?.tasks?.filter((item) => item.completed)?.length}/
                  {card?.tasks?.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </Draggable>

      {showModal && (
        <TaskCardInfo
          showModal={showModal}
          handleShowModal={handleShowModal}
          cardId={cardId}
          card={card}
          boardId={boardId}
          handleUpdateTaskCard={handleUpdateTaskCard}
          calculatePercentage={calculatePercentage}
        />
      )}
    </div>
  );
};

export default Card;

