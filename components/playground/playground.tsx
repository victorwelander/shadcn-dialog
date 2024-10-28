import React from "react";
import DefaultDialogEditor from "./default-dialog-editor";
import NestedDialogEditor from "./nested-dialog-editor";

export default function Playground() {
  return (
    <div className="flex flex-col">
      <h1 className="mb-2 text-lg font-medium">Playground</h1>
      <div className="flex flex-col gap-2">
        <DefaultDialogEditor />
        <NestedDialogEditor />
      </div>
    </div>
  );
}
