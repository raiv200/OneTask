import React from "react";;
import Logo from "./Logo";
import { LogoutIcon, CreditCardIcon , ClipboardListIcon , UserCircleIcon} from "@heroicons/react/outline";
import Link from "next/link";

const DashboardNav = ({handleLogout }) => {
  return (
    <header className=" flex h-full flex-col py-4 space-y-6 transition duration-300 ease-in bg-gray-300 dark:bg-gray-900/20 ">
      <div className="flex items-center ml-6 pt-1">
        {/* Logo */}
        <Logo />
      </div>
      <div className="flex  justify-center  flex-1">
        {/* <ThemeChanger /> */}
        <div className="flex px-6 py-8 w-full">
          <ul className="flex flex-col items-start list-none space-y-8">
            <Link href="/dashboard">
              <a className=" dark:hover:bg-gray-600 w-full flex items-center  space-x-3  decoration-none cursor-pointer font-inter transition duartion-300 ease-in bg-gray-700/10 hover:bg-gray-400 dark:bg-gray-100/10 rounded-xl px-8 py-2 text-gray-800 font-semibold">
                <CreditCardIcon className=" w-5 h-5 md:w-7 md:h-7 text-gray-900 dark:text-gray-100 " />
                <li className="text-lg font-inter font-bold text-gray-800  dark:text-gray-100">
                  Dashboard
                </li>
              </a>
            </Link>
            <Link href="/notes">
              <a className="dark:hover:bg-gray-600 w-full  flex items-center  space-x-3  decoration-none cursor-pointer font-inter transition duartion-300 ease-in bg-gray-700/10 hover:bg-gray-400 dark:bg-gray-100/10 rounded-xl px-8 py-2 text-gray-800 font-semibold">
                <ClipboardListIcon className=" w-5 h-5 md:w-7 md:h-7 text-gray-900 dark:text-gray-100 " />
                <li className="text-lg font-inter font-bold text-gray-800 dark:text-gray-100">
                  Notes
                </li>
              </a>
            </Link>
            <Link href="/profile">
              <a className="dark:hover:bg-gray-600 w-full flex items-center space-x-3  decoration-none cursor-pointer font-inter transition duartion-300 ease-in bg-gray-700/10 hover:bg-gray-400 dark:bg-gray-100/10 rounded-xl px-8 py-2 text-gray-800 font-semibold">
                <UserCircleIcon className=" w-5 h-5 md:w-7 md:h-7 text-gray-900 dark:text-gray-100 " />
                <li className="text-lg font-inter font-bold text-gray-800  dark:text-gray-100">
                  Profile
                </li>
              </a>
            </Link>
          </ul>
        </div>
      </div>

      <div className="flex ml-10">
        {/* <Avatar username={username} /> */}

        <button
          onClick={handleLogout}
          className=" btn flex items-center justify-center font-bold font-inter bg-gray-900 text-gray-100 dark:bg-gray-200 px-5 py-3 dark:text-gray-900 shadow-md hover:shadow-2xl dark:hover:opacity-70 hover:bg-violet-500/50"
        >
          Logout
          <div>
            <LogoutIcon className="ml-2 w-5 h-5 md:w-6 md:h-6 text-gray-100  dark:text-gray-900 " />
          </div>
        </button>
      </div>
    </header>
  );
};

export default DashboardNav;
