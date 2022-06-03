import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between p-1 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
            <img
              className="w-24 object-contain cursor-pointer"
              src="https://cdn.dribbble.com/users/1736305/screenshots/6365450/eagle.png"
              alt="Logo"
            />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5 font-bold">
            <h3>About</h3>
            <h3>Contact</h3>
            <h3 className="text-white bg-blue-600 px-4 py-1 rounded-full">Follow</h3>
        </div>
      </div>


      <div className="flex items-center space-x-5 text-blue-600 mr-4">
          <h3>
              Sign In
          </h3>
          <h3 className="border border-blue-600 px-4 py-1 rounded-full">
              Get Started
          </h3>
      </div>
    </header>
  );
};

export default Header;
