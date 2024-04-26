import React, { useState } from "react";
import Logo from "./Group.png";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
  const navItems = ["Home", "Flashcard", "Contact", "FAQ"];
  const [nav, setNav] = useState(false);

  return (
    <div className="w-full flex justify-between py-3 mb-3">
      <div className="flex gap-2 items-center">
        <img src={Logo} alt="Logo" />
        <h1 className="text-3xl font-medium text-blue-900">
          Hygge<span className="font-extrabold">X</span>
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center gap-6">
        <div className="hidden md:flex flex-row justify-center items-center gap-6">
          {navItems.map((item, i) => (
            <h2
              key={i}
              className="text-base sm:text-lg md:text-xl font-semibold text-gray-600"
            >
              {item}
            </h2>
          ))}
        </div>
        <div className="flex md:hidden relative">
          <MdOutlineMenu
            size={25}
            className="hover:cursor-pointer"
            onClick={() => {
              setNav(!nav);
            }}
          />
          <div
            className={`${
              nav ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
            } absolute w-[180px] top-10 z-10 bg-blue-500 p-2 space-y-2 rounded-md shadow-sm shadow-blue-200 transition-all duration-300 ease-in-out`}
          >
            {navItems.map((navItem, i) => (
              <div
                className="p-2 hover:bg-blue-300 rounded-lg hover:cursor-pointer"
                key={i}
              >
                {navItem}
              </div>
            ))}
          </div>
        </div>

        <div className="px-8 py-3 rounded-3xl bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 text-white font-semibold">
          Login
        </div>
      </div>
    </div>
  );
};

export default Header;
