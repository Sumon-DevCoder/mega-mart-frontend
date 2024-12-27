"use client";

import useGetProducts from "@/hooks/useGetProducts";
import SectionTitle from "../../SectionTitle";
import DynamicLoader from "@/app/components/DynamicLoader";
import { TProduct } from "@/types/product.types";
import Image from "next/image";

const DailyEssential = () => {
  const { data, isLoading } = useGetProducts("Premium Fruits");

  const premiumFruits = data?.data?.result?.[0]?.products || [];

  const topPremiumFruits = premiumFruits?.filter(
    (fruit: TProduct) => fruit.brandType === "top"
  );

  console.log("premiumFruits", topPremiumFruits);

  return (
    <div className="">
      <SectionTitle subtitle="Daily" title="Essentials" />
      {isLoading ? (
        <DynamicLoader />
      ) : (
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4 px-5 lg:px-0">
          {topPremiumFruits?.map((fruit: TProduct, index: number) => (
            <div
              key={index}
              className="overflow-hidden hover:border rounded-2xl cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative h-[187px] bg-[#F5F5F5] rounded-2xl">
                <Image
                  src={fruit?.img?.[0]}
                  alt={fruit.name}
                  fill
                  className="object-cover p-4"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 text-center">
                <h3 className="text-md  font-semibold text-[#666666]">
                  {fruit.name}
                </h3>
                <p className="text-[#222222] text-lg font-bold">
                  Up to {fruit.discount}% OFF
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DailyEssential;
