"use client";

import React from "react";
import PropsTable, { PropDef } from "./props-table";

const dialogProps: PropDef[] = [
  {
    name: "children",
    required: true,
    type: "React.ReactNode",
    typeSimple: "ReactNode",
    description: "The content of the dialog.",
  },
];

const dialogTriggerProps: PropDef[] = [
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description:
      "Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.",
    typeSimple: "boolean",
  },
];

const dialogPortalProps: PropDef[] = [
  {
    name: "container",
    type: "HTMLElement",
    typeSimple: "HTMLElement",
    description: "Specify a container element to portal the content into.",
  },
];

const dialogContentProps: PropDef[] = [
  {
    name: "className",
    type: "string",
    typeSimple: "string",
    description: "Additional CSS class names to apply to the dialog content.",
  },
  {
    name: "children",
    required: true,
    type: "React.ReactNode",
    typeSimple: "ReactNode",
    description: "The content of the dialog.",
  },
];

const dialogOverlayProps: PropDef[] = [
  {
    name: "className",
    type: "string",
    typeSimple: "string",
    description: "Additional CSS class names to apply to the dialog overlay.",
  },
];

const dialogHeaderProps: PropDef[] = [
  {
    name: "className",
    type: "string",
    typeSimple: "string",
    description: "Additional CSS class names to apply to the dialog header.",
  },
];

const dialogFooterProps: PropDef[] = [
  {
    name: "className",
    type: "string",
    typeSimple: "string",
    description: "Additional CSS class names to apply to the dialog footer.",
  },
];

const dialogTitleProps: PropDef[] = [
  {
    name: "className",
    type: "string",
    typeSimple: "string",
    description: "Additional CSS class names to apply to the dialog title.",
  },
];

const dialogDescriptionProps: PropDef[] = [
  {
    name: "className",
    type: "string",
    typeSimple: "string",
    description:
      "Additional CSS class names to apply to the dialog description.",
  },
];

const dialogCloseProps: PropDef[] = [
  {
    name: "className",
    type: "string",
    typeSimple: "string",
    description: "Additional CSS class names to apply to the close button.",
  },
];

const innerDialogProps: PropDef[] = [
  {
    name: "children",
    required: true,
    type: "React.ReactNode",
    typeSimple: "ReactNode",
    description: "The content of the inner dialog.",
  },
];

const innerDialogTriggerProps: PropDef[] = [
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description:
      "Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.",
    typeSimple: "boolean",
  },
];

const innerDialogContentProps: PropDef[] = [
  {
    name: "position",
    type: '"default" | "bottom" | "top" | "left" | "right"',
    typeSimple: "string",
    default: '"default"',
    description: "The position of the inner dialog.",
  },
  {
    name: "draggable",
    type: "boolean",
    typeSimple: "boolean",
    default: "false",
    description: "Whether the inner dialog is draggable.",
  },
  {
    name: "className",
    type: "string",
    typeSimple: "string",
    description:
      "Additional CSS class names to apply to the inner dialog content.",
  },
];

const innerDialogHeaderProps: PropDef[] = [
  {
    name: "className",
    type: "string",
    typeSimple: "string",
    description:
      "Additional CSS class names to apply to the inner dialog header.",
  },
];

const innerDialogFooterProps: PropDef[] = [
  {
    name: "className",
    type: "string",
    typeSimple: "string",
    description:
      "Additional CSS class names to apply to the inner dialog footer.",
  },
];

const innerDialogTitleProps: PropDef[] = [
  {
    name: "className",
    type: "string",
    typeSimple: "string",
    description:
      "Additional CSS class names to apply to the inner dialog title.",
  },
];

const innerDialogDescriptionProps: PropDef[] = [
  {
    name: "className",
    type: "string",
    typeSimple: "string",
    description:
      "Additional CSS class names to apply to the inner dialog description.",
  },
];

const innerDialogCloseProps: PropDef[] = [
  {
    name: "className",
    type: "string",
    typeSimple: "string",
    description:
      "Additional CSS class names to apply to the inner dialog close button.",
  },
];

export default function DialogPropsTable() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="mb-2 text-[16px] font-medium">Dialog</h1>
        <PropsTable data={dialogProps} />
      </div>

      <div>
        <h1 className="mb-2 text-[16px] font-medium">Dialog Trigger</h1>
        <PropsTable data={dialogTriggerProps} />
      </div>

      <div>
        <h1 className="mb-2 text-[16px] font-medium">Dialog Portal</h1>
        <PropsTable data={dialogPortalProps} />
      </div>

      <div>
        <h1 className="mb-2 text-[16px] font-medium">Dialog Content</h1>
        <PropsTable data={dialogContentProps} />
      </div>

      <div>
        <h1 className="mb-2 text-[16px] font-medium">Dialog Overlay</h1>
        <PropsTable data={dialogOverlayProps} />
      </div>

      <div>
        <h1 className="mb-2 text-[16px] font-medium">Dialog Header</h1>
        <PropsTable data={dialogHeaderProps} />
      </div>

      <div>
        <h1 className="mb-2 text-[16px] font-medium">Dialog Footer</h1>
        <PropsTable data={dialogFooterProps} />
      </div>

      <div>
        <h1 className="mb-2 text-[16px] font-medium">Dialog Title</h1>
        <PropsTable data={dialogTitleProps} />
      </div>

      <div>
        <h1 className="mb-2 text-[16px] font-medium">Dialog Description</h1>
        <PropsTable data={dialogDescriptionProps} />
      </div>

      <div>
        <h1 className="mb-2 text-[16px] font-medium">Dialog Close</h1>
        <PropsTable data={dialogCloseProps} />
      </div>

      <hr />

      <div>
        <h1 className="mb-2 text-[16px] font-medium">Inner Dialog</h1>
        <PropsTable data={innerDialogProps} />
      </div>

      <div>
        <h1 className="mb-2 text-[16px] font-medium">Inner Dialog Trigger</h1>
        <PropsTable data={innerDialogTriggerProps} />
      </div>

      <div>
        <h1 className="mb-2 text-[16px] font-medium">Inner Dialog Content</h1>
        <PropsTable data={innerDialogContentProps} />
      </div>

      <div>
        <h1 className="mb-2 text-[16px] font-medium">Inner Dialog Header</h1>
        <PropsTable data={innerDialogHeaderProps} />
      </div>

      <div>
        <h1 className="mb-2 text-[16px] font-medium">Inner Dialog Footer</h1>
        <PropsTable data={innerDialogFooterProps} />
      </div>

      <div>
        <h1 className="mb-2 text-[16px] font-medium">Inner Dialog Title</h1>
        <PropsTable data={innerDialogTitleProps} />
      </div>

      <div>
        <h1 className="mb-2 text-[16px] font-medium">
          Inner Dialog Description
        </h1>
        <PropsTable data={innerDialogDescriptionProps} />
      </div>

      <div>
        <h1 className="mb-2 text-[16px] font-medium">Inner Dialog Close</h1>
        <PropsTable data={innerDialogCloseProps} />
      </div>
    </div>
  );
}
