import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="h-16 w-screen p-2 flex justify-between bg-amber-900 items-center gap-4">
      <div className="text-2xl font-extrabold text-white">
        <h1>ROHIT SINGH</h1>
      </div>
      <ul className="text-white font-bold flex justify-around items-center gap-11">
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to={"/card"}>
          <li>CARD</li>
        </Link>
        <Link to={"/login"}>
          <li>LOGIN</li>
        </Link>
        <Link to={"/Shinup"}>
          <li>SHINUP</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
