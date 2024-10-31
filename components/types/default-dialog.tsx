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
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { usePaymentInputs } from "react-payment-inputs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CreditCard } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

export default function DefaultDialog() {
  const { getCardNumberProps } = usePaymentInputs();
  const { getExpiryDateProps } = usePaymentInputs();
  const { getCVCProps } = usePaymentInputs();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Default</Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader className="border-b p-4">
          <DialogTitle>Default Dialog</DialogTitle>
          <DialogDescription>This is the default dialog</DialogDescription>
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

        <DialogFooter className="flex flex-row items-center justify-between space-x-2 border-t px-4 py-2">
          <DialogClose asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              Cancel
            </Button>
          </DialogClose>
          <Button className="w-full sm:w-auto">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
