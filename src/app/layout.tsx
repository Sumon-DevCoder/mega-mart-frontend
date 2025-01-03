import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google"; // Import Hanken Grotesk font
import "./globals.css";
import TopLoader from "./components/TopLoader";
import ScrollToTopButton from "./components/ScrollTopButton";
import ReduxProvider from "./provider/ReduxProvider";

// Load the Hanken Grotesk font
const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MegaMart",
  description: "Welcome to worldwide Megamart!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.variable} antialiased bg-[#FFFFFF] text-black`}
        style={{ fontFamily: "var(--font-hanken-grotesk), sans-serif" }}
      >
        <div className="">
          <TopLoader />
          <ScrollToTopButton />
          <ReduxProvider>{children}</ReduxProvider>
        </div>
      </body>
    </html>
  );
}
