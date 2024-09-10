import React from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <nav className="container mx-auto  border-b border-black">
      <div className=" flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/"  className="text-2xl font-bold text-gray-900">TRENDY</Link>
        </div>

         {/* Hamburger Menu for Mobile */}
         <div className="block lg:hidden items-center text-xl">
          <button
          
            className="text-gray-900 focus:outline-none"
          >
            <RxHamburgerMenu />
          </button>
        </div>

        {/* Links */}
        <div className="hidden space-x-6 lg:flex">
          <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900">Woman</Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900">Man</Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900">Youth</Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900">Community</Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900">Blog</Link>
        </div>

        {/* Search */}
        <div className='hidden lg:block'>
          <input 
            type="text" 
            placeholder="Search" 
            className="border border-gray-500 bg-transparent rounded-full px-4 py-2"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
