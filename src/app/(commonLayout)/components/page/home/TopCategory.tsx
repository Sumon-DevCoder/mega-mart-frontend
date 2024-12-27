"use client"; // Ensure the use of client-side rendering

import { useRouter } from "next/navigation";
import Image from "next/image";
import SectionTitle from "../../SectionTitle";
import { TProduct } from "@/types/gobal";
import useGetProducts from "@/hooks/useGetProducts";
import { TCategory } from "@/types/product.types";
import DynamicLoader from "@/app/components/DynamicLoader";

const TopCategory = () => {
  const { categories, isLoading } = useGetProducts(null);
  const router = useRouter();

  const topCategories = categories?.filter(
    (category: TCategory) => category.categoryType === "top"
  );

  const handleCategoryClick = (category: string) => {
    router.push(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <div>
      <SectionTitle subtitle="Shop From" title="Top Categories" />

      <div className="relative">
        <div
          className="flex gap-5 overflow-x-auto px-4 md:px-0 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 justify-center"
          style={{ scrollBehavior: "smooth" }}
        >
          {isLoading ? (
            <DynamicLoader />
          ) : (
            topCategories?.map((category: TProduct) => (
              <div
                key={category.category}
                onClick={() => handleCategoryClick(category.category)}
                className="h-[172px] w-[132px] flex flex-col justify-center items-center gap-2 mt-5"
                style={{ cursor: "pointer", textAlign: "center" }}
              >
                <Image
                  height={500}
                  width={500}
                  src={category.categoryImg}
                  alt={category.category}
                  className="bg-[#F5F5F5] rounded-full"
                />
                <h3>{category.category}</h3>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
