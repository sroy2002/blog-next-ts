import React from "react";
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
  const buttonClasses = "bg-gray-300 hover:bg-gray-400 rounded-lg px-4 py-2 ";
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-200  w-full">
      <div>
        <p className="text-3xl font-bold">BoP</p>
      </div>
        <div className="flex gap-6 text-lg">
          <div className="hover:text-blue-500 cursor-pointer">Home</div>
          <div className="hover:text-blue-500 cursor-pointer">Posts</div>
          <div className="hover:text-blue-500 cursor-pointer">Features</div>
          <div className="hover:text-blue-500 cursor-pointer">Products</div>
          <div className="hover:text-blue-500 cursor-pointer">Contact us</div>
        </div>
      <div className="flex gap-4 items-center justify-around">
        <div className="flex gap-3 rounded-full items-center px-4 bg-transparent border-2 border-gray-400">
          <input type="text" className="p-2 outline-none bg-transparent focus:ring90--gray-400 placeholder:text-gray-400" placeholder="Search Blogs"/>
          <IoSearchOutline size={22} />
        </div>
        <div className="flex gap-4 ">
          <button className={buttonClasses}>Login</button>
          <button className={buttonClasses}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
