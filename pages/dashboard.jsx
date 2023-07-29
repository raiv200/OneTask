import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";
import DashboardNav from "../components/DashboardNav";
import DashboardHeader from "../components/DashboardHeader";
import TaskBoard from "../components/TaskBoard";
import { PlusSmIcon } from "@heroicons/react/solid";
import NewBoard from "../components/NewBoard";
import { DragDropContext } from "react-beautiful-dnd";
import Head from "next/head";
import { DataStore } from "@aws-amplify/datastore";
import { UserProfile, Boards, TaskCard } from "../src/models";

// const BOARDS = [
//   {
//     id: uuid(),
//     boardTitle: "To Do",
//     cards: [
//       {
//         id: uuid(),
//         title: "Complete the Hackathon Project before 30th September.",
//         tasks: [
//           { id: uuid(), title: "Your Task", completed: false },

//         ],
//         labels: [
//           { id: uuid(), text: "Label", color: "#b82ed6" }
//         ],
//         description: "This is Description 1.",
//         date: "",
//       },

//     ],
//   },
// ];

const Dashboard = () => {
  const router = useRouter();

  const [boards, setBoards] = useState();
  const [allTaskCards, setAllTaskCards] = useState();
  const [taskAdded, setTaskAdded] = useState(false);
  const [boardAdded, setBoardAdded] = useState(false);

  const [user, setUser] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [userAuthData, setUserAuthData] = useState("");
  const [newBoardTitle, setNewBoardTitle] = useState("");
  const [showEditableBoard, setShowEditableBoard] = useState(false);

  useEffect(() => {
    const userAuth = async () => {
      const user = await Auth.currentAuthenticatedUser();
      console.log("user",user)
      
      const { username, attributes } = user;
      
      setUser(username);
      setUserAuthData(attributes);

      const data = await DataStore.query(UserProfile, (c) =>
        c.username("eq", username)
      );
      
      setUserInfo(data[0]);

      const allBoards = await DataStore.query(Boards, (c) =>
        c.userprofileID("eq", data[0]?.id)
      );
     
      setBoards(allBoards);

      const allTaskCards = await DataStore.query(TaskCard);
      
      setBoards(allBoards);
      setAllTaskCards(allTaskCards);
    };
    userAuth();
  }, [taskAdded, boardAdded]);

  /// ADD BOARD AND DELETE BOARD

  const handleNewBoardTitle = (e) => {
    setNewBoardTitle(e.target.value);
  };

  const handleShowEditableBoard = () => {
    setShowEditableBoard(!showEditableBoard);
  };

  const handleAddBoard = async (boardTitle) => {
    console.log("Board Added", boardTitle);

    const userprofile = await DataStore.query(UserProfile, (c) =>
      c.username("eq", user)
    );

    await DataStore.save(
      new Boards({
        boardTitle: boardTitle,
        cards: [],
        userprofileID: userInfo?.id,
      })
    );

    setShowEditableBoard(!showEditableBoard);
    setNewBoardTitle("");
    setBoardAdded(!boardAdded);
  };

  const handleRemoveBoard = async (boardId) => {
    console.log("Board Removed !!");

    const todelete = await DataStore.query(Boards, boardId);
    DataStore.delete(todelete);

    setBoardAdded(!boardAdded);
  };

  /// ADD CARD , UPADTE CARD AND DELETE CARD

  const handleAddTaskCard = async (
    title,
    description,
    boardId,
    setTaskTitle,
    setShowEditableTask
  ) => {
    console.log("Task Card Added", title);

    await DataStore.save(
      new TaskCard({
        title: title,
        labels: [],
        tasks: [],
        description: description,
        date: new Date().toISOString().substring(0, 10),
        boardsID: boardId,
      })
    );

    
    setShowEditableTask(false);
    setTaskTitle("");
    setTaskAdded(!taskAdded);
  };

  const handleUpdateTaskCard = async (
    boardId,
    cardId,
    updatedCard,
    handleShowModal
  ) => {
    console.log("Task Card Updated");

    const original = await DataStore.query(TaskCard, cardId);

    await DataStore.save(
      TaskCard.copyOf(original, (updated) => {
        updated.title = updatedCard.title;
        updated.tasks = [...updatedCard.tasks];
        updated.labels = [...updatedCard.labels];
        updated.description = updatedCard.description;
        updated.date = updatedCard.date;
      })
    );

    
    setTaskAdded(!taskAdded);
    handleShowModal();
  };

  const handleRemoveTaskCard = async (cardId, boardId) => {
    console.log("Card Removed !!");

    const todelete = await DataStore.query(TaskCard, cardId);

    DataStore.delete(todelete);

    setTaskAdded(!taskAdded);

    
  };

  /// ADDING DRAGGABLE CARD FUNCTIONALITY

  const onDragEnd = async (result, boards) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;

    let source_BoardIndex, target_BoardIndex;

    source_BoardIndex = boards?.findIndex(
      (item) => item.id === source.droppableId
    );

    if (source_BoardIndex < 0) {
      return;
    }

    target_BoardIndex = boards?.findIndex(
      (item) => item.id === destination.droppableId
    );

    if (target_BoardIndex < 0) {
      return;
    }

    const tempCards = [...allTaskCards];
    
    
    const tempCard =  await DataStore.query(TaskCard, draggableId);
    
    
    await DataStore.save(
      new TaskCard({
        title: tempCard.title,
        tasks: tempCard.tasks,
        labels: tempCard.labels,
        description: tempCard.description,
        date: tempCard.date,
        boardsID: destination.droppableId,
      })
      );
      
      DataStore.delete(tempCard);
      
      
      setTaskAdded(!taskAdded);

    
  };

  /// USER AUTHENTICATION AND USER lOGOUT

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      router.push("/login");
      console.log("Signed Out Successfull!!");
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  };

  return (
    <div>
      <Head>
        <title>Dashboard - OneTask</title>
        <link rel="icon" href="/onetask-logo-dark.png" />
      </Head>
      {userAuthData.email_verified && (
        <>
          <div className="flex  flex-col lg:grid lg:grid-cols-12  ">
            <div className=" h-screen sticky top-0 flex-col lg:col-span-2 ">
              <DashboardNav username={user} handleLogout={handleLogout} />
            </div>
            <div className=" h-full lg:col-span-10 flex flex-col space-y-2 py-3 px-3  transition duration-300 ease-in bg-gray-200 dark:bg-gray-800/50 ">
              <DashboardHeader username={user} imageUrl={userInfo?.imageUrl} />

              <DragDropContext
                onDragEnd={(result) => onDragEnd(result, boards, setBoards)}
              >
                <div className=" flex z-10 overflow-x-auto custom-scroll space-x-4 h-[666px] w-full  bg-gray-200 py-2 px-3 dark:bg-gray-800/50 border-gray-800 dark:border-gray-100    rounded-lg transition duration-300 ease-in">
                  {boards?.map((board) => (
                    <TaskBoard
                      key={board.id}
                      droppableId={board.id}
                      type="TASK"
                      boardId={board.id}
                      boardTitle={board.boardTitle}
                      cards={allTaskCards}
                      handleRemoveBoard={handleRemoveBoard}
                      handleAddTaskCard={handleAddTaskCard}
                      handleRemoveTaskCard={handleRemoveTaskCard}
                      handleUpdateTaskCard={handleUpdateTaskCard}
                    />
                  ))}
                  <div className="flex flex-col h-full min-w-[294px] rounded-lg px-2 py-[6px]  border-gray-800 dark:border-gray-100 ">
                    {showEditableBoard ? (
                      <NewBoard
                        newBoardTitle={newBoardTitle}
                        handleNewBoardTitle={handleNewBoardTitle}
                        handleAddBoard={handleAddBoard}
                        onClose={handleShowEditableBoard}
                      />
                    ) : (
                      <div
                        onClick={handleShowEditableBoard}
                        className="flex items-center justify-center space-x-4  bg-gray-50 dark:bg-gray-100/10 rounded-lg py-2 px-3 cursor-pointer hover:ring-2 ring-gray-500  dark:ring-gray-300 transition duration-300 ease-in"
                      >
                        <p className="text-lg text-gray-800 font-inter font-semibold dark:text-gray-100">
                          Add New Board
                        </p>
                        <div className="bg-gray-900 rounded-md dark:bg-gray-200 flex items-center justify-center ">
                          <PlusSmIcon className=" w-6 h-6  text-gray-100 dark:text-gray-900" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </DragDropContext>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
