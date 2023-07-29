import React from "react";
import { XIcon } from "@heroicons/react/solid";

const Label = ({id,cardId,boardId, text, close ,onClose ,color, handleRemoveLabel}) => {

  return (
    <button style={{backgroundColor: color}}
      className={`label flex items-center py-1 px-2 shadow-md hover:shadow-2xl hover:opacity-80 `}
    >
      <p className="text-[9px]  uppercase  font-inter font-bold text-gray-100 dark:text-gray-50">
        {text}
      </p>
      <span onClick={() => onClose ? onClose() : ''} className={`${close ? "pl-1":''}`}>
        {close && (
          <XIcon onClick={() => handleRemoveLabel(id)} className="w-[15px] h-[15px] font-inter font-bold text-gray-100 dark:text-gray-50" />
        )}
      </span>
    </button>
  );
};

export default Label;

