"use client";

import FacebookIcon from "@/components/svg/facebook-icon";
import { LinkedInIcon } from "@/components/svg/linkedin-icon";

const Footer = () => {
  return (
    <footer className="py-12 px-10 bg-black text-white">
      <div className="container mx-auto w-full flex items-center justify-between">
        <div className="block w-auto space-x-1">
          <span>&#169; {new Date().getFullYear()}</span>
          <div className="inline-block font-bold">
            <span className="text-white">Jay</span>
            <span className="text-green-500">rick</span>
            <span className="text-blue-500">.</span>
          </div>
          <span>All rights reserved.</span>
        </div>
        <div className="flex flex-wrap gap-2.5 justify-end items-center w-auto">
          <FacebookIcon width={32} height={32} className="cursor-pointer" />
          <LinkedInIcon width={32} height={32} className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
