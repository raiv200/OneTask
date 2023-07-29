import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const footerClasses = {
  container:"relative mt-40 md:mt-0 flex flex-col md:flex-row  space-y-4 md:space-y-0 justify-between items-center px-4 py-4 pb-12 sm:px-6 md:px-12 md:py-4 md:mt-12",

  box__middle: "absolute -top-24 left[128px] sm:-top-20 sm:left-[165px] md:-top-1 md:left-[685px] flex space-x-4 ",

};



const Footer = () => {
  const { systemTheme, theme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <footer className="flex  items-center space-x-56  w-full  py-4 px-2">
      <div className="text-center text-sm text-gray-800 dark:text-gray-300">
        <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2"> OneTask </span>{" "}
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
      {/* Linode X Hashnode Hackathon */}
      <div className="flex space-x-4 pl-8">
        {currentTheme === "dark" ? (
          <Image
            src="/sponsor-logo-dark.png"
            width={190}
            height={60}
  
          />
        ) : (
          <Image
            src="/sponsor-logo-light.png"
            width={180}
            height={60}
            
          />
        )}
      </div>

      <div className="dark:text-gray-100 text-gray-900 font-bold text-md pl-12 mr-2">
        Made with ❤️ by{" "}
        <span className="ml-2 font-semibold font-ibm text-lg tracking-tight bg-gradient-to-r from-indigo-500  to-cyan-500 bg-clip-text text-transparent">
          <Link href="https://twitter.com/raivikas200">@raivikas</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
