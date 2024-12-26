"use client";
import DynamicLoader from "@/app/components/DynamicLoader";
import useGetProducts from "@/hooks/useGetProducts";
import { TCategory, TProduct } from "@/types/product.types";
import { IoIosArrowDown } from "react-icons/io";

const CategoryList = () => {
  const { categories, isLoading } = useGetProducts(null);

  const topCategories = categories?.filter(
    (category: TCategory) => category.categoryType !== "top"
  );

  return (
    <div className="pt-3">
      {isLoading ? (
        <DynamicLoader />
      ) : categories && categories.length > 0 ? (
        <ul className="flex overflow-x-auto space-x-2.5 md:py-2  scrollbar-thin scrollbar-thumb-[#0074B7] scrollbar-track-transparent mx-5 m-auto md:mx-0">
          {topCategories.map((category: TProduct, index: number) => (
            <li
              key={index}
              className="bg-[#F3F9FB] flex items-center gap-2 text-nowrap  text-black text-xs md:text-sm hover:text-[#F3F9FB] py-2 px-4 md:py-2 md:px-4 rounded-full text-center hover:bg-[#0074B7] cursor-pointer"
            >
              {category?.category}
              <IoIosArrowDown className="text-[#008ECC] hover:text-[#F3F9FB]" />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No categories available</p>
      )}
    </div>
  );
};

export default CategoryList;
