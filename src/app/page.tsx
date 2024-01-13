"use client";

import { BLOCKS } from "@/app/blocks/metadata";
import { TRANSACTIONS } from "@/app/transactions/metadata";
import Page from "@/components/system/page";
import { Spacer } from "@/components/system/spacer";
import { DataTable } from "@/components/system/table";
import { H1, H2, H3, H4, H5, H6 } from "@/components/system/typography";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useChart, useLatestBlocks, useLatestTxs } from "@/utils";
import { AreaChart } from "@tremor/react";
import {
  ArrowLeftRight,
  ArrowRight,
  Container,
  Gauge,
  Globe,
  MoveRight,
  Network,
} from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const chartdata = useChart();
  const { data: dataLatestBlocks, header: headerLatestBlocks } =
    useLatestBlocks();
  const { data: dataLatestTxs, header: headerLatestTxs } = useLatestTxs();

  return (
    <Page>
      <H1>Dashboard</H1>
      <Spacer />

      <div className="flex space-x-5 rounded-xl border p-2">
        <div className="flex grow flex-col">
          <div className="flex gap-2 p-2">
            <ArrowLeftRight className="w-4" />
            <div>
              <H5 className="block pt-[1px] text-muted-foreground">Price</H5>
              <H3>$0,13</H3>
            </div>
          </div>

          <Separator className="my-2" />

          <div className="flex gap-2 p-2">
            <Globe className="w-4" />
            <div>
              <H5 className="block pt-[1px] text-muted-foreground">
                MarketCap
              </H5>
              <H3>$293,199,950,773.00</H3>
            </div>
          </div>
        </div>

        <Separator orientation="vertical" className="h-auto" />

        <div className="flex grow flex-col">
          <div className="flex gap-2 p-2">
            <Gauge className="w-4" />
            <div>
              <H5 className="block pt-[1px] text-muted-foreground">
                Circulating Supply
              </H5>
              <H3>421,164,409</H3>
            </div>
          </div>

          <Separator className="my-2" />

          <div className="flex gap-2 p-2">
            <Container className="w-4" />
            <div>
              <H5 className="block pt-[1px] text-muted-foreground">
                Latest Block
              </H5>
              <H3>#256</H3>
            </div>
          </div>
        </div>

        <Separator orientation="vertical" className="h-auto" />

        <div className="flex flex-col">
          <div className="flex gap-2 p-2">
            <Gauge className="w-4" />
            <div>
              <H5 className="block pt-[1px] text-muted-foreground">
                Transactions
              </H5>
              <H3>2,220.48 M</H3>
            </div>
          </div>

          <Separator className="my-2" />

          <div className="flex gap-2 p-2">
            <Network className="w-4" />
            <div>
              <H5 className="block pt-[1px] text-muted-foreground">
                Validators
              </H5>
              <H3>23</H3>
            </div>
          </div>
        </div>

        <Separator orientation="vertical" className="h-auto" />

        <div className="animate-fade flex w-96 flex-col p-2">
          <H5 className="pb-[5px] text-muted-foreground">
            Activity <H6>(Txs in the last 14 days)</H6>
          </H5>

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
      </div>

      <Spacer />
      <Spacer />
      <div className="grid grid-cols-7 gap-16">
        <div className="col-span-3">
          <div className="flex justify-between">
            <H2>Latest Blocks</H2>
            <div className="flex place-self-end">
              <Button
                asChild
                variant="ghost"
                className="group m-0 mr-4 h-auto gap-2 p-0 hover:bg-transparent"
              >
                <Link href={BLOCKS.href}>
                  <H5>All Blocks</H5>
                  <MoveRight className="h-4 w-4 transform self-center transition duration-500 group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>
          </div>
          <Spacer small />
          <div>
            <DataTable columns={headerLatestBlocks} data={dataLatestBlocks} />
          </div>
        </div>

        <div className="col-span-4">
          <div className="flex justify-between">
            <H2>Latest Transactions</H2>
            <div className="flex place-self-end">
              <Button
                asChild
                variant="ghost"
                className="group m-0 mr-4 h-auto gap-2 p-0 hover:bg-transparent"
              >
                <Link href={TRANSACTIONS.href}>
                  <H5>All Transactions</H5>
                  <MoveRight className="h-4 w-4 transform self-center transition duration-500 group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>
          </div>
          <Spacer small />
          <div>
            <DataTable columns={headerLatestTxs} data={dataLatestTxs} />
          </div>
        </div>
      </div>
    </Page>
  );
}
