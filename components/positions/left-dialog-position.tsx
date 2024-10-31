import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  InnerDialog,
  InnerDialogTrigger,
  InnerDialogContent,
  InnerDialogClose,
  InnerDialogHeader,
  InnerDialogFooter,
  InnerDialogTitle,
  InnerDialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Skeleton } from "../ui/skeleton";

export default function LeftDialogPosition() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-1.5">
          <span>Left</span>
          <svg
            width="12"
            height="8"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden sm:block"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.1161 0.36612C10.6043 -0.12204 11.3957 -0.12204 11.8839 0.36612L17.6339 6.1161C17.8683 6.3505 18 6.6685 18 7C18 7.3315 17.8683 7.6494 17.6339 7.8839L11.8839 13.6339C11.3957 14.122 10.6043 14.122 10.1161 13.6339C9.628 13.1457 9.628 12.3543 10.1161 11.8661L13.7322 8.25H1.25C0.55964 8.25 0 7.6903 0 7C0 6.3096 0.55964 5.75 1.25 5.75H13.7322L10.1161 2.13388C9.628 1.64573 9.628 0.85427 10.1161 0.36612Z"
              fill="black"
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader className="border-b p-4">
          <DialogTitle>Left Position</DialogTitle>
          <DialogDescription>
            This dialog appears from the left
          </DialogDescription>
        </DialogHeader>

        <div className="w-full px-4 py-2">
          <div className="flex w-full flex-col gap-2">
            <div className="flex w-full gap-2">
              <Skeleton className="h-20 w-20 flex-shrink-0" />
              <div className="flex flex-grow flex-col space-y-2">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-80" />
              </div>
            </div>
            <Skeleton className="h-32 w-full" />
          </div>
        </div>

        <DialogFooter className="flex flex-col items-center justify-between space-y-2 border-t px-4 py-2 sm:flex-row sm:space-y-0">
          <InnerDialog>
            <InnerDialogTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                Payment Method
              </Button>
            </InnerDialogTrigger>
            <InnerDialogContent className="-mt-6 p-0 sm:-mt-1" position="left">
              <InnerDialogHeader className="border-b p-4">
                <InnerDialogTitle>Choose a payment method</InnerDialogTitle>
                <InnerDialogDescription>
                  Nested Dialog Description
                </InnerDialogDescription>
              </InnerDialogHeader>

              <div className="w-full px-4 py-2">
                <div className="flex w-full flex-col gap-2">
                  <div className="flex w-full flex-col gap-2">
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                  </div>
                </div>
              </div>

              <InnerDialogFooter className="flex flex-col items-center justify-between space-y-2 border-t px-4 py-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <InnerDialogClose asChild>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Cancel Payment Method
                  </Button>
                </InnerDialogClose>
                <Button className="w-full sm:w-auto">Continue</Button>
              </InnerDialogFooter>
            </InnerDialogContent>
          </InnerDialog>
          <div className="flex w-full flex-col items-center gap-2 sm:w-auto sm:flex-row">
            <DialogClose asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                Cancel
              </Button>
            </DialogClose>
            <Button className="w-full sm:w-auto">Save</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
