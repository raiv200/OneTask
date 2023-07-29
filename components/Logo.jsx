import Link from "next/link";
import React from "react";

import { useTheme } from "next-themes";

const Logo = () => {
  const { systemTheme, theme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      <Link href="/">
        <a className="decoration-none">
          <div className="flex items-center">
            {currentTheme === "dark" && (
              <img className="w-[40px]" src="/onetask-logo-dark.png" />
            )}
            
            {currentTheme === "light" && (
              <img className="w-[40px]" src="/onetask-logo-light.png" />
            )}
            <p className="text-2xl ml-2 font-extrabold font-inter bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:bg-gradient-to-r dark:from-gray-500 dark:to-gray-400">
              OneTask
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
