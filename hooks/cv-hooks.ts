import { useMemo } from "react";

export const useCV = () => {
  const myCVPath = useMemo(
    () =>
      `${
        typeof window === "undefined"
          ? process.env.LOCAL_BASE_DOMAIN_URL
          : window.location.origin
      }/cv/cv.pdf`,
    []
  );

  return myCVPath;
};
