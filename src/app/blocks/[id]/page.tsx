"use client";

import Page from "@/components/system/page";
import { H4 } from "@/components/system/typography";
import { Separator } from "@/components/ui/separator";
import { withChildren } from "@/utils/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

type Props = {
  params: {
    id: number;
  };
};

type BlockItemProps = {
  title: string;
} & withChildren;

export const BlockItem = ({ title, children }: BlockItemProps) => {
  return (
    <div className="grid grid-flow-col grid-cols-3">
      <div className="col-span-1">
        <H4 className="font-semibold">{title}:</H4>
      </div>

      <div className="col-span-2 flex items-end">{children}</div>
    </div>
  );
};

export default function Block({ params: { id } }: Props) {
  return (
    <Page title="Block" subtitle={`#${id}`}>
      <Tabs defaultValue="Overview">
        <TabsList>
          <TabsTrigger value="Overview">Overview</TabsTrigger>
          <TabsTrigger disabled value="More">
            Coming soon
          </TabsTrigger>
        </TabsList>

        <div className="h-2" />

        <Card className="p-4">
          <TabsContent value="Overview">
            <div className="grid gap-4">
              <BlockItem title="Number">
                <H4>0x</H4>
              </BlockItem>

              <BlockItem title="Block Hash">
                <H4>0x</H4>
              </BlockItem>

              <BlockItem title="Timestamp">
                <H4>0x</H4>
              </BlockItem>

              <BlockItem title="Transactions">
                <H4>0x</H4>
              </BlockItem>

              <Separator />

              <BlockItem title="Block Fees Paid">
                <H4>0x</H4>
              </BlockItem>

              <BlockItem title="Block Reward">
                <H4>0x</H4>
              </BlockItem>

              <BlockItem title="Gas Used">
                <H4>0x</H4>
              </BlockItem>

              <BlockItem title="Average Fee Paid">
                <H4>0x</H4>
              </BlockItem>

              <Separator />

              <BlockItem title="Parent Hash">
                <H4>0x</H4>
              </BlockItem>

              <BlockItem title="State Root Hash">
                <H4>0x</H4>
              </BlockItem>
            </div>
          </TabsContent>
        </Card>
      </Tabs>
    </Page>
  );
}
