import Page from "@/components/PageHeader";
import { DataTable } from "@/components/client-data-table";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { Card, CardContent } from "@/components/ui/card";
import { ColumnDef } from "@tanstack/react-table";

const evaluationPeriod = [
  {
    number: "EP001",
    name: "Quarter 1",
    contractNumber: "AE/023/2023-2024/001",
    startDate: "01 March 2024 11:11",
    endDate: "30  March 2024 11:11",
  },
  {
    number: "EP002",
    name: "Quarter 2",
    contractNumber: "AE/023/2023-2024/001",
    startDate: "01 June 2024 11:11",
    endDate: "30  March 2024 11:11",
  },
  {
    number: "EP003",
    name: "Quarter 3",
    contractNumber: "AE/023/2023-2024/001",
    startDate: "01 September 2024 11:11",
    endDate: "30  September 2024 11:11",
  },
  {
    number: "EP004",
    name: "Quarter 4",
    contractNumber: "AE/023/2023-2024/001",
    startDate: "01 December 2024 11:11",
    endDate: "30  December 2024 11:11",
  },
];
export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number" />
    ),
    cell: ({ row }) => <div>{row.original.number}</div>,
  },
  {
    accessorKey: "Name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div className="max-w-[500px]">{row.original.name}</div>,
  },
  {
    accessorKey: "ContractNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quatation number" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.contractNumber}</div>
    ),
  },
  {
    accessorKey: "startDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="From Date" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.startDate}</div>
    ),
  },
  {
    accessorKey: "endDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="To Date" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.endDate}</div>
    ),
  },

  // {
  //   accessorKey: "contractNumber",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Quatation number" />
  //   ),
  //   cell: ({ row }) => (
  //     <div className="max-w-[500px]">
  //       <StatusBadge
  //         code={row.original.statusCode}
  //         name={row.original.statusName}
  //       />
  //     </div>
  //   ),
  // },
];

export function EvaluationPeriod() {
  return (
    <Page title="Evaluations Periods" subTitle="Evaluations Periods">
      <div className="rounded-xl bg-white">
        <Card>
          <CardContent>
            <div className="pt-6">
              {/* <ScrollArea className="w-96 whitespace-nowrap rounded-md border"> */}
              <DataTable
                columns={columns}
                data={{
                  totalElements: 5,
                  totalPages: 1,
                  content: evaluationPeriod,
                  pageable: {
                    pageNumber: 0,
                    pageSize: 10,
                  },
                }}
              />
              {/* </ScrollArea> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
}
