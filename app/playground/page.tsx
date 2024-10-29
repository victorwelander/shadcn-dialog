import React from "react";
import DefaultDialogPosition from "@/components/positions/default-dialog-position";
import BottomDialogPosition from "@/components/positions/bottom-dialog-position";
import TopDialogPosition from "@/components/positions/top-dialog-position";
import LeftDialogPosition from "@/components/positions/left-dialog-position";
import RightDialogPosition from "@/components/positions/right-dialog-position";
import DraggableDialog from "@/components/others/draggable-dialog";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center gap-3">
      <DraggableDialog />
      <DefaultDialogPosition />
      <BottomDialogPosition />
      <TopDialogPosition />
      <LeftDialogPosition />
      <RightDialogPosition />
    </div>
  );
}
