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

export default function Playground() {
  return (
    <div className="mx-auto flex items-center justify-center py-80">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Nested Dialog</Button>
        </DialogTrigger>
        <DialogContent className="p-0">
          <DialogHeader className="border-b p-4">
            <DialogTitle>Payment</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex flex-col items-center justify-between space-y-2 border-t px-4 py-2 sm:flex-row sm:space-y-0">
            <InnerDialog>
              <InnerDialogTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  Payment Method
                </Button>
              </InnerDialogTrigger>
              <InnerDialogContent className="-mt-10 p-0 sm:-mt-4">
                <InnerDialogHeader className="border-b p-4">
                  <InnerDialogTitle>Choose a payment method</InnerDialogTitle>
                  <InnerDialogDescription>
                    Nested Dialog Description
                  </InnerDialogDescription>
                </InnerDialogHeader>

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
    </div>
  );
}
