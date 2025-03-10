import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-600 !px-4 !py-2 flex justify-between items-center">
      <div className="logo relative w-32 h-32 flex justify-center items-center">
        {/* Circular Logo */}
        <img
          src="logo1.png"
          alt="logo"
          className="w-20 h-20 rounded-full border-4 border-green-600 bg-white"
        />
        {/* Text Wrapped Around Logo */}
        <div className="absolute w-32 h-32 flex justify-center items-center">
          <svg viewBox="0 0 100 100" className="absolute w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M 50,50
                   m -40,0
                   a 40,40 0 1,1 80,0
                   a 40,40 0 1,1 -80,0"
              />
            </defs>
            <text fontSize="15" fill="white">
              <textPath href="#circlePath">
                Zayaka Swaad Ka -Zayaka Swaad Ka -
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <div className="border-2 w-full">
          <div>
            <h1>Welcome To Zayaka's Kitchen</h1>
            <div className="searchBar">
        <input type="text" placeholder="Search Your Query" className="p-1 border rounded" />
      </div>
      
      <div className="userAccess flex gap-2">
        <button className="bg-green-500 text-white px-3 py-1 rounded">Sign In</button>
        <button className="bg-blue-500 text-white px-3 py-1 rounded">Log In</button>
        <button className="bg-red-500 text-white px-3 py-1 rounded">Log Out</button>
      </div>
          </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
