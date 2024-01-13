"use client";

import Page from "@/components/system/page";
import { Spacer } from "@/components/system/spacer";
import { H1 } from "@/components/system/typography";

type Props = {
  params: {
    id: number;
  };
};

export default function Block({ params: { id } }: Props) {
  return (
    <Page>
      <H1>Block #{id}</H1>
      <Spacer />
    </Page>
  );
}
