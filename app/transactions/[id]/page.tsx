"use client";

import Page from "../../../components/system/page";
import { H4 } from "../../../components/system/typography";
import { Separator } from "../../../components/ui/separator";
import { withChildren } from "../../../utils/types";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { Card } from "../../../components/ui/card";
import { Spacer } from "../../../components/system/spacer";

type Props = {
  params: {
    id: number;
  };
};

type TransactionItemProps = {
  title: string;
} & withChildren;

const TransactionItem = ({ title, children }: TransactionItemProps) => {
  return (
    <div className="grid grid-flow-col grid-cols-3">
      <div className="col-span-1">
        <H4 className="font-semibold">{title}:</H4>
      </div>

      <div className="col-span-2 flex items-end">{children}</div>
    </div>
  );
};

export default function Transaction({ params: { id } }: Props) {
  return (
    <Page title="Transaction" subtitle={`${id}`}>
      <Tabs defaultValue="Overview">
        <TabsList>
          <TabsTrigger value="Overview">Overview</TabsTrigger>
          <TabsTrigger disabled value="More">
            Coming soon
          </TabsTrigger>
        </TabsList>

        <Spacer extraSmall />

        <Card className="p-4">
          <TabsContent value="Overview">
            <div className="grid gap-4">
              <TransactionItem title="Number">
                <H4>0x</H4>
              </TransactionItem>

              <TransactionItem title="Transaction Hash">
                <H4>0x</H4>
              </TransactionItem>

              <TransactionItem title="Timestamp">
                <H4>0x</H4>
              </TransactionItem>

              <TransactionItem title="Transactions">
                <H4>0x</H4>
              </TransactionItem>

              <Separator />

              <TransactionItem title="Transaction Fees Paid">
                <H4>0x</H4>
              </TransactionItem>

              <TransactionItem title="Transaction Reward">
                <H4>0x</H4>
              </TransactionItem>

              <TransactionItem title="Gas Used">
                <H4>0x</H4>
              </TransactionItem>

              <TransactionItem title="Average Fee Paid">
                <H4>0x</H4>
              </TransactionItem>

              <Separator />

              <TransactionItem title="Parent Hash">
                <H4>0x</H4>
              </TransactionItem>

              <TransactionItem title="State Root Hash">
                <H4>0x</H4>
              </TransactionItem>
            </div>
          </TabsContent>
        </Card>
      </Tabs>
    </Page>
  );
}
