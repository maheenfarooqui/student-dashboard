import React from "react";
import UseUser from "../context/User";

const Navbar = () => {
  const { name, role } = UseUser();

  return (
    <nav className="border-b border-gray-200 bg-white px-4 py-4 transition-colors duration-300 dark:border-gray-800 dark:bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center md:grid-cols-3">

        {/* Left - Desktop only */}
        <h1 className="hidden text-2xl font-bold text-black dark:text-white md:block">
          Student
          <span className="text-[#9EC302]">Dashboard</span>
        </h1>

        {/* Center */}
        <div className="text-left md:text-center">
          <p className="text-base font-semibold text-black dark:text-white md:text-lg">
            Welcome, {name}
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9EC302] font-bold text-black">
            {name?.charAt(0)}
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {role}
            </p>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;