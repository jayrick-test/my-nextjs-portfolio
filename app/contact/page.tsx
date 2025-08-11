import { Metadata } from "next";
import { Contact } from "./_sections/contact";

export const metadata: Metadata = {
  title: "Contact Me | Contact",
  description: "Contact Me Page",
};

export default function Page() {
  return <Contact />;
}
