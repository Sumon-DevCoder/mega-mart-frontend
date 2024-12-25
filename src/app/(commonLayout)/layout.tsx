import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import FooterPage from "./components/Footer";
import WelcomeBanner from "./components/WelcomeBanner";
import CategoryList from "./components/page/home/CategoryList";

export const metadata: Metadata = {
  title: "MegaMart",
  description: "Welcome to worldwide Megamart!",
};

export default async function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <WelcomeBanner />
      <div className="bg-[#FFFFFF] text-black max-w-[1201px] m-auto">
        <CategoryList />
        <Navbar />
        {children}
      </div>
      <FooterPage />
    </div>
  );
}
