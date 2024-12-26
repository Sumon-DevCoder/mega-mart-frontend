"use client";

import { useGetProductsQuery } from "@/redux/features/product/productApi";

const useGetProducts = (value: string | null) => {
  const { data, isLoading } = useGetProductsQuery(value);

  const categories = data?.data?.result || [];

  return { data, categories, isLoading };
};

export default useGetProducts;
