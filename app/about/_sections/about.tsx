"use client";

import DetailsCard from "@/components/details-card";
import TitlePage from "@/components/page-title";
import { BriefCaseIcon } from "@/components/svg/briefcase-icon";
import { CodeIcon } from "@/components/svg/code-icon";

const TECH_STACKS = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "NextJS",
  "NestJS",
  "Prisma",
  "NodeJS",
  "MySQL",
  "PostgreSQL",
  "php",
  "Laravel",
];

export const About = () => {
  return (
    <section className="w-full pt-[calc(100%-(100%-160px))]">
      <div className="px-10 py-5">
        <div className="container mx-auto w-full space-y-8">
          <div className="space-y-4">
            <div className="relative block py-48">
              <TitlePage
                title={
                  <div className="xs:max-w-fit max-w-64 mx-auto">
                    About <span className="text-green-300">Me</span>
                  </div>
                }
              />
            </div>
            <p className="text-center text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex flex-wrap items-stretch gap-4">
            <div className="shrink-1 w-auto">
              <div className="h-64 bg-slate-300 w-[256px]" />
            </div>
            <div className="flex-1 shrink-0 flex gap-4">
              <DetailsCard
                icon={<CodeIcon width={32} height={32} />}
                title="Tech Stacks"
                data={
                  <div className="flex flex-wrap gap-1.5">
                    {TECH_STACKS.map((tech, index) => (
                      <div key={`my-${tech}-${index}`}>{`${tech}${
                        index !== TECH_STACKS.length - 1 ? ", " : ""
                      }`}</div>
                    ))}
                  </div>
                }
              />
              <DetailsCard
                icon={<BriefCaseIcon width={32} height={32} />}
                title="Projects"
                data="Built 5+ Projects"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
