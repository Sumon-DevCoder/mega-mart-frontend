import React from "react";
import Banner from "./components/page/home/Banner";
import TopCategory from "./components/page/home/TopCategory";

const HomePage = () => {
  return (
    <div className="max-w-screen-xl m-auto">
      <Banner />
      <TopCategory />
    </div>
  );
};

export default HomePage;
