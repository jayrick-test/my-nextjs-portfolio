"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

const TopNavbar = () => {
  const pathname = usePathname();

  const isActive = useCallback((href: string) => pathname === href, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="flex items-center justify-between shadow-lg py-12 px-16">
        <nav className="flex items-center justify-center gap-3.5">
          <Link
            href="/"
            className={`inline-block hover:text-green-300 hover:border-b hover:border-green-300 transition-all duration-75 ease-in-out ${
              isActive("/")
                ? "text-green-300 border-b border-green-300"
                : "text-slate-500"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`inline-block text-slate-500 hover:text-green-300 hover:border-b hover:border-green-300 transition-all duration-75 ease-in-out ${
              isActive("/about")
                ? "text-green-300 border-b border-green-300"
                : "text-slate-500"
            }`}
          >
            About
          </Link>
        </nav>
        <Link href="/" className="inline-block text-3xl font-bold">
          <span>Jay</span>
          <span className="text-green-300">rick</span>
          <span className="text-blue-400">.</span>
        </Link>
        <div>
          <button className="bg-green-300 text-white rounded p-2 hover:bg-green-400 cursor-pointer transition-colors duration-200">
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
