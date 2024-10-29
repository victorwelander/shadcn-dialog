import Image from "next/image";
import React from "react";
import dialogs from "@/public/dialogs.svg";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center gap-3">
      <Image src={dialogs} alt="dialogs" width={900} height={900} />
    </div>
  );
}
