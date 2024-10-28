import Examples from "@/components/examples/examples";
import Hero from "@/components/hero";
import {
  InnerDialog,
  InnerDialogClose,
  InnerDialogContent,
  InnerDialogTrigger,
  StackingDialog,
  StackingDialogContent,
  StackingDialogDescription,
  StackingDialogHeader,
  StackingDialogTitle,
  StackingDialogTrigger,
} from "@/components/ui/dialog-stacking";
import Usage from "@/components/usage/usage";
import React from "react";

export default function Index() {
  return (
    <div className="mx-auto flex w-full max-w-[652px] flex-col justify-center p-4">
      <Hero />
      <Examples />
      <Usage />
    </div>
  );
}
