"use client";

import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { useClient } from "@/utils";

export function ProfileButton() {
  const { mounted, toggleTheme } = useClient();
  if (!mounted) return null;

  return (
    <Avatar className="h-[2rem] w-[2rem]">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
