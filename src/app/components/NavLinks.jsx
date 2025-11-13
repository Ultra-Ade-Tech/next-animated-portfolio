"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ link }) => {
    const pathName = usePathname();

  return (
    <Link className={`mx-4 text-sm rounded font-semibold flex items-center justify-center hover:text-[#2E7D32] transition-colors duration-200 p-1 ${pathName === link.path && "bg-black text-white"}`} href={link.path}>
        {link.name} 
    </Link>
  )
}

export default NavLinks
