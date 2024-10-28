import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  InnerDialog,
  InnerDialogHeader,
  InnerDialogTitle,
  InnerDialogDescription,
  InnerDialogContent,
  InnerDialogFooter,
  InnerDialogClose,
  InnerDialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Editor from "../editor/editor";

export default function NestedDialogEditor() {
  return (
    <Editor
      scope={{
        Dialog,
        DialogTrigger,
        DialogContent,
        DialogHeader,
        DialogFooter,
        DialogTitle,
        DialogDescription,
        DialogClose,
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
      code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Nested Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
     <DialogTitle>Dialog Title</DialogTitle>
     <DialogDescription>
       Dialog Description
     </DialogDescription>
    </DialogHeader>

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

    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline" className="w-full">
          Close Outer Dialog
        </Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
    />
  );
}
