import Link from "next/link";
import { BsJustifyLeft } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { BiListUl } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="bg-[#F3F9FB] rounded-lg p-1">
          <BsJustifyLeft className="text-3xl text-[#008ECC] " />
        </div>
        <Link href={"/"} className="text-2xl ml-2 font-bold text-[#008ECC]">
          MegaMart
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul> */}
        <div className="relative max-w-2xl mx-auto">
          <CiSearch
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#008ECC]"
            size={24}
          />

          <input
            type="text"
            className="bg-[#F3F9FB] pl-10 py-2 px-72 w-full rounded-md text-[#333] placeholder:text-[#aaa] focus:outline-none "
            placeholder="Search essentials, groceries and more..."
          />

          <BiListUl
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#008ECC]"
            size={24}
          />
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex gap-3 items-center">
          <div className="flex items-center">
            <CiUser className="text-[#008ECC] text-2xl" />
            <h2 className="font-medium">Sign Up/Sign In</h2>
          </div>
          <div className="h-6 w-[1px] bg-gray-300"></div>
          <div className="flex items-center gap-1">
            <CiShoppingCart className="text-2xl text-[#008ECC]" />
            <h2 className="font-medium">Cart</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
