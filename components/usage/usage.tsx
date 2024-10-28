import React from "react";
import { CodeBlock } from "../code-block/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function Usage() {
  return (
    <div className="mt-16 flex flex-col">
      <h1 className="mb-2 text-lg font-medium">Usage</h1>
      <Tabs defaultValue="default">
        <TabsList>
          <TabsTrigger value="default">Default</TabsTrigger>
          <TabsTrigger value="nested">Nested</TabsTrigger>
        </TabsList>
        <TabsContent value="default">
          <CodeBlock>{`
<StackingDialog>
  <StackingDialogTrigger asChild></StackingDialogTrigger>
    <StackingDialogContent>
      <StackingDialogHeader>
        <StackingDialogTitle></StackingDialogTitle>
        <StackingDialogDescription></StackingDialogDescription>
      </StackingDialogHeader>
    <StackingDialogFooter>
      <StackingDialogClose asChild></StackingDialogClose>
    </StackingDialogFooter>
  </StackingDialogContent>
</StackingDialog>
      `}</CodeBlock>
        </TabsContent>
        <TabsContent value="nested">
          <CodeBlock>{`
<StackingDialog>
  <StackingDialogTrigger asChild></StackingDialogTrigger>
    <StackingDialogContent>
      <StackingDialogHeader>
        <StackingDialogTitle></StackingDialogTitle>
        <StackingDialogDescription></StackingDialogDescription>
      </StackingDialogHeader>
      <InnerDialog>
        <InnerDialogTrigger asChild></InnerDialogTrigger>
        <InnerDialogContent>
          <InnerDialogHeader>
            <InnerDialogTitle></InnerDialogTitle>
            <InnerDialogDescription></InnerDialogDescription>
          </InnerDialogHeader>
          <InnerDialogFooter>
            <InnerDialogClose asChild></InnerDialogClose>
          </InnerDialogFooter>
        </InnerDialogContent>
      </InnerDialog>
    <StackingDialogFooter>
      <StackingDialogClose asChild></StackingDialogClose>
    </StackingDialogFooter>
  </StackingDialogContent>
</StackingDialog>
      `}</CodeBlock>
        </TabsContent>
      </Tabs>
    </div>
  );
}
