"use client";

import { DownloadIcon } from "@/components/svg/download-icon";
import FacebookIcon from "@/components/svg/facebook-icon";
import { LinkedInIcon } from "@/components/svg/linkedin-icon";
import Typewriter from "@/components/TypewriterText";

export const Home = () => {
  return (
    <section className="min-h-screen w-full px-10 py-5 flex items-center">
      <div className="container mx-auto w-full">
        <div className="flex items-center justify-between w-full">
          <div className="max-w-2xl space-y-4">
            <div className="space-y-1">
              <h1 className="text-4xl font-bold">Hello, I am</h1>
              <Typewriter
                texts={["Jayrick", "Software Developer"]}
                typingSpeed={100}
                cursor="|"
                loop={true}
                deleteSpeed={50}
                pause={2000}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="flex gap-1 font-medium text-lg w-auto text-green-300 border-2 border-green-300 rounded-full hover:bg-green-300 hover:text-white px-4 py-3 cursor-pointer transition-colors duration-200">
                <span>Download CV</span>
                <DownloadIcon width={24} height={24} />
              </button>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <FacebookIcon width={32} height={32} className="cursor-pointer" />
              <LinkedInIcon width={32} height={32} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
