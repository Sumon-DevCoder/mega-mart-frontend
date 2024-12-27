import React, { useEffect, useMemo, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { TProduct } from "@/types/product.types";

const categories = ["All", "Fish", "Cow", "Hen", "Duck"];

const ProductContainer = ({ productsData }: { productsData: TProduct[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Filtered products using useMemo for optimization
  const filteredProducts = useMemo(() => {
    let tempProducts = productsData;

    if (selectedCategory !== "All") {
      tempProducts = tempProducts.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchTerm) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return tempProducts;
  }, [searchTerm, selectedCategory, productsData]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [filteredProducts.length, totalPages]);

  return (
    <div className="dark:bg-gray-800 dark:text-gray-100 bg-gray-50 text-gray-800 min-h-screen transition-all duration-300">
      {/* Search and Filter Row */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-green-400 dark:ring-gray-400 dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 text-black transition-all duration-300 ease-in-out"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/2 focus:outline-none dark:text-white focus:ring-2 focus:ring-green-400 dark:ring-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 text-black transition-all duration-300 ease-in-out"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display message when no products match */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-red-500 font-semibold">
          No products found matching your search and filter.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className={`px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 transition-colors duration-200 transform hover:scale-105 ${
            currentPage === 1
              ? "bg-gray-300 dark:bg-gray-700 opacity-50 cursor-not-allowed"
              : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
          }`}
        >
          <FaArrowLeft />
        </button>
        <span className="text-gray-700 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className={`px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 transition-colors duration-200 transform hover:scale-105 ${
            currentPage === totalPages
              ? "bg-gray-300 dark:bg-gray-700 opacity-50 cursor-not-allowed"
              : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
          }`}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProductContainer;
