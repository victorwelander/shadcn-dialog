"use client";

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
  InnerDialogTrigger,
  InnerDialogContent,
  InnerDialogClose,
  InnerDialogHeader,
  InnerDialogFooter,
  InnerDialogTitle,
  InnerDialogDescription,
} from "@/components/ui/dialog-stacking";
import { Button } from "@/components/ui/button";

export default function NestedDialog() {
  return (
    <StackingDialog>
      <StackingDialogTrigger asChild>
        <Button variant="outline">Nested Dialog</Button>
      </StackingDialogTrigger>
      <StackingDialogContent className="p-0">
        <StackingDialogHeader className="p-4">
          <StackingDialogTitle>Dialog Title</StackingDialogTitle>
          <StackingDialogDescription>
            Dialog Description
          </StackingDialogDescription>
        </StackingDialogHeader>

        <StackingDialogFooter className="flex items-center justify-between border-t px-4 py-2">
          <InnerDialog>
            <InnerDialogTrigger asChild>
              <Button variant="outline">Open Nested</Button>
            </InnerDialogTrigger>
            <InnerDialogContent className="">
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
          <div className="flex items-center gap-2">
            <StackingDialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </StackingDialogClose>
            <Button>Save</Button>
          </div>
        </StackingDialogFooter>
      </StackingDialogContent>
    </StackingDialog>
  );
}
