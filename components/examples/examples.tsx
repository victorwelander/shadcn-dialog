import React from "react";
import { Button } from "../ui/button";
import NestedDialog from "./nested-dialog";

export default function Examples() {
  return (
    <div className="mt-36 flex gap-2">
      <Button variant="outline">Default Dialog</Button>
      <NestedDialog />
    </div>
  );
}
