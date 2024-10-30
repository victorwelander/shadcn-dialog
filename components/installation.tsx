import React from "react";
import CodeBlock from "./code-block";

export default function Installation() {
  return (
    <div className="flex flex-col">
      <h1 className="mb-2 text-[16px] font-medium">Installation</h1>
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
