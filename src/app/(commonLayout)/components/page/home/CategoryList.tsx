"use client";
import DynamicLoader from "@/app/components/DynamicLoader";
import useGetProducts from "@/hooks/useGetProducts";
import { TProduct } from "@/types/product.types";
import {
  IoIosArrowDown,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";

const CategoryList = () => {
  const { categories, isLoading } = useGetProducts(null);

  console.log("categories", categories);

  const scroll = (direction: string) => {
    const scrollContainer = document.getElementById("categoryList");
    if (scrollContainer) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-3 hidden">
      {isLoading ? (
        <DynamicLoader />
      ) : categories && categories.length > 0 ? (
        <div className="flex items-center justify-between">
          <button
            onClick={() => scroll("left")}
            className="p-2 bg-[#48a0d3] rounded-full hover:bg-[#0074B7] cursor-pointer hidden"
          >
            <IoIosArrowBack className=" text-white " />
          </button>

          <ul
            id="categoryList"
            className="flex overflow-x-auto space-x-2.5 md:py-2 mx-5 m-auto"
            style={{
              msOverflowStyle: "none", // Internet Explorer and Edge
              scrollbarWidth: "none", // Firefox
            }}
          >
            {categories.map((category: TProduct, index: number) => (
              <li
                key={index}
                className="bg-[#F3F9FB] flex items-center gap-2 text-nowrap text-black text-xs md:text-sm hover:text-[#F3F9FB] py-2 px-4 md:py-2 md:px-4 rounded-full text-center hover:bg-[#0074B7] cursor-pointer"
              >
                {category.category}
                <IoIosArrowDown className="text-[#008ECC] hover:text-[#F3F9FB]" />
              </li>
            ))}
          </ul>

          <button
            onClick={() => scroll("right")}
            className="p-2 bg-[#48a0d3] text-white rounded-full  cursor-pointer hidden"
          >
            <IoIosArrowForward className="text-white" />
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-500">No categories available</p>
      )}
    </div>
  );
};

export default CategoryList;
