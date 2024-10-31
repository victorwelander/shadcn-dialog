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

export default function RightDialogPosition() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-1.5">
          <svg
            width="12"
            height="8"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.8839 13.6339C7.3957 14.122 6.60427 14.122 6.11612 13.6339L0.36612 7.8839C0.1317 7.6495 0 7.3315 0 7C0 6.6685 0.13169 6.3506 0.36612 6.1161L6.11612 0.36612C6.60427 -0.12204 7.3957 -0.12204 7.8839 0.36612C8.372 0.85427 8.372 1.64573 7.8839 2.13388L4.26776 5.75H16.75C17.4404 5.75 18 6.3097 18 7C18 7.6904 17.4404 8.25 16.75 8.25H4.26777L7.8839 11.8661C8.372 12.3543 8.372 13.1457 7.8839 13.6339Z"
              fill="black"
            />
          </svg>

          <span>Right</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader className="border-b p-4">
          <DialogTitle>Right Position</DialogTitle>
          <DialogDescription>
            This dialog appears from the right
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
            <InnerDialogContent className="-mt-6 p-0 sm:-mt-1" position="right">
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
