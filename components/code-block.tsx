"use client";

import React, { useState, useEffect, useMemo } from "react";
import type { BundledLanguage } from "shiki";
import { Copy, Check, File, FileTerminal } from "lucide-react";

interface CodeBlockProps {
  fileName?: string;
  code?: string | { [key: string]: { code: string; lang?: BundledLanguage } };
  lang?: BundledLanguage;
  type?: "file" | "terminal";
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  fileName,
  code,
  lang = "tsx",
  type = "file",
  showLineNumbers = false,
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

  const IconComponent = type === "terminal" ? FileTerminal : File;

  return (
    <div className="relative flex max-h-96 flex-col overflow-hidden rounded-lg border bg-[var(--ds-gray-100)]">
      {fileName && (
        <div className="flex items-center justify-between rounded-t-lg border-b bg-[var(--ds-gray-100)] px-2 py-1">
          <div className="flex items-center gap-1">
            <IconComponent stroke="var(--ds-gray-900)" size={14} />
            <span className="text-xs font-medium text-[var(--ds-gray-900)]">
              {fileName}
            </span>
          </div>
          <button
            className="relative cursor-pointer bg-transparent p-2"
            onClick={copyToClipboard}
          >
            <div
              className={`transform transition-all duration-300 ${
                copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <Copy className="h-4 w-4 text-[var(--ds-gray-800)] hover:text-[var(--ds-gray-900)]" />
            </div>
            <div
              className={`absolute inset-0 flex transform items-center justify-center transition-all duration-300 ${
                copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            >
              <Check className="h-4 w-4 text-[var(--ds-gray-800)] hover:text-[var(--ds-gray-900)]" />
            </div>
          </button>
        </div>
      )}
      <div className="relative flex-1">
        <div className="sticky top-0 z-10">
          {!fileName && (
            <button
              className={`absolute z-10 cursor-pointer bg-transparent p-2 ${"right-2 top-1.5"}`}
              onClick={copyToClipboard}
            >
              <div
                className={`transform transition-all duration-300 ${
                  copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
                }`}
              >
                <Copy className="h-4 w-4 text-[var(--ds-gray-800)] hover:text-[var(--ds-gray-900)]" />
              </div>
              <div
                className={`absolute inset-0 flex transform items-center justify-center transition-all duration-300 ${
                  copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                <Check className="h-4 w-4 text-[var(--ds-gray-800)] hover:text-[var(--ds-gray-900)]" />
              </div>
            </button>
          )}
        </div>
        <pre className={`relative ${!showLineNumbers ? "py-3" : "py-3"}`}>
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
                        className={`light:[&_span]:!text-[var(--shiki-light)] block h-4 text-xs [&_code]:!bg-transparent [&_pre]:!bg-transparent [&_span]:!bg-transparent dark:[&_span]:!text-[var(--shiki-dark)] ${!showLineNumbers ? "pl-3" : ""}`}
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
