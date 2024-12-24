import Link from "next/link";
import { BsJustifyLeft } from "react-icons/bs";
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import { BiListUl } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-4">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center gap-2">
        {/* Hamburger Menu for Small Screens */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
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

        {/* Logo */}
        <div className="bg-[#F3F9FB] rounded-lg p-1">
          <BsJustifyLeft className="text-3xl text-[#008ECC]" />
        </div>
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
        <div className="hidden sm:flex items-center gap-2">
          <CiUser className="text-[#008ECC] text-xl lg:text-2xl" />
          <h2 className="text-sm lg:text-base font-medium">Sign Up/Sign In</h2>
        </div>

        {/* Divider */}
        <div className="hidden sm:block h-6 w-[1px] bg-gray-300"></div>

        {/* Cart */}
        <div className="flex items-center gap-2">
          <CiShoppingCart className="text-[#008ECC] text-xl lg:text-2xl" />
          <h2 className="hidden sm:block text-sm lg:text-base font-medium">
            Cart
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
