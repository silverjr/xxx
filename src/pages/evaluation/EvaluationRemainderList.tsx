import Page from "@/components/PageHeader";
import { DataTable } from "@/components/client-data-table";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { StatusBadge } from "@/components/status-badge";
import { Card, CardContent } from "@/components/ui/card";
import { ColumnDef } from "@tanstack/react-table";

const evaluationRemainders = [
  {
    number: "ER001",
    description: "First remainder",
    remainder_date: "01 March 2024 11:11",
    period: "Quarter 1",
    member: "Silvester Ntunga",
    contractNumber: "AE/023/2023-2024/001",
    statusCode: "Pending",
    statusName: "Pending",
  },
  {
    number: "ER002",
    description: "First remainder",
    remainder_date: "01 March 2024 11:11",
    period: "Quarter 1",
    member: "Michael Maziku",
    contractNumber: "AE/023/2023-2024/001",
    statusCode: "Pending",
    statusName: "Pending",
  },
  {
    number: "ER003",
    description: "Second remainder",
    remainder_date: "15 March 2024 11:11",
    period: "Quarter 1",
    member: "Michael Maziku",
    contractNumber: "AE/023/2023-2024/001",
    statusCode: "Pending",
    statusName: "Pending",
  },
  {
    number: "ER004",
    description: "Second remainder",
    remainder_date: "15 March 2024 11:11",
    period: "Quarter 1",
    member: "Silvester Ntunga",
    contractNumber: "AE/023/2023-2024/001",
    statusCode: "Pending",
    statusName: "Pending",
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
    accessorKey: "Description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.description}</div>
    ),
  },
  {
    accessorKey: "remainder_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remainder date" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.remainder_date}</div>
    ),
  },
  {
    accessorKey: "period",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Period" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.period}</div>
    ),
  },
  {
    accessorKey: "member",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Member" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.member}</div>
    ),
  },
  {
    accessorKey: "contractNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quatation number" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.contractNumber}</div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">
        <StatusBadge
          code={row.original.statusCode}
          name={row.original.statusName}
        />
      </div>
    ),
  },
];

export function EvaluationRemainderList() {
  return (
    <Page title="Evaluations remainder" subTitle="Evaluations remainder">
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
                  content: evaluationRemainders,
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
