import * as React from "react";

import { BookOpen, CornerDownLeft } from "lucide-react";

import { ButtonTextIcon } from "../buttonTextIcon";
import { Button } from "../../ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../ui/command";
import { TextIcon } from "../textIcon";
import { useClient } from "@/utils";

type Props = {
  text: string;
  placeholder: string;
};

export function SearchBar({ text, placeholder }: Props) {
  const { shortcuts } = useClient();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className="group flex h-9 gap-5 px-2 text-[13px] text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        {text}
        <span className="flex gap-1">
          <TextIcon data="⌘" />
          <TextIcon data="K" />
        </span>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={placeholder} />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Suggestions">
            {shortcuts.map((item, index) => (
              <CommandItem key={index}>
                <BookOpen className="mr-2" />
                <span>{item.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>

        <div className="h-[1px] bg-green-50"></div>

        <div className="flex px-1 py-2">
          <div className="flex grow" />
          <div className="flex items-center">
            <ButtonTextIcon text="Open" icons={[CornerDownLeft]} notButton />
          </div>
        </div>
      </CommandDialog>
    </>
  );
}
