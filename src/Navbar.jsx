import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token"); // check if user is logged in

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/login');
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold"> {props.name}</h1>

      <div className="space-x-4">
        {isLoggedIn ? (
          <>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white hover:text-cyan-400">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
