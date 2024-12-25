import React from "react";
import Banner from "./components/page/home/Banner";
import TopCategory from "./components/page/home/TopCategory";
import BestDealSmartPhone from "./components/page/home/BestDealSmartPhone";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <BestDealSmartPhone />
      <TopCategory />
    </div>
  );
};

export default HomePage;
