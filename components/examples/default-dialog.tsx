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

export default function DefaultDialog() {
  return (
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
  );
}
