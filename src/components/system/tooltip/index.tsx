import {
  Tooltip as TooltipPrimitive,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { withChildren } from "@/utils/types";

type Props = { text: string } & withChildren;

const Tooltip = ({ text, children }: Props) => {
  return (
    <TooltipProvider>
      <TooltipPrimitive>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>{text}</TooltipContent>
      </TooltipPrimitive>
    </TooltipProvider>
  );
};

export default Tooltip;
