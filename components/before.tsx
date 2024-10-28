"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    isNested?: boolean;
  }
>(({ className, children, isNested = false, ...props }, ref) => (
  <DialogPrimitive.Content
    ref={ref}
    className={cn(
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
      isNested && "z-[60]",
      className,
    )}
    {...props}
  >
    {children}
    <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
      <X className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </DialogPrimitive.Close>
  </DialogPrimitive.Content>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

interface StackingDialogProps {
  triggerText: string;
  outerDialogTitle: string;
  outerDialogDescription: string;
  outerDialogContent: React.ReactNode;
  innerDialogTriggerText: string;
  innerDialogTitle: string;
  innerDialogDescription: string;
  innerDialogContent: React.ReactNode;
  outerDialogClassName?: string;
  innerDialogClassName?: string;
}

export function StackingDialog({
  triggerText,
  outerDialogTitle,
  outerDialogDescription,
  outerDialogContent,
  innerDialogTriggerText,
  innerDialogTitle,
  innerDialogDescription,
  innerDialogContent,
  outerDialogClassName,
  innerDialogClassName,
}: StackingDialogProps) {
  const [outerOpen, setOuterOpen] = React.useState(false);
  const [innerOpen, setInnerOpen] = React.useState(false);

  const handleOuterClose = () => {
    if (!innerOpen) {
      setOuterOpen(false);
    }
  };

  const handleInnerClose = () => {
    setInnerOpen(false);
  };

  const handleEscapeKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      if (innerOpen) {
        setInnerOpen(false);
      } else if (outerOpen) {
        setOuterOpen(false);
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscapeKeyDown);
    return () => {
      document.removeEventListener("keydown", handleEscapeKeyDown);
    };
  }, [innerOpen, outerOpen]);

  return (
    <Dialog open={outerOpen} onOpenChange={setOuterOpen}>
      <DialogTrigger asChild>
        <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground">
          {triggerText}
        </button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent
          className={cn(
            "fixed left-[50%] top-[50%] z-50 h-[320px] w-[540px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-slate-400 p-6 transition-all duration-300",
            innerOpen && "translate-y-[-55%] scale-[0.97] opacity-50",
            outerDialogClassName,
          )}
          onPointerDownOutside={handleOuterClose}
        >
          <DialogHeader>
            <DialogTitle>{outerDialogTitle}</DialogTitle>
            <DialogDescription>{outerDialogDescription}</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {outerDialogContent}
            <Dialog open={innerOpen} onOpenChange={setInnerOpen}>
              <DialogTrigger asChild>
                <button className="rounded-md bg-secondary px-4 py-2 text-secondary-foreground">
                  {innerDialogTriggerText}
                </button>
              </DialogTrigger>
              <DialogPortal>
                <DialogContent
                  className={cn(
                    "fixed left-[50%] top-[50%] z-[60] h-[300px] w-[500px] translate-x-[-50%] translate-y-[-45%] rounded-xl bg-[#a18c8c] p-6",
                    innerDialogClassName,
                  )}
                  onPointerDownOutside={handleInnerClose}
                >
                  <DialogHeader>
                    <DialogTitle>{innerDialogTitle}</DialogTitle>
                    <DialogDescription className="text-[#4a3b3b]">
                      {innerDialogDescription}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4 text-[#4a3b3b]">
                    {innerDialogContent}
                  </div>
                </DialogContent>
              </DialogPortal>
            </Dialog>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground">
                Close Outer
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

export default function StackingDialogExample() {
  return (
    <StackingDialog
      triggerText="Open Outer Dialog"
      outerDialogTitle="Outer Dialog"
      outerDialogDescription="This is the outer dialog. You can open an inner dialog from here."
      outerDialogContent={
        <p>
          This is the content of the outer dialog. You can open the inner dialog
          using the button below.
        </p>
      }
      innerDialogTriggerText="Open Inner Dialog"
      innerDialogTitle="Inner Dialog"
      innerDialogDescription="This is a simple inner dialog."
      innerDialogContent={
        <div>
          <p>This is the content of the inner dialog.</p>
          <p>Closing this will return you to the outer dialog.</p>
        </div>
      }
    />
  );
}

import React from "react";
import { StackingDialog } from "@/components/ui/dialog-stacking";

export default function SimpleExample() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Dialog Stacking Example</h1>
      <StackingDialog
        triggerText="Open Dialogs"
        outerDialogTitle="Outer Dialog"
        outerDialogDescription="This is a simple outer dialog."
        outerDialogContent={
          <div>
            <p>This is the content of the outer dialog.</p>
            <p>You can open the inner dialog using the button below.</p>
          </div>
        }
        innerDialogTriggerText="Open Inner Dialog"
        innerDialogTitle="Inner Dialog"
        innerDialogDescription="This is a simple inner dialog."
        innerDialogContent={
          <div>
            <p>This is the content of the inner dialog.</p>
            <p>Closing this will return you to the outer dialog.</p>
          </div>
        }
      />
    </div>
  );
}
