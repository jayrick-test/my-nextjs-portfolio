import React from "react";
import type { SVGProps } from "react";

export function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16"
      />
    </svg>
  );
}
