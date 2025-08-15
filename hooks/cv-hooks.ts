import { useMemo } from "react";

export const useCV = () => {
  const myCVPath = useMemo(() => {
    let cvPath = "http://localhost:3000";

    if (typeof window !== "undefined") cvPath = window.location.origin;

    return `${cvPath}/cv/cv.pdf`;
  }, []);

  return myCVPath;
};
