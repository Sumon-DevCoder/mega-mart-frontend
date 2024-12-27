"use client";

import SectionTitle from "../../SectionTitle";
import DynamicLoader from "@/app/components/DynamicLoader";
import useGetProducts from "@/hooks/useGetProducts";
import { TProduct } from "@/types/product.types";
import ProductCard from "../product/ProductCard";

const BestDealSmartPhone = () => {
  const { data, isLoading } = useGetProducts("Mobile");
  const mobiles: TProduct[] = data?.data?.result?.[0]?.products || [];

  return (
    <div>
      <SectionTitle subtitle="Grab the best deal on" title="Smartphones" />

      {isLoading ? (
        <DynamicLoader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 place-items-center gap-6 mt-5 mx-0 md:mx-6 lg:mx-0">
          {mobiles?.map((mobile, index: number) => (
            <ProductCard key={index} product={mobile} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BestDealSmartPhone;
