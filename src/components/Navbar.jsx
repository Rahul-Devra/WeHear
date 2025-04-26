import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("founders");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

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
          <a 
            href="/" 
            onClick={() => handleLinkClick("impact")} 
            className={`px-3 ${activeLink === "impact" ? "text-red-500 border-b-2 border-red-500" : "hover:text-gray-300"}`}
          >
            IMPACT
          </a>
        </li>
        <div className="w-px h-4 bg-white" />
        
        <li>
          <a 
            href="/" 
            onClick={() => handleLinkClick("investor")} 
            className={`px-3 ${activeLink === "investor" ? "text-red-500 border-b-2 border-red-500" : "hover:text-gray-300"}`}
          >
            INVESTOR
          </a>
        </li>
        <div className="w-px h-4 bg-white" />
        
        <li>
          <a 
            href="/" 
            onClick={() => handleLinkClick("careers")} 
            className={`px-3 ${activeLink === "careers" ? "text-red-500 border-b-2 border-red-500" : "hover:text-gray-300"}`}
          >
            CAREERS
          </a>
        </li>
        <div className="w-px h-4 bg-white" />
        
        <li>
          <a 
            href="/" 
            onClick={() => handleLinkClick("founders")} 
            className={`px-3 ${activeLink === "founders" ? "text-red-500 border-b-2 border-red-500" : "hover:text-gray-300"}`}
          >
            FOUNDER’S
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;