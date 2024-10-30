import React from "react";
import { Button } from "./ui/button";
import { SiGithub } from "react-icons/si";
import RenderNestedDialog from "./demos/render-nested-dialog";
import Image from "next/image";
import dialogs from "@/public/dialogs.svg";
import Link from "next/link";
import Demonstration from "./demonstration";

export default function Hero() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center text-center">
      <div className="relative w-full">
        <div className="relative h-[100px] w-full overflow-hidden py-1">
          <Demonstration />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="relative -mt-8 flex flex-col items-center">
          <div className="rounded-lg px-4 py-2">
            <h1 className="text-[30px] font-bold md:text-[48px]">
              Nested Shadcn Dialog
            </h1>
            <p className="text-sm text-[var(--ds-gray-900)] md:text-[16px]">
              Render multiple dialogs within each other
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <RenderNestedDialog />
        <Button variant="outline">
          <Link
            href="https://github.com/victorwelander/shadcn-dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <SiGithub className="h-4 w-4" />
            <span>Github</span>
          </Link>
        </Button>
      </div>

      <div className="mt-6 text-sm text-[var(--ds-gray-900)] md:text-[16px]">
        <p>
          The nested dialog uses a shared context to manage state, making it
          easy to control multiple layers. The outer dialog handles the inner
          one, so transitions are smooth and everything just works intuitively.
          Each layer scales visually, keeping the dialogs clear and the user
          experience seamless.
        </p>
      </div>
    </div>
  );
}
