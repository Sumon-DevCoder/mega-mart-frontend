"use client"; // Ensure the use of client-side rendering

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useGetProductsQuery } from "@/redux/features/product/productApi";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import SectionTitle from "../../SectionTitle";

const TopCategory = () => {
  const { data } = useGetProductsQuery(null);
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = data?.data?.result || [];

  const handleCategoryClick = (category: string) => {
    router.push(`/products?category=${encodeURIComponent(category)}`);
  };

  const handleNext = () => {
    if (currentIndex < categories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <SectionTitle subtitle="Shop From" title="Top Categories" />

      <div className="relative">
        <div className="flex justify-center gap-10 overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 150}px)` }}
          >
            {categories.map((category) => (
              <div
                key={category.category}
                onClick={() => handleCategoryClick(category.category)}
                className="h-[172px] w-[132px] flex flex-col justify-center items-center gap-2 mt-5"
                style={{ cursor: "pointer", textAlign: "center" }}
              >
                <Image
                  height={132}
                  width={132}
                  src={category.categoryImg}
                  alt={category.category}
                  className="bg-[#F5F5F5] rounded-full"
                />
                <h3>{category.category}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Prev/Next buttons for small screens */}
        <div className="md:hidden absolute top-1/2 w-full transform -translate-y-1/2 flex justify-between px-2">
          <button
            onClick={handlePrev}
            className="bg-gray-600 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            <MdArrowBackIos className="text-white" size={24} />
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-600 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            <MdArrowForwardIos className="text-white" size={24} />
          </button>
        </div>

        {/* Hidden arrows for larger screens */}
        <div className="md:block hidden absolute top-1/2 w-full transform -translate-y-1/2 flex justify-between px-2">
          <button
            onClick={handlePrev}
            className="bg-gray-600 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            <MdArrowBackIos className="text-white" size={24} />
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-600 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            <MdArrowForwardIos className="text-white" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
