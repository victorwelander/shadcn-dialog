"use client";

import { Info } from "lucide-react";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export type PropDef = {
  name: string;
  required?: boolean;
  default?: string | boolean;
  type?: string;
  typeSimple: string;
  description?: string | React.ReactNode;
};

const PropsTable = ({
  data,
  propHeaderFixedWidth = true,
}: {
  data: PropDef[];
  propHeaderFixedWidth?: boolean;
}) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead style={{ width: propHeaderFixedWidth ? "37%" : "auto" }}>
              Prop
            </TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Default</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map(
            (
              {
                name,
                type,
                typeSimple,
                required,
                default: defaultValue,
                description,
              },
              i,
            ) => {
              return (
                <TableRow key={i}>
                  <TableCell>
                    <div className="inline-flex items-center gap-2">
                      <code className="rounded-[4px] bg-[var(--ds-blue-300)] px-1 text-[12px] text-[var(--ds-blue-900)]">
                        {name}
                        {required ? "*" : null}
                      </code>

                      {description && (
                        <Popover>
                          <PopoverTrigger>
                            <span className="flex cursor-pointer items-center rounded-[4px] px-1 py-1 text-[var(--accents-5)] duration-100 hover:bg-[var(--ds-gray-alpha-400)] hover:text-[var(--geist-foreground)]">
                              <Info size={12} />
                            </span>
                          </PopoverTrigger>
                          <PopoverContent
                            side="top"
                            align="center"
                            style={{ maxWidth: 350 }}
                            className="text-[var(--ds-gray-900)]"
                            onOpenAutoFocus={(event) => {
                              event.preventDefault();
                              (event.currentTarget as HTMLElement)?.focus();
                            }}
                          >
                            <div className="text-sm">{description}</div>
                          </PopoverContent>
                        </Popover>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="inline-flex items-center gap-2">
                      <code className="rounded-[4px] bg-[var(--ds-gray-alpha-400)] px-1 text-[12px] text-[var(--ds-gray-900)]">
                        {Boolean(typeSimple) ? typeSimple : type}
                      </code>
                      {Boolean(typeSimple) && Boolean(type) && (
                        <Popover>
                          <PopoverTrigger>
                            <span className="flex cursor-pointer items-center rounded-[4px] px-1 py-1 text-[var(--accents-5)] duration-100 hover:bg-[var(--ds-gray-alpha-400)] hover:text-[var(--geist-foreground)]">
                              <Info size={12} />
                            </span>
                          </PopoverTrigger>
                          <PopoverContent
                            side="top"
                            align="center"
                            className="text-sm text-[var(--ds-gray-900)]"
                            style={{ maxWidth: "min(1240px, 95vw)" }}
                          >
                            <div>{type}</div>
                          </PopoverContent>
                        </Popover>
                      )}
                    </div>
                  </TableCell>

                  <TableCell>
                    {Boolean(defaultValue) ? (
                      <code className="rounded-[4px] bg-[var(--ds-gray-alpha-400)] px-1 py-[4px] text-[11px] text-[var(--ds-gray-900)]">
                        {defaultValue}
                      </code>
                    ) : (
                      <p>-</p>
                    )}
                  </TableCell>
                </TableRow>
              );
            },
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default PropsTable;
