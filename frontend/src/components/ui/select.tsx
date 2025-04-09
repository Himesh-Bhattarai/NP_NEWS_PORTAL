// components/ui/select.tsx
import * as React from "react";
import {
  Select as SelectPrimitive,
  SelectContent as SelectPrimitiveContent,
  SelectItem as SelectPrimitiveItem,
  SelectTrigger as SelectPrimitiveTrigger,
  SelectValue as SelectPrimitiveValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectViewport,
  SelectIcon,
} from "@radix-ui/react-select";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const Select = SelectPrimitive;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitiveTrigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitiveTrigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitiveTrigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
    <SelectIcon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectIcon>
  </SelectPrimitiveTrigger>
));
SelectTrigger.displayName = SelectPrimitiveTrigger.displayName;

const SelectValue = SelectPrimitiveValue;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitiveContent>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitiveContent>
>(({ className, ...props }, ref) => (
  <SelectPrimitiveContent
    ref={ref}
    className={cn("z-50 min-w-[8rem] bg-popover text-popover-foreground shadow-md", className)}
    {...props}
  />
));
SelectContent.displayName = SelectPrimitiveContent.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitiveItem>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitiveItem>
>(({ className, ...props }, ref) => (
  <SelectPrimitiveItem
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
));
SelectItem.displayName = SelectPrimitiveItem.displayName;

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectViewport,
};
