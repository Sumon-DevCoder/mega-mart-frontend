import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import Link from "next/link";

const WelcomeBanner = () => {
  return (
    <div className="flex hidden flex-col md:flex-row md:justify-between items-center text-[#666666] bg-[#F5F5F5] py-2 px-5 lg:px-20">
      {/* Welcome Message */}
      <div>
        <h2 className="text-sm font-normal text-center md:text-left">
          Welcome to worldwide Megamart!
        </h2>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center justify-center gap-4 mt-2 md:mt-0">
        {/* Deliver To */}
        <Link
          href="/order"
          className="flex gap-1 items-center text-nowrap cursor-pointer hover:text-[#008ECC] transition-colors duration-300 delay-100"
        >
          <IoLocationOutline className="text-[#008ECC]" />
          <p className="text-sm">Deliver to 423651</p>
        </Link>

        {/* Separator */}
        <div className="hidden md:block h-5 w-[1px] bg-gray-400"></div>

        {/* Track Your Order */}
        <Link
          href="/order"
          className="flex gap-1 items-center text-nowrap cursor-pointer hover:text-[#008ECC] transition-colors duration-300 delay-100"
        >
          <CiDeliveryTruck className="text-[#008ECC]" />
          <p className="text-sm">Track your order</p>
        </Link>

        {/* Separator */}
        <div className="hidden md:block h-5 w-[1px] bg-gray-400"></div>

        {/* All Offers */}
        <Link
          href="/product"
          className="flex gap-1 items-center text-nowrap cursor-pointer hover:text-[#008ECC] transition-colors duration-300 delay-100"
        >
          <BiSolidOffer className="text-[#008ECC]" />
          <p className="text-sm">All Offers</p>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeBanner;
