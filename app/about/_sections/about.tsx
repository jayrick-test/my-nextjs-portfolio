"use client";

// import DetailsCard from "@/components/details-card";
import TitlePage from "@/components/page-title";
import { SkillsCard } from "@/components/skills-card";
import { AiIcon } from "@/components/svg/ai-icon";
// import { BriefCaseIcon } from "@/components/svg/briefcase-icon";
// import { CodeIcon } from "@/components/svg/code-icon";
import { GitIcon } from "@/components/svg/git-icon";
import { MySqlIcon } from "@/components/svg/mysql-icon";
import { PostgreSqlIcon } from "@/components/svg/postgresql-icon";
import { PostmanIcon } from "@/components/svg/postman-icon";
import { SqliteIcon } from "@/components/svg/sqlite-icon";
import { VSCodeIcon } from "@/components/svg/vscode-icon";
import { ToolsInfo } from "@/components/tools-info";

// const TECH_TOOLS = ["VSCode", "Postman", "Prisma Studio"];

export const About = () => {
  return (
    <main>
      <section className="w-full pt-[calc(100%-(100%-160px))]">
        <div className="px-10 py-5">
          <div className="container mx-auto w-full space-y-12">
            <div className="space-y-4">
              <div className="relative block bg-white">
                <TitlePage
                  title={
                    <div className="xs:max-w-fit max-w-64 mx-auto">
                      About <span className="text-green-500">Me</span>
                    </div>
                  }
                />
              </div>
              <p className="text-center font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            {/* <div className="flex flex-wrap items-stretch gap-4">
              <div className="shrink-1 w-auto">
                <div className="h-64 bg-slate-300 w-[256px]" />
              </div>
              <div className="flex-1 shrink-0 flex gap-4">
                <DetailsCard
                  icon={<CodeIcon width={32} height={32} />}
                  title="Tools"
                  data={
                    <div className="flex flex-wrap gap-1.5">
                      {TECH_TOOLS.map((tech, index) => (
                        <div key={`my-${tech}-${index}`}>{`${tech}${
                          index !== TECH_TOOLS.length - 1 ? ", " : ""
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
            </div> */}
          </div>
        </div>
      </section>
      <section className="w-full p-10 flex flex-col gap-4 items-center">
        <div className="container mx-auto w-full space-y-8">
          <div className="xs:max-w-fit max-w-64 mx-auto text-4xl font-bold">
            My <span className="text-green-500">Skills</span>
          </div>
          <div className="max-w-7xl mx-auto w-full flex flex-wrap gap-4 items-center justify-center">
            <div className="w-full flex-[0_1_calc(33%-16px)]">
              <SkillsCard skill="HTML" value={90} />
            </div>
            <div className="w-full flex-[0_1_calc(33%-16px)]">
              <SkillsCard skill="CSS" value={85} />
            </div>
            <div className="w-full flex-[0_1_calc(33%-16px)]">
              <SkillsCard skill="SCSS" value={80} />
            </div>
            <div className="w-full flex-[0_1_calc(33%-16px)]">
              <SkillsCard skill="JavaScript" value={80} />
            </div>
            <div className="w-full flex-[0_1_calc(33%-16px)]">
              <SkillsCard skill="React" value={80} />
            </div>
            <div className="w-full flex-[0_1_calc(33%-16px)]">
              <SkillsCard skill="TypeScript" value={75} />
            </div>
            <div className="w-full flex-[0_1_calc(33%-16px)]">
              <SkillsCard skill="NodeJS" value={70} />
            </div>
            <div className="w-full flex-[0_1_calc(33%-16px)]">
              <SkillsCard skill="php" value={75} />
            </div>
          </div>
        </div>
        <div className="container mx-auto w-full space-y-8">
          <div className="xs:max-w-fit max-w-64 mx-auto text-4xl font-bold">
            <span className="text-green-500">Frameworks</span>
          </div>
          <div className="max-w-7xl mx-auto w-full flex flex-wrap gap-4 items-center justify-center">
            <div className="w-full flex-[0_1_calc(33%-16px)]">
              <SkillsCard skill="TailwindCSS" value={80} />
            </div>
            <div className="w-full flex-[0_1_calc(33%-16px)]">
              <SkillsCard skill="NextJS" value={70} />
            </div>
            <div className="w-full flex-[0_1_calc(33%-16px)]">
              <SkillsCard skill="NestJS" value={70} />
            </div>
            <div className="w-full flex-[0_1_calc(33%-16px)]">
              <SkillsCard skill="Prisma" value={80} />
            </div>
            <div className="w-full flex-[0_1_calc(33%-16px)]">
              <SkillsCard skill="Laravel" value={75} />
            </div>
            <div className="w-full flex-[0_1_calc(33%-16px)]">
              <SkillsCard skill="VueJS" value={75} />
            </div>
            <div className="w-full flex-[0_1_calc(33%-16px)]">
              <SkillsCard skill="NuxtJS" value={70} />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full p-10 flex items-center">
        <div className="container mx-auto w-full space-y-8">
          <div className="xs:max-w-fit max-w-64 mx-auto text-4xl font-bold">
            My <span className="text-green-500">Tools</span>
          </div>
          <div className="max-w-4xl mx-auto w-full flex flex-wrap gap-4 items-center justify-center">
            <ToolsInfo
              label="Visual Studio Code"
              icon={<VSCodeIcon width={32} height={32} />}
            />
            <ToolsInfo label="GIT" icon={<GitIcon width={32} height={32} />} />
            <ToolsInfo
              label="Postman"
              icon={<PostmanIcon width={32} height={32} />}
            />
            <ToolsInfo label="AI" icon={<AiIcon width={32} height={32} />} />
          </div>
        </div>
      </section>
      <section className="w-full p-10 flex items-center">
        <div className="container mx-auto w-full space-y-8">
          <div className="xs:max-w-fit max-w-64 mx-auto text-4xl font-bold">
            My <span className="text-green-500">Databases</span>
          </div>
          <div className="max-w-4xl mx-auto w-full flex flex-wrap gap-4 items-center justify-center">
            <ToolsInfo
              label="MySQL"
              icon={<MySqlIcon width={32} height={32} />}
            />
            <ToolsInfo
              label="PostgreSQL"
              icon={<PostgreSqlIcon width={32} height={32} />}
            />
            <ToolsInfo
              label="SQLite"
              icon={<SqliteIcon width={32} height={32} />}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
