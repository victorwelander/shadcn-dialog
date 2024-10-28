import React from "react";
import { Button } from "../ui/button";
import NestedDialog from "./nested-dialog";
import DefaultDialog from "./default-dialog";

export default function Examples() {
  return (
    <div className="mt-36 flex gap-2">
      <DefaultDialog />
      <NestedDialog />
    </div>
  );
}
