"use client";

import CountUpDownMotion from "@/components/count-up-down";
import TitlePage from "@/components/page-title";
import { DownloadIcon } from "@/components/svg/download-icon";
import FacebookIcon from "@/components/svg/facebook-icon";
import { LinkedInIcon } from "@/components/svg/linkedin-icon";
import Typewriter from "@/components/typewriter";
import { useCV } from "@/hooks/cv-hooks";
import Link from "next/link";

export const Home = () => {
  const myCVPath = useCV();

  return (
    <>
      <section className="min-h-screen w-full px-10 py-5 flex items-center">
        <div className="container mx-auto w-full">
          <div className="flex items-center justify-between w-full">
            <div className="max-w-2xl space-y-4">
              <div className="space-y-2.5">
                <h1 className="text-4xl font-bold">Hello,</h1>
                <div className="text-green-300">
                  <span className="text-6xl font-medium">I am </span>
                  <Typewriter
                    texts={["Jayrick", "Software Developer"]}
                    typingSpeed={100}
                    cursor="|"
                    loop={true}
                    deleteSpeed={50}
                    pause={2000}
                  />
                </div>

                <p className="text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link
                  download={`mycv.pdf`}
                  href={myCVPath}
                  className="inline-flex gap-1 font-medium text-lg w-auto text-green-300 border-2 border-green-300 rounded-full hover:bg-green-300 hover:text-white px-4 py-3 cursor-pointer transition-colors duration-200"
                >
                  <span>Download CV</span>
                  <DownloadIcon width={24} height={24} />
                </Link>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <FacebookIcon
                  width={32}
                  height={32}
                  className="cursor-pointer"
                />
                <LinkedInIcon
                  width={32}
                  height={32}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full p-10 flex items-center bg-green-300">
        <div className="container mx-auto w-full">
          <div className="flex items-center justify-center gap-4">
            <CountUpDownMotion
              end={2}
              duration={3}
              title={<>Years of Experience</>}
              suffix="+"
            />
            <CountUpDownMotion end={12} title={<>Tech Stacks</>} suffix="+" />
          </div>
        </div>
      </section>
      <section className="w-full p-10 flex items-center">
        <div className="container mx-auto w-full">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="relative block py-12 bg-white">
                <TitlePage
                  title={
                    <div className="xs:max-w-fit max-w-64 mx-auto">
                      About <span className="text-green-300">Me</span>
                    </div>
                  }
                />
              </div>
              <p className="text-center text-slate-500">
                I am a passionate creator who loves building and learning. Here
                is a little more about me.
              </p>
            </div>
            <Link
              href="/about"
              className="w-fit m-auto block font-medium text-lg text-green-300 border border-green-300 rounded-full hover:bg-green-400 hover:text-white px-4 py-3 cursor-pointer transition-colors duration-200"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full p-10 flex items-center bg-green-400">
        <div className="container mx-auto w-full">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="relative block py-12 bg-green-400">
                <TitlePage
                  title={
                    <div className="xs:max-w-fit max-w-64 mx-auto ">
                      My <span className="text-white">Projects</span>
                    </div>
                  }
                />
              </div>
              <p className="text-center text-slate-500">
                Here are some of the projects I have worked on. Take a look!
              </p>
            </div>

            <Link
              href="/projects"
              className="w-fit m-auto block font-medium bg-white text-lg text-green-300 border border-green-300 hover:border-white rounded-full hover:bg-green-400 hover:text-white px-4 py-3 cursor-pointer transition-colors duration-200"
            >
              Click Here
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full p-10 flex items-center">
        <div className="container mx-auto w-full">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="relative block py-12 bg-white">
                <TitlePage
                  title={
                    <div className="xs:max-w-fit max-w-64 mx-auto">
                      Contact <span className="text-green-300">Me</span>
                    </div>
                  }
                />
              </div>
              <p className="text-center text-slate-500">
                Got a question or just want to say hi? Feel free to reach out!
              </p>
            </div>

            <Link
              href="/contact"
              className="w-fit m-auto block font-medium text-lg text-green-300 border border-green-300 rounded-full hover:bg-green-400 hover:text-white px-4 py-3 cursor-pointer transition-colors duration-200"
            >
              Click Here
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
