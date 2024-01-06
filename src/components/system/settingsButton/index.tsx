"use client";

import { SETTINGS } from "@/app/(account)/settings/metadata";
import { Button } from "@/components/ui/button";
import { useClient } from "@/utils";
import { cn } from "@/utils/cn";
import { Settings } from "lucide-react";
import Link from "next/link";

export function SettingsButton() {
  const { isRoute } = useClient();

  return (
    <Link href={"/" + SETTINGS.href}>
      <Button
        variant="ghost"
        size="icon"
        className={cn("duration-700", isRoute(SETTINGS.href) && "bg-accent")}
      >
        <Settings className="h-[1.2rem] w-[1.2rem] transition-all" />
      </Button>
    </Link>
  );
}
