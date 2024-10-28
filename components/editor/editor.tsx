"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import styles from "./editor.module.css";
import { ChevronRight, Copy, RotateCcw, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const DEFAULT_CODE = `
<div>Hello, world!</div>
`;

const THEME = {
  plain: {
    backgroundColor: "var(--geist-background)",
    color: "var(--geist-foreground)",
  },
  styles: [
    {
      style: { color: "var(--accents-5)" },
      types: [
        "comment",
        "string",
        "number",
        "builtin",
        "variable",
        "attr-name",
        "punctuation",
      ],
    },
    {
      style: { color: "var(--geist-foreground)" },
      types: ["class-name", "function", "tag"],
    },
  ],
};

interface EditorProps {
  scope?: Record<string, unknown>;
  code?: string;
}

export default function Editor({
  scope = {},
  code: codeInit = DEFAULT_CODE,
}: EditorProps = {}) {
  const [code, setCode] = useState<string>(codeInit);
  const [open, setOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);

  console.log("Scope in Editor:", scope);

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCode(codeInit);
  };

  const copyToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <LiveProvider scope={scope} code={code}>
      <div className="w-full rounded-lg border">
        <div className="flex items-center justify-center border-b p-12">
          <LivePreview />
        </div>

        <div
          className={`relative overflow-hidden whitespace-pre-line ${open ? "border-b" : ""}`}
        >
          <div
            className="flex cursor-pointer items-center justify-between p-2"
            onClick={() => setOpen(!open)}
          >
            <div className="flex items-center">
              <ChevronRight
                size={16}
                style={{
                  transition: "transform 200ms",
                  transform: `rotate(${open ? 90 : 0}deg)`,
                }}
              />
              <p className="ml-2 text-sm">Code Editor</p>
            </div>

            <div className="flex items-center">
              <button
                className="relative z-10 ml-2 cursor-pointer bg-transparent p-2"
                onClick={handleReset}
              >
                <RotateCcw className="h-4 w-4 text-muted-foreground hover:text-primary" />
              </button>

              <button
                className="relative z-10 ml-2 cursor-pointer bg-transparent p-2"
                onClick={copyToClipboard}
              >
                <div
                  className={`transform transition-all duration-300 ${
                    copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
                  }`}
                >
                  <Copy className="h-4 w-4 text-muted-foreground hover:text-primary" />
                </div>
                <div
                  className={`absolute inset-0 flex transform items-center justify-center transition-all duration-300 ${
                    copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                >
                  <Check className="h-4 w-4 text-muted-foreground" />
                </div>
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              className={styles.editorArea}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <LiveEditor
                theme={THEME}
                onChange={(newCode: string) => setCode(newCode)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1em",
                  padding: 14,
                }}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
        <LiveError className={styles.error} />
      </div>
    </LiveProvider>
  );
}
