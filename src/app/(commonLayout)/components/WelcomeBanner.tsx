import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";

const WelcomeBanner = () => {
  return (
    <div className="flex justify-between text-[#666666] text-sm bg-[#F5F5F5] py-2 px-20">
      <div>
        <h2>Welcome to worldwide Megamart!</h2>
      </div>
      <div className="flex gap-2">
        <div className="flex gap-1 items-center">
          <IoLocationOutline className="text-[#008ECC]" />
          <p>Deliver to 423651</p>
        </div>
        <div className="border-r-2"></div>
        <div className="flex gap-1 items-center mr-2">
          <CiDeliveryTruck className="text-[#008ECC]" />
          <p>Track your order</p>
        </div>
        <div className="border-r-2"></div>
        <div className="flex gap-1 items-center">
          <BiSolidOffer className="text-[#008ECC]" />
          <p>All Offers</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
