import { ColumnDef } from "@tanstack/react-table";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import Page from "@/components/PageHeader";
import SearchBox from "@/components/search-box";
import { PerfomanceEvaluation } from "./schema";
import { peformanceEvaluations } from "./data";
import { StatusBadge } from "@/components/status-badge";
// import SearchBox from "@/components/ui/search-box"

// import { Quatation } from "./schema"

export const columns: ColumnDef<PerfomanceEvaluation>[] = [
  {
    accessorKey: "number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number" />
    ),
    cell: ({ row }) => (
      <Link to={`/evaluations/${row.original.id}`}>
        <Button variant="link" type="button">
          {row.original.number}
        </Button>
      </Link>
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

export function PerfomanceEvaluationListPage() {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/evaluations-group/create");
  };

  return (
    <Page
      title="Perfomance Evaluations"
      subTitle="List of Perfomance Evaluations"
      center={
        <SearchBox
          suggestions={[
            { name: "number", label: "number" },
            { name: "supplier", label: "Supplier" },
            { name: "expireDate", label: "expireDate" },
            { name: "startDate", label: "startDate" },
          ]}
        />
      }
      actions={[
        <>
          <Button variant="outline" onClick={handleCreate} key="create">
            Create Group Evaluation
          </Button>
        </>,
      ]}
    >
      <div className="rounded-xl">
        <Card>
          <CardContent>
            <div className="pt-6">
              <DataTable
                columns={columns}
                data={{
                  totalElements: 5,
                  totalPages: 1,
                  content: peformanceEvaluations,
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
