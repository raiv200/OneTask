import React, { useRef, useEffect } from "react";


const Dropdown = ({card ,onClose, children }) => {
  const dropdownRef = useRef();

  const handleClick = (event) => {
    if (dropdownRef && dropdownRef?.current?.contains(event?.target)) {
      onClose ? onClose() : "";
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`absolute ${card ? 'top-[26px] -right-0' : ' top-[26px] -right-12'}`}>
      {children}
    </div>
  );
};

export default Dropdown;
