import React from "react";

const Modal = ({ children}) => {
  return (
    <div className="fixed top-0 left-0 z-30 h-full w-full  modal py-6 bg-gray-900/70 ">
      <div className="animate-sliding-up">{children}</div>
    </div>
  );
};

export default Modal;
