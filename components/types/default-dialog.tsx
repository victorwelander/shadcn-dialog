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
import { Button } from "@/components/ui/button";

export default function DefaultDialog() {
  return (
    <StackingDialog>
      <StackingDialogTrigger asChild>
        <Button variant="outline">Default Dialog</Button>
      </StackingDialogTrigger>
      <StackingDialogContent className="p-0">
        <StackingDialogHeader className="p-4">
          <StackingDialogTitle>Dialog Title</StackingDialogTitle>
          <StackingDialogDescription>
            Dialog Description
          </StackingDialogDescription>
        </StackingDialogHeader>

        <StackingDialogFooter className="flex items-center justify-between border-t px-4 py-2">
          <StackingDialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </StackingDialogClose>
          <Button>Save</Button>
        </StackingDialogFooter>
      </StackingDialogContent>
    </StackingDialog>
  );
}
