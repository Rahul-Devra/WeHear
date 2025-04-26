import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center px-8 py-4 bg-black text-white">
      {/* Logo */}
      <div className="logo">
        <a href="https://wehear.in/" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://i0.wp.com/wehear.in/wp-content/uploads/2024/04/cropped-cropped-WEHEAR-INO-WHITE-.png?w=512&ssl=1" 
            alt="WeHear Logo" 
            className="w-[50%] cursor-pointer" 
          />
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center text-lg font-semibold">
        <li>
          <a href="/impact" className="hover:text-gray-300 px-3">IMPACT</a>
        </li>
        <div className="w-px h-4 bg-white" />
        
        <li>
          <a href="/investor" className="hover:text-gray-300 px-3">INVESTOR</a>
        </li>
        <div className="w-px h-4 bg-white" />
        
        <li>
          <a href="/careers" className="hover:text-gray-300 px-3">CAREERS</a>
        </li>
        <div className="w-px h-4 bg-white" />
        
        <li>
          <a href="/Our-Founders" className="text-red-500 border-b-2 border-red-500 pb-1 px-3">
            FOUNDER’S
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;