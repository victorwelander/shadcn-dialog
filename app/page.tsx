import Examples from "@/components/examples/examples";
import Hero from "@/components/hero";
import Usage from "@/components/usage/usage";
import React from "react";

export default function Index() {
  return (
    <div className="mx-auto flex w-full max-w-[652px] flex-col justify-center">
      <Hero />
      <Examples />
      <Usage />
    </div>
  );
}
