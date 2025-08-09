import { Metadata } from "next";
import { About } from "./_sections/about";

export const metadata: Metadata = {
  title: "About Me | About",
  description: "About Me Page",
};

export default function Page() {
  return <About />;
}
