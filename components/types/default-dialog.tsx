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
          <DialogTitle>Payment</DialogTitle>
          <DialogDescription>
            Please enter your credit card credentials below to complete the
            payment process.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-col">
            <Label className="mb-1.5 text-muted-foreground">Card Holder*</Label>
            <div className="relative">
              <Input placeholder="Card Holder Name" />
            </div>
          </div>
          <div className="flex flex-col">
            <Label className="mb-1.5 text-muted-foreground">Card Number*</Label>
            <div className="relative">
              <Input
                {...getCardNumberProps()}
                className="peer ps-9 [direction:inherit]"
              />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                <CreditCard size={16} strokeWidth={2} aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <Label className="mb-1.5 text-muted-foreground">
                Expiration month and year*
              </Label>
              <Input
                {...getExpiryDateProps()}
                className="[direction:inherit]"
              />
            </div>
            <div className="flex flex-col">
              <Label className="mb-1.5 text-muted-foreground">CVC*</Label>
              <Input {...getCVCProps()} className="[direction:inherit]" />
            </div>
          </div>
        </div>

        <DialogFooter className="flex flex-col items-center justify-between space-y-2 border-t px-4 py-2 sm:flex-row sm:space-x-2 sm:space-y-0">
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
