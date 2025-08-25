"use client";

import TitlePage from "@/components/page-title";
import ProjectCard from "@/components/project-card";

const Projects: React.FC = () => {
  return (
    <section className="w-full pt-[calc(100%-(100%-160px))]">
      <div className="px-10 py-5">
        <div className="container mx-auto w-full space-y-12">
          <div className="space-y-4">
            <div className="relative block bg-white">
              <TitlePage
                title={
                  <div className="xs:max-w-fit max-w-64 mx-auto">
                    My <span className="text-green-300">Projects</span>
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
          <div className="space-y-8">
            <ProjectCard
              title="eduTing"
              description="Smart School Finder and Community, and Career Path
                      Discovery App"
              alt="eduting-img-project-card"
              src="/eduting-img-assets/img1.png"
              doings={[
                "Developed the front-end and navigation design",
                "Used animated interactive graphics using Rive package",
                "Made data manipulation using ChartJS and React ChartJS",
                "Generate schools based on College Admission Rates",
                "Integrated text-editor using SlateJS package",
                "Generate schools based on calculating Cost of Attendance by average family income",
                "Authentication using NextJSAuth",
                "Integrated chat system using @rails/actioncable package",
                "Generate applicable jobs (based on the study field) that fits to the user’s interest",
                "Search schools based on the average debt per student borrower",
              ]}
            />
            <ProjectCard
              title="JoinBitte"
              description="Digitalized Restaurant-Branded and Ordering App"
              alt="joinbitte-img-project-card"
              src="/joinbitte-img-assets/img1.png"
              doings={[
                "Architect and developed the marketing site and admin and owner dashboard",
                "Built database schema for the application using Prisma",
                "Perform translations of a category and or subcategory with its notes and menu and its description through AI in English, Spanish, French, Portuguese and German",
                "Implemented localization using next-intl",
                "Created a personalized QR Codes for restaurant tables and menus",
                "Implemented a PDF generator for menu list items",
                "Implemented Kanban using @hello-pangea/dnd in orders and menu list position",
                "Authentication using AuthJS",
                "Integrated gateway payment using RedUniq to pay earnings",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
