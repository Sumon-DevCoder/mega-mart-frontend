"use client";

import { useGetProductsQuery } from "@/redux/features/product/productApi";

const useGetProducts = () => {
  const { data, isLoading } = useGetProductsQuery(null);

  const categories = data?.data?.result || [];

  return { data, categories, isLoading };
};

export default useGetProducts;
