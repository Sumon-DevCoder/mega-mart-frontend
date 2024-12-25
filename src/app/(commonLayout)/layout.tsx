import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import FooterPage from "./components/Footer";

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
      <div className="bg-[#FFFFFF] text-black max-w-screen-xl m-auto">
        <Navbar />
        {children}
      </div>
      <FooterPage />
    </div>
  );
}
