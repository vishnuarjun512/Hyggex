import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { MdNavigateNext } from "react-icons/md";

const BreadCrumb = () => {
  const [selected, setSelected] = useState(2);

  return (
    <div className="flex flex-row items-center">
      <GoHome
        size={25}
        className="hover:cursor-pointer cursor-pointer hover:scale-110 duration-200 ease-in-out transition-all"
      />
      {["Flashcard", "Mathematics", "Relations and Functions"].map(
        (item, i) => (
          <div
            onClick={() => {
              setSelected(i);
            }}
            className="flex gap-1 flex-row items-center"
            key={i}
          >
            <MdNavigateNext />
            <h1
              className={`${
                selected == i
                  ? "text-blue-800 font-bold"
                  : "font-semibold text-gray-500"
              } text-[11px] md:text-[18px] hover:underline hover:cursor-pointer hover:scale-105 duration-200 ease-in-out transition-all whitespace-nowrap`}
            >
              {item}
            </h1>
          </div>
        )
      )}
    </div>
  );
};

export default BreadCrumb;
