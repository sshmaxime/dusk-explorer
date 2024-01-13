"use client";

import { cn } from "@/utils/cn";
import { myAppClasse } from "@/utils/constants/styles";
import { withChildren } from "@/utils/types";

type Props = {
  full?: boolean;
};

const Page = ({ children, full = false }: Props & withChildren) => {
  return <div className={cn("my-8", full ? "" : myAppClasse)}>{children}</div>;
};

export default Page;
