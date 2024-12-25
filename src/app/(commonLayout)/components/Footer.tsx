import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { TbPhoneCalling } from "react-icons/tb";

const FooterPage = () => {
  return (
    <footer className="bg-[#008ECC] text-white pt-8 pb-3 mt-20">
      <div className="container mx-auto px-4 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* First Column */}
          <div>
            <h4 className="font-semibold text-3xl">MegaMart</h4>
            <h2 className="mt-4 mb-1.5 font-semibold">Contact Us</h2>
            <p className="flex flex-col mb-1.5 font-normal">
              <div className="flex items-center gap-1">
                <FaWhatsapp className="text-white" /> <p>WhatsApp:</p>
              </div>
              <span className="ml-5">+1 202-918-2132</span>
            </p>
            <p className="flex flex-col mb-1.5 font-normal">
              <div className="flex items-center gap-1">
                <TbPhoneCalling className="text-white text-md" />{" "}
                <p>Call Us:</p>
              </div>
              <span className="ml-5">+1 202-918-2132</span>
            </p>
            <h2 className="font-semibold mb-1.5">Download App</h2>
            <div className="flex gap-3 flex-wrap">
              <Image
                height={110}
                width={110}
                src="https://i.ibb.co.com/Hd8fcqy/46df7c84aa0528e7b14d171980539ec6.png"
                alt="app store img"
              />
              <Image
                height={110}
                width={110}
                src="https://i.ibb.co.com/FWZV34B/8e9645df6d1a3c42b5719805f5d41e6b.png"
                alt="app store img"
              />
            </div>
          </div>

          {/* Second Column */}
          <div>
            <span className="text-lg font-semibold border-b-2 leading-5">
              Most Popular Categories
            </span>
            <ul className="list-disc pl-5 mt-4 space-y-2 font-normal">
              <li>Staples</li>
              <li>Beverages</li>
              <li>Personal Care</li>
              <li>Home Care</li>
              <li>Baby Care</li>
              <li>Vegetables & Fruits</li>
              <li>Snacks & Foods</li>
              <li>Dairy & Bakery</li>
            </ul>
          </div>

          {/* Third Column */}
          <div>
            <span className="text-lg font-semibold border-b-2">
              Customer Services
            </span>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>E-waste Policy</li>
              <li>Cancellation & Return Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#05ABF3] max-w-[1200px] m-auto"></div>
      <p className="text-center mt-2 font-normal">
        © {new Date().getFullYear()} All rights reserved. Reliance Retail Ltd.
      </p>
    </footer>
  );
};

export default FooterPage;
