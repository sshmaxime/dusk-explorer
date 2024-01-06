import { LucideIcon } from "lucide-react";

export function TextIcon({ data }: { data: string | LucideIcon }) {
  const isIcon = !(typeof data === "string");

  if (isIcon) {
    const Icon = data;

    return (
      <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-muted group-hover:bg-gray-200 group-hover:dark:bg-gray-700">
        <span className="text-xs text-muted-foreground">
          <Icon className="h-[0.7rem] w-[0.7rem] text-muted-foreground" />
        </span>
      </span>
    );
  }

  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-muted group-hover:bg-gray-200 group-hover:dark:bg-gray-700">
      <span className="text-xs text-muted-foreground">{data}</span>
    </span>
  );
}
