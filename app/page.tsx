"use client";

import Hero from "@/components/hero";
import Usage from "@/components/usage/usage";
import React from "react";
import Types from "@/components/types/types";
import Positions from "@/components/positions/positions";
import Others from "@/components/others/others";
import DialogCode from "@/components/dialog-code";
import Installation from "@/components/installation";
import DialogPropsTable from "@/components/dialog-props-table";
import Link from "next/link";

export default function Index() {
  return (
    <div className="mx-auto flex w-full max-w-[642px] flex-col justify-center gap-12 p-4">
      <Hero />
      <Installation />
      <hr />
      <Types />
      <hr />
      <Positions />
      <hr />
      <Others />
      <hr />
      <Usage />
      <hr />
      <DialogCode />
      <hr />
      <DialogPropsTable />
      <p className="text-[var(--ds-gray-900)]">
        If you have any questions or find any bugs feel free to reach out to me
        at{" "}
        <Link
          href="https://x.com/victorwelander_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--ds-gray-1000)] underline decoration-[0.8px] underline-offset-4"
        >
          @victorwelander_
        </Link>
      </p>
    </div>
  );
}
