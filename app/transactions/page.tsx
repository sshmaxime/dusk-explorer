"use client";

import Page from "../../components/system/page";
import { DataTable } from "../../components/system/table";
import { useLatestTxs } from "../../utils";

export default function Transactions() {
  const { data: dataLatestTxs, header: headerLatestTxs } = useLatestTxs();

  return (
    <Page title="Transactions">
      <DataTable
        columns={headerLatestTxs}
        data={dataLatestTxs}
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
