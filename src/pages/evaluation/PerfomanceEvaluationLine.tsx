import { ColumnDef } from "@tanstack/react-table";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { DataTableColumnHeader } from "@/components/data-table-column-header";
import Page from "@/components/PageHeader";
import SearchBox from "@/components/search-box";
import { PerfomanceEvaluation } from "./schema";
import { peformanceEvaluations, peformanceEvaluationsLines } from "./data";
import { StatusBadge } from "@/components/status-badge";
import { DataTable } from "@/components/client-data-table";
import { ScrollArea } from "@/components/ui/scroll-area";
// import SearchBox from "@/components/ui/search-box"

// import { Quatation } from "./schema"

export const columns: ColumnDef<PerfomanceEvaluation>[] = [
  {
    accessorKey: "number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number" />
    ),
    cell: ({ row }) => (
      <div>
        <Link to={`/evaluations-lines/${row.original.id}`}>
          <Button variant="link" type="button">
            {row.original.number}
          </Button>
        </Link>
      </div>
    ),
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
  // {
  //   accessorKey: "Description",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Description" />
  //   ),
  //   cell: ({ row }) => (
  //     <div className="max-w-[500px]">{row.original.description}</div>
  //   ),
  // },
  // {
  //   accessorKey: "Description",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Count" />
  //   ),
  //   cell: ({ row }) => (
  //     <div className="max-w-[500px]">{row.original.count}</div>
  //   ),
  // },
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
    accessorKey: "implementation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Implementation" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">
        {row.original.implemantionPercentage}%
      </div>
    ),
  },
  // {
  //   accessorKey: "capacity",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="capacity" />
  //   ),
  //   cell: ({ row }) => (
  //     <div className="max-w-[500px]">{row.original.capacityScore}</div>
  //   ),
  // },
  // {
  //   accessorKey: "competencyScore",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="competencyScore" />
  //   ),
  //   cell: ({ row }) => (
  //     <div className="max-w-[500px]">{row.original.competencyScore}</div>
  //   ),
  // },
  // {
  //   accessorKey: "costManagementScore",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="costManagementScore" />
  //   ),
  //   cell: ({ row }) => (
  //     <div className="max-w-[500px]">{row.original.costManagementScore}</div>
  //   ),
  // },
  // {
  //   accessorKey: "qualityScore",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="qualityScore" />
  //   ),
  //   cell: ({ row }) => (
  //     <div className="max-w-[500px]">{row.original.qualityScore}</div>
  //   ),
  // },
  // {
  //   accessorKey: "qualityConsistency",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="qualityConsistency" />
  //   ),
  //   cell: ({ row }) => (
  //     <div className="max-w-[500px]">{row.original.qualityConsistency}</div>
  //   ),
  // },
  // {
  //   accessorKey: "communicationScore",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="communicationScore" />
  //   ),
  //   cell: ({ row }) => (
  //     <div className="max-w-[500px]">{row.original.communicationScore}</div>
  //   ),
  // },
  // {
  //   accessorKey: "communicationScore",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="communicationScore" />
  //   ),
  //   cell: ({ row }) => (
  //     <div className="max-w-[500px]">{row.original.communicationScore}</div>
  //   ),
  // },
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
    accessorKey: "quarter",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quarter" />
    ),
    cell: ({ row }) => <div className="">Quarter {row.original.quarter}</div>,
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

export function PerfomanceEvaluationLineListPage() {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/evaluations-lines/create");
  };

  return (
    <Page
      title="Perfomance Evaluations"
      subTitle="Perfomance Evaluations"
      center={
        <SearchBox
          suggestions={[
            { name: "number", label: "number" },
            { name: "supplier", label: "Supplier" },
            { name: "contract", label: "Quatation" },
            { name: "startDate", label: "startDate" },
          ]}
          searchFilters={[
            {
              value: "status",
              name: "status",
              label: "Draft",
            },
          ]}
        />
      }
      actions={[
        <>
          <Button variant="outline" onClick={handleCreate} key="create">
            Create Individual Evaluation
          </Button>
          {/* <Button variant="outline" onClick={handleCreate} key="create">
            Create Group Evaluation
          </Button> */}
        </>,
      ]}
    >
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
                  content: peformanceEvaluationsLines,
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
        <Outlet />
      </div>
    </Page>
  );
}
