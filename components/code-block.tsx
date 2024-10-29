"use client";

import React, { useState, useEffect } from "react";
import type { BundledLanguage } from "shiki";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  lang?: BundledLanguage;
  showLineNumbers?: boolean;
  className?: string;
}

export default function CodeBlock({
  code,
  lang = "tsx",
  className,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    let isMounted = true;
    import("shiki").then(({ getHighlighter }) => {
      getHighlighter({
        themes: ["github-light", "github-dark"],
        langs: [lang],
      }).then((highlighter) => {
        if (isMounted) {
          const highlighted = highlighter.codeToHtml(code, {
            lang,
            themes: {
              light: "github-light",
              dark: "github-dark",
            },
          });
          setHtml(highlighted);
        }
      });
    });

    return () => {
      isMounted = false;
    };
  }, [code, lang]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  };

  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-lg border bg-[var(--ds-gray-100)]",
        className,
      )}
    >
      <div className="relative flex-1">
        <div className="sticky top-0 z-10">
          <button
            className="absolute right-2 top-1.5 z-10 cursor-pointer bg-transparent p-2"
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
        <pre
          className={`relative overflow-x-auto ${!showLineNumbers ? "py-3" : "py-3"}`}
        >
          <table className="w-full border-collapse">
            <tbody>
              {code.split("\n").map((line, lineIndex) => (
                <tr key={lineIndex}>
                  {showLineNumbers && (
                    <td className="select-none px-4 text-right text-xs text-muted-foreground">
                      {lineIndex + 1}
                    </td>
                  )}
                  <td className="w-full">
                    {html && (
                      <code
                        className={`light:[&_span]:!text-[var(--shiki-light)] block h-4 text-xs [&_code]:!bg-transparent [&_pre]:!bg-transparent [&_span]:!bg-transparent dark:[&_span]:!text-[var(--shiki-dark)] ${
                          !showLineNumbers ? "pl-3" : ""
                        }`}
                        dangerouslySetInnerHTML={{
                          __html: html.split("\n")[lineIndex] || "",
                        }}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </pre>
      </div>
    </div>
  );
}
