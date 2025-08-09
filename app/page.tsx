import { Metadata } from "next";
import { Home } from "./_sections/home";

export const metadata: Metadata = {
  title: "Simple Portfolio | Home",
  description: "Simple Portfolio home page",
};

export default function Page() {
  return <Home />;
}
