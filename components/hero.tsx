import React from "react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center text-center">
      <div>
        <h1 className="text-[48px] font-bold">Nested Shadcn Dialog</h1>
        <p className="text-muted-foreground">Make Dialogs inside dialogs</p>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <Button>Render Nested Dialog</Button>
        <Button variant="outline">Github</Button>
      </div>
    </div>
  );
}
