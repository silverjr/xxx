import { DataTable } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { AddContractDialog } from "./AddContractAmountDialog";
interface IContractAmount {
  currency: string;
  amount: string;
  exchange_rate: string | null;
  amountInTzs: string;
  description: string;
}

export const columns: ColumnDef<IContractAmount>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.description}</div>
    ),
  },
  //   {
  //     accessorKey: "currency",
  //     header: ({ column }) => (
  //       <DataTableColumnHeader column={column} title="Currency" />
  //     ),
  //     cell: ({ row }) => (
  //       <div className="max-w-[500px]">{row.original.currency}</div>
  //     ),
  //   },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Original amount" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">
        {row.original.currency} {row.original.amount}
      </div>
    ),
  },
  {
    accessorKey: "exchage_rate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Exchange Rate" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.exchange_rate}</div>
    ),
  },
  {
    accessorKey: "amount_tzs",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount in TZS" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">TZS {row.original.amountInTzs}</div>
    ),
  },
];
export function ContractAmount() {
  const datasource = {
    totalPages: 1,
    pageable: {
      pageNumber: 0,
      pageSize: 10,
    },

    content: [
      {
        currency: "TZS",
        amount: "500,000",
        exchange_rate: null,
        amountInTzs: "500,000",
        description: "Consoludation",
      },
      {
        currency: "USD",
        amount: "1000",
        exchange_rate: 2000,
        amountInTzs: "2,000,000",
        description: "Other Fees",
      },
      {
        currency: null,
        amount: null,
        exchange_rate: null,
        amountInTzs: "2,500,000",
        description: "Total Amount (in TZS)",
      },
    ],
  };

  return (
    <div className="gap-2">
      <DataTable
        columns={columns}
        data={datasource}
        actions={
          <div className="my-2 mx-2">
            <AddContractDialog />
          </div>
        }
      />
    </div>
  );
}
