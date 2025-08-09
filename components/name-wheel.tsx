import { motion } from "motion/react";
import React, { useState } from "react";

const names = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George"];
const itemHeight = 48;

const SlotMachine = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // which name is currently at the top
  const [spinning, setSpinning] = useState(false);
  const [offset, setOffset] = useState(0); // animated y (px)
  const [reelItems, setReelItems] = useState([...names, ...names]); // initial: two copies
  const [transitionDuration, setTransitionDuration] = useState(0.8); // seconds

  const spin = () => {
    if (spinning) return;
    setSpinning(true);

    const targetIndex = (currentIndex + 1) % names.length; // rotate by one each spin
    const loops = 4; // how many full loops before stopping (tweak for feel)
    const spinDurationMs = 1800; // total animation duration (ms)
    const spinDurationSec = spinDurationMs / 1000;

    // Build a reel with enough copies so the animation has items to scroll through
    const bigReel = Array.from({ length: loops + 1 }).flatMap(() => names);
    // Append one more copy at the end (not strictly necessary here because bigReel already contains loops+1 copies,
    // but ensures finalIndex is inside the constructed array)
    setReelItems(bigReel);

    // Calculate final index inside the bigReel where the target will be located
    const finalIndex = loops * names.length + targetIndex;
    const finalOffset = -finalIndex * itemHeight;

    // animate to finalOffset
    setTransitionDuration(spinDurationSec);
    requestAnimationFrame(() => {
      // ensure DOM updates before animation
      setOffset(finalOffset);
    });

    // After animation ends: snap back to the small offset within the first copy,
    // update currentIndex and reset the rendered reel to the small default
    setTimeout(() => {
      // snap instantly to the equivalent small offset (in the 1st copy)
      setTransitionDuration(0);
      setOffset(-targetIndex * itemHeight);

      // update logical index and prepare for next spin
      setCurrentIndex(targetIndex);
      setReelItems([...names, ...names]); // reset to two copies (light DOM)

      // tiny timeout to re-enable smooth transitions for next spin
      setTimeout(() => {
        setTransitionDuration(0.8);
        setSpinning(false);
      }, 20);
    }, spinDurationMs);
  };

  console.log("test", reelItems);

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-900 text-white rounded-lg w-64 mx-auto">
      {/* Slot box */}
      <div
        className="overflow-hidden w-full border-2 border-yellow-400 rounded bg-black relative"
        style={{ height: `${itemHeight}px` }}
      >
        <motion.div
          animate={{ y: offset }}
          transition={{ duration: transitionDuration, ease: "easeOut" }}
          className="flex flex-col"
        >
          {reelItems.map((name, idx) => (
            <div
              key={`${name}-${idx}`}
              className="h-12 flex items-center justify-center text-lg font-bold"
              style={{ height: `${itemHeight}px` }}
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Spin button */}
      <button
        onClick={spin}
        disabled={spinning}
        className={`px-4 py-2 rounded ${
          spinning ? "bg-gray-600" : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {spinning ? "Spinning..." : "Generate Name"}
      </button>

      {/* Selected name shown below */}
      {!spinning && (
        <div className="text-lg mt-2 text-yellow-300">
          🎉 Selected: <strong>{names[currentIndex]}</strong>
        </div>
      )}
    </div>
  );
};

export default SlotMachine;
