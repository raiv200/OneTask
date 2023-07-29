import React from "react";

const CTASection = () => {
  return (
    <div className=" relative w-full max-w-7xl px-8 py-16 flex items-center justify-between overflow-hidden bg-transparent z-30 shadow-2xl rounded-2xl mt-12 bg-gradient-to-r from-[#e4caff] via-[#b7b4f9] to-[#c5dbff] ">
      <div className="flex items-center pl-60">
        <img className="absolute -rotate-12 -left-10 w-[320px] h-[290px]" src="/taskupp-logo.png" />
        <div className=" flex flex-col  space-y-4">
        <h3 className="text-5xl font-inter text-gray-900  font-bold">
          One app to replace them all.
        </h3>
        <p className="text-lg font-medium font-inter text-gray-600">
          All of your work in one place: Tasks, Docs, Chat, Goals, & more.
        </p>
        </div>
      </div>

      <div>
        <button className="w-40 btn bg-violet-600 px-5 py-3 text-white shadow-md hover:shadow-2xl hover:opacity-70">
          Free Forever
        </button>
      </div>
    </div>
  );
};

export default CTASection;

