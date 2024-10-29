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
            className="absolute right-2 top-1.5 z-10 cursor-pointer bg-transparent p-2 text-[#A0A0A0] hover:text-[var(--ds-gray-900)]"
            onClick={copyToClipboard}
          >
            <div
              className={`transform transition-all ${
                copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              {/*<Copy className="h-4 w-4 text-muted-foreground hover:text-primary" />*/}

              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 2C0 0.89543 0.89543 0 2 0H12C13.1046 0 14 0.89543 14 2V6H18C19.1046 6 20 6.89543 20 8V18C20 19.1046 19.1046 20 18 20H8C6.89543 20 6 19.1046 6 18V14H2C0.89543 14 0 13.1046 0 12V2ZM12.5 6H8C6.89543 6 6 6.89543 6 8V12.5H2C1.72386 12.5 1.5 12.2761 1.5 12V2C1.5 1.72386 1.72386 1.5 2 1.5H12C12.2761 1.5 12.5 1.72386 12.5 2V6Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div
              className={`absolute inset-0 flex transform items-center justify-center transition-all duration-300 ${
                copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.7406 0.182697C12.0539 0.453627 12.0882 0.927247 11.8173 1.24057L4.4673 9.7406C4.3305 9.8988 4.1339 9.9926 3.92494 9.9996C3.71594 10.0066 3.51353 9.9259 3.36654 9.7772L0.216537 6.5897C-0.074613 6.2951 -0.0718031 5.8202 0.222817 5.5291C0.517437 5.2379 0.992297 5.2407 1.28346 5.5353L3.86327 8.1458L10.6827 0.259447C10.9536 -0.0538732 11.4272 -0.088233 11.7406 0.182697Z"
                  fill="#A0A0A0"
                />
              </svg>
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
