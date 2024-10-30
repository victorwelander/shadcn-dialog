import React from "react";
import { Button } from "./ui/button";
import { SiGithub } from "react-icons/si";
import RenderNestedDialog from "./demos/render-nested-dialog";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center">
        <Image src={logo} alt="logo" width={50} height={50} />
        <h1 className="text-[30px] font-bold md:text-[48px]">
          Nested Shadcn Dialog
        </h1>
        <p className="text-sm text-[var(--ds-gray-900)] md:text-[16px]">
          Render multiple dialogs within each other
        </p>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <RenderNestedDialog />
        <Button variant="outline">
          <Link
            href="https://github.com/victorwelander/shadcn-dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <Github />
            <span>Github</span>
          </Link>
        </Button>
      </div>
      <div className="mt-6 text-sm text-[var(--ds-gray-900)] md:text-[16px]">
        <p>
          The nested dialog uses a shared context to manage state, making it
          easy to control multiple layers. The outer dialog handles the inner
          one, so transitions are smooth and everything just works intuitively.
          Each layer scales visually, keeping the dialogs clear and the user
          experience seamless.
        </p>
      </div>
    </div>
  );
}

function Github() {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0.950195C15.525 0.950195 20 5.4252 20 10.9502C19.9995 13.0454 19.3419 15.0878 18.1198 16.7897C16.8977 18.4917 15.1727 19.7675 13.1875 20.4377C12.6875 20.5377 12.5 20.2252 12.5 19.9627C12.5 19.6252 12.5125 18.5502 12.5125 17.2127C12.5125 16.2752 12.2 15.6752 11.8375 15.3627C14.0625 15.1127 16.4 14.2627 16.4 10.4252C16.4 9.32522 16.0125 8.4377 15.375 7.7377C15.475 7.4877 15.825 6.4627 15.275 5.0877C15.275 5.0877 14.4375 4.8127 12.525 6.1127C11.725 5.8877 10.875 5.7752 10.025 5.7752C9.175 5.7752 8.325 5.8877 7.525 6.1127C5.6125 4.8252 4.775 5.0877 4.775 5.0877C4.225 6.4627 4.575 7.4877 4.675 7.7377C4.0375 8.4377 3.65 9.33772 3.65 10.4252C3.65 14.2502 5.975 15.1127 8.2 15.3627C7.9125 15.6127 7.65 16.0502 7.5625 16.7002C6.9875 16.9627 5.55 17.3877 4.65 15.8752C4.4625 15.5752 3.9 14.8377 3.1125 14.8502C2.275 14.8627 2.775 15.3252 3.125 15.5127C3.55 15.7502 4.0375 16.6377 4.15 16.9252C4.35 17.4877 5 18.5627 7.5125 18.1002C7.5125 18.9377 7.525 19.7252 7.525 19.9627C7.525 20.2252 7.3375 20.5252 6.8375 20.4377C4.8458 19.7747 3.11342 18.5015 1.88611 16.7985C0.658811 15.0955 -0.00109863 13.0493 1.37295e-06 10.9502C1.37295e-06 5.4252 4.475 0.950195 10 0.950195Z"
        fill="black"
      />
    </svg>
  );
}
