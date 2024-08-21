import { ColumnDef } from "@tanstack/react-table";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { cn, formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import Page from "@/components/PageHeader";
import SearchBox from "@/components/search-box";
import { TContractDetail } from "./schema";
import { constractList } from "./form/data";
import { StatusBadge } from "@/components/status-badge";
import { DataTable } from "@/components/client-data-table";
// import SearchBox from "@/components/ui/search-box"

// import { Quatation } from "./schema"

export const columns: ColumnDef<TContractDetail>[] = [
  {
    accessorKey: "number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Branch" />
    ),
    cell: ({ row }) => (
      <Link to={`/operations/${row.original.id}`}>
        <Button
          variant="link"
          type="button"
          className={cn(row.original.hasExpired && "text-destructive")}
        >
          {row.original.number}
        </Button>
      </Link>
    ),
  },
  {
    accessorKey: "vendor",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quote#/Date" />
    ),
    cell: ({ row }) => (
      <span className={cn(row.original.hasExpired && "text-destructive")}>
        {row.original.vendor}
      </span>
    ),
    getGroupingValue: (row) => `${row.vendor}`,
  },
  // {
  //   accessorKey: "description",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Quatation Description" />
  //   ),
  //   cell: ({ row }) => (
  //     <span className="max-w-[500px]">{row.original.description}</span>
  //   ),
  // },
  // {
  //   accessorKey: "type",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Type" />
  //   ),
  //   cell: ({ row }) => <div className="max-w-[500px]">{row.original.type}</div>,
  //   getGroupingValue: (row) => `${row.type}`,
  // },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Client Name" />
    ),
    cell: ({ row }) => (
      <span className={cn(row.original.hasExpired && "text-destructive")}>
        {row.original.category}
      </span>
    ),
    getGroupingValue: (row) => `${row.category}`,
  },

  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Insurance Type" />
    ),
    cell: ({ row }) => (
      <div className={cn(row.original.hasExpired && "text-destructive")}>
        {formatCurrency(row.original.amount, row.original.currency)}
      </div>
    ),
    aggregatedCell: ({ getValue }) => (
      <div className="font-bold">
        {formatCurrency(getValue<number>(), "TZS")}
      </div>
    ),
  },
  {
    accessorKey: "startDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cover Period" />
    ),
    cell: ({ row }) => (
      <span className={cn(row.original.hasExpired && "text-destructive")}>
        {row.original.contractStartDate}
      </span>
    ),
  },
  {
    accessorKey: "expireDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Insurer Name" />
    ),
    cell: ({ row }) => (
      <span className={cn(row.original.hasExpired && "text-destructive")}>
        {row.original.expireIn}
      </span>
    ),
  },
  {
    accessorKey: "taxRegionName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount Received" />
    ),
    cell: ({ row }) => (
      <span className={cn(row.original.hasExpired && "text-destructive")}>
        {row.original.taxRegionName}
      </span>
    ),
    getGroupingValue: (row) => `${row.taxRegionName}`,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status/Insurance Sts" />
    ),
    cell: ({ row }) => (
      <span className={cn(row.original.hasExpired && "text-red-900")}>
        <StatusBadge
          code={row.original.statusCode}
          name={row.original.statusName}
        />
      </span>
    ),
    getGroupingValue: (row) => `${row.statusCode}`,
  },
];

export function ContractListPage() {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/operations/1/edit");
  };
  const handlePrintPdf = () => {
    navigate("/attachments/preview");
  };

  return (
    <Page
      title="Quatation"
      subTitle="List of Quatations"
      center={
        <SearchBox
          suggestions={[
            { name: "number", label: "number" },
            { name: "custodian", label: "custodian" },
            { name: "expireDate", label: "expireDate" },
            { name: "startDate", label: "startDate" },
          ]}
          searchFilters={[
            { name: "statusToInclude", label: "Draft", value: "DRAFT" },
            {
              name: "statusToInclude",
              label: "Registered",
              value: "REGISTERED",
            },
            {
              name: "statusToInclude",
              label: "Pending review",
              value: "PENDING_REVIEW",
            },
            {
              name: "statusToInclude",
              label: "Pending approval",
              value: "PENDING_APPROVAL",
            },
            {
              name: "expire_date",
              label: "Due in 30 days",
              value: "DUE_IN_30_days",
            },
            {
              name: "expire_date",
              label: "Due in 60 days",
              value: "DUE_IN_60_days",
            },
            {
              name: "expire_date",
              label: "Due in 90 days",
              value: "DUE_IN_90_days",
            },
          ]}
        />
      }
      actions={[
        <>
          <Button onClick={handleCreate} key="create">
            Create
          </Button>
          <Button onClick={handlePrintPdf} variant="outline" key="create">
            Export in PDF
          </Button>
          <Button variant="outline" key="create">
            Export Excel
          </Button>
        </>,
      ]}
    >
      <div className="rounded-xl ">
        <Card>
          <CardContent>
            <div className="pt-6">
              <DataTable
                columns={columns}
                data={{
                  totalElements: 5,
                  totalPages: 1,
                  content: constractList,
                  pageable: {
                    pageNumber: 0,
                    pageSize: 10,
                  },
                }}
              />
            </div>
          </CardContent>
        </Card>
        <Outlet />
      </div>
    </Page>
  );
}
