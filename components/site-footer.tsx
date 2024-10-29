import Image from "next/image";
import React from "react";
import avatar from "@/public/avatar.svg";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <div className="mt-[164px] border-t bg-[var(--ds-gray-100)]">
      <div className="mx-auto flex w-full max-w-[642px] flex-col justify-center gap-12 px-4 py-8 md:p-4">
        <p className="flex items-center gap-3 text-sm text-[var(--ds-gray-900)]">
          <Image
            src={avatar}
            alt="victor welander"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span>
            Made by{" "}
            <Link
              href="https://x.com/victorwelander_"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--ds-gray-1000)]"
            >
              Victor Welander
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
