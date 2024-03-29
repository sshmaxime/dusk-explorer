"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { withChildren } from "../../utils/types";

export function ThemeProvider({ children }: withChildren) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
