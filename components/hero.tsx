import React from "react";
import { Button } from "./ui/button";
import { SiGithub } from "react-icons/si";
import RenderNestedDialog from "./demos/render-nested-dialog";

export default function Hero() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center text-center">
      <div>
        <h1 className="text-[30px] font-bold md:text-[48px]">
          Nested Shadcn Dialog
        </h1>
        <p className="text-sm text-[var(--ds-gray-900)] md:text-[16px]">
          Render multiple dialogs within eachother
        </p>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <RenderNestedDialog />
        <Button variant="outline" className="flex items-center gap-1">
          <SiGithub />
          <span>Github</span>
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
