'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="flex justify-between items-center px-5 py-3 h-16 shadow-b-md sticky top-0 z-50 border-b-2 bg-white"
    >
      <Link
        href="/"
        className="text-3xl font-bold hover:opacity-90"
      >
        PATCHNIDA
      </Link>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        &#9776;
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
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
            currentPath === "/projects" ||
            currentPath === "/moreAboutSimpleBlog" ||
            currentPath === "/moreAboutRMS"
              ? "bg-slate-800 text-white font-medium"
              : "hover:bg-gray-200 hover:font-medium"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col md:hidden">
          <Link
            href="/"
            className={`flex justify-center items-center w-full h-12 tracking-[1px] ${
              currentPath === "/" ? "bg-slate-800 text-white font-medium" : "hover:bg-gray-200 hover:font-medium"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className={`flex justify-center items-center w-full h-12 tracking-[1px] ${
              currentPath === "/about" ? "bg-slate-800 text-white font-medium" : "hover:bg-gray-200 hover:font-medium"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href="/projects"
            className={`flex justify-center items-center w-full h-12 tracking-[1px] ${
              currentPath === "/projects" ||
              currentPath === "/moreAboutSimpleBlog" ||
              currentPath === "/moreAboutRMS"
                ? "bg-slate-800 text-white font-medium"
                : "hover:bg-gray-200 hover:font-medium"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            PROJECTS
          </Link>
          <Link
            href="/contact"
            className={`flex justify-center items-center w-full h-12 tracking-[1px] ${
              currentPath === "/contact" ? "bg-slate-800 text-white font-medium" : "hover:bg-gray-200 hover:font-medium"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
