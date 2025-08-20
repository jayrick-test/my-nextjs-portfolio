import { useEffect, useMemo, useRef, useState } from "react";
import { motion, Variants } from "motion/react";

export interface TypewriterProps {
  texts: string | string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
  loop?: boolean;
  cursor?: string;
  className?: string;
}

const container: Variants = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28 } },
};

const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  typingSpeed = 80,
  deleteSpeed = 40,
  pause = 1500,
  loop = true,
  cursor = "|",
}) => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const mounted = useRef(true);

  const textArray = useMemo(
    () => (Array.isArray(texts) ? texts : [texts]),
    [texts]
  );

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (textArray.length === 0) return;

    const current = textArray[index % textArray.length];

    let timeout: ReturnType<typeof setTimeout>;

    const handleType = () => {
      if (!mounted.current) return;

      if (!isDeleting) {
        const next = current.slice(0, display.length + 1);
        setDisplay(next);

        if (next === current) {
          timeout = setTimeout(() => {
            if (!mounted.current) return;

            if (loop) setIsDeleting(true);
            else setIndex((i) => i + 1);
          }, pause);
        } else timeout = setTimeout(handleType, typingSpeed);
      } else {
        const next = current.slice(0, Math.max(0, display.length - 1));

        setDisplay(next);

        if (next === "") {
          setIsDeleting(false);
          setIndex((i) => i + 1);
        }

        timeout = setTimeout(handleType, deleteSpeed);
      }
    };

    timeout = setTimeout(handleType, isDeleting ? deleteSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    display,
    isDeleting,
    index,
    textArray,
    typingSpeed,
    deleteSpeed,
    pause,
    loop,
  ]);

  return (
    <motion.div
      className="inline-flex items-center gap-2 text-6xl font-medium"
      variants={container}
      initial="hidden"
      animate="show"
      aria-live="polite"
    >
      <span>
        {display}
        <motion.span
          aria-hidden="true"
          style={{ display: "inline-block", width: "0.6ch" }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }}
        >
          {cursor}
        </motion.span>
      </span>
    </motion.div>
  );
};

export default Typewriter;
