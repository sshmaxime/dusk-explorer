"use client";

import { Spacer } from "@/components/system/spacer";
import { H1, Subtitle } from "@/components/system/typography";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/utils/cn";
import { myAppStyles } from "@/utils/constants/styles";
import { withChildren } from "@/utils/types";

type Props = {
  title?: string;
  subtitle?: string;
  separator?: boolean;
  full?: boolean;
};

const Page = ({
  children,
  title,
  subtitle,
  separator,
  full = false,
}: Props & withChildren) => {
  return (
    <div className={cn("mb-20 mt-8", full ? "" : myAppStyles)}>
      <div className="flex flex-col">
        {title && <H1>{title}</H1>}
        {subtitle && <Subtitle className="tracking-tight">{subtitle}</Subtitle>}
      </div>

      {separator ? (
        <>
          <Spacer small />
          <Separator />
        </>
      ) : subtitle ? (
        <>
          <Spacer small />
          <Spacer extraSmall />
        </>
      ) : (
        <Spacer />
      )}

      {children}
    </div>
  );
};

export default Page;
