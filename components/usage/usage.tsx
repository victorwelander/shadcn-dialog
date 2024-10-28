import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CodeBlock from "../code-block";

export default function Usage() {
  return (
    <div className="flex flex-col">
      <h1 className="mb-2 text-lg font-medium">Usage</h1>
      {/*
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
      */}
      <Tabs defaultValue="default">
        <TabsList className="mb-1">
          <TabsTrigger value="default">Default</TabsTrigger>
          <TabsTrigger value="nested">Nested</TabsTrigger>
        </TabsList>
        <TabsContent value="default">
          <CodeBlock
            showLineNumbers
            lang="tsx"
            code={`<Dialog>
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
</Dialog>`}
          />
        </TabsContent>
        <TabsContent value="nested">
          <CodeBlock
            showLineNumbers
            lang="tsx"
            code={`<Dialog>
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
</Dialog>`}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
