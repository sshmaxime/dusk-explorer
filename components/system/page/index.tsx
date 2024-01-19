"use client";

import { cn } from "../../../utils/cn";
import { myAppStyles } from "../../../utils/constants/styles";
import { withChildren } from "../../../utils/types";
import { Separator } from "../../ui/separator";
import { Spacer } from "../spacer";
import { H1, Subtitle } from "../typography";

type Props = {
  title?: string;
  subtitle?: string;
  separator?: boolean;
  full?: boolean;
  marginTop?: boolean;
};

const Page = ({
  children,
  title,
  subtitle,
  separator,
  marginTop,
  full = false,
}: Props & withChildren) => {
  return (
    <div className={cn("mb-20 mt-8", full ? "" : myAppStyles)}>
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          {title && <H1>{title}</H1>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </div>
      </div>

      {separator ? (
        <>
          <Spacer small />
          <Spacer extraSmall />
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

      {marginTop && <div className="my-6" />}

      {children}
    </div>
  );
};

export default Page;
