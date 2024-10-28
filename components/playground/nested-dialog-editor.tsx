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
  InnerDialog,
  InnerDialogHeader,
  InnerDialogTitle,
  InnerDialogDescription,
  InnerDialogContent,
  InnerDialogFooter,
  InnerDialogClose,
  InnerDialogTrigger,
} from "@/components/ui/dialog-stacking";
import { Button } from "../ui/button";
import Editor from "../editor/editor";

export default function NestedDialogEditor() {
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
        InnerDialog,
        InnerDialogTrigger,
        InnerDialogHeader,
        InnerDialogTitle,
        InnerDialogDescription,
        InnerDialogContent,
        InnerDialogFooter,
        InnerDialogClose,
        Button,
      }}
      code={`<StackingDialog>
  <StackingDialogTrigger asChild>
    <Button>Nested Dialog</Button>
  </StackingDialogTrigger>
  <StackingDialogContent>
    <StackingDialogHeader>
     <StackingDialogTitle>Dialog Title</StackingDialogTitle>
     <StackingDialogDescription>
       Dialog Description
     </StackingDialogDescription>
    </StackingDialogHeader>

     <InnerDialog>
      <InnerDialogTrigger asChild>
        <Button>Nested Dialog</Button>
      </InnerDialogTrigger>
      <InnerDialogContent>
      <InnerDialogHeader>
        <InnerDialogTitle>Nested Dialog Title</InnerDialogTitle>
          <InnerDialogDescription>
            Nested Dialog Description
          </InnerDialogDescription>
        </InnerDialogHeader>
        <p className="text-sm text-muted-foreground">
          Enter your current password and a new password to update your
          account security.
        </p>
        <InnerDialogFooter>
          <InnerDialogClose asChild>
            <Button variant="outline" className="w-full">
              Close Inner Dialog
            </Button>
          </InnerDialogClose>
        </InnerDialogFooter>
      </InnerDialogContent>
     </InnerDialog>

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
