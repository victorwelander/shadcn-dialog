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
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Editor from "@/components/editor/editor";

export default function DefaultDialogEditor() {
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
        Button,
      }}
      code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Default Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
     <DialogTitle>Dialog Title</DialogTitle>
     <DialogDescription>
       Dialog Description
     </DialogDescription>
    </DialogHeader>
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
