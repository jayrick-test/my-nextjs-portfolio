"use client";

import TitlePage from "@/components/page-title";
import EnvelopeIcon from "@/components/svg/envelope-icon";
import { PhoneIcon } from "@/components/svg/phone-icon";
import { PinMapIcon } from "@/components/svg/pinmap-icon";
import { useCallback } from "react";

export const Contact = () => {
  const onFormSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formElement = e.target as HTMLFormElement;

      const formData = new FormData(formElement);

      const contactRequestPayload = Object.fromEntries(formData.entries());

      try {
        const result = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: JSON.stringify(contactRequestPayload),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (result.status === 200) {
          formElement.reset();
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
          <div className="flex gap-4 w-full">
            <div className="w-full space-y-8">
              <div className="font-semibold text-3xl border-b border-b-slate-300 w-fit border-dashed">
                Get in <span className="text-green-300">Touch</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 font-medium">
                  <EnvelopeIcon className="text-green-300 inline-block" />
                  <div className="inline-block text-slate-300">
                    jirk24cay0988@gmail.com
                  </div>
                </div>
                <div className="flex items-center gap-4 font-medium">
                  <PhoneIcon className="text-green-300 inline-block" />
                  <div className="inline-block text-slate-300">
                    +63 961 618 2438
                  </div>
                </div>
                <div className="flex items-center gap-4 font-medium">
                  <PinMapIcon className="text-green-300 inline-block" />
                  <div className="inline-block text-slate-300">
                    Cebu City, Cebu, Philippines, 6000
                  </div>
                </div>
              </div>
            </div>
            <form
              onSubmit={onFormSubmit}
              className="space-y-8 w-full shadow-lg rounded-lg p-8 bg-slate-50/30"
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
      </div>
    </section>
  );
};
