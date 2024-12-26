import React from "react";
import Banner from "./components/page/home/Banner";
import TopCategory from "./components/page/home/TopCategory";
import BestDealSmartPhone from "./components/page/home/BestDealSmartPhone";
import DailyEssential from "./components/page/home/DailyEssential";
import TopElectronicsBrand from "./components/page/home/TopElectronicsBrand";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <BestDealSmartPhone />
      <TopCategory />
      <TopElectronicsBrand />
      <DailyEssential />
    </div>
  );
};

export default HomePage;
