"use client";

import { PageTitle } from "@/components/page-title";

export const Contact = () => {
  return (
    <section className="w-full pt-[calc(100%-(100%-160px))]">
      <div className="px-10 py-5">
        <div className="container mx-auto w-full space-y-8">
          <div className="space-y-4">
            <PageTitle
              title={
                <span>
                  Contact <span className="text-green-300">Me</span>
                </span>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
