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
} from "@/components/ui/dialog-stacking";
import { Button } from "@/components/ui/button";

export default function NestedDialog() {
  return (
    <StackingDialog>
      <StackingDialogTrigger asChild>
        <Button variant="outline">Nested Dialog</Button>
      </StackingDialogTrigger>
      <StackingDialogContent className="h-[230px] sm:max-w-[425px]">
        <StackingDialogHeader>
          <StackingDialogTitle>Dialog Title</StackingDialogTitle>
          <StackingDialogDescription>
            Dialog Description
          </StackingDialogDescription>
        </StackingDialogHeader>
        <div className="py-4">
          <InnerDialog>
            <InnerDialogTrigger asChild>
              <Button variant="outline" className="w-full">
                Open Nested
              </Button>
            </InnerDialogTrigger>
            <InnerDialogContent className="sm:max-w-[425px]">
              <StackingDialogHeader>
                <StackingDialogTitle>Nested Dialog Title</StackingDialogTitle>
                <StackingDialogDescription>
                  Nested Dialog Description
                </StackingDialogDescription>
              </StackingDialogHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground">
                  Enter your current password and a new password to update your
                  account security.
                </p>
              </div>
              <StackingDialogFooter>
                <InnerDialogClose asChild>
                  <Button variant="outline" className="w-full">
                    Close Inner Dialog
                  </Button>
                </InnerDialogClose>
              </StackingDialogFooter>
            </InnerDialogContent>
          </InnerDialog>
        </div>
        <StackingDialogFooter>
          <StackingDialogClose asChild>
            <Button variant="outline" className="w-full">
              Close Outer Dialog
            </Button>
          </StackingDialogClose>
        </StackingDialogFooter>
      </StackingDialogContent>
    </StackingDialog>
  );
}
