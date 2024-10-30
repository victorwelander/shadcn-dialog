import React from "react";
import CodeBlock from "./code-block";

export default function Installation() {
  return (
    <div className="flex flex-col">
      <div className="mb-2 flex flex-col">
        <h1 className="text-[16px] font-medium">Installation</h1>
        <p className="text-sm text-[var(--ds-gray-900)]">
          This will install the dialog using the shadcn CLI remote URL
        </p>
      </div>
      <div className="flex gap-2">
        <CodeBlock
          fileName="Terminal"
          type="terminal"
          showLineNumbers
          lang="bash"
          className="w-full"
          code={`npx shadcn add https://shadcn-dialog.vercel.app/registry/dialog.json`}
        />
      </div>
    </div>
  );
}
