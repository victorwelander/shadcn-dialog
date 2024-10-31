"use client";

import React, { useState, useEffect, useMemo } from "react";
import type { BundledLanguage } from "shiki";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  fileName?: string;
  code?: string | { [key: string]: { code: string; lang?: BundledLanguage } };
  lang?: BundledLanguage;
  type?: "file" | "terminal";
  showLineNumbers?: boolean;
  className?: string;
}

export default function CodeBlock({
  fileName,
  code,
  lang = "tsx",
  type = "file",
  showLineNumbers = false,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [html, setHtml] = useState<string[]>([]);

  const content = useMemo(() => {
    if (typeof code === "object") {
      const [, content] = Object.entries(code)[0];
      return { code: content.code, lang: content.lang || lang };
    }
    return { code: code as string, lang };
  }, [code, lang]);

  useEffect(() => {
    let isMounted = true;
    import("shiki").then(({ getHighlighter }) => {
      getHighlighter({
        themes: ["github-light", "github-dark"],
        langs: [content.lang],
      }).then((highlighter) => {
        if (isMounted) {
          const highlighted = highlighter.codeToHtml(content.code, {
            lang: content.lang,
            themes: {
              light: "github-light",
              dark: "github-dark",
            },
          });
          setHtml([highlighted]);
        }
      });
    });

    return () => {
      isMounted = false;
    };
  }, [content]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  };

  const IconComponent = type === "terminal" ? Terminal : File;

  return (
    <div
      className={cn(
        "relative flex max-h-[600px] flex-col overflow-hidden rounded-lg border",
        className,
      )}
    >
      {fileName && (
        <div className="flex items-center justify-between rounded-t-lg border-b bg-[var(--ds-gray-100)] px-2 py-1">
          <div className="flex items-center gap-2">
            <IconComponent className="text-[#a0a0a0]" />
            <span className="text-xs font-medium text-[var(--ds-gray-900)]">
              {fileName}
            </span>
          </div>
          <button
            className="relative cursor-pointer bg-transparent p-2 text-[#a0a0a0] hover:text-[#606060]"
            onClick={copyToClipboard}
          >
            <div
              className={`transform transition-all duration-200 ${
                copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
            >
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
                height="9"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.7406 0.182697C12.0539 0.453627 12.0882 0.927247 11.8173 1.24057L4.4673 9.7406C4.3305 9.8988 4.1339 9.9926 3.92494 9.9996C3.71594 10.0066 3.51353 9.9259 3.36654 9.7772L0.216537 6.5897C-0.074613 6.2951 -0.0718031 5.8202 0.222817 5.5291C0.517437 5.2379 0.992297 5.2407 1.28346 5.5353L3.86327 8.1458L10.6827 0.259447C10.9536 -0.0538732 11.4272 -0.088233 11.7406 0.182697Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </div>
      )}
      <div className="relative flex-1 overflow-auto">
        <div className="sticky top-0 z-10">
          {!fileName && (
            <button
              className={`absolute z-10 cursor-pointer bg-transparent p-2 text-[#a0a0a0] hover:text-[#606060] ${"right-2 top-1.5"}`}
              onClick={copyToClipboard}
            >
              <div
                className={`transform transition-all duration-200 ${
                  copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
                }`}
              >
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
                  height="9"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.7406 0.182697C12.0539 0.453627 12.0882 0.927247 11.8173 1.24057L4.4673 9.7406C4.3305 9.8988 4.1339 9.9926 3.92494 9.9996C3.71594 10.0066 3.51353 9.9259 3.36654 9.7772L0.216537 6.5897C-0.074613 6.2951 -0.0718031 5.8202 0.222817 5.5291C0.517437 5.2379 0.992297 5.2407 1.28346 5.5353L3.86327 8.1458L10.6827 0.259447C10.9536 -0.0538732 11.4272 -0.088233 11.7406 0.182697Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>
          )}
        </div>
        <pre
          className={`relative overflow-x-auto ${!showLineNumbers ? "py-3" : "py-3"}`}
        >
          <table className="w-full border-collapse">
            <tbody>
              {content.code.split("\n").map((line, lineIndex) => (
                <tr key={lineIndex}>
                  {showLineNumbers && (
                    <td className="select-none px-4 text-right text-xs text-[var(--ds-gray-700)]">
                      {lineIndex + 1}
                    </td>
                  )}
                  <td className="w-full">
                    {html[0] && (
                      <code
                        className={`light:[&_span]:!text-[var(--shiki-light)] block h-4 text-xs [&_code]:!bg-transparent [&_pre]:!bg-transparent [&_span]:!bg-transparent dark:[&_span]:!text-[var(--shiki-dark)] ${
                          !showLineNumbers ? "pl-3" : ""
                        }`}
                        dangerouslySetInnerHTML={{
                          __html: html[0].split("\n")[lineIndex] || "",
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

function Terminal({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.75C0 1.23122 1.23122 0 2.75 0H15.25C16.7688 0 18 1.23122 18 2.75V15.25C18 16.7688 16.7688 18 15.25 18H2.75C1.23122 18 0 16.7688 0 15.25V2.75ZM3.71967 4.21967C4.01256 3.92678 4.48744 3.92678 4.78033 4.21967L6.53033 5.96967C6.82322 6.26256 6.82322 6.73744 6.53033 7.0303L4.78033 8.7803C4.48744 9.0732 4.01256 9.0732 3.71967 8.7803C3.42678 8.4874 3.42678 8.0126 3.71967 7.7197L4.93934 6.5L3.71967 5.28033C3.42678 4.98744 3.42678 4.51256 3.71967 4.21967ZM7.75 7.5C7.3358 7.5 7 7.8358 7 8.25C7 8.6642 7.3358 9 7.75 9H9.75C10.1642 9 10.5 8.6642 10.5 8.25C10.5 7.8358 10.1642 7.5 9.75 7.5H7.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

function File({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="16"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 0H2.75C1.23122 0 0 1.23122 0 2.75V17.25C0 18.7688 1.23122 20 2.75 20H13.25C14.7688 20 16 18.7688 16 17.25V8H10.75C9.2312 8 8 6.76878 8 5.25V0Z"
        fill="currentColor"
      />
      <path
        d="M15.5566 6.49993C15.5343 6.47493 15.5112 6.45051 15.4874 6.42671L9.5732 0.512489C9.5494 0.488689 9.525 0.465639 9.5 0.443359V5.24993C9.5 5.94029 10.0596 6.49993 10.75 6.49993H15.5566Z"
        fill="currentColor"
      />
    </svg>
  );
}
