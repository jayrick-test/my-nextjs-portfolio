"use client";

import TitlePage from "@/components/page-title";

const Projects: React.FC = () => {
  return (
    <section className="w-full pt-[calc(100%-(100%-160px))]">
      <div className="px-10 py-5">
        <div className="container mx-auto w-full space-y-8">
          <div className="space-y-4">
            <div className="relative block py-48 bg-white">
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
