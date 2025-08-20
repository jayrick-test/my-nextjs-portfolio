import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

type CountUpDownMotionProps = {
  title: string | React.ReactNode;
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  autoStart?: boolean;
  onComplete?: () => void;
};

const CountUpDownMotion: React.FC<CountUpDownMotionProps> = ({
  start = 0,
  title,
  end,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
  autoStart = true,
  onComplete,
}) => {
  const motionValue = useMotionValue(start);
  const [displayValue, setDisplayValue] = useState(start.toFixed(decimals));

  const rounded = useTransform(motionValue, (latest) =>
    latest.toFixed(decimals)
  );

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      setDisplayValue(v);
    });

    if (autoStart)
      animate(motionValue, end, {
        duration,
        ease: "easeOut",
        onComplete,
      });

    return () => unsubscribe();
  }, [start, end, duration, autoStart, rounded, motionValue, onComplete]);

  return (
    <div className="flex flex-col items-center gap-1">
      <motion.span
        className="font-bold text-4xl p-4
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {prefix}
        {displayValue}
        {suffix}
      </motion.span>
      <p className="text-slate-500">{title}</p>
    </div>
  );
};

export default CountUpDownMotion;
