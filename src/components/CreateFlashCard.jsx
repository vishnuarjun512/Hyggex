import React from "react";
import { FaPlus } from "react-icons/fa";
import Logo from "./Group.png";

const CreateFlashCard = () => {
  return (
    <div className="my-4 flex w-full justify-between md:justify-around flex-row items-center">
      <div className="flex gap-2 items-center flex-row">
        <div className="bg-white shadow-xl shadow-blue-200 rounded-full py-[11px] px-[6px]">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm">Published by</span>
          <p className="font-medium text-lg">
            Hygge<span className="font-bold">X</span>
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 text-blue-900 cursor-pointer hover:scale-105 duration-200 ease-in-out transition-all">
        <div className="bg-gradient-to-t from-blue-400 p-1 rounded-full to-blue-900 ">
          <FaPlus size={35} className="text-white" />
        </div>
        <p className="text-[23px]  font-bold text-transparent bg-gradient-to-t from-blue-400 to-blue-900 bg-clip-text">
          Create Flashcard
        </p>
      </div>
    </div>
  );
};

export default CreateFlashCard;
