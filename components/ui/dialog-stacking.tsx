"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StackingDialogContextValue {
  innerOpen: boolean;
  setInnerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const StackingDialogContext = React.createContext<
  StackingDialogContextValue | undefined
>(undefined);

export function StackingDialog({ children }: { children: React.ReactNode }) {
  const [outerOpen, setOuterOpen] = React.useState(false);
  const [innerOpen, setInnerOpen] = React.useState(false);

  React.useEffect(() => {
    const handleEscapeKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (innerOpen) {
          setInnerOpen(false);
        } else if (outerOpen) {
          setOuterOpen(false);
        }
      }
    };

    document.addEventListener("keydown", handleEscapeKeyDown);
    return () => {
      document.removeEventListener("keydown", handleEscapeKeyDown);
    };
  }, [innerOpen, outerOpen]);

  return (
    <StackingDialogContext.Provider value={{ innerOpen, setInnerOpen }}>
      <Dialog open={outerOpen} onOpenChange={setOuterOpen}>
        {children}
      </Dialog>
    </StackingDialogContext.Provider>
  );
}

export function StackingDialogTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DialogTrigger asChild>{children}</DialogTrigger>;
}

export function StackingDialogContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const context = React.useContext(StackingDialogContext);
  if (!context)
    throw new Error(
      "StackingDialogContent must be used within a StackingDialog",
    );

  const handleOuterClose = React.useCallback(() => {
    if (!context.innerOpen) {
      // Close outer dialog only if inner is not open
      // This logic should be handled by the parent Dialog component
    }
  }, [context.innerOpen]);

  return (
    <DialogContent
      className={cn(
        "fixed left-[50%] top-[50%] z-50 w-[540px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-background p-6 transition-all duration-300",
        context.innerOpen && "translate-y-[-55%] scale-[0.97] opacity-50",
        className,
      )}
      onPointerDownOutside={handleOuterClose}
    >
      {children}
    </DialogContent>
  );
}

export function InnerDialog({ children }: { children: React.ReactNode }) {
  const context = React.useContext(StackingDialogContext);
  if (!context)
    throw new Error("InnerDialog must be used within a StackingDialog");

  return (
    <Dialog open={context.innerOpen} onOpenChange={context.setInnerOpen}>
      {children}
    </Dialog>
  );
}

export function InnerDialogTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DialogTrigger asChild>{children}</DialogTrigger>;
}

export function InnerDialogContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const context = React.useContext(StackingDialogContext);
  if (!context)
    throw new Error("InnerDialogContent must be used within a StackingDialog");

  const handleInnerClose = React.useCallback(() => {
    context.setInnerOpen(false);
  }, [context]);

  return (
    <DialogContent
      className={cn(
        "fixed left-[50%] top-[50%] z-[60] w-[500px] translate-x-[-50%] translate-y-[-45%] rounded-xl bg-background p-6",
        className,
      )}
      onPointerDownOutside={handleInnerClose}
    >
      {children}
    </DialogContent>
  );
}

export { DialogHeader, DialogTitle, DialogDescription };
