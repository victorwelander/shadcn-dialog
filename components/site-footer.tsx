import Image from "next/image";
import React from "react";
import avatar from "@/public/avatar.svg";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <div className="mt-[164px] border-t p-4">
      <div className="mx-auto flex w-full max-w-[652px] items-center">
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
