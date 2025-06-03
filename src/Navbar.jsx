import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-center space-x-8 shadow-md">
      <Link 
        to="/useEffect" 
        className="text-white hover:text-amber-400 font-semibold transition duration-300"
      >
        useEffect
      </Link>
      <Link 
        to="/alltasks" 
        className="text-white hover:text-amber-400 font-semibold transition duration-300"
      >
        UseContext
      </Link>
    </nav>
  );
}

export default Navbar;
