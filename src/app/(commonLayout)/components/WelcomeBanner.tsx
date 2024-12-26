import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";

const WelcomeBanner = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between text-[#666666] text- bg-[#F5F5F5] py-2 px-5 lg:px-20 m-auto">
      <div>
        <h2 className="text-md text-center">Welcome to worldwide Megamart!</h2>
      </div>
      <div className="flex justify-center  gap-2">
        <div className="flex gap-1 items-center text-nowrap">
          <IoLocationOutline className="text-[#008ECC]" />
          <p className="text-sm">Deliver to 423651</p>
        </div>
        <div className="border-r-2"></div>
        <div className="flex gap-1 items-center mr-2 text-nowrap">
          <CiDeliveryTruck className="text-[#008ECC]" />
          <p className="text-sm">Track your order</p>
        </div>
        <div className="border-r-2"></div>
        <div className="flex gap-1 items-center text-nowrap">
          <BiSolidOffer className="text-[#008ECC]" />
          <p className="text-sm">All Offers</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
