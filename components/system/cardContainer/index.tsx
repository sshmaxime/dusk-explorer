import { Card as UICard } from "../../ui/card";
import { withChildren } from "@/utils/types";
import { ReactNode } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
} & withChildren;

export const CardContainer = ({ title, subtitle, icon, children }: Props) => (
  <UICard>
    <div className="flex flex-col space-y-1.5 p-6">
      <div className="flex flex-row items-center justify-between ">
        {title && (
          <h3 className="font-semibold leading-none tracking-tight">{title}</h3>
        )}
        {icon}
      </div>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
    </div>

    <div className="p-6 pt-0">{children}</div>
  </UICard>
);
