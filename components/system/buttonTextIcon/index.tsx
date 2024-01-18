import { Button } from "../../ui/button";
import { TextIcon } from "../textIcon";
import { LucideIcon } from "lucide-react";

export function ButtonTextIcon({
  text,
  icons,
  notButton,
}: {
  text: string;
  icons: string[] | LucideIcon[];
  notButton?: boolean;
}) {
  return (
    <Button
      variant="ghost"
      className={`${notButton ? "" : "group"} ${
        notButton ? "pointer-events-none" : ""
      } h-7 px-3 pl-1 pr-1 text-[13px]`}
    >
      <div className="flex items-center gap-2 pl-1">
        <span
          className={`text-xs font-medium  ${
            notButton ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {text}
        </span>

        <span className="flex gap-1">
          {icons.map((item, index) => (
            <span key={index}>
              <TextIcon data={item} />
            </span>
          ))}
        </span>
      </div>
    </Button>
  );
}
