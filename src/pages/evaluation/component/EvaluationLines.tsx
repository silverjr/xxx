import { DataTable } from "@/components/data-table";
import { peformanceEvaluationsLines } from "../data";
import { PerfomanceEvaluation } from "../schema";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { StatusBadge } from "@/components/status-badge";
export const columns: ColumnDef<PerfomanceEvaluation>[] = [
  {
    accessorKey: "number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number" />
    ),
    cell: ({ row }) => <div>{row.original.number}</div>,
  },
  {
    accessorKey: "Quatation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quatation" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.contractNumber}</div>
    ),
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
    accessorKey: "Description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Count" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.count}</div>
    ),
  },
  {
    accessorKey: "Vendor",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Vendor" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.vendor}</div>
    ),
  },
  {
    accessorKey: "overallScore",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Over score" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.overallScore}</div>
    ),
  },
  {
    accessorKey: "overallScore",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Implementation" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">
        {row.original.implemantionPercentage}%
      </div>
    ),
  },
  {
    accessorKey: "timeUsedPercentage",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="time used" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.timeUsedPercentage}%</div>
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
export function EvaluationLines() {
  return (
    <DataTable
      columns={columns}
      data={{
        totalElements: 5,
        totalPages: 1,
        content: peformanceEvaluationsLines,
        pageable: {
          pageNumber: 0,
          pageSize: 10,
        },
      }}
    />
  );
}
