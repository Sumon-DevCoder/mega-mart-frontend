"use client";
import useGetProducts from "@/hooks/useGetProducts";
import { IoIosArrowDown } from "react-icons/io";

const CategoryList = () => {
  const { categories, isLoading } = useGetProducts();

  console.log("cc", categories);

  return (
    <div className="pt-3">
      {isLoading ? (
        <div className="text-center space-x-3">
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-md"></span>
        </div>
      ) : categories && categories.length > 0 ? (
        <ul className="flex justify-center items-center gap-2">
          {categories.slice(6).map((category, index) => (
            <li
              key={index}
              className="bg-[#F3F9FB] flex items-center gap-2 text-black text-sm hover:text-[#F3F9FB] py-2  px-4 rounded-full text-center hover:bg-[#0074B7] cursor-pointer"
            >
              {category?.category}{" "}
              <IoIosArrowDown className="text-[#008ECC] hover:text-[#F3F9FB]" />
            </li>
          ))}
        </ul>
      ) : (
        <p>No categories available</p>
      )}
    </div>
  );
};

export default CategoryList;
