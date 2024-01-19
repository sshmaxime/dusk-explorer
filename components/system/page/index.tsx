"use client";

import { Spacer } from "../spacer";
import { H1, Subtitle } from "../typography";
import { Separator } from "../../ui/separator";
import { cn } from "../../../utils/cn";
import { myAppStyles } from "../../../utils/constants/styles";
import { withChildren } from "../../../utils/types";

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
      <div className="space-y-0.5">
        {title && <H1>{title}</H1>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
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

      {marginTop && <div className="my-6" />}

      {children}
    </div>
  );
};

export default Page;
