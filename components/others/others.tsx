import React from "react";
import DraggableDialog from "./draggable-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CodeBlock from "../code-block";

export default function Others() {
  return (
    <div className="flex flex-col">
      <h1 className="mb-2 text-[16px] font-medium">Others</h1>
      <div className="flex gap-2">
        <DraggableDialog />
      </div>
      <Tabs defaultValue="draggable" className="mt-2">
        <TabsList className="mb-1">
          <TabsTrigger value="draggable">Draggable</TabsTrigger>
        </TabsList>
        <TabsContent value="draggable">
          <CodeBlock
            showLineNumbers
            lang="tsx"
            code={`<InnerDialogContent draggable>`}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
