import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { constractList } from "./form/data";
import { StatusBadge } from "@/components/status-badge";
import { DataTable } from "@/components/client-data-table";
// import SearchBox from "@/components/ui/search-box"

// import { Quatation } from "./schema"
interface EvaluationSchedule {
  id: string;
  period: string;
  contractId: string;
  requiredNoOfEvaluations: number;
  completedNoOfEValuations: number;
  fromDate: string;
  toDate: string;
  firstReminderDate: string;
  isFirstRemainderSent: boolean;
  firstRemainderSentDate: string;
  statusCode: string;
  statusName: string;
}
const evaluationScheduleList = [
  {
    id: 1,
    period: "Quarter one",
    contractId: "1",
    requiredNoOfEvaluations: 5,
    completedNoOfEValuations: 0,
    fromDate: "01 January 2024",
    toDate: "01 March 2024",
    firstReminderDate: "01 January 2024",
    statusCode: "In_progress",
    statusName: "In progress",
  },
  {
    id: 2,
    period: "Quarter two",
    contractId: "1",
    requiredNoOfEvaluations: 5,
    completedNoOfEValuations: 0,
    fromDate: "01 January 2024",
    toDate: "01 March 2024",
    firstReminderDate: "01 January 2024",
    statusCode: "In_progress",
    statusName: "In progress",
  },
  {
    id: 3,
    period: "Quarter three",
    contractId: "1",
    requiredNoOfEvaluations: 5,
    completedNoOfEValuations: 0,
    fromDate: "01 January 2024",
    toDate: "01 March 2024",
    firstReminderDate: "01 January 2024",
    statusCode: "In_progress",
    statusName: "In progress",
  },
  {
    id: 4,
    period: "Quarter four",
    contractId: "1",
    requiredNoOfEvaluations: 5,
    completedNoOfEValuations: 0,
    fromDate: "01 January 2024",
    toDate: "01 March 2024",
    firstReminderDate: "01 January 2024",
    statusCode: "In_progress",
    statusName: "In progress",
  },
];
export const columns: ColumnDef<EvaluationSchedule>[] = [
  {
    accessorKey: "period",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Period" />
    ),
    cell: ({ row }) => <div>{row.original.period}</div>,
  },
  //   {
  //     accessorKey: "Quatation",
  //     header: ({ column }) => (
  //       <DataTableColumnHeader column={column} title="Quatation" />
  //     ),
  //     cell: ({ row }) => (
  //       <div className="max-w-[500px]">{row.original.contractId}</div>
  //     ),
  //   },
  {
    accessorKey: "fromDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="From date" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.fromDate}</div>
    ),
    // getGroupingValue: (row) => `${row.category}`,
  },
  {
    accessorKey: "toDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="To date" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.toDate}</div>
    ),
  },
  {
    accessorKey: "First Remainder",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="First Remainder" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.firstReminderDate}</div>
    ),
  },
  {
    accessorKey: "requiredNoOfEvaluations",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No of Evaluation" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">
        {row.original.requiredNoOfEvaluations}
      </div>
    ),
  },

  {
    accessorKey: "completedNoOfEValuations",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Completed Evaluation" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">
        {row.original.completedNoOfEValuations}
      </div>
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

export function EvaluationSchedule() {
  return (
    <DataTable
      columns={columns}
      data={{
        totalElements: 5,
        totalPages: 1,
        content: evaluationScheduleList,
        pageable: {
          pageNumber: 0,
          pageSize: 10,
        },
      }}
    />
  );
}
