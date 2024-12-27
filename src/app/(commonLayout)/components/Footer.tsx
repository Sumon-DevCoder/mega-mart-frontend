"use client";

import useGetProducts from "@/hooks/useGetProducts";
import { TCategory } from "@/types/product.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { TbPhoneCalling } from "react-icons/tb";
import { TProduct } from "@/types/gobal";
import DynamicLoader from "@/app/components/DynamicLoader";
import { motion } from "framer-motion"; // Import Framer Motion

const FooterPage = () => {
  const { categories, isLoading } = useGetProducts(null);

  const topCategories = categories?.filter(
    (category: TCategory) => category.categoryType === "top"
  );

  return (
    <footer className="relative bg-[#008ECC] text-white pt-8 pb-3 mt-20">
      {/* Circle Background */}
      <div className="absolute top-[-1px] right-0 w-[300px] h-[300px] bg-[#0C9BDA] rounded-tr-none rounded-full z-0"></div>

      <div className="container mx-auto px-4 p-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* First Column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/"
              className="font-semibold text-3xl text-gray-50 hover:text-gray-700 transition-colors transform hover:scale-105 duration-300 ease-in-out"
            >
              MegaMart
            </Link>

            <h2 className="mt-4 mb-1.5 font-semibold">Contact Us</h2>
            <Link
              href="https://api.whatsapp.com/send/?phone=%2B8801962878499&text&type=phone_number&app_absent=0"
              target="_blank"
              className="flex flex-col mb-1.5 font-normal hover:text-gray-700 group"
            >
              <div className="flex items-center gap-1 relative transform transition-transform duration-300 text-gray-50 group-hover:text-gray-700 group-hover:translate-x-4">
                <FaWhatsapp className="text-white hover:text-gray-700" />{" "}
                <p>WhatsApp:</p>
              </div>
              <span className="ml-5">+88 01962-878499</span>
            </Link>
            <Link
              href="tel:+8801516561603"
              className="flex flex-col mb-1.5 font-normal group hover:text-gray-700"
            >
              <div className="flex items-center gap-1 relative transform transition-transform duration-300 text-gray-50 group-hover:text-gray-700 group-hover:translate-x-4">
                <TbPhoneCalling className="text-white text-md" />{" "}
                <p>Call Us:</p>
              </div>
              <span className="ml-5 ">+88 015165-61603</span>
            </Link>
            <h2 className="font-semibold mb-1.5">Download App</h2>
            <div className="flex gap-3 flex-wrap">
              <Link
                target="_blank"
                href="https://apps.apple.com/us/app/club-m-mega-mart/id6443508733"
              >
                <Image
                  height={110}
                  width={110}
                  src="https://i.ibb.co.com/Hd8fcqy/46df7c84aa0528e7b14d171980539ec6.png"
                  alt="app store img"
                  className="h-[42px] w-[140px]"
                />
              </Link>
              <Link
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.dnc.megamart&hl=en"
              >
                <Image
                  height={110}
                  width={110}
                  src="https://i.ibb.co.com/FWZV34B/8e9645df6d1a3c42b5719805f5d41e6b.png"
                  alt="app store img"
                  className="h-[42px] w-[140px]"
                />
              </Link>
            </div>
          </motion.div>

          {/* Second Column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-lg font-semibold border-b-2 leading-5 pb-1">
              Most Popular Categories
            </span>
            {isLoading ? (
              <div className="flex mt-2">
                <DynamicLoader />
              </div>
            ) : topCategories && topCategories.length > 0 ? (
              <ul className="list-disc pl-5 mt-4 space-y-2 font-normal text-md">
                {topCategories.map((category: TProduct, index: number) => (
                  <li key={index} className="group">
                    <Link
                      href="/product"
                      className="relative inline-block transform transition-transform duration-300 text-gray-50 group-hover:text-gray-700 group-hover:translate-x-2"
                    >
                      {category.category}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-gray-50">😢No categories available!</p>
            )}
          </motion.div>

          {/* Third Column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-lg font-semibold border-b-2 pb-1">
              Customer Services
            </span>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-md">
              <li className="group">
                <Link
                  href="/about-us"
                  className="relative inline-block transform transition-transform duration-300 text-gray-50 group-hover:text-gray-700 group-hover:translate-x-2"
                >
                  About Us
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/terms-of-service"
                  className="relative inline-block transform transition-transform duration-300 text-gray-50 group-hover:text-gray-700 group-hover:translate-x-2"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/faq"
                  className="relative inline-block transform transition-transform duration-300 text-gray-50 group-hover:text-gray-700 group-hover:translate-x-2"
                >
                  FAQ
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/privacy-policy"
                  className="relative inline-block transform transition-transform duration-300 text-gray-50 group-hover:text-gray-700 group-hover:translate-x-2"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/e-waste-policy"
                  className="relative inline-block transform transition-transform duration-300 text-gray-50 group-hover:text-gray-700 group-hover:translate-x-2"
                >
                  E-waste Policy
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/return-policy"
                  className="relative inline-block transform transition-transform duration-300 text-gray-50 group-hover:text-gray-700 group-hover:translate-x-2"
                >
                  Cancellation & Return Policy
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-[#05ABF3] w-11/12 m-auto"></div>
      <p className="text-center mt-2 font-normal text-sm">
        © {new Date().getFullYear()} All rights reserved. MegaMart Ltd.
      </p>
    </footer>
  );
};

export default FooterPage;
