"use client";

import Hero from "@/components/hero";
import Usage from "@/components/usage/usage";
import React from "react";
import Types from "@/components/types/types";
import Playground from "@/components/playground/playground";
import { Input } from "@/components/ui/input";

export default function Index() {
  return (
    <div className="mx-auto flex w-full max-w-[652px] flex-col justify-center gap-12 p-4">
      <Hero />
      <Types />
      <Usage />
      <Playground />
      <input className="mt-1 h-8 rounded-lg border bg-white px-2 text-[16px] text-black outline-none transition placeholder:text-sm focus-within:border-neutral-400 focus-within:ring-[3px] focus-within:ring-black/10" />
      <Input />
    </div>
  );
}

/* 
"use client";

import CodeBlock from "@/components/code-block";
import Hero from "@/components/hero";
import Usage from "@/components/usage/usage";
import React from "react";
import Types from "@/components/types/types";
import Editor from "@/components/editor/editor";
import DefaultDialog from "@/components/types/default-dialog";
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

export default function Index() {
  return (
    <div className="mx-auto flex w-full max-w-[652px] flex-col justify-center p-4">
      <Hero />
      <Types />
      <Usage />
      <div className="mb-32 mt-32 flex flex-col gap-4">
        <Editor
          scope={{
            DefaultDialog,
            StackingDialog,
            StackingDialogTrigger,
            StackingDialogContent,
            StackingDialogHeader,
            StackingDialogFooter,
            StackingDialogTitle,
            StackingDialogDescription,
            StackingDialogClose,
            Button,
            React,
          }}
          code={`import React from "react";
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
      <StackingDialogContent className="h-[230px] sm:max-w-[425px]">
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
    </StackingDialog>
  );
}`}
        />
      </div>
    </div>
  );
}

*/
