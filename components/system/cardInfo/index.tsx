import { H1, SubtitleH5 } from "../typography";
import { Card as UICard } from "../../ui/card";
import { ReactNode } from "react";

type Props = {
  title: string;
  data: any;
  subtitle?: string;
  icon: ReactNode;
};

export const CardInfo = ({ title, data, subtitle, icon }: Props) => (
  <UICard>
    <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
      <h3 className="text-sm font-medium tracking-tight">{title}</h3>
      {icon}
    </div>

    <div className="p-6 pt-0">
      <H1 className="text-3xl">{data}</H1>
      <SubtitleH5>{subtitle}</SubtitleH5>
    </div>
  </UICard>
);
