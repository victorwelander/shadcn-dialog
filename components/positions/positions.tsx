import React from "react";
import { Button } from "@/components/ui/button";
import DefaultDialogPosition from "./default-dialog-position";
import BottomDialogPosition from "./bottom-dialog-position";
import TopDialogPosition from "./top-dialog-position";
import LeftDialogPosition from "./left-dialog-position";
import RightDialogPosition from "./right-dialog-position";

export default function Positions() {
  return (
    <div className="flex flex-col">
      <div className="mb-2 flex flex-col">
        <h1 className="text-lg font-medium">Positions</h1>
        <p className="text-sm text-[var(--ds-gray-900)]">
          How the nested dialog appears
        </p>
      </div>
      <div className="flex gap-2">
        <DefaultDialogPosition />
        <BottomDialogPosition />
        <TopDialogPosition />
        <LeftDialogPosition />
        <RightDialogPosition />
      </div>
    </div>
  );
}
