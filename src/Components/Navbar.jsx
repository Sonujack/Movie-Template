import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../movie-folded-icon.png';

function Navbar() {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-2 bg-gray-100">
      <img className="w-[55px]" src={Logo} alt="Logo" />
      
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          isActive ? "text-red-700 font-bold text-xl" : "text-blue-600 font-bold text-xl hover:text-red-700"}>
        Movie
      </NavLink>
      
      <NavLink 
        to="/watchList" 
        className={({ isActive }) => 
          isActive ? "text-red-700 font-bold text-xl" : "text-blue-600 font-bold text-xl hover:text-red-700"}>
        WatchList
      </NavLink>
    </div>
  );
}

export default Navbar;
