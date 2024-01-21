"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "../../ui/button";
import { useClient } from "@/utils";

export function ThemeToggler() {
  const { toggleTheme } = useClient();

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 opacity-100 transition-all dark:-rotate-180 dark:opacity-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-180 opacity-0 transition-all dark:rotate-0 dark:opacity-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
