"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-[#333333] shadow-md">
      {/* Desktop Links */}
      <div className="md:flex hidden w-1/3 justify-content-start">
        {links.map((link) => (
          <NavLinks key={link.name} link={link} />
        ))}
      </div>

      {/* Logo */}
      <div className="md:hidden lg:flex lg:w-1/3 justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 flex items-center justify-center"
        >
          <span className="mx-1 text-[#FFF8E1] font-bold">Zayn</span>
          <span className="bg-[#F4511E] text-white w-12 h-8 rounded-sm flex items-center justify-center font-semibold">
            .dev
          </span>
        </Link>
      </div>

      {/* Social Icons */}
      <div className="md:flex hidden items-center flex-row space-x-4 w-1/3 justify-content-end">
        <Link href="/" className="hover:opacity-80 transition">
          <Image src="/github.png" alt="GitHub" width={30} height={30} />
        </Link>
        <Link href="/" className="hover:opacity-80 transition">
          <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} />
        </Link>
        <Link href="/" className="hover:opacity-80 transition">
          <Image src="/instagram.png" alt="Instagram" width={30} height={30} />
        </Link>
        <Link href="/" className="hover:opacity-80 transition">
          <Image src="/facebook.png" alt="Facebook" width={30} height={30} />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          className="h-7 w-8 flex flex-col justify-between relative z-50"
          onClick={() => setOpen(!open)}
        >
          <div className="bg-[#2E7D32] w-8 h-1 rounded"></div>
          <div className="bg-[#2E7D32] w-6 h-1 rounded"></div>
          <div className="bg-[#2E7D32] w-8 h-1 rounded"></div>
        </button>

        {open && (
          <div className="absolute h-screen w-screen bg-[#2E7D32] z-40 text-[#FFF8E1] top-0 left-0 flex flex-col items-center justify-center space-y-8 text-lg font-medium transition-all duration-300">
            {links.map((link) => (
              <Link key={link.name} href={link.path} className="hover:text-[#81D4FA] transition-colors duration-200">
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
