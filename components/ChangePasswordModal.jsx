import React, { useState } from "react";
import { XIcon, LockClosedIcon } from "@heroicons/react/solid";
import Modal from "./Modal";

const ChangePasswordModal = ({ handlePasswordModal, handleChangePassword }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  return (
    <Modal>
      <div className="relative pt-6 flex flex-col  bg-gray-100 dark:bg-gray-800 shadow-2xl w-[450px] h-[320px] rounded-2xl mx-auto  transition duration-100 ease-in mt-10">
        {/* Modal Close button */}
        <button
          onClick={handlePasswordModal}
          className="absolute top-2 right-2 w-8 h-8  bg-gray-200 rounded-md dark:bg-gray-700 flex items-center justify-center hover:ring-2 ring-gray-500 transition-all "
        >
          <XIcon className="w-6 h-6 text-gray-800 dark:text-gray-100" />
        </button>

        <div className="flex flex-col space-y-6 flex-1 px-12 py-4 pt-6 ">
          <div className="flex flex-col space-y-3">
            <div className=" flex justify-between items-center">
              <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-100 ease-in">
                Old Password
              </label>
            </div>
            <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-gray-600 transition duration-100 ease-in">
              <LockClosedIcon className="h-6 w-6 text-gray-900 dark:text-gray-500 transition duration-100 ease-in" />
              <input
                type="oldpassword"
                id="oldpassword"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                placeholder="Enter Old Password"
                className="pl-2 bg-gray-100 dark:bg-gray-800 text-sm font-normal  text-gray-900 dark:text-gray-100 font-inter outline-none ml-2 w-full  transition duration-100 ease-in"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-3 ">
            <div className="  flex justify-between items-center">
              <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-100 ease-in">
                New Password
              </label>
            </div>
            <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-gray-600 transition duration-100 ease-in">
              <LockClosedIcon className="h-6 w-6 text-gray-900 dark:text-gray-500 transition duration-300 ease-in" />
              <input
                type="newpassword"
                id="newpassword"
                value={newPassword}
                onChange={handleNewPasswordChange}
                placeholder="Enter New Password"
                className="pl-2 bg-gray-100 dark:bg-gray-800 text-sm font-normal  text-gray-900 dark:text-gray-100 font-inter outline-none ml-2 w-full  transition duration-100 ease-in"
              />
            </div>
          </div>

          <button
            onClick={() => handleChangePassword(newPassword)}
            type="submit"
            className="w-full btn text-gray-100 px-5 py-3 dark:text-gray-900 bg-gray-900 dark:bg-gray-100 shadow-2xl  hover:shadow-xl hover:opacity-80"
          >
            Save New password
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ChangePasswordModal;
