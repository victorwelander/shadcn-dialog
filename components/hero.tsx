import React from "react";
import { Button } from "./ui/button";
import { SiGithub } from "react-icons/si";

export default function Hero() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center text-center">
      <div>
        <h1 className="text-[30px] font-bold md:text-[48px]">
          Nested Shadcn Dialog
        </h1>
        <p className="text-sm text-muted-foreground md:text-[16px]">
          Render multiple dialogs within eachother
        </p>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <Button>
          <span>Render Nested Dialog</span>
        </Button>
        <Button variant="outline" className="flex items-center gap-1">
          <SiGithub />
          <span>Github</span>
        </Button>
      </div>
    </div>
  );
}
