import React from "react";
import {
  StackingDialog,
  StackingDialogTrigger,
  StackingDialogContent,
  StackingDialogHeader,
  StackingDialogFooter,
  StackingDialogTitle,
  StackingDialogDescription,
  StackingDialogClose,
} from "@/components/ui/dialog-stacking";
import { Button } from "../ui/button";
import Editor from "../editor/editor";

export default function DefaultDialogEditor() {
  return (
    <Editor
      scope={{
        StackingDialog,
        StackingDialogTrigger,
        StackingDialogContent,
        StackingDialogHeader,
        StackingDialogFooter,
        StackingDialogTitle,
        StackingDialogDescription,
        StackingDialogClose,
        Button,
      }}
      code={`<StackingDialog>
  <StackingDialogTrigger asChild>
    <Button>Default Dialog</Button>
  </StackingDialogTrigger>
  <StackingDialogContent>
    <StackingDialogHeader>
     <StackingDialogTitle>Dialog Title</StackingDialogTitle>
     <StackingDialogDescription>
       Dialog Description
     </StackingDialogDescription>
    </StackingDialogHeader>
    <StackingDialogFooter>
      <StackingDialogClose asChild>
        <Button variant="outline" className="w-full">
          Close Outer Dialog
        </Button>
      </StackingDialogClose>
    </StackingDialogFooter>
  </StackingDialogContent>
</StackingDialog>`}
    />
  );
}
