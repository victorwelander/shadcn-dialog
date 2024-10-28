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
<Dialog>
  <DialogTrigger asChild></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle></DialogTitle>
      <DialogDescription></DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild></DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
      `}</CodeBlock>
        </TabsContent>
        <TabsContent value="nested">
          <CodeBlock>{`
<Dialog>
  <DialogTrigger asChild></DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle></DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
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
    <DialogFooter>
      <DialogClose asChild></DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
      `}</CodeBlock>
        </TabsContent>
      </Tabs>
    </div>
  );
}
