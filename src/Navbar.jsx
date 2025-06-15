import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { Themecontext } from "./App";

const Navbar = () => {
  const { isClick, setIsClick } = useContext(Themecontext);

  const handleClick = () => {
    setIsClick((prev) => !prev);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (isClick) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isClick]);

  return (
    <nav className="bg-gray-800 p-4 flex justify-center space-x-8 shadow-md">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-400 bg-white border-2 font-semibold transition duration-300 px-3 py-1 rounded"
            : "text-white hover:text-amber-400 font-semibold transition duration-300"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/useEffect"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-400 bg-white border-2 font-semibold transition duration-300 px-3 py-1 rounded"
            : "text-white hover:text-amber-400 font-semibold transition duration-300"
        }
      >
        useEffect
      </NavLink>

      <NavLink
        to="/useRef"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-400 bg-white border-2 font-semibold transition duration-300 px-3 py-1 rounded"
            : "text-white hover:text-amber-400 font-semibold transition duration-300"
        }
      >
        useRef
      </NavLink>

      <NavLink
        to="/alltasks"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-400 bg-white border-2 font-semibold transition duration-300 px-3 py-1 rounded"
            : "text-white hover:text-amber-400 font-semibold transition duration-300"
        }
      >
        UseContext
      </NavLink>

      <NavLink
        to="/booking"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-400 bg-white border-2 font-semibold transition duration-300 px-3 py-1 rounded"
            : "text-white hover:text-amber-400 font-semibold transition duration-300"
        }
      >
        Booking
      </NavLink>
      <NavLink
        to="/usememo"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-400 bg-white border-2 font-semibold transition duration-300 px-3 py-1 rounded"
            : "text-white hover:text-amber-400 font-semibold transition duration-300"
        }
      >
         Usememo
      </NavLink>

      <button
        onClick={handleClick}
        className="flex items-center gap-2 text-black bg-white border-2 border-amber-400 rounded-md px-4 py-2 hover:text-amber-400 font-semibold transition duration-300"
      >
        {isClick ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-blue-500" />
        )}
        {isClick ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
