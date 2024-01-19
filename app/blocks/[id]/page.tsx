import Page from "../../../components/system/page";
import { Spacer } from "../../../components/system/spacer";
import Tooltip from "../../../components/system/tooltip";
import { H4 } from "../../../components/system/typography";
import { Card } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { withChildren } from "../../../utils/types";
import { HelpCircle } from "lucide-react";

type Props = {
  params: {
    id: number;
  };
};

type BlockItemProps = {
  title: string;
} & withChildren;

const BlockItem = ({ title, children }: BlockItemProps) => {
  return (
    <div className="grid grid-flow-col grid-cols-3">
      <div className="col-span-1">
        <div className="flex items-center gap-1">
          <Tooltip text="Little text about something that happened int he world.">
            <HelpCircle className="h-4 w-4 text-accent-foreground" />
          </Tooltip>
          <H4 className="font-semibold tracking-normal">{title}:</H4>
        </div>
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
          <TabsTrigger value="More" disabled>
            Coming soon
          </TabsTrigger>
        </TabsList>

        <Spacer extraSmall />

        <Card className="p-4">
          <TabsContent value="Overview" className="m-0">
            <div className="grid gap-3">
              <BlockItem title="Block Height">
                <H4>0x</H4>
              </BlockItem>

              <BlockItem title="Status">
                <H4>0x</H4>
              </BlockItem>

              <BlockItem title="Hash">
                <H4>0x</H4>
              </BlockItem>

              <BlockItem title="Timestamp">
                <H4>0x</H4>
              </BlockItem>

              <BlockItem title="Transactions">
                <H4>0x</H4>
              </BlockItem>

              <Separator className="my-2" />

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

              <Separator className="my-2" />

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
