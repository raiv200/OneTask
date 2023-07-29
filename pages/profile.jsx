import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";
import DashboardNav from "../components/DashboardNav";
import DashboardHeader from "../components/DashboardHeader";
import ChangePasswordModal from "../components/ChangePasswordModal";
import {
  MailIcon,
  LockClosedIcon,
  PhotographIcon,
  UserIcon,
} from "@heroicons/react/outline";

import { DataStore } from "@aws-amplify/datastore";
import { UserProfile } from "../src/models";
import Head from "next/head";

const Profile = () => {
  const router = useRouter();

  const [user, setUser] = useState("");
  const [userAuthData, setUserAuthData] = useState("");
  const [id, setUserId] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [updatedDisplayName, setUpdatedDisplayName] = useState("");
  const [updatedImageUrl, setUpdatedImageUrl] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const handleEditDisplayName = (e) => {
    document.getElementById("displayName").focus();
    setDisplayName(e.target.value);
  };

  const handleEditImageUrl = (e) => {
    document.getElementById("imageUrl").focus();
    setImageUrl(e.target.value);
  };

  const handlePasswordModal = () => {
    setShowPasswordModal(!showPasswordModal);
  };

  const handleChangePassword = (newPassword) => {
    console.log("Password Changed");
    console.log("New Password",newPassword);
    setPassword(newPassword);
    setShowPasswordModal(!showPasswordModal);
  };


  useEffect(() => {
    const userAuth = async () => {
      const user = await Auth.currentAuthenticatedUser();
     
      const { username, attributes } = user;
    
      setUser(username);
      setUserAuthData(attributes);

      const data = await DataStore.query(UserProfile, (c) =>
        c.username("eq", username)
      );
      
      setUserInfo(data[0]);
      setDisplayName(data[0]?.displayName);
      setImageUrl(data[0]?.imageUrl);
      setPassword(data[0]?.password);
      setUserId(data[0]?.id);
    };

    userAuth();
  }, [updatedImageUrl, updatedDisplayName]);

  const saveUpdatedProfile = async (
    id,
    updatedDisplayName,
    updatedImageUrl,
    newPassword
  ) => {
    const original = await DataStore.query(UserProfile, id);

    console.log("New Password",newPassword);
    await DataStore.save(
      UserProfile.copyOf(original, (updated) => {
        updated.displayName = updatedDisplayName;
        updated.imageUrl = updatedImageUrl;
        updated.password = newPassword;
      })
    );

    
  };

  const handleUpdateProfile = () => {
    console.log("Profile Updated !!!")
    saveUpdatedProfile(id, displayName, imageUrl,password);
  };

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      router.push("/login");
      console.log("Signed Out Successfull!!");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

 

  return (
    <div>
      <Head>
        <title>Profile - OneTask</title>
        <link rel="icon" href="/onetask-logo-dark.png" />
      </Head>
      {userAuthData.email_verified && (
        <>
          <div className="flex flex-col lg:grid lg:grid-cols-12  ">
            <div className=" h-screen sticky top-0 flex-col lg:col-span-2 ">
              <DashboardNav username={user} handleLogout={handleLogout} />
            </div>
            <div className="h-full lg:col-span-10 flex  flex-col py-3 px-3 space-y-2 transition duration-300 ease-in bg-gray-100 dark:bg-gray-900">
              <DashboardHeader username={user} imageUrl={imageUrl}/>

              
              <div className=" flex flex-col items-center z-10 h-[648px] w-full bg-gray-200  dark:bg-gray-800/50 py-2 px-3 border-2 border-dashed border-gray-800 dark:border-gray-100 rounded-lg transition duration-300 ease-in">
                <h2 className="text-3xl font-semibold font-inter text-gray-800 dark:text-gray-100 transition duration-300 ease-in">
                  My Profile
                </h2>
                <div className=" mx-auto h-full flex items-center justify-between py-4 px-4 ">
                  <div className="pt-4 flex flex-col bg-gray-100 dark:bg-gray-900/70 shadow-2xl w-[450px] h-[520px] rounded-2xl  mx-auto  transition duration-300 ease-in">
                    <div className="flex flex-col space-y-6 flex-1 px-12 py-4 pt-6 ">
                      <div className="flex flex-col space-y-3">
                        <div className=" group flex justify-between items-center">
                          <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                            Display Name
                          </label>
                          <button
                            onClick={handleEditDisplayName}
                            className=" label bg-gray-900 dark:bg-gray-100 text-xs px-3 uppercase py-1 font-inter font-bold text-gray-100 dark:text-gray-900 shadow-md hover:shadow-2xl hover:opacity-80"
                          >
                            Edit
                          </button>
                        </div>
                        <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-700 px-2 py-2 rounded-lg dark:rounded-lg hover:ring-1 hover:ring-gray-900 dark:hover:ring-1 dark:hover:ring-gray-100  transition duration-300 ease-in">
                          <UserIcon className="h-6 w-6 text-gray-900 dark:text-gray-500 transition duration-300 ease-in" />
                          <input
                            type="text"
                            id="displayName"
                            value={displayName}
                            onChange={(e) =>
                              setDisplayName(e.currentTarget.value)
                            }
                            placeholder="John Doe"
                            className="pl-2 bg-gray-100 dark:bg-gray-900/70 text-sm font-normal  text-gray-500 dark:text-gray-100 font-inter outline-none ml-2 w-full transition duration-300 ease-in"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col space-y-3">
                        <label className="text-xs font-inter font-semibold text-gray-900 dark:text-gray-100  transition duration-300 ease-in">
                          Your Email
                        </label>
                        <div className="group flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-700 px-2 py-2 rounded-lg  hover:ring-1 hover:ring-gray-600 transition duration-300 ease-in">
                          <MailIcon className="h-6 w-6 text-gray-900 dark:text-gray-500 transition duration-300 ease-in" />
                          <input
                            type="email"
                            id="email"
                            value={userAuthData.email}
                            disabled={true}
                            placeholder="example@gmail.com"
                            className="pl-2 bg-gray-100 dark:bg-gray-900/70 text-sm font-normal group-hover:cursor-not-allowed text-gray-500 dark:text-gray-500 font-inter focus:outline-none ml-2 w-full transition duration-300 ease-in"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col space-y-3">
                        <div className=" group flex justify-between items-center">
                          <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                            Image URL Link
                          </label>
                          <button
                            onClick={handleEditImageUrl}
                            className=" label bg-gray-900 dark:bg-gray-100 text-xs px-3 uppercase py-1 font-inter font-bold text-gray-100 dark:text-gray-900 shadow-md hover:shadow-2xl hover:opacity-80"
                          >
                            Edit
                          </button>
                        </div>

                        <div className=" flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-700 px-2 py-2 rounded-lg  hover:ring-1 hover:ring-gray-600 transition duration-300 ease-in">
                          <PhotographIcon className="h-6 w-6 text-gray-900 dark:text-gray-500 transition duration-300 ease-in" />
                          <input
                            type="text"
                            id="imageUrl"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.currentTarget.value)}
                            placeholder="Image Url Link"
                            className="pl-2 bg-gray-100 dark:bg-gray-900/70 text-xs font-normal  text-gray-500 dark:text-gray-100 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col space-y-3 ">
                        <div className=" group flex justify-between items-center">
                          <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                            Your Password
                          </label>
                          <button
                            onClick={handlePasswordModal}
                            className=" label bg-gray-900 dark:bg-gray-100 text-xs px-3 uppercase py-1 font-inter font-bold text-gray-100 dark:text-gray-900 shadow-md hover:shadow-2xl hover:opacity-80"
                          >
                            Change Password
                          </button>
                        </div>
                        <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-700 px-2 py-2 rounded-lg hover:ring-1 hover:ring-gray-600 transition duration-300 ease-in">
                          <LockClosedIcon className="h-6 w-6 text-gray-900 dark:text-gray-500 transition duration-300 ease-in" />
                          <input
                            type="password"
                            id="password"
                            value={password}
                            disabled={true}
                            placeholder="Minimun 8 Characters"
                            className="pl-2 bg-gray-100 dark:bg-gray-900/70 text-sm font-normal group-hover:cursor-not-allowed text-gray-500 dark:text-gray-600 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                          />
                        </div>
                      </div>

                      <button
                        onClick={handleUpdateProfile}
                        type="submit"
                        className="w-full btn bg-gray-900 px-5 py-3 text-white shadow-2xl dark:bg-gray-100 dark:text-gray-900  hover:shadow-xl hover:opacity-80"
                      >
                        Update Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {showPasswordModal && (
            <ChangePasswordModal
              handlePasswordModal={handlePasswordModal}
              handleChangePassword={handleChangePassword}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
