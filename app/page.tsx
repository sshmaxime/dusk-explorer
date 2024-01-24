"use client";

import { AreaChart } from "@tremor/react";
import {
  ArrowLeftRight,
  Container,
  Gauge,
  Globe,
  MoveRight,
  Network,
} from "lucide-react";
import Link from "next/link";
import Page from "../components/system/page";
import { Spacer } from "../components/system/spacer";
import { DataTable } from "../components/system/table";
import { H2, H44, H5, H6 } from "../components/system/typography";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { useChart, useLatestBlocks, useLatestTxs } from "../utils";
import { BLOCKS } from "./blocks/metadata";
import { TRANSACTIONS } from "./transactions/metadata";

export default function Dashboard() {
  const chartdata = useChart();
  const { data: dataLatestBlocks, header: headerLatestBlocks } =
    useLatestBlocks();
  const { data: dataLatestTxs, header: headerLatestTxs } = useLatestTxs();

  return (
    <Page title="Dashboard">
      <Card className="flex flex-col space-x-5 p-2 md:flex-row">
        <div className="flex grow flex-col">
          <div className="flex gap-2 p-2">
            <ArrowLeftRight className="w-8 md:w-4" />
            <div>
              <H5 className="block pt-[1px] text-muted-foreground">Price</H5>
              <H44>$0,13</H44>
            </div>
          </div>

          <Separator className="my-2" />

          <div className="flex gap-2 p-2">
            <Globe className="w-8 md:w-4" />
            <div>
              <H5 className="block pt-[1px] text-muted-foreground">
                MarketCap
              </H5>
              <H44>$293,199,950,773.00</H44>
            </div>
          </div>

          <Separator className="my-2 block md:hidden" />
        </div>

        <Separator orientation="vertical" className="h-auto" />

        <div className="flex grow flex-col">
          <div className="flex gap-2 p-2">
            <Gauge className="w-8 md:w-4" />
            <div>
              <H5 className="block pt-[1px] text-muted-foreground">
                Circulating Supply
              </H5>
              <H44>421,164,409</H44>
            </div>
          </div>

          <Separator className="my-2" />

          <div className="flex gap-2 p-2">
            <Container className="w-8 md:w-4" />
            <div>
              <H5 className="block pt-[1px] text-muted-foreground">
                Latest Block
              </H5>
              <H44>#256</H44>
            </div>
          </div>
        </div>

        <Separator orientation="vertical" className="h-auto" />

        <div className="flex grow flex-col">
          <div className="flex gap-2 p-2">
            <Gauge className="w-8 md:w-4" />
            <div>
              <H5 className="block pt-[1px] text-muted-foreground">
                Transactions
              </H5>
              <H44>2,220.48 M</H44>
            </div>
          </div>

          <Separator className="my-2" />

          <div className="flex gap-2 p-2">
            <Network className="w-8 md:w-4" />
            <div>
              <H5 className="block pt-[1px] text-muted-foreground">
                Validators
              </H5>
              <H44>23</H44>
            </div>
          </div>
        </div>

        <Separator orientation="vertical" className="h-auto" />

        <div className="animate-fade flex flex-col p-2 md:w-96">
          <div className="flex items-center gap-1 pb-[5px] text-muted-foreground">
            <H5>Activity</H5>
            <H6>(Txs in the last 14 days)</H6>
          </div>

          <AreaChart
            className="h-full animate-long-fadeIn"
            data={chartdata}
            index="date"
            showLegend={false}
            showYAxis={false}
            showXAxis={false}
            showGridLines={false}
            autoMinValue={true}
            categories={["Price"]}
            colors={["slate"]}
            yAxisWidth={40}
          />
        </div>
      </Card>

      <Spacer />
      <Spacer />

      <div className="grid grid-cols-7 gap-y-16 md:gap-x-16">
        <div className="col-span-full md:col-span-3">
          <div className="flex justify-between">
            <H2>Latest Blocks</H2>
            <div className="flex place-self-end">
              <Button
                asChild
                variant="ghost"
                className="group m-0 mr-4 h-auto gap-2 p-0 hover:bg-transparent"
              >
                <Link href={BLOCKS.href}>
                  <H5>View all</H5>
                  <MoveRight className="h-4 w-4 transform self-center transition duration-700 group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>
          </div>
          <Spacer small />
          <DataTable columns={headerLatestBlocks} data={dataLatestBlocks} />
        </div>

        <div className="col-span-full md:col-span-4">
          <div className="flex justify-between">
            <H2>Latest Transactions</H2>
            <div className="flex place-self-end">
              <Button
                asChild
                variant="ghost"
                className="group m-0 mr-4 h-auto gap-2 p-0 hover:bg-transparent"
              >
                <Link href={TRANSACTIONS.href}>
                  <H5>View all</H5>
                  <MoveRight className="h-4 w-4 transform self-center transition duration-700 group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>
          </div>
          <Spacer small />
          <DataTable columns={headerLatestTxs} data={dataLatestTxs} />
        </div>
      </div>
    </Page>
  );
}
