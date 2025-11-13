import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mister zaynee Portfolio",
  description: "Welcome to my animated portfolio website showcasing my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gradient-to-b from-[#FFF8E1] to-[#f4f7f4] overflow-hidden">
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)] overflow-x-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
