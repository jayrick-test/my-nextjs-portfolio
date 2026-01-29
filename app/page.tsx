import { Metadata } from "next";
import { Home } from "./_sections/home";

export const metadata: Metadata = {
  title: "Simple Portfolio | Home",
  description: "Jayrick Gacayan, software developer",
};

export default function Page() {
  return <Home />;
}
