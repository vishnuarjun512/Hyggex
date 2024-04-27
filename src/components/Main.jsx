import React, { useState } from "react";
import BreadCrumb from "./BreadCrumb";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { FaRegLightbulb, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";
import { MdFullscreen } from "react-icons/md";

const Main = () => {
  const [selected, setSelected] = useState(2);

  return (
    <div className=" flex flex-col justify-center">
      <BreadCrumb />
      <div className="text-4xl my-7 font-bold text-transparent bg-gradient-to-t from-blue-500 to-blue-900 bg-clip-text">
        Relations and Functions (Mathematics)
      </div>
      <div className="w-full flex flex-col gap-3 justify-center items-center mt-5">
        <div className=" flex flex-row justify-center gap-5">
          {["Study", "Quiz", "Test", "Game", "Others"].map((item, i) => (
            <div
              onClick={() => setSelected(i)}
              key={i}
              className={` ${
                selected == i
                  ? "text-2xl text-blue-800 border-b-2 border-blue-800"
                  : "text-xl text-gray-500 hover:text-blue-200 transition-all duration-200 ease-out"
              }  font-semibold hover:cursor-pointer `}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center ">
          <div className="md:w-[60%]">
            <div className="flex w-full text-white flex-col relative items-center bg-gradient-to-bl from-blue-950 via-blue-600 to-blue-400 rounded-[40px] h-[500px]">
              <div className="flex w-full justify-between px-10 pt-6">
                <HiMiniSpeakerWave
                  size={35}
                  className="hover:cursor-pointer hover:scale-110 duration-200 ease-in-out transition-all"
                />
                <FaRegLightbulb
                  size={35}
                  className="hover:cursor-pointer hover:scale-110 duration-200 ease-in-out transition-all"
                />
              </div>
              <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] font-semibold text-5xl whitespace-nowrap">
                9 + 5 - 3 + x
              </div>
            </div>
            <div className="flex flex-row items-center gap-10 w-full justify-center pt-6">
              <IoReload
                size={35}
                className="text-blue-950 hover:scale-110 duration-200 ease-in-out transition-all cursor-pointer"
              />
              <FaAngleLeft
                size={40}
                className="p-1 bg-gradient-to-bl from-blue-950 via-blue-600 to-blue-400 text-white whitespace-nowrap rounded-full cursor-pointer hover:scale-110 duration-200 ease-in-out transition-all"
              />
              <h1 className="text-3xl font-semibold whitespace-nowrap">
                1 / 10
              </h1>
              <FaAngleRight
                size={40}
                className="p-1 bg-gradient-to-bl from-blue-950 via-blue-600 to-blue-400 text-white rounded-full cursor-pointer hover:scale-110 duration-200 ease-in-out transition-all"
              />
              <MdFullscreen
                size={35}
                className="text-blue-950 cursor-pointer hover:scale-110 duration-200 ease-in-out transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
