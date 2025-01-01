'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <div
      className={`flex justify-between items-center px-5 py-3 h-16 shadow-b-md sticky top-0 z-50 border-b-2 `}
    >
      <Link
        href="/"
        className="text-3xl font-bold hover:opacity-90"
      >
        PATCHNIDA
      </Link>

      <div className="flex">
        <Link
          href="/"
          className={`flex justify-center items-center w-32 h-12 tracking-[1px] ${
            currentPath === "/" ? "bg-slate-800 text-white font-medium" : "hover:bg-gray-200 hover:font-medium"
          }`}
        >
          HOME
        </Link>
        <Link
          href="/about"
          className={`flex justify-center items-center w-32 h-12 tracking-[1px] ${
            currentPath === "/about" ? "bg-slate-800 text-white font-medium" : "hover:bg-gray-200 hover:font-medium"
          }`}
        >
          ABOUT
        </Link>
        <Link
          href="/projects"
          className={`flex justify-center items-center w-32 h-12 tracking-[1px] ${
            currentPath === "/projects" ? "bg-slate-800 text-white font-medium" : "hover:bg-gray-200 hover:font-medium"
          }`}
        >
          PROJECTS
        </Link>
        <Link
          href="/contact"
          className={`flex justify-center items-center w-32 h-12 tracking-[1px] ${
            currentPath === "/contact" ? "bg-slate-800 text-white font-medium" : "hover:bg-gray-200 hover:font-medium"
          }`}
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
