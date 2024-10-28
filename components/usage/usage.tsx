import React from "react";
import { CodeBlock } from "../code-block";

export default function Usage() {
  return (
    <div className="mt-16 flex flex-col">
      <h1 className="text-lg font-medium">Usage</h1>
      <CodeBlock initialHeight={270}>{`
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
    </div>
  );
}
