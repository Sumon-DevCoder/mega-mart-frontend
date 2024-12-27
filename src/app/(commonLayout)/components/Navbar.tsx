"use client";
import { useRouter } from "next/navigation";
import { BsJustifyLeft } from "react-icons/bs";
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import { BiListUl } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";
import {
  BsHouseDoor,
  BsBoxSeam,
  BsInfoCircle,
  BsEnvelope,
  BsPerson,
} from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar
  const router = useRouter(); // Next.js router to navigate

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      // router.push(`/products?search=${searchQuery}`);
      router.push(`/product`);
    }
  };

  return (
    <div className="navbar bg-base-100 px-6 lg:px-0 relative">
      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      {/* main sidebar */}
      <div
        className={`fixed top-0 flex flex-col left-0 w-48 h-full bg-white shadow-lg z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 border-b space-x-2 border-gray-200 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#008ECC]">MegaMart</h2>
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="text-2xl text-gray-600"
          >
            <AiFillCloseSquare className="text-[#008ECC] " />
          </div>
        </div>
        <ul className="mt-4 space-y-2">
          <li className="border-b border-gray-200">
            <Link
              href="/"
              className="flex items-center px-4 py-3 text-gray-700 hover:text-[#008ECC]"
            >
              <BsHouseDoor className="text-xl mr-3 text-[#008ECC]" />
              <span>Home</span>
            </Link>
          </li>
          <li className="border-b border-gray-200">
            <Link
              href="/product"
              className="flex items-center px-4 py-3 text-gray-700 hover:text-[#008ECC]"
            >
              <BsBoxSeam className="text-xl mr-3 text-[#008ECC]" />
              <span>Products</span>
            </Link>
          </li>
          <li className="border-b border-gray-200">
            <Link
              href="/about-us"
              className="flex items-center px-4 py-3 text-gray-700 hover:text-[#008ECC]"
            >
              <BsInfoCircle className="text-xl mr-3 text-[#008ECC]" />
              <span>About Us</span>
            </Link>
          </li>
          <li className="border-b border-gray-200">
            <Link
              href="/contact-us"
              className="flex items-center px-4 py-3 text-gray-700 hover:text-[#008ECC]"
            >
              <BsEnvelope className="text-xl mr-3 text-[#008ECC]" />
              <span>Contact</span>
            </Link>
          </li>
          <li className="border-b border-gray-200">
            <Link
              href="/login"
              className="flex items-center px-4 py-3 text-gray-700 hover:text-[#008ECC]"
            >
              <BsPerson className="text-xl mr-3 text-[#008ECC]" />
              <span>Sign In</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar Start */}
      <div className="navbar-start flex items-center gap-2">
        {/* Hamburger Menu */}
        <button onClick={() => setIsSidebarOpen(true)} className="">
          <div className="bg-slate-200 hover:bg-slate-100 rounded-lg">
            <BsJustifyLeft className="text-4xl text-[#008ECC] p-1" />
          </div>
        </button>

        <Link href="/" className="text-xl lg:text-2xl font-bold text-[#008ECC]">
          MegaMart
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <div className="relative max-w-2xl mx-auto">
          <CiSearch
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#008ECC]"
            size={24}
          />
          <input
            type="text"
            className="bg-[#F3F9FB] pl-10 pr-12 py-2 w-full rounded-md text-[#333] placeholder:text-[#aaa] focus:outline-none"
            placeholder="Search essentials, groceries and more..."
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleSearchEnter}
          />
          <BiListUl
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#008ECC]"
            size={24}
          />
        </div>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3">
        {/* User Login */}
        <Link
          href={"/login"}
          className="hidden sm:flex items-center gap-0.5 hover:text-[#008ECC]"
        >
          <CiUser className="text-[#008ECC] text-xl lg:text-2xl" />
          <h1 className="text-sm lg:text-base font-medium">Sign Up/Sign In</h1>
        </Link>

        {/* Divider */}
        <div className="hidden sm:block h-6 w-[1px] bg-gray-300"></div>

        {/* Cart */}
        <Link
          href={"/cart"}
          className="flex items-center gap-0.5 hover:text-[#008ECC]"
        >
          <CiShoppingCart className="text-[#008ECC] text-xl lg:text-2xl" />
          <h2 className="hidden sm:block text-sm lg:text-base font-medium">
            Cart
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
