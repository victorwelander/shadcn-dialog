import React from "react";
import { Button } from "@/components/ui/button";
import DefaultDialogPosition from "./default-dialog-position";
import BottomDialogPosition from "./bottom-dialog-position";
import TopDialogPosition from "./top-dialog-position";
import LeftDialogPosition from "./left-dialog-position";
import RightDialogPosition from "./right-dialog-position";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CodeBlock from "../code-block";

export default function Positions() {
  return (
    <div className="flex flex-col">
      <div className="mb-2 flex flex-col">
        <h1 className="text-[16px] font-medium">Positions</h1>
        <p className="text-sm text-[var(--ds-gray-900)]">
          How the nested dialog appears
        </p>
      </div>
      <div className="flex gap-2">
        <DefaultDialogPosition />
        <BottomDialogPosition />
        <TopDialogPosition />
        <LeftDialogPosition />
        <RightDialogPosition />
      </div>
      <Tabs defaultValue="default" className="mt-2">
        <TabsList className="mb-1">
          <TabsTrigger value="default">Default</TabsTrigger>
          <TabsTrigger value="bottom">Bottom</TabsTrigger>
          <TabsTrigger value="top">Top</TabsTrigger>
          <TabsTrigger value="left">Left</TabsTrigger>
          <TabsTrigger value="right">Right</TabsTrigger>
        </TabsList>
        <TabsContent value="default">
          <CodeBlock showLineNumbers lang="tsx" code={`<InnerDialogContent>`} />
        </TabsContent>
        <TabsContent value="bottom">
          <CodeBlock
            showLineNumbers
            lang="tsx"
            code={`<InnerDialogContent position="bottom">`}
          />
        </TabsContent>
        <TabsContent value="top">
          <CodeBlock
            showLineNumbers
            lang="tsx"
            code={`<InnerDialogContent position="top">`}
          />
        </TabsContent>
        <TabsContent value="left">
          <CodeBlock
            showLineNumbers
            lang="tsx"
            code={`<InnerDialogContent position="left">`}
          />
        </TabsContent>
        <TabsContent value="right">
          <CodeBlock
            showLineNumbers
            lang="tsx"
            code={`<InnerDialogContent position="right">`}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
