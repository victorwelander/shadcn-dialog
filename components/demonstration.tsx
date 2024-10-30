"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export default function Demonstration() {
  const [isInnerActive, setIsInnerActive] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycleCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsInnerActive(cycleCount % 4 < 2);
  }, [cycleCount]);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative w-full max-w-lg">
        <motion.div
          ref={outerRef}
          className="overflow-hidden rounded-lg border bg-white shadow-md"
          animate={{
            scale: isInnerActive ? 0.97 : 1,
            translateY: isInnerActive ? "-2%" : "0%",
            height:
              isInnerActive && innerRef.current
                ? innerRef.current.offsetHeight
                : outerRef.current?.offsetHeight || "auto",
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <div className="w-full p-4">
            <div className="flex w-full flex-col gap-4">
              <div className="flex w-full gap-4">
                <Skeleton className="h-20 w-20 flex-shrink-0" />
                <div className="flex flex-grow flex-col space-y-2">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-4/5" />
                </div>
              </div>
              <Skeleton className="h-32 w-full" />
            </div>
          </div>
        </motion.div>
        <AnimatePresence>
          {isInnerActive && (
            <motion.div
              ref={innerRef}
              className="absolute inset-0 overflow-hidden rounded-lg border bg-background shadow-md"
              initial={{ opacity: 0, translateY: "100%" }}
              animate={{ opacity: 1, translateY: "5%" }}
              exit={{ opacity: 0, translateY: "100%" }}
              transition={{
                stiffness: 200,
                damping: 25,
                type: "spring",
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              {" "}
              <div className="w-full p-4">
                <div className="flex w-full flex-col gap-4">
                  <div className="flex w-full gap-4">
                    <Skeleton className="h-20 w-20 flex-shrink-0" />
                    <div className="flex flex-grow flex-col space-y-2">
                      <Skeleton className="h-5 w-full" />
                      <Skeleton className="h-5 w-4/5" />
                    </div>
                  </div>
                  <Skeleton className="h-32 w-full" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
