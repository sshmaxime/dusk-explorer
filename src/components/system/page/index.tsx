"use client";

import { px } from "@/config/theme";
import { withChildren } from "@/utils/types";

const Page = ({ children }: withChildren) => {
  return <div className={`mb-5 mt-5 ${px}`}>{children}</div>;
};

export default Page;
