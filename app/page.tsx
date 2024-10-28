"use client";

import { Button } from "@/components/ui/button";
import {
  StackingDialog,
  StackingDialogTrigger,
  StackingDialogContent,
  InnerDialog,
  InnerDialogTrigger,
  InnerDialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog-stacking";

export default function StackingDialogExample() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Stacking Dialog Example</h1>
      <StackingDialog>
        <StackingDialogTrigger>
          <Button variant="outline">Open User Settings</Button>
        </StackingDialogTrigger>
        <StackingDialogContent className="h-[190px]">
          <DialogHeader>
            <DialogTitle>User Settings</DialogTitle>
            <DialogDescription>
              Manage your account settings and preferences
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>Here you can change your username, email, and other settings.</p>

            <InnerDialog>
              <InnerDialogTrigger>
                <Button variant="secondary" className="mt-4">
                  Change Password
                </Button>
              </InnerDialogTrigger>
              <InnerDialogContent>
                <DialogHeader>
                  <DialogTitle>Change Password</DialogTitle>
                  <DialogDescription>
                    Update your account password
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p>
                    Enter your current password and a new password to update
                    your account security.
                  </p>
                </div>
              </InnerDialogContent>
            </InnerDialog>
          </div>
        </StackingDialogContent>
      </StackingDialog>
    </div>
  );
}
