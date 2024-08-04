import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAdsense from "@/components/GoogleAdsense";


const inter = Roboto({ subsets: ["latin"], weight:["100", "300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "Master Laundry",
  description: "Provides High Quality of Laundry services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
      <GoogleAdsense/>
    </html>
  );
}
