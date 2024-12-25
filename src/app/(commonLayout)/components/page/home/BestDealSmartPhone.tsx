"use client";

import { useGetProductsQuery } from "@/redux/features/product/productApi";
import SectionTitle from "../../SectionTitle";
import Image from "next/image";
import { TProduct } from "@/types/product.types";

const BestDealSmartPhone = () => {
  const { data } = useGetProductsQuery("Mobile");

  const mobiles = data?.data?.result?.[0]?.products;

  return (
    <div>
      <SectionTitle subtitle="Grab the best deal on" title="Smartphones" />
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 place-items-center gap-6 mt-10 mx-0  md:mx-6 lg:mx-0 m-auto">
        {mobiles?.map((mobile: TProduct) => {
          const discountPercentage = mobile.discount || 0; // Ensure discount is handled
          const originalPrice = mobile.price || 0;
          const discountedPrice = Math.round(
            originalPrice - (originalPrice * discountPercentage) / 100
          );
          const savedPrice = originalPrice - discountedPrice;

          return (
            <div
              key={mobile._id}
              className="relative bg-white rounded-2xl shadow-lg  w-[227px] "
            >
              {/* Discount Label */}
              {discountPercentage > 0 && (
                <div className="absolute top-0 right-0 bg-[#008ECC] h-[53px] w-[51px] rounded-tr-2xl rounded-bl-2xl text-white text-sm px-2 py-1 rounded">
                  {discountPercentage}% OFF
                </div>
              )}
              {/* Product Image */}

              <Image
                height={200}
                width={200}
                src={mobile?.img?.[0]}
                alt={mobile.name}
                className="w-full h-40 object-cover rounded-t-lg bg-[#F5F5F5]"
              />
              {/* Product Info */}
              <div className="p-3">
                <h3 className="text-lg font-medium truncate">{mobile?.name}</h3>
                <div className="mt-2">
                  <div className="flex gap-3 items-center">
                    <p className="text-sm text-[#222222]  font-semibold">
                      ₹{discountedPrice.toFixed(2)}
                    </p>
                    <p className="text-sm line-through">
                      ₹{originalPrice.toFixed(2)}
                    </p>
                  </div>
                  <div className="border-t border-[#EDEDED] max-w-[201px] m-auto my-1.5"></div>
                  <p className="text-md text-[#249B3E]">
                    save - ₹{savedPrice.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestDealSmartPhone;
