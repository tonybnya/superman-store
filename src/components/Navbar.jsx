<<<<<<< HEAD
import React from "react";

const Navbar = () => {
    return (
        <div>Navbar</div>
    )
}
export default Navbar;
=======
import { NavLink } from "react-router-dom";
import logohome from "../assets/logos/logo_blanc.png";

const Navbar = () => {
  return (
    <nav className="container mx-auto p-6">
      <div className="flex items-center justify-between h-14 max-lg:px-5">
        <NavLink to="/" className="flex-1 cursor-pointer z-2">
          <img src={logohome} className="w-1/6 md:w-1/4 xl:w-1/6 max-sm:w-1/3 logo" alt="Logo blanc de Superman" />
        </NavLink>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li><NavLink to="home" className="base-bold uppercase transition-colors duration-1000 cursor-pointer hover:text-g8">home</NavLink></li>
            <li><NavLink to="e-shop" className="base-bold uppercase transition-colors duration-1000 cursor-pointer hover:text-g8">e-shop</NavLink></li>
            <li><NavLink to="account" className="base-bold uppercase transition-colors duration-1000 cursor-pointer hover:text-g8">account</NavLink></li>
          </ul>
        </div>

        <div className="md:hidden">
          <button className="outline-none mobile-menu-button">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="mobile-menu hidden md:hidden">
        <ul className="mt-4 space-y-4">
          <li><NavLink to="home" className="block px-4 py-2 base-bold uppercase transition-colors duration-1000 cursor-pointer hover:text-g8">home</NavLink></li>
          <li><NavLink to="e-shop" className="block px-4 py-2 base-bold uppercase transition-colors duration-1000 cursor-pointer hover:text-g8">e-shop</NavLink></li>
          <li><NavLink to="account" className="block px-4 py-2 base-bold uppercase transition-colors duration-1000 cursor-pointer hover:text-g8">account</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
>>>>>>> 4f47de75d095dcc1877e9df5d16796f7f0e0e6c0
