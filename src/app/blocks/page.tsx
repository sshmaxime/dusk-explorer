"use client";

import Page from "@/components/system/page";
import { DataTable } from "@/components/system/table";
import { useLatestBlocks } from "@/utils";

export default function Blocks() {
  const { data: dataLatestBlocks, header: headerLatestBlocks } =
    useLatestBlocks();

  return (
    <Page title="Blocks">
      <DataTable
        columns={headerLatestBlocks}
        data={dataLatestBlocks}
        paginationOptions={{
          showPageOf: true,
          showPageArrows: true,
          showRowsPerPage: true,
          showSelectedRows: true,
        }}
      />
    </Page>
  );
}
