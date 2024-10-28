import React from "react";
import NestedDialog from "./nested-dialog";
import DefaultDialog from "./default-dialog";

export default function Types() {
  return (
    <div className="mt-36 flex flex-col">
      <h1 className="mb-2 text-lg font-medium">Types</h1>
      <div className="flex gap-2">
        <DefaultDialog />
        <NestedDialog />
      </div>
    </div>
  );
}
