"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import useGetProducts from "@/hooks/useGetProducts";
import { TProduct } from "@/types/product.types";
import DynamicLoader from "@/app/components/DynamicLoader";

const Banner = () => {
  const { data, isLoading } = useGetProducts("Premium Fruits");

  const premiumFruits = data?.data?.result?.[0]?.products || [];

  const topPremiumFruits = premiumFruits?.filter(
    (fruit: TProduct) => fruit.brandType === "top"
  );

  const slides = premiumFruits;

  // State for current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2500);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // Go to next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Go to previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="bg-[#212844] py-2 md:px-4 md:py-5 flex justify-center rounded-2xl m-auto mt-6 mx-5 lg:mx-0 h-auto md:h-[316px] relative overflow-hidden">
      {/* Prev Arrow */}
      <button
        onClick={prevSlide}
        className="absolute -left-3 h-10 w-10 top-1/2 transform -translate-y-1/2 bg-[#F3F9FB] text-black rounded-full p-2"
      >
        <MdKeyboardArrowLeft className="text-[#008ECC]" size={24} />
      </button>

      {/* Slide Container */}
      <div className="flex justify-center w-full">
        {isLoading ? (
          <div className="text-white flex">
            <DynamicLoader />
          </div>
        ) : topPremiumFruits && topPremiumFruits.length > 0 ? (
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {topPremiumFruits.map((product: TProduct, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between min-w-full flex-shrink-0"
              >
                <div className="flex flex-col md:flex-row items-center justify-between w-full h-full">
                  {/* Left Side: Text Content */}
                  <div className="text-white w-full md:w-1/2 px-4 text-center md:text-left flex flex-col justify-center">
                    <p className="text-sm md:text-2xl">{product.description}</p>
                    <h2 className="text-sm md:text-3xl font-bold my-3 uppercase">
                      {product.name}
                    </h2>
                    <p className="text-sm md:text-xl font-semibold">
                      UP to {product.discount}% OFF
                    </p>
                  </div>
                  {/* Right Side: Product Image */}
                  <div className="w-full md:w-1/2 flex items-center justify-center">
                    <Image
                      src={product.img[0]}
                      alt={product.name}
                      width={316}
                      height={316}
                      className="rounded-lg object-contain h-32 w-32 md:h-[200px] md:w-[268px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-white text-center flex items-center">
            <p>No products available at the moment.</p>
          </div>
        )}
      </div>

      {/* Next Arrow */}
      <button
        onClick={nextSlide}
        className="absolute -right-3 h-10 w-10 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2"
      >
        <MdKeyboardArrowRight className="text-[#008ECC]" size={24} />
      </button>
    </div>
  );
};

export default Banner;
