"use client";

import { motion } from "motion/react";

type ProgressBarProps = {
  value: number; // progress value 0–100
  animate?: boolean; // animate progress changes or not
  height?: number; // bar height in px
  color?: string; // bar color
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  animate = false,
  height = 12,
  color = "#05df72",
}) => {
  return (
    <>
      <div
        className="space-y-2 overflow-hidden block"
        style={{
          height,
          background: "#e5e7eb",
          borderRadius: height / 2,
        }}
      >
        <motion.div
          initial={{ width: animate ? 0 : `${value}%` }}
          animate={{ width: `${value}%` }}
          transition={animate ? { duration: 0.4, ease: "easeOut" } : undefined}
          className="block"
          style={{
            height: "100%",
            background: color,
          }}
        />
      </div>
      <div className="w-fit ml-auto text-lg">{value}%</div>
    </>
  );
};
