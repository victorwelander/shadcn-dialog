import Image from "next/image";
import React from "react";
import dialogs from "@/public/dialogs.svg";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Image src={dialogs} alt="dialogs" width={500} height={500} />
    </div>
  );
}
