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

export default function DraggableDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-1.5">
          <svg
            width="7"
            height="14"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.75C0 0.7835 0.7835 0 1.75 0C2.7165 0 3.5 0.7835 3.5 1.75C3.5 2.7165 2.7165 3.5 1.75 3.5C0.7835 3.5 0 2.7165 0 1.75Z"
              fill="black"
            />
            <path
              d="M5.5 1.75C5.5 0.7835 6.2835 0 7.25 0C8.2165 0 9 0.7835 9 1.75C9 2.7165 8.2165 3.5 7.25 3.5C6.2835 3.5 5.5 2.7165 5.5 1.75Z"
              fill="black"
            />
            <path
              d="M0 14.25C0 13.2835 0.7835 12.5 1.75 12.5C2.7165 12.5 3.5 13.2835 3.5 14.25C3.5 15.2165 2.7165 16 1.75 16C0.7835 16 0 15.2165 0 14.25Z"
              fill="black"
            />
            <path
              d="M5.5 14.25C5.5 13.2835 6.2835 12.5 7.25 12.5C8.2165 12.5 9 13.2835 9 14.25C9 15.2165 8.2165 16 7.25 16C6.2835 16 5.5 15.2165 5.5 14.25Z"
              fill="black"
            />
            <path
              d="M0 7.90039C0 6.93389 0.7835 6.15039 1.75 6.15039C2.7165 6.15039 3.5 6.93389 3.5 7.90039V8.00039C3.5 8.96689 2.7165 9.75039 1.75 9.75039C0.7835 9.75039 0 8.96689 0 8.00039V7.90039Z"
              fill="black"
            />
            <path
              d="M5.5 7.90039C5.5 6.93389 6.2835 6.15039 7.25 6.15039C8.2165 6.15039 9 6.93389 9 7.90039V8.00039C9 8.96689 8.2165 9.75039 7.25 9.75039C6.2835 9.75039 5.5 8.96689 5.5 8.00039V7.90039Z"
              fill="black"
            />
          </svg>

          <span>Draggable</span>
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
            <InnerDialogContent className="-mt-6 p-0 sm:-mt-1" draggable>
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
