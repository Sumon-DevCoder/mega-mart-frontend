import { TProduct } from "@/types/product.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: TProduct }) => {
  const discountPercentage = product.discount || 0; // Ensure discount is handled
  const originalPrice = product.price || 0;
  const discountedPrice = Math.round(
    originalPrice - (originalPrice * discountPercentage) / 100
  );
  const savedPrice = originalPrice - discountedPrice;

  console.log("product", product);

  return (
    <Link
      href={`/product/${product?.name}`}
      key={product._id}
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
        src={product?.img?.[0]}
        alt={product.name}
        className="w-full h-40 object-cover rounded-t-lg bg-[#F5F5F5]"
      />
      {/* Product Info */}
      <div className="p-3">
        <h3 className="text-lg font-medium truncate">{product.name}</h3>
        <div className="mt-2">
          <div className="flex gap-3 items-center">
            <p className="text-sm text-[#222222]  font-semibold">
              ₹{discountedPrice.toFixed(2)}
            </p>
            <p className="text-sm line-through">₹{originalPrice.toFixed(2)}</p>
          </div>
          <div className="border-t border-[#EDEDED] max-w-[201px] m-auto my-1.5"></div>
          <p className="text-md text-[#249B3E]">
            save - ₹{savedPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
