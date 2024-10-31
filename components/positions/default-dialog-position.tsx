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

export default function DefaultDialogPosition() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-1.5">
          <svg
            width="14"
            height="14"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden sm:block"
          >
            <path
              d="M9.33593 2.14629L7.61612 3.86611C7.32323 4.159 6.84834 4.159 6.55545 3.86611C6.26256 3.57322 6.26256 3.09834 6.55545 2.80545L8.84833 0.512565C9.53173 -0.170855 10.6398 -0.170855 11.3232 0.512565L13.6161 2.80545C13.909 3.09834 13.909 3.57322 13.6161 3.86611C13.3232 4.159 12.8483 4.159 12.5554 3.86611L10.8359 2.14659V9.33593H18.0252L16.3054 7.61612C16.0125 7.32323 16.0125 6.84834 16.3054 6.55545C16.5983 6.26256 17.0732 6.26256 17.3661 6.55545L19.659 8.84833C20.3424 9.53173 20.3424 10.6398 19.659 11.3232L17.3661 13.6161C17.0732 13.909 16.5983 13.909 16.3054 13.6161C16.0125 13.3232 16.0125 12.8483 16.3054 12.5554L18.0249 10.8359H10.8359V18.0249L12.5554 16.3054C12.8483 16.0125 13.3232 16.0125 13.6161 16.3054C13.909 16.5983 13.909 17.0732 13.6161 17.3661L11.3232 19.659C10.6398 20.3424 9.53173 20.3424 8.84833 19.659L6.55545 17.3661C6.26256 17.0732 6.26256 16.5983 6.55545 16.3054C6.84834 16.0125 7.32323 16.0125 7.61612 16.3054L9.33593 18.0252V10.8359H2.14659L3.86611 12.5554C4.159 12.8483 4.159 13.3232 3.86611 13.6161C3.57322 13.909 3.09834 13.909 2.80545 13.6161L0.512565 11.3232C-0.170855 10.6398 -0.170855 9.53173 0.512565 8.84833L2.80545 6.55545C3.09834 6.26256 3.57322 6.26256 3.86611 6.55545C4.159 6.84834 4.159 7.32323 3.86611 7.61612L2.14629 9.33593H9.33593V2.14629Z"
              fill="black"
            />
          </svg>
          <span>Default</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader className="border-b p-4">
          <DialogTitle>Default Position</DialogTitle>
          <DialogDescription>
            This dialog appears from the center
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
            <InnerDialogContent className="-mt-6 p-0 sm:-mt-1">
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
