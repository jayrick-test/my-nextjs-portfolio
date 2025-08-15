import { useEffect, useState } from "react";

export const useCV = () => {
  const [cvPath, setCVPath] = useState<string>(
    `${process.env.LOCAL_BASE_DOMAIN_URL || "http://localhost:3000"}/cv/cv.pdf`
  );

  useEffect(() => {
    if (typeof window !== "undefined")
      setCVPath(`${window.location.origin}/cv/cv.pdf`);
  }, []);

  return cvPath;
};
