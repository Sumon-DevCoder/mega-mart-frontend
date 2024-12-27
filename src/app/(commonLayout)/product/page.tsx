// "use client";

// import useGetProducts from "@/hooks/useGetProducts";
// import React from "react";
// import ProductContainer from "../components/page/product/ProductContainer";

// const ProductPage = () => {
//   const { categories: products } = useGetProducts(null);

//   return (
//     <div className="p-6">
//       <h1 className="text-xl  lg:text-3xl font-bold  text-center text-black dark:text-white pt-10">
//         Available Animal & Pets
//       </h1>
//       <p className="text-xl lg:text-md my-2 mb-5 text-center text-black dark:text-white">
//         You can categories your favorite pets search and filtering
//       </p>
//       <ProductContainer productsData={products} />
//     </div>
//   );
// };

// export default ProductPage;

import React from "react";
import WorkingFeaturesMsg from "../components/WorkingFeaturesMsg";

const ProductDetailsPage = () => {
  return (
    <div>
      <WorkingFeaturesMsg />
    </div>
  );
};

export default ProductDetailsPage;
