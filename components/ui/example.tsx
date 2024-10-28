"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useTransform,
  useMotionValue,
} from "framer-motion";

const StackedModal = () => {
  const [isStackActive, setIsStackActive] = React.useState(false);
  const y = useMotionValue(0);
  const offsetThreshold = 20;
  const opacity = useTransform(y, [0, 3 * offsetThreshold], [1, 0.96]);
  const scale = useTransform(y, [0, offsetThreshold], [0.92, 0.96]);

  const stackRef = useRef<HTMLDivElement>(null);

  const contentVariants = {
    closed: {
      scale: 1,
    },
    open: {
      scale: 0.92,
      y: -35,
    },
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        stackRef.current &&
        !stackRef.current.contains(event.target as Node)
      ) {
        setIsStackActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative h-[400px] w-[400px]">
      <motion.div
        variants={contentVariants}
        initial="closed"
        animate={isStackActive ? "open" : "closed"}
        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
        className="h-full w-full rounded-xl border border-gray-300 bg-red-500"
      />

      <button
        onClick={() => setIsStackActive(true)}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded bg-white px-4 py-2 text-black"
      >
        Open Second
      </button>

      <AnimatePresence>
        {isStackActive && (
          <motion.div
            drag
            dragConstraints={{ bottom: 50, top: -10, left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => {
              if (info.offset.y > offsetThreshold) setIsStackActive(false);
            }}
            dragSnapToOrigin
            ref={stackRef}
            onDrag={(_, info) => {
              y.set(info.offset.y);
            }}
            initial={{ opacity: 1, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="absolute left-0 top-0 h-full w-full rounded-lg border border-gray-300 bg-blue-500"
            dragPropagation={false}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default StackedModal;
