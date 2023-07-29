import React, { useState } from "react";
import { PlusSmIcon, DotsHorizontalIcon } from "@heroicons/react/solid";
import Card from "./Card";
import EditableCard from "./EditableCard";
import Dropdown from "./Dropdown";
import { Droppable } from "react-beautiful-dnd";

const TaskBoard = ({
  droppableId,
  type,
  boardId,
  boardTitle,
  cards,
  handleRemoveBoard,
  handleAddTaskCard,
  handleRemoveTaskCard,
  handleUpdateTaskCard,
}) => {
  const [showEditableTask, setShowEditableTask] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const boardTaskCards = cards?.filter(c => c.boardsID === boardId).reverse();

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleShowEditableTask = () => {
    setShowEditableTask(!showEditableTask);
  };

  return (
    <Droppable droppableId={droppableId} type={type}>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={`${
            snapshot.isDraggingOver
              ? "bg-gray-300  border-[3px] border-dashed border-gray-900 dark:border-gray-100 dark:bg-gray-700 "
              : ""
          } flex flex-col space-y-6 h-full min-w-[294px] rounded-lg px-1 py-[8px] `}
        >
          <div className="z-10 flex items-center justify-between font-semibold bg-gray-50 dark:bg-gray-100/10 rounded-lg py-2 px-3 transition duration-300 ease-in ml-1  mr-3">
            <p className="text-lg text-gray-800 font-inter font-bold dark:text-gray-100 ">
              {boardTitle}{" "}
              <span className="text-md font-semibold font-inter text-gray-800 dark:text-gray-100">
                ({boardTaskCards?.length})
              </span>
            </p>
            <div className="flex items-center  space-x-4">
              <div className="relative">
                <DotsHorizontalIcon
                  onClick={handleShowDropdown}
                  className=" w-5 h-5 md:w-6 md:h-6 text-violet-500 cursor-pointer dark:text-violet-200 transition duration-300 ease-in"
                />
                {showDropdown && (
                  <Dropdown card={false} onClose={handleShowDropdown}>
                    <div
                      onClick={async () => handleRemoveBoard(boardId)}
                      className="w-28 h-10 cursor-pointer rounded-md flex items-center justify-center bg-gray-300 dark:bg-gray-600"
                    >
                      <p className="flex text-sm font-inter font-semibold text-gray-800 dark:text-gray-100">
                        Delete Board
                      </p>
                    </div>
                  </Dropdown>
                )}
              </div>

              <div className="  bg-gray-900 rounded-md dark:bg-gray-100 flex items-center justify-center hover:ring-2 ring-gray-500 transition-all">
                <PlusSmIcon
                  onClick={handleShowEditableTask}
                  className=" w-5 h-5 md:w-6 md:h-6 text-gray-100 dark:text-gray-900 "
                />
              </div>
            </div>
          </div>

          <div className=" flex overflow-y-scroll  flex-col space-y-4 h-full w-full custom-scroll ">
            {showEditableTask ? (
              <EditableCard
                boardId={boardId}
                onClose={handleShowEditableTask}
                handleAddTaskCard={handleAddTaskCard}
              />
            ) : null}
            {boardTaskCards?.map((card, index) => (
              
              <Card
              key={card.id}
              index={index}
              cardId={card.id}
              card={card}
              boardId={boardId}
              handleRemoveTaskCard={handleRemoveTaskCard}
              handleUpdateTaskCard={handleUpdateTaskCard}         
            />
            ))}

           
          </div>
          <span style={{ display: 'none' }}>{provided.placeholder}</span>
        </div>
      )}
    </Droppable>
  );
};

export default TaskBoard;
