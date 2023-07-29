import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";
import DashboardNav from "../components/DashboardNav";
import DashboardHeader from "../components/DashboardHeader";
import { PlusSmIcon } from "@heroicons/react/solid";
import Head from "next/head";
import NoteCard from "../components/NoteCard";
import AddNoteModal from "../components/AddNoteModal";
import { DataStore } from "@aws-amplify/datastore";
import { UserProfile, Notes } from "../src/models";

// const NOTES = [
//   {
//     id: uuid(),
//     title: "This is a First Note",
//     description: "This is a very long Desription",
//     priority: "High",
//     date: NewDate(),
//   },

// ];

const MyNotes = () => {
  const router = useRouter();

  const [notes, setNotes] = useState();
  const [addNoteModal, setAddNoteModal] = useState(false);
  const [noteAdded, setNoteAdded] = useState(false);

  const [user, setUser] = useState("");
  const [userAuthData, setUserAuthData] = useState("");
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const userAuth = async () => {
      const user = await Auth.currentAuthenticatedUser();
      //   const data = await Auth.getUserData();
      const { username, attributes } = user;
      // console.log(username);
      //   console.log(data);
      setUser(username);
      setUserAuthData(attributes);

      const data = await DataStore.query(UserProfile, (c) =>
        c.username("eq", username)
      );
      console.log("User retrieved successfully!", data[0]);
      setUserInfo(data[0]);

      const allNotes = await DataStore.query(Notes, (c) =>
        c.userprofileID("eq", data[0]?.id)
      );
      console.log("All Boards", allNotes);
      setNotes(allNotes);
    };

    userAuth();
  }, [noteAdded]);

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      router.push("/login");
      console.log("Signed Out Successfull!!");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  const handleAddNoteModal = () => {
    setAddNoteModal(!addNoteModal);
  };

  const handleAddNewNote = async (title, description, priority, date) => {
    console.log("Note Added!!");
    // const newDate= UpdateDate(date);
    if (title === "" || title === null) {
      alert("Please Enter a title");
    }

    if (description === null || description === null) {
      alert("Please Enter a description");
    }

    if (priority === "" || priority === null) {
      alert("Please Enter a priority");
    }

    if (date === "" || date === null) {
      alert("Please Enter a date");
    }
    
    await DataStore.save(
      new Notes({
        title: title,
        description: description,
        priority: priority,
        date: date,
        userprofileID: userInfo?.id,
      })
    );

    setAddNoteModal(false);
    setNoteAdded(!noteAdded);
  };

  const handleDeleteNote = async (noteId) => {
    console.log("Note Deleted");

    const todelete = await DataStore.query(Notes, noteId);

    DataStore.delete(todelete);

    setNoteAdded(!noteAdded);
  };

  return (
    <div>
      <Head>
        <title>Notes - OneTask</title>
        <link rel="icon" href="/onetask-logo-dark.png" />
      </Head>
      {userAuthData.email_verified && (
        <>
          <div className="flex flex-col lg:grid lg:grid-cols-12  ">
            <div className=" h-screen sticky top-0 flex-col lg:col-span-2 ">
              <DashboardNav username={user} handleLogout={handleLogout} />
            </div>
            <div className=" h-full lg:col-span-10 flex  flex-col space-y-2 py-3 px-3  transition duration-300 ease-in bg-gray-100 dark:bg-gray-900 ">
              <DashboardHeader username={user} imageUrl={userInfo?.imageUrl} />

              {/* <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 text-center">
                Welcome @{user}, your email is {userAuthData.email}.
              </h1> */}
              <div className=" flex flex-col  z-10  h-[648px] w-full space-y-4 bg-gray-200 py-2 border-2 px-3 border-dashed border-gray-800/50 dark:border-gray-100  dark:bg-gray-700/30   rounded-lg transition duration-300 ease-in">
                <div className=" w-full h-16 flex items-center justify-between py-3 px-4 transition duration-300 ease-in">
                  <p className="text-3xl text-gray-800 font-inter font-bold dark:text-gray-100 ">
                    Notes
                  </p>
                  <div
                    onClick={handleAddNoteModal}
                    className="flex items-center space-x-4  bg-gray-50 dark:bg-gray-700 rounded-lg py-2 px-3 cursor-pointer hover:ring-2 ring-gray-500  dark:ring-gray-300 transition duration-300 ease-in"
                  >
                    <p className="text-lg text-gray-800 font-inter font-semibold dark:text-gray-100">
                      Add Note
                    </p>
                    <div className="  bg-gray-900 rounded-md dark:bg-gray-100 flex items-center justify-center ">
                      <PlusSmIcon className=" w-5 h-5 md:w-6 md:h-6 text-gray-100 dark:text-gray-900 " />
                    </div>
                  </div>
                </div>

                <div className=" grid grid-cols-4 items-center gap-4 px-4 transition duration-300 ease-in">
                  {notes?.map((note) => (
                    <NoteCard
                      key={note.id}
                      noteId={note.id}
                      title={note.title}
                      description={note.description}
                      priority={note.priority}
                      date={note.date}
                      handleDeleteNote={handleDeleteNote}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {addNoteModal && (
            <AddNoteModal
              onClose={handleAddNoteModal}
              handleAddNewNote={handleAddNewNote}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MyNotes;
