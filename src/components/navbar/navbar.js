'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleRefresh = (e) => {
    e.preventDefault();
    router.refresh();
    router.push('/');
  };

  return (
    <div className="flex justify-between items-center px-5 py-3 h-16 shadow-b-md bg-white sticky top-0 z-50 border-b-2">
      <Link href="/" onClick={handleRefresh} className="text-3xl text-slate-800 font-bold">
        PATCHNIDA
      </Link>
      
      <div className="flex">
        <Link href="/" className="flex justify-center items-center w-28 h-12 hover:bg-slate-800 hover:text-white hover:font-medium tracking-[1px]">
            HOME
        </Link>
        <Link href="/about" className="flex justify-center items-center w-28 h-12 hover:bg-slate-800 hover:text-white hover:font-medium tracking-[1px]">
            ABOUT
        </Link>
        <Link href="/projects" className="flex justify-center items-center w-28 h-12 hover:bg-slate-800 hover:text-white hover:font-medium tracking-[1px]">
            PROJECTS
        </Link>
        <Link href="/contact" className="flex justify-center items-center w-28 h-12 hover:bg-slate-800 hover:text-white hover:font-medium tracking-[1px]">
            CONTACT
        </Link>
      </div>
    </div>
  )
}

export default Navbar;