import React, { useEffect, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { Themecontext } from "./App";

const Navbar = () => {
  const { isClick, setIsClick } = useContext(Themecontext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsClick((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/useEffect", label: "useEffect" },
    { to: "/useRef", label: "useRef" },
    { to: "/alltasks", label: "UseContext" },
    { to: "/booking", label: "Booking" },
    { to: "/usememo", label: "Usememo" },
    { to: "/usecallback", label: "UseCallback" },
 
  ];

  return (
    <nav className="bg-gray-800 p-4 shadow-md relative">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-white text-2xl font-bold">MyNavbar</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 bg-white border-2 font-semibold transition duration-300 px-3 py-1 rounded"
                  : "text-white hover:text-amber-400 font-semibold transition duration-300"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
<NavLink
  to="/login"
  className={({ isActive }) =>
    isActive
      ? "text-red-500 bg-white border-2 border-red-500 font-semibold transition duration-300 px-3 py-1 rounded"
      : "text-white border-2 border-red-500 hover:bg-red-500 hover:text-white font-semibold transition duration-300 px-3 py-1 rounded"
  }
>
  Login
</NavLink>

<NavLink
  to="/signup"
  className={({ isActive }) =>
    isActive
      ? "text-green-500 bg-white border-2 border-green-500 font-semibold transition duration-300 px-3 py-1 rounded"
      : "text-white border-2 border-green-500 hover:bg-green-500 hover:text-white font-semibold transition duration-300 px-3 py-1 rounded"
  }
>
  Signup
</NavLink>
        {/* Theme Toggle Button */}
        <button
          onClick={handleClick}
          className="flex items-center gap-2 text-black bg-white border-2 border-amber-400 rounded-md px-4 py-2 hover:text-amber-400 font-semibold transition duration-300"
        >
          {isClick ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-500" />}
          {isClick ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Hamburger Menu */}
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-center mt-4 space-y-4 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 bg-white border-2 font-semibold transition duration-300 px-3 py-1 rounded"
                  : "text-white hover:text-amber-400 font-semibold transition duration-300"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
