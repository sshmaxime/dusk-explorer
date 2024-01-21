"use client";

import * as React from "react";

import { Button } from "../../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { cn } from "@/utils/cn";
import { Check, ChevronsUpDown } from "lucide-react";

type Props = {
  searching: string;
  value: string;
  onChange: Function;
  items: { value: string; label: string }[];
  className: string;
};

export function Combobox({
  items,
  searching,
  value,
  onChange,
  className,
}: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={cn(className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between capitalize"
          >
            {value
              ? items.find((item) => item.value === value)?.label
              : `Select ${searching}...`}
            <ChevronsUpDown
              className={cn("ml-2 h-4 w-4 shrink-0 opacity-50")}
            />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder={`${searching} ...`} className="h-9" />
            <CommandEmpty>No {searching} found.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  className={cn(
                    "capitalize",
                    item.value === value ? "bg-accent" : "",
                  )}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
