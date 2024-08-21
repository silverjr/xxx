import { ColumnDef } from "@tanstack/react-table";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import Page from "@/components/PageHeader";
import SearchBox from "@/components/search-box";
import { StatusBadge } from "@/components/status-badge";
import { Addendum } from "./schema";
import { adddendumsList } from "./data";

export const columns: ColumnDef<Addendum>[] = [
  {
    accessorKey: "number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number" />
    ),
    cell: ({ row }) => (
      <Link to={`/addendums/${row.original.id}`}>
        <Button variant="link" type="button">
          {row.original.number}
        </Button>
      </Link>
    ),
  },
  {
    accessorKey: "contractNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quatation" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.contractNumber}</div>
    ),
  },
  {
    accessorKey: "contractDescription",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quatation description" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.contractDescription}</div>
    ),
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.description}</div>
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

export function AddendumListPage() {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/addendum/create");
  };

  return (
    <Page
      title="Addendums"
      subTitle="List of addendum"
      center={
        <SearchBox
          suggestions={[
            { name: "number", label: "number" },
            { name: "Quatation", label: "contract" },
          ]}
        />
      }
      actions={[
        <>
          <Button onClick={handleCreate} key="create">
            Create
          </Button>
          <Button variant="outline" onClick={handleCreate} key="create">
            Export PDF
          </Button>
        </>,
      ]}
    >
      <div className="rounded-xl bg-white">
        <Card>
          <CardContent>
            <div className="pt-6">
              <DataTable
                columns={columns}
                data={{
                  totalElements: 5,
                  totalPages: 1,
                  content: adddendumsList,
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
