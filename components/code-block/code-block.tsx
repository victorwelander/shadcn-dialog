"use client";

import { useState, useCallback, useRef } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import useMeasure from "react-use-measure";
import copy from "copy-to-clipboard";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

import styles from "./code-block.module.css";

const variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.5 },
};

const theme = {
  plain: {
    color: "#171717",
    fontSize: 12,
    fontFamily: "var(--font-mono)",
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "#8F8F8F",
      },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector", "string"],
      style: {
        color: "#6F6F6F",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#8F8F8F",
      },
    },
    {
      types: ["class-name", "function", "tag"],
      style: {
        color: "#171717",
      },
    },
  ],
};

export const CodeBlock = ({
  children,
  initialHeight = 0,
}: {
  children: string;
  initialHeight?: number;
}) => {
  const [ref, bounds] = useMeasure();
  const [copying, setCopying] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const onCopy = useCallback(() => {
    try {
      copy(children);
      setCopying((c) => c + 1);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setCopying((c) => c - 1);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  }, [children]);

  return (
    <div className={styles.outerWrapper}>
      <button
        className={styles.copyButton}
        onClick={onCopy}
        aria-label="Copy code"
      >
        <AnimatePresence initial={false} mode="wait">
          {copying ? (
            <motion.div
              animate="visible"
              exit="hidden"
              initial="hidden"
              key="check"
              variants={variants}
            >
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                shapeRendering="geometricPrecision"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              <span className="sr-only">Code copied successfully</span>
            </motion.div>
          ) : (
            <motion.div
              animate="visible"
              exit="hidden"
              initial="hidden"
              key="copy"
              variants={variants}
            >
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                shapeRendering="geometricPrecision"
              >
                <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
      <Highlight {...defaultProps} theme={theme} code={children} language="jsx">
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre className={styles.wrapper}>
            <div className={`${className} ${styles.root}`} ref={ref}>
              <div />
              {tokens.map((line, i) => {
                const { key: lineKey, ...rest } = getLineProps({
                  line,
                  key: i,
                });
                return (
                  <div key={lineKey} {...rest}>
                    {line.map((token, key) => {
                      const { key: tokenKey, ...rest } = getTokenProps({
                        token,
                        key,
                      });
                      return <span key={tokenKey} {...rest} />;
                    })}
                  </div>
                );
              })}
            </div>
          </pre>
        )}
      </Highlight>
    </div>
  );
};
