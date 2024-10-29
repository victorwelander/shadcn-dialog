"use client";

import React, { useState } from "react";
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
import { usePaymentInputs } from "react-payment-inputs";
import { CreditCard } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { SiApplepay, SiPaypal, SiVisa } from "react-icons/si";

export default function RenderNestedDialog() {
  const { getCardNumberProps, getExpiryDateProps, getCVCProps } =
    usePaymentInputs();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("paypal");

  const handleClick = (value: string) => {
    setSelectedPaymentMethod(value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Render Nested Dialog</Button>
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
        <DialogFooter className="flex flex-col items-center justify-between space-y-2 border-t px-4 py-2 sm:flex-row sm:space-y-0">
          <InnerDialog>
            <InnerDialogTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                Payment Method
              </Button>
            </InnerDialogTrigger>
            <InnerDialogContent className="-mt-10 p-0 sm:-mt-5">
              <InnerDialogHeader className="border-b p-4">
                <InnerDialogTitle>Choose a payment method</InnerDialogTitle>
                <InnerDialogDescription>
                  Nested Dialog Description
                </InnerDialogDescription>
              </InnerDialogHeader>

              <div className="flex flex-col gap-4 p-4">
                <RadioGroup
                  value={selectedPaymentMethod}
                  onValueChange={setSelectedPaymentMethod}
                >
                  <div
                    className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 hover:bg-accent ${
                      selectedPaymentMethod === "paypal" ? "bg-accent" : ""
                    }`}
                    onClick={() => handleClick("paypal")}
                  >
                    <div className="flex items-center space-x-4">
                      <SiPaypal className="h-6 w-6" />
                      <div>
                        <h3 className="text-sm font-medium">PayPal</h3>
                        <p className="text-sm text-muted-foreground">
                          Pay with your PayPal account
                        </p>
                      </div>
                    </div>
                    <RadioGroupItem value="paypal" id="paypal" />
                  </div>
                  <div
                    className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 hover:bg-accent ${
                      selectedPaymentMethod === "creditcard" ? "bg-accent" : ""
                    }`}
                    onClick={() => handleClick("creditcard")}
                  >
                    <div className="flex items-center space-x-4">
                      <SiVisa className="h-6 w-6" />
                      <div>
                        <h3 className="text-sm font-medium">Credit Card</h3>
                        <p className="text-sm text-muted-foreground">
                          Pay with Visa, Mastercard, or American Express
                        </p>
                      </div>
                    </div>
                    <RadioGroupItem value="creditcard" id="creditcard" />
                  </div>
                  <div
                    className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 hover:bg-accent ${
                      selectedPaymentMethod === "applepay" ? "bg-accent" : ""
                    }`}
                    onClick={() => handleClick("applepay")}
                  >
                    <div className="flex items-center space-x-4">
                      <SiApplepay className="h-6 w-6" />
                      <div>
                        <h3 className="text-sm font-medium">Apple Pay</h3>
                        <p className="text-sm text-muted-foreground">
                          Pay with Apple Pay
                        </p>
                      </div>
                    </div>
                    <RadioGroupItem value="applepay" id="applepay" />
                  </div>
                </RadioGroup>
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
