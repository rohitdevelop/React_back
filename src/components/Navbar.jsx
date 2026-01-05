import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-amber-900 text-amber-50 font-bold w-screen h-16 flex justify-between items-center">
      <div className="">
        <h1>Practice app</h1>
      </div>
      <div>
        <ul className="flex gap-14 w-6xl">
          <Link to="/">Home</Link>
          <Link to="/card">Card</Link>
          <Link to="/Login">Login</Link>
          <Link to="/shinup/:userid">Shinup</Link>
          <Link to="/queryparams">queryparams</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
