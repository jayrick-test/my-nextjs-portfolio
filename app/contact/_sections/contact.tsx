"use client";

import TitlePage from "@/components/page-title";
import { useCallback } from "react";

export const Contact = () => {
  const onFormSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.target as HTMLFormElement);

      const contactRequestPayload = Object.fromEntries(formData.entries());

      try {
        const result = await fetch(`/api/contact`, {
          method: "POST",
          body: JSON.stringify(contactRequestPayload),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (result.status === 200) {
        }
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  return (
    <section className="min-h-screen w-full pt-[calc(100%-(100%-160px))]">
      <div className="px-10 py-5">
        <div className="container mx-auto w-full space-y-12">
          <div className="space-y-4">
            <TitlePage
              title={
                <div className="xs:max-w-fit max-w-64 mx-auto">
                  Contact <span className="text-green-300">Me</span>
                </div>
              }
            />
          </div>
          <form
            onSubmit={onFormSubmit}
            className="space-y-8 max-w-xl w-full mx-auto block"
          >
            <div className="space-y-4">
              <input
                placeholder="Full Name"
                name="fullname"
                className="border border-slate-300 p-3 rounded-lg w-full block focus:outline-none focus:border-green-300 transition-colors duration-200"
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                className="border border-slate-300 p-3 rounded-lg w-full block focus:outline-none focus:border-green-300 transition-colors duration-200"
              />
              <textarea
                placeholder="Message"
                name="message"
                className="border border-slate-300 p-3 rounded-lg resize-none w-full block focus:outline-none focus:border-green-300 transition-colors duration-200"
                rows={8}
              />
            </div>
            <button
              type="submit"
              className="w-fit m-auto block font-medium text-lg text-green-300 border border-green-300 rounded-full hover:bg-green-400 hover:text-white px-4 py-3 cursor-pointer transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
