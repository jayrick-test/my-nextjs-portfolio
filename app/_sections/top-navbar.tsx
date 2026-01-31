"use client";

import { useCV } from "@/hooks/cv-hooks";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

const TOP_NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "My Projects" },
  { href: "/contact", label: "Contact" },
];

const TopNavbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const myCVPath = useCV();

  const isActive = useCallback((href: string) => pathname === href, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white">
      <div className="shadow-lg py-12 px-10">
        <div className="container mx-auto flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-6">
            {TOP_NAV_LINKS.map((link) => (
              <Link
                key={`desktop-top-nav-links-${link.href}`}
                href={link.href}
                className={`hover:text-green-300 hover:border-b hover:border-green-300 transition-all duration-75 ease-in-out ${
                  isActive(link.href)
                    ? "text-green-300 border-b border-green-300"
                    : "text-slate-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/" className="inline-block text-3xl font-bold">
            <span>Jay</span>
            <span className="text-green-500">rick</span>
            <span className="text-blue-500">.</span>
          </Link>
          <div className="hidden md:block">
            <Link
              className="bg-green-500 text-white rounded px-4 py-3 hover:bg-green-400 transition-colors duration-200"
              download={`mycv.pdf`}
              href={myCVPath}
            >
              Download CV
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span
              className={`block h-0.5 w-6 bg-slate-700 transition-transform ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-slate-700 transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-slate-700 transition-transform ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden pt-4"
            >
              <div className="flex flex-col gap-4 mt-4">
                {TOP_NAV_LINKS.map((link) => (
                  <Link
                    key={`mobile-top-nav-links-${link.href}`}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`hover:text-green-300 transition-all py-4 ${
                      isActive(link.href) ? "text-green-300" : "text-slate-500"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  className="bg-green-300 text-white rounded p-2 hover:bg-green-400 transition-colors duration-200"
                  download={`mycv.pdf`}
                  href={myCVPath}
                >
                  Download CV
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default TopNavbar;
