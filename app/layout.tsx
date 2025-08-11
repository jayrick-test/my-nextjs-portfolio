import type { Metadata } from "next";
import { poppins } from "@/fonts/font-poppins";
import "./globals.css";
import TopNavbar from "./_sections/top-navbar";
import Footer from "./_sections/footer";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Simple Portfolio | Home",
  },
  description: "My Website Portfolio Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} font-poppins relative antialiased`}
      >
        <TopNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
