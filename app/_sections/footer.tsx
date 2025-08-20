"use client";

const Footer = () => {
  return (
    <footer className="py-12 px-10 bg-gray-200 text-white">
      <div className="container mx-auto w-full">
        <div className="mx-auto w-auto block text-center">
          &#169; {new Date().getFullYear()}{" "}
          <span className="inline-block font-bold ">
            <span className="text-black">Jay</span>
            <span className="text-green-300">rick</span>
            <span className="text-blue-400">.</span>
          </span>{" "}
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
