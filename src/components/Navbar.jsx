import React from "react";
import { Link } from "react-router-dom";
import { navMenus } from "../utils/data";
import { FcGoogle } from "react-icons/fc";

const Navbar = ({ menuIdx }) => {
  // console.log(menuIdx);
  return (
    <nav
      className="navi bg-[#212121] w-1/5 h-full rounded-sm border border-gray-500
    py-10 px-4 flex flex-col justify-between items-center"
    >
      <div className="logo-wrapper flex w-full items-center justify-center gap-8">
        <div className="logo"></div>
        <h2 className="font-semibold text-x1">
          <Link to="/">UM</Link>
        </h2>
      </div>
      <ul className="menus">
        {navMenus.map((menu, idx) => (
          <li
            key={idx}
            className={`rounded-sm mb-1 border border-gray-700 hover:bg-gray-950 transition-all duration-300 ${
              menu.idx === menuIdx ? "bg-gray-950" : ""
            }`}
          >
            <Link to={menu.to} className="flex gap-4 items-center py-2 px-10">
              {menu.icon} {menu.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="w-4/5">
        <button className="flex justify-center items-center gap-2 bg-gray-300 text-gray-900 py-3 px-4 rounded-md w-full">
          <FcGoogle className="w-5 h-5" />
          <span className="text-sm">Google Login</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
