import {
  Tooltip as TooltipPrimitive,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import { withChildren } from "@/utils/types";

type Props = { text: string } & withChildren;

const Tooltip = ({ text, children }: Props) => {
  return (
    <TooltipProvider delayDuration={300}>
      <TooltipPrimitive>
        <TooltipTrigger className="hover:cursor-default">
          {children}
        </TooltipTrigger>
        <TooltipContent className="max-w-xs p-3 text-xs">{text}</TooltipContent>
      </TooltipPrimitive>
    </TooltipProvider>
  );
};

export default Tooltip;
