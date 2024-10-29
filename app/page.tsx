"use client";

import Hero from "@/components/hero";
import Usage from "@/components/usage/usage";
import React from "react";
import Types from "@/components/types/types";
import Positions from "@/components/positions/positions";
import Others from "@/components/others/others";
import DialogCode from "@/components/dialog-code";

export default function Index() {
  return (
    <div className="mx-auto flex w-full max-w-[642px] flex-col justify-center gap-12 p-4">
      <Hero />
      <Types />
      <hr />
      <Positions />
      <hr />
      <Others />
      <hr />
      <Usage />
      <hr />
      <DialogCode />
    </div>
  );
}
