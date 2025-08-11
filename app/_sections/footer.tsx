"use client";

const Footer = () => {
  return (
    <footer className="py-12 px-10 bg-green-300 text-white">
      <div className="container mx-auto w-full">
        <div className="mx-auto w-auto block text-center">
          &#169; {new Date().getFullYear()} Jayrick. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
